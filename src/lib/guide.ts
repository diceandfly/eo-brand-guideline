/**
 * content/guide.<lang>.md (en, ko) 를 파싱해 챕터 > 서브챕터 > 섹션 트리를 만듭니다.
 * 빌드(또는 dev 서버) 시점에 Node 에서만 실행됩니다.
 *
 * 문법은 content/guide.ko.md 상단 튜토리얼 주석을 참고하세요 (국문이 최종 기준).
 */
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export type Layout = 'basic' | 'text' | 'wide' | 'half' | 'grid-2' | 'grid-3' | 'grid-4';

export interface ImageItem {
  kind: 'image';
  token: string;          // guide.<lang>.md 에 쓴 그대로. 예: clearspace (예전 형식 logo/clearspace 도 허용)
  name: string;           // 파일 이름(확장자 제외). 토큰의 마지막 / 뒤. 서브챕터 폴더 안에서 이 이름으로 찾음
  path: string;           // 넣을 자리: 02-logo/01-symbol/04-clearspace (확장자 제외, 플레이스홀더에 표시. 앞 번호 = 주제 순서)
  src: string | null;     // 파일이 있으면 /assets/… 경로, 없으면 null(플레이스홀더)
  badge?: 'do' | 'dont';
  strike?: boolean;       // Don't 대각선. {dont} 이면 자동, {dont nostrike} 면 끔
  zoom?: number;          // 카드 안 배율. {zoom=1.2} 로 직접 지정, {nozoom} 이면 1 (Do/Don't 그리드 기본 배율도 끔)
  caption?: string;       // HTML. 한글 구간은 <span class="ko"> 로 래핑됨
}
export interface SwatchItem {
  kind: 'swatch';
  name: string;
  hex: string;
  rows: SwatchRow[];      // 컬러 카드의 스펙 행 (Pantone → CMYK → RGB → HEX → 그 밖). values 하나하나가 복사 단위
}
export interface SwatchRow { label: string; values: string[]; note?: string; }
export type Item = ImageItem | SwatchItem;

