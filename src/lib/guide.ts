/**
 * content/guide.md 를 파싱해 챕터 > 서브챕터 > 섹션 트리를 만듭니다.
 * 빌드(또는 dev 서버) 시점에 Node 에서만 실행됩니다.
 *
 * 문법은 content/guide.md 상단 튜토리얼 주석을 참고하세요.
 */
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export type Layout = 'basic' | 'text' | 'wide' | 'half' | 'grid-2' | 'grid-3' | 'grid-4';

export interface ImageItem {
  kind: 'image';
  token: string;          // 예: logo/construction
  src: string | null;     // public/assets 에 파일이 있으면 /assets/… 경로, 없으면 null(플레이스홀더)
  badge?: 'do' | 'dont';
  caption?: string;       // HTML. 한글 구간은 <span class="ko"> 로 래핑됨
}
export interface SwatchItem {
  kind: 'swatch';
  name: string;
  hex: string;
  specs: string[];
}
export type Item = ImageItem | SwatchItem;

export interface Section {
  id: string;             // 앵커 id (헤드 기준, 중복 시 -2, -3…)
  navId: string;          // 목차에 표시되는 대표 앵커 (같은 헤드끼리 공유)
  head: string;
  subhead?: string;
  bodyHtml: string;
  layout: Layout;
  ratio?: string;         // "5 / 4" 형식. 없으면 레이아웃 기본 토큰 사용
  items: Item[];
  tocMark: boolean;       // ### + 로 목차에 올리라고 표시한 섹션
}
export interface SubRef { url: string; name: string; chapterNum: string; chapterName: string; }
export interface Sub {
  name: string;
  slug: string;
  url: string;
  chapterNum: string;
  chapterName: string;
  chapterSlug: string;
  sections: Section[];
  navSections: { id: string; head: string }[];   // 목차에 오르는 섹션. ### + 표시가 하나라도 있으면 표시된 것만, 없으면 전부(자동)
  tocSections: boolean;   // false 면 목차에서 섹션 목록을 펼치지 않음 (## 이름 {toc=none})
  prev?: SubRef;
  next?: SubRef;
}
export interface Chapter {
  num: string;
  name: string;
  slug: string;           // 예: 02-logo
  subs: Sub[];
}
export interface Guide { lang: Lang; chapters: Chapter[]; }

const ROOT = process.cwd();
/** 언어. 두 언어가 한 사이트에 같이 빌드되며 URL 은 /en/… , /ko/… 로 나뉩니다. */
export const LANGS = ['en', 'ko'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', ko: 'KR' };   // 목차 하단 전환 버튼 표기
/**
 * 콘텐츠 파일은 fs 가 아니라 Vite 모듈로 읽습니다. 그래야 dev 서버가 파일을 의존성으로 추적해서,
 * 저장 즉시 라우트(새 서브챕터 등)와 페이지를 다시 계산하고 브라우저를 새로고침합니다.
 */
const CONTENT_FILES = import.meta.glob('/content/guide.*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const ASSETS = path.join(ROOT, 'public', 'assets');
const EXTS = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

function resolveAsset(token: string): string | null {
  for (const ext of EXTS) {
    const p = path.join(ASSETS, `${token}.${ext}`);
    if (fs.existsSync(p)) return `/assets/${token}.${ext}`;
  }
  return null;
}

function parseAttrs(raw: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of raw.matchAll(/(\w+)\s*=\s*([^\s}]+)/g)) out[m[1]] = m[2];
  return out;
}

function normalizeRatio(r?: string): string | undefined {
  if (!r) return undefined;
  const m = r.match(/^(\d+(?:\.\d+)?)[:/](\d+(?:\.\d+)?)$/);
  return m ? `${m[1]} / ${m[2]}` : undefined;
}