export interface Section {
  id: string;             // 앵커 id (헤드 기준, 중복 시 -2, -3…)
  head: string;
  subhead?: string;
  bodyHtml: string;
  layout: Layout;
  ratio?: string;         // "5 / 4" 형식. 없으면 레이아웃 기본 토큰 사용
  zoom?: number;          // 섹션 안 이미지 전체의 카드 배율 {zoom=1.5}. 이미지별 {zoom=…}/{nozoom} 이 우선
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
/** 화면낭독기용 문구 (aria-label · 상태 알림). 화면에 보이는 UI 글자(Search, No results 등)는 디자인상 영문 그대로 */
export const UI_TEXT = {
  en: { toc: 'Table of contents', openToc: 'Open table of contents', language: 'Language', search: 'Search the guidelines', clear: 'Clear search', results: 'Search results', found: (n: number) => (n ? `${n} results` : 'No results'), lightbox: 'Image viewer', copy: 'Copy', do: 'Do', dont: "Don't" },
  ko: { toc: '목차', openToc: '목차 열기', language: '언어', search: '가이드라인 검색', clear: '검색어 지우기', results: '검색 결과', found: (n: number) => (n ? `결과 ${n}개` : '결과 없음'), lightbox: '이미지 확대 보기', copy: '복사', do: 'Do', dont: "Don't" },
} satisfies Record<Lang, Record<string, unknown>>;
/** 페이지 경로(/ko/…, /en/…)로 언어 판별. 언어 정보가 props 로 오지 않는 컴포넌트용 */
export const langFromPath = (path: string): Lang => (LANGS as readonly string[]).includes(path.split('/')[1]) ? (path.split('/')[1] as Lang) : DEFAULT_LANG;
/**
 * 콘텐츠 파일은 fs 가 아니라 Vite 모듈로 읽습니다. 그래야 dev 서버가 파일을 의존성으로 추적해서,
 * 저장 즉시 라우트(새 서브챕터 등)와 페이지를 다시 계산하고 브라우저를 새로고침합니다.
 */
const CONTENT_FILES = import.meta.glob('/content/guide.*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const ASSETS = path.join(ROOT, 'public', 'assets');
const EXTS = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

/**
 * 이미지 파일 규칙: public/assets/<챕터>/<서브챕터>/<주제 번호>-<이름>.<확장자>
 *   예: 02-logo/01-symbol/04-clearspace.png  (주제 = 목차 항목, 번호 = 페이지 안 주제 순서)
 * 폴더와 파일명 앞 번호는 탐색기에서 페이지 순서대로 정렬되게 하는 용도라 파서는 무시합니다(번호를 떼고 이름으로 비교).
 * 이미지는 그 서브챕터 폴더 안에서 파일 이름으로 찾습니다. 그래서 섹션 순서를 바꿔 번호가 달라져도,
 * 영문·국문 구조가 잠시 달라도 이미지가 끊기지 않습니다. 번호를 지금 순서에 맞추려면 npm run assets (scripts/assets.mjs).
 */
const stripNum = (dir: string) => dir.replace(/^\d+-/, '');
const stripFileNum = (name: string) => name.replace(/^\d{2}-/, '');   // 파일명 앞 두 자리 정렬 번호 (예: 04-clearspace → clearspace)
const pad2 = (n: number) => String(n).padStart(2, '0');

/** 서브챕터 폴더 안의 이미지 목록: 이름(확장자 제외) → assets 기준 경로들 */
function subAssetIndex(chapterSlug: string, chapterName: string, subSlug: string): Map<string, string[]> {
  const index = new Map<string, string[]>();
  const findDir = (parent: string, ...slugs: string[]) => {
    if (!fs.existsSync(parent)) return null;
    const hit = fs.readdirSync(parent, { withFileTypes: true })
      .find(d => d.isDirectory() && (slugs.includes(d.name) || slugs.includes(stripNum(d.name))));
    return hit ? hit.name : null;
  };
  const chDir = findDir(ASSETS, chapterSlug, slugify(chapterName));
  if (!chDir) return index;
  const subDir = findDir(path.join(ASSETS, chDir), subSlug);
  if (!subDir) return index;
  const walk = (rel: string) => {
    for (const d of fs.readdirSync(path.join(ASSETS, rel), { withFileTypes: true })) {
      const r = `${rel}/${d.name}`;
      if (d.isDirectory()) { walk(r); continue; }
      const m = d.name.match(/^(.+)\.([a-z0-9]+)$/i);
      if (!m || !EXTS.includes(m[2].toLowerCase())) continue;
      const key = stripFileNum(m[1]);
      index.set(key, [...(index.get(key) ?? []), r]);
    }
  };
  walk(`${chDir}/${subDir}`);
  return index;
}

function resolveAsset(item: ImageItem, index: Map<string, string[]>): string | null {
  const noExt = (r: string) => r.replace(/\.[^./]+$/, '');
  const rank = (r: string) => `${noExt(r) === item.path ? 0 : 1}\0${EXTS.indexOf(r.split('.').pop()!.toLowerCase())}`;   // 제자리 우선, 같으면 svg → png …
  const hits = (index.get(item.name) ?? []).sort((a, b) => rank(a).localeCompare(rank(b)));
  if (hits[0]) return `/assets/${hits[0]}`;
  for (const ext of EXTS) {                                   // 예전 위치(public/assets/logo/clearspace.png 등) 폴백
    if (fs.existsSync(path.join(ASSETS, `${item.token}.${ext}`))) return `/assets/${item.token}.${ext}`;
  }
  return null;
}

/** 줄 끝의 {…} 속성을 떼어 냅니다. {layout=grid-3} {zoom=1.6} 처럼 여러 개로 나눠 써도 모두 합칩니다. */
function takeAttrs(text: string): [string, Record<string, string>] {
  const groups: string[] = [];
  let m: RegExpMatchArray | null;
  while ((m = text.match(/\{([^}]*)\}\s*$/))) { groups.unshift(m[1]); text = text.slice(0, m.index).trimEnd(); }
  return [text.trim(), parseAttrs(groups.join(' '))];
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
function wrapKo(html: string): string {
  return html
    .split(/(<[^>]+>)/)                         // 태그와 텍스트 분리
    .map(seg => seg.startsWith('<') ? seg : seg.replace(KO_RUN, m => `<span class="ko">${m}</span>`))
    .join('');
}

/**
 * 곧은 따옴표를 둥근 따옴표로 (표시용). guide.<lang>.md 에는 " 와 ' 로 쓰고, 화면에는 “ ” ‘ ’ 로 나옵니다.
 * 앞 글자가 공백·줄 시작·여는 괄호면 여는 따옴표, 아니면 닫는 따옴표. 글자 사이의 ' 는 아포스트로피(’).
 * 태그 안(속성)과 <code>·<pre> 안은 건드리지 않습니다. 이미 둥근 따옴표로 쓴 글자는 그대로 둡니다.
 * 나열의 " · " 와 짝 표기의 " / " 는 앞 공백을 줄바꿈 없는 공백으로 바꿔, 줄이 기호로 시작하지 않게 합니다 (기호는 앞 단어에 붙고 뒤에서만 줄바꿈).
 */
const OPENS_AFTER = /[\s([{\u2014\u2013\-/“‘]/;
const LETTER = /[\p{L}\p{N}]/u;
function smartQuotes(html: string): string {
  let prev = ' ';
  let code = 0;
  return html.split(/(<[^>]+>)/).map(seg => {
    if (seg.startsWith('<')) {
      if (/^<(code|pre)\b/i.test(seg)) code++;
      else if (/^<\/(code|pre)>/i.test(seg)) code = Math.max(0, code - 1);
      if (/^<\/?(p|li|ul|ol|h\d|div|blockquote|br|td|th|tr)\b/i.test(seg)) prev = ' ';   // 블록 경계 = 줄 시작
      return seg;
    }
    if (code) { if (seg) prev = seg.at(-1)!; return seg; }
    const text = seg.replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");
    let out = '';
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') out += OPENS_AFTER.test(prev) ? '“' : '”';
      else if (c === "'") {
        const next = text[i + 1] ?? '';
        out += LETTER.test(prev) && LETTER.test(next) ? '’' : OPENS_AFTER.test(prev) ? '‘' : '’';
      } else out += c;
      prev = c;
    }
    return out.replace(/ ([·/]) /g, '\u00A0$1 ');
  }).join('');
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * 고아 단어(orphan) 방지 — 문단·리스트 항목·캡션의 마지막 두 단어 사이 공백을 줄바꿈 없는 공백(&nbsp;)으로 바꿉니다.
 * 마지막 줄에 단어 하나만 남는 일이 없어지고, 영문(단어)·한글(어절) 모두 공백 기준이라 같은 규칙이 통합니다.
 * CSS 의 text-wrap: pretty 가 되는 브라우저에서는 그쪽이 더 넓게 처리하고, 이건 그 폴백입니다. 빌드 시 1회라 런타임 비용 0.
 */
function glueLastWords(html: string): string {
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
  return s ? glueBlocks(wrapKo(smartQuotes(marked.parse(s, { async: false, gfm: true, breaks: false }) as string))) : '';
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
      const [name, attrs] = takeAttrs(m[1]);
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
      const [head, attrs] = takeAttrs(smartQuotes(m[3]));
      const base = slugify(head);
      const count = (idsInSub.get(base) ?? 0) + 1;
      idsInSub.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      section = {
        id, head, bodyHtml: '', layout: 'basic',
        ratio: normalizeRatio(attrs.ratio), items: [], tocMark,
        zoom: Number.isFinite(parseFloat(attrs.zoom)) ? parseFloat(attrs.zoom) : undefined
      };
      (section as any)._layout = attrs.layout;
      continue;
    }
    if ((m = line.match(/^####\s+(\+\s*)?(.+?)\s*$/)) && section) { // #### Subhead  /  #### + Subhead {layout=…}  (+ 와 {…} 는 헤드 줄과 동일하게 동작)
      const [subhead, attrs] = takeAttrs(smartQuotes(m[2]));
      if (m[1]) section.tocMark = true;
      if (attrs.layout) (section as any)._layout = attrs.layout;
      if (attrs.ratio) section.ratio = normalizeRatio(attrs.ratio);
      if (Number.isFinite(parseFloat(attrs.zoom))) section.zoom = parseFloat(attrs.zoom);
      section.subhead = subhead;
      continue;
    }
    if ((m = line.match(/^!\[([^\]]+)\]\s*(?:\{([^}]*)\})?\s*(.*)$/)) && section) {   // ![token]{dont nostrike zoom=1.2} caption  (] 와 { 사이 공백 허용)
      const token = m[1].trim();
      const name = token.split('/').pop()!.trim();
      const item: ImageItem = { kind: 'image', token, name, path: '', src: null };   // path·src 는 서브챕터를 다 읽은 뒤 확정
      const flags = (m[2] ?? '').trim().split(/\s+/).filter(Boolean);
      if (flags.includes('do')) item.badge = 'do';
      if (flags.includes('dont')) item.badge = 'dont';
      if (item.badge === 'dont' && !flags.includes('nostrike')) item.strike = true;
      const z = flags.find(f => f.startsWith('zoom='));
      if (z && Number.isFinite(parseFloat(z.slice(5)))) item.zoom = parseFloat(z.slice(5));
      if (flags.includes('nozoom')) item.zoom = 1;
      if (m[3].trim()) item.caption = glueLastWords(wrapKo(smartQuotes(escapeHtml(m[3].trim()))));   // HTML (한글 구간 래핑, 고아 단어 방지)
      section.items.push(item);
      continue;
    }
    if ((m = line.match(/^\[swatch\]\s*(.+)$/)) && section) {        // [swatch] Name | #HEX | spec | spec
      const parts = m[1].split('|').map(s => s.trim()).filter(Boolean);
      const [name, hex, ...specs] = parts;
      section.items.push({ kind: 'swatch', name: name ?? '', hex: hex ?? '#000000', rows: swatchRows(hex ?? '#000000', specs) });
      continue;
    }
    if (section) body.push(line);
  }
  flushSection();
  for (const ch of chapters) for (const s of ch.subs) finalizeNav(s);

  // 이미지 경로 확정: <챕터>/<서브챕터 번호-이름>/<주제 번호>-<이름>.
  // 주제 = 목차 라벨 규칙과 같음(헤드, 헤드가 페이지 이름과 같으면 서브헤드). 번호는 페이지 안 주제 순서(목차 표시와 무관하게 전부 셈).
  for (const ch of chapters) ch.subs.forEach((s, si) => {
    const topics: string[] = [];
    for (const sec of s.sections) { const l = navLabel(sec, s); if (!topics.includes(l)) topics.push(l); }
    const index = subAssetIndex(ch.slug, ch.name, s.slug);
    for (const sec of s.sections) {
      const label = navLabel(sec, s);
      const topicNum = pad2(topics.indexOf(label) + 1);
      for (const it of sec.items) {
        if (it.kind !== 'image') continue;
        it.path = `${ch.slug}/${pad2(si + 1)}-${s.slug}/${topicNum}-${it.name}`;
        it.src = resolveAsset(it, index);
      }
    }
  });

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
const straightQuotes = (t: string) => t.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");   // 검색어는 곧은 따옴표로 입력되므로 색인도 맞춤
const stripTags = (html: string) => straightQuotes(html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim());
export function buildSearchIndex(guide: Guide): SearchEntry[] {
  const out: SearchEntry[] = [];
  for (const ch of guide.chapters) for (const sub of ch.subs) for (const sec of sub.sections) {
    const caps = sec.items.map(it => it.kind === 'image' ? stripTags(it.caption ?? '') : `${it.name} ${it.hex}`).join(' ');
    out.push({
      u: `${sub.url}#${sec.id}`,
      c: `${ch.num} ${ch.name}`,
      s: sub.name,
      h: straightQuotes(sec.head),
      t: straightQuotes(sec.subhead ?? sec.head),
      b: `${stripTags(sec.bodyHtml)} ${caps}`.slice(0, 400)
    });
  }
  return out;
}

/**
 * 스와치 스펙 문자열을 행으로. 두 가지 표기를 모두 받습니다.
 *   R249 G238 B58 / C5 M0 Y95 K0 / PANTONE 3945 C          (기존)
 *   RGB: 249 238 58 / CMYK: 5 0 95 0 / Pantone: 3945 C     (라벨: 값)
 * 숫자 뒤의 꼬리말(예: "or raw paper")은 복사 대상이 아닌 메모로 붙습니다.
 */
function swatchRows(hex: string, specs: string[]): SwatchRow[] {
  const named: Record<string, SwatchRow> = {};
  const extra: SwatchRow[] = [];
  const note = (t?: string) => (t && t.trim() ? t.trim() : undefined);
  for (const raw of specs) {
    const s = raw.trim();
    let m: RegExpMatchArray | null;
    if ((m = s.match(/^(?:rgb\s*:?\s*)?R\s*(\d+)\s*G\s*(\d+)\s*B\s*(\d+)\s*(.*)$/i)))
      named.RGB = { label: 'RGB', values: [m[1], m[2], m[3]], note: note(m[4]) };
    else if ((m = s.match(/^(?:cmyk\s*:?\s*)?C\s*(\d+)\s*M\s*(\d+)\s*Y\s*(\d+)\s*K\s*(\d+)\s*(.*)$/i)))
      named.CMYK = { label: 'CMYK', values: [m[1], m[2], m[3], m[4]], note: note(m[5]) };
    else if ((m = s.match(/^(rgb|cmyk)\s*:\s*([\d\s,]+?)\s*([^\d\s,].*)?$/i)))
      named[m[1].toUpperCase()] = { label: m[1].toUpperCase(), values: m[2].split(/[\s,]+/).filter(Boolean), note: note(m[3]) };
    else if ((m = s.match(/^(?:pantone|pms)\s*:?\s*(.+)$/i)))
      named.Pantone = { label: 'Pantone', values: [m[1].trim()] };
    else if ((m = s.match(/^([A-Za-z][\w ]*?)\s*:\s*(.+)$/)))
      extra.push({ label: m[1], values: [m[2].trim()] });
    else extra.push({ label: '', values: [], note: s });
  }
  const hexRow: SwatchRow = { label: 'HEX', values: [hex.toUpperCase()] };
  return [named.Pantone, named.CMYK, named.RGB, hexRow, ...extra].filter((r): r is SwatchRow => !!r);
}

/** 이미지 목록(문서 순서). scripts/assets.mjs 가 /asset-manifest.json 으로 받아 폴더를 정리합니다. */
export interface AssetEntry { page: string; path: string; src: string | null; }
export function assetEntries(guide: Guide): AssetEntry[] {
  const out: AssetEntry[] = [];
  for (const ch of guide.chapters) for (const s of ch.subs) for (const sec of s.sections) for (const it of sec.items) {
    if (it.kind === 'image') out.push({ page: s.url, path: it.path, src: it.src });
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

/**
 * 사이트 자체 로고를 SVG 마크업으로. 파일 대신 HTML 에 직접 넣어 페이지 전환 때 이미지를 다시 받으며 깜빡이지 않게 합니다.
 * 한 페이지에 두 번(목차, 모바일 상단 바) 들어가므로 id 는 지웁니다. SVG 가 아니면 null (→ <img> 사용).
 */
export function brandLogoSvg(): string | null {
  const p = path.join(ASSETS, 'brand', 'logo.svg');
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8')
    .replace(/<\?xml[^>]*\?>\s*/, '')
    .replace(/\s(id|data-name)="[^"]*"/g, '')
    .replace(/<svg\b/, '<svg role="img" aria-label="EO"')
    .trim();
}

/** 사이트 자체 로고: public/assets/brand/logo.* (콘텐츠 이미지 폴더 규칙과 별개) */
export function brandLogoSrc(): string | null {
  const ext = EXTS.find(e => fs.existsSync(path.join(ASSETS, 'brand', `logo.${e}`)));
  return ext ? `/assets/brand/logo.${ext}` : null;
}