function pickLayout(explicit: string | undefined, items: Item[]): Layout {
  const allowed: Layout[] = ['basic', 'text', 'wide', 'half', 'grid-2', 'grid-3', 'grid-4'];
  if (explicit && (allowed as string[]).includes(explicit)) return explicit as Layout;
  const n = items.length;
  if (n === 0) return 'text';
  if (n === 1) return 'basic';
  if (n === 2) return 'grid-2';
  if (n % 3 === 0) return 'grid-3';
  return 'grid-4';
}

/**
 * 한글 구간을 <span class="ko"> 로 감쌉니다. 한글로 시작하고 끝나는 최대 구간이며,
 * 사이의 공백과 문장부호(. , · : ; ! ? 따옴표 괄호)는 구간에 포함되고 라틴 문자·숫자에서 끊깁니다.
 * CSS 의 .t-body .ko 가 한글만 따로 크기·자간·웨이트·베이스라인을 보정합니다.
 */
const KO_RUN = /[가-힣ㄱ-ㅎㅏ-ㅣ](?:[가-힣ㄱ-ㅎㅏ-ㅣ\s.,·:;!?'"‘’“”()~…]*[가-힣ㄱ-ㅎㅏ-ㅣ.,·:;!?’”)…])?/g;
export function wrapKo(html: string): string {
  return html
    .split(/(<[^>]+>)/)                         // 태그와 텍스트 분리
    .map(seg => seg.startsWith('<') ? seg : seg.replace(KO_RUN, m => `<span class="ko">${m}</span>`))
    .join('');
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * 고아 단어(orphan) 방지 — 문단·리스트 항목·캡션의 마지막 두 단어 사이 공백을 줄바꿈 없는 공백(&nbsp;)으로 바꿉니다.
 * 마지막 줄에 단어 하나만 남는 일이 없어지고, 영문(단어)·한글(어절) 모두 공백 기준이라 같은 규칙이 통합니다.
 * CSS 의 text-wrap: pretty 가 되는 브라우저에서는 그쪽이 더 넓게 처리하고, 이건 그 폴백입니다. 빌드 시 1회라 런타임 비용 0.
 */
export function glueLastWords(html: string): string {
  const segs = html.split(/(<[^>]+>)/);          // 태그 / 텍스트 교차
  let seenWordAfter = false;                     // 뒤쪽(문단 끝 쪽)에 단어가 있었는가
  for (let i = segs.length - 1; i >= 0; i--) {
    const seg = segs[i];
    if (!seg || seg.startsWith('<')) continue;
    if (!seenWordAfter) {
      const trimmed = seg.replace(/\s+$/, '');
      if (!trimmed) continue;
      // 이 세그먼트 안에 "단어 공백 단어" 가 있으면 마지막 공백을 교체
      const m = trimmed.match(/^([\s\S]*\S)(\s+)(\S+)$/);
      if (m) { segs[i] = `${m[1]} ${m[3]}${seg.slice(trimmed.length)}`; return segs.join(''); }
      seenWordAfter = true;                      // 단어 하나뿐 → 앞 세그먼트의 끝 공백을 교체 대상으로
      continue;
    }
    // 뒤에 단어가 있고, 이 세그먼트가 공백으로 끝나며 그 앞에 단어가 있으면 그 공백을 교체
    const m = seg.match(/^([\s\S]*\S)(\s+)$/);
    if (m) { segs[i] = `${m[1]} `; return segs.join(''); }
    if (/\S/.test(seg)) return html;             // 공백 없이 바로 이어짐 → 교체할 공백 없음
  }
  return html;
}
const glueBlocks = (html: string) =>
  html.replace(/(<(p|li)\b[^>]*>)([\s\S]*?)(<\/\2>)/g, (_m, open, _tag, inner, close) => open + glueLastWords(inner) + close);

function md(src: string): string {
  const s = src.trim();
  return s ? glueBlocks(wrapKo(marked.parse(s, { async: false, gfm: true, breaks: false }) as string)) : '';
}

export function loadGuide(lang: Lang = DEFAULT_LANG): Guide {
  const source = CONTENT_FILES[`/content/guide.${lang}.md`];
  if (source === undefined) throw new Error(`content/guide.${lang}.md 가 없습니다`);
  const raw = source.replace(/<!--[\s\S]*?-->/g, '');
  const lines = raw.split(/\r?\n/);

  const chapters: Chapter[] = [];
  let chapter: Chapter | null = null;
  let sub: Sub | null = null;
  let section: Section | null = null;
  let body: string[] = [];
  let idsInSub = new Map<string, number>();

  // 목차 앵커 라벨: 헤드가 페이지 이름과 같으면(예: Colors 페이지의 "Color") 서브헤드를 쓴다.
  // 같은 라벨은 한 번만 노출하고 첫 섹션으로 연결한다.
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/s$/, '');
  const navLabel = (sec: Section, s: Sub) => {
    const pageLike = norm(sec.head) === norm(s.name) || norm(sec.head) === norm(s.chapterName);
    return pageLike && sec.subhead ? sec.subhead : sec.head;
  };

  const flushSection = () => {
    if (!section || !sub) return;
    section.bodyHtml = md(body.join('\n'));
    section.layout = pickLayout((section as any)._layout, section.items);
    delete (section as any)._layout;
    sub.sections.push(section);
    section = null;
    body = [];
  };

  // 서브챕터의 목차 항목 확정: ### + 표시가 있으면 그것만, 없으면 전부. 같은 라벨은 첫 섹션 하나만.
  const finalizeNav = (s: Sub) => {
    const marked = s.sections.filter(sec => sec.tocMark);
    const pool = marked.length ? marked : s.sections;
    s.navSections = [];
    for (const sec of pool) {
      const label = navLabel(sec, s);
      if (!s.navSections.some(n => n.head === label)) s.navSections.push({ id: sec.id, head: label });
    }
  };

  for (const line of lines) {
    let m: RegExpMatchArray | null;

    if ((m = line.match(/^#\s+(\d+)\s+(.+?)\s*$/))) {              // # 02 Logo
      flushSection();
      chapter = { num: m[1], name: m[2], slug: `${m[1]}-${slugify(m[2])}`, subs: [] };
      chapters.push(chapter);
      sub = null;
      continue;
    }
    if ((m = line.match(/^##\s+(.+?)\s*$/)) && chapter) {           // ## Logo {toc=none}
      flushSection();
      let name = m[1];
      let attrs: Record<string, string> = {};
      const am = name.match(/\{([^}]*)\}\s*$/);
      if (am) { attrs = parseAttrs(am[1]); name = name.slice(0, am.index).trim(); }
      const slug = slugify(name);
      sub = {
        name, slug,
        url: `/${lang}/${chapter.slug}/${slug}`,
        chapterNum: chapter.num, chapterName: chapter.name, chapterSlug: chapter.slug,
        sections: [], navSections: [],
        tocSections: attrs.toc !== 'none'
      };
      chapter.subs.push(sub);
      idsInSub = new Map();
      continue;
    }
    if ((m = line.match(/^###(\+?)\s+(\+\s*)?(.+?)\s*$/)) && sub) { // ### Head {layout=…}  /  #### + Head (목차에 올림, ###+ Head 도 가능)
      flushSection();
      const tocMark = m[1] === '+' || !!m[2];
      let head = m[3];
      let attrs: Record<string, string> = {};
      const am = head.match(/\{([^}]*)\}\s*$/);
      if (am) { attrs = parseAttrs(am[1]); head = head.slice(0, am.index).trim(); }
      const base = slugify(head);
      const count = (idsInSub.get(base) ?? 0) + 1;
      idsInSub.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      section = {
        id, navId: base, head, bodyHtml: '', layout: 'basic',
        ratio: normalizeRatio(attrs.ratio), items: [], tocMark
      };
      (section as any)._layout = attrs.layout;
      continue;
    }
    if ((m = line.match(/^####\s+(.+?)\s*$/)) && section) {         // #### Subhead
      section.subhead = m[1];
      continue;
    }
    if ((m = line.match(/^!\[([^\]]+)\](?:\{(do|dont)\})?\s*(.*)$/)) && section) {   // ![token]{do} caption
      const token = m[1].trim();
      const item: ImageItem = { kind: 'image', token, src: resolveAsset(token) };
      if (m[2]) item.badge = m[2] as 'do' | 'dont';
      if (m[3].trim()) item.caption = glueLastWords(wrapKo(escapeHtml(m[3].trim())));   // HTML (한글 구간 래핑, 고아 단어 방지)
      section.items.push(item);
      continue;
    }
    if ((m = line.match(/^\[swatch\]\s*(.+)$/)) && section) {        // [swatch] Name | #HEX | spec | spec
      const parts = m[1].split('|').map(s => s.trim()).filter(Boolean);
      const [name, hex, ...specs] = parts;
      section.items.push({ kind: 'swatch', name: name ?? '', hex: hex ?? '#000000', specs });
      continue;
    }
    if (section) body.push(line);
  }
  flushSection();
  for (const ch of chapters) for (const s of ch.subs) finalizeNav(s);

  // prev / next 연결 (챕터 경계를 넘어 순서대로)
  const flat = chapters.flatMap(c => c.subs);
  flat.forEach((s, i) => {
    const ref = (t: Sub): SubRef => ({ url: t.url, name: t.name, chapterNum: t.chapterNum, chapterName: t.chapterName });
    if (i > 0) s.prev = ref(flat[i - 1]);
    if (i < flat.length - 1) s.next = ref(flat[i + 1]);
  });

  return { lang, chapters };
}

/** 검색 색인: 섹션 단위. 클라이언트 스크립트가 JSON 으로 받아 필터링합니다. */
/** u: url#id, c: 챕터, s: 서브챕터, h: 섹션 헤드, t: 제목(서브헤드, 없으면 헤드), b: 본문 */
export interface SearchEntry { u: string; c: string; s: string; h: string; t: string; b: string; }
const stripTags = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
export function buildSearchIndex(guide: Guide): SearchEntry[] {
  const out: SearchEntry[] = [];
  for (const ch of guide.chapters) for (const sub of ch.subs) for (const sec of sub.sections) {
    const caps = sec.items.map(it => it.kind === 'image' ? stripTags(it.caption ?? '') : `${it.name} ${it.hex}`).join(' ');
    out.push({
      u: `${sub.url}#${sec.id}`,
      c: `${ch.num} ${ch.name}`,
      s: sub.name,
      h: sec.head,
      t: sec.subhead ?? sec.head,
      b: `${stripTags(sec.bodyHtml)} ${caps}`.slice(0, 400)
    });
  }
  return out;
}

export function firstUrl(guide: Guide): string {
  return guide.chapters[0]?.subs[0]?.url ?? `/${guide.lang}`;
}

/** 모든 언어의 가이드를 한 번에 */
export function loadAllGuides(): Record<Lang, Guide> {
  return Object.fromEntries(LANGS.map(l => [l, loadGuide(l)])) as Record<Lang, Guide>;
}

/** 다른 언어의 같은 페이지 URL. 같은 챕터·서브챕터 slug 가 없으면 그 언어의 첫 페이지. */
export function altUrl(guides: Record<Lang, Guide>, sub: Sub, target: Lang): string {
  const g = guides[target];
  const ch = g.chapters.find(c => c.slug === sub.chapterSlug);
  const match = ch?.subs.find(s => s.slug === sub.slug);
  return match?.url ?? firstUrl(g);
}

export function brandLogoSrc(): string | null {
  return resolveAsset('brand/logo');
}
