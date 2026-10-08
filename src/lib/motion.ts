/**
 * 클라이언트 모션 (GSAP)
 *  1. 스무스 스크롤 — ScrollSmoother. --scroll-smooth 가 0 이면 만들지 않음(브라우저 기본 스크롤).
 *  2. 앵커 이동 — 같은 페이지의 #섹션 링크는 스무스 스크롤로, --anchor-offset 만큼 위를 띄움.
 *  3. 이미지 확대 보기 — .fig__frame 의 <img> 를 누르면 라이트박스. 디졸브 + 스케일.
 * 수치는 전부 tokens.css 의 5. MOTION / 1-6 / 3-9 토큰에서 읽습니다.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const css = getComputedStyle(document.documentElement);
const token = (name: string) => css.getPropertyValue(name).trim();
const num = (name: string, fallback: number) => {
  const v = parseFloat(token(name));
  return Number.isFinite(v) ? v : fallback;
};
const ms = (name: string, fallback: number) => {
  const raw = token(name);
  const v = parseFloat(raw);
  if (!Number.isFinite(v)) return fallback;
  return raw.endsWith('ms') ? v / 1000 : v;          // "360ms" → 0.36, "0.4s" → 0.4
};

/* ---------- 1. 스무스 스크롤 ---------- */
const smoothAmount = num('--scroll-smooth', 0);
const wrapper = document.getElementById('smooth-wrapper');
const content = document.getElementById('smooth-content');
let smoother: ScrollSmoother | null = null;

if (smoothAmount > 0 && wrapper && content) {
  smoother = ScrollSmoother.create({ wrapper, content, smooth: smoothAmount, effects: false, smoothTouch: 0 });
}
(window as any).__smoother = smoother;

const anchorOffset = () => num('--anchor-offset', 0);

/** 같은 페이지의 섹션으로 이동. 스무스 스크롤이 꺼져 있으면 브라우저 기본 이동(scroll-margin-top 적용). */
export function scrollToId(id: string, animate = true) {
  const el = document.getElementById(id);
  if (!el) return false;
  if (smoother) smoother.scrollTo(el, animate, `top ${anchorOffset()}px`);
  else el.scrollIntoView({ block: 'start', behavior: animate ? 'smooth' : 'auto' });
  return true;
}
(window as any).__scrollToId = scrollToId;

/* ---------- 1.5 페이지 전환 (나갈 때) ----------
   들어올 때의 디졸브는 CSS(base.css page-in)가 맡고, 여기서는 다른 페이지로 가는 링크를 누르면
   본문을 먼저 사라지게 한 뒤 이동합니다. 새 탭·수정키·외부 링크·#앵커는 건드리지 않습니다. */
const main = document.querySelector<HTMLElement>('.main');
if (main) {
  const outDur = ms('--page-out-dur', 0.2);
  const shift = num('--page-shift', 0);
  const ease = token('--page-ease') || 'power2.out';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null;
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname) return;          // 같은 페이지(앵커)는 스크롤만
    e.preventDefault();
    if (reduced || outDur <= 0) { location.href = url.href; return; }
    main.style.animation = 'none';                            // 들어올 때 애니메이션과 충돌 방지
    let done = false;
    const go = () => { if (done) return; done = true; location.href = url.href; };
    gsap.to(main, { opacity: 0, y: -shift, duration: outDur, ease, onComplete: go });
    setTimeout(go, outDur * 1000 + 80);                       // 탭이 숨겨져 애니메이션이 멈춰도 이동은 보장
  });
  // 뒤로 가기(bfcache)로 돌아왔을 때 사라진 상태로 남지 않도록
  window.addEventListener('pageshow', e => { if (e.persisted) { gsap.set(main, { clearProps: 'opacity,transform' }); main.style.animation = ''; } });
}

/* ---------- 2. 앵커 링크 ---------- */
document.addEventListener('click', e => {
  const a = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
  if (!a || a.closest('[data-search]')) return;          // 검색 결과는 Search.astro 가 처리
  const url = new URL(a.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  const id = decodeURIComponent(url.hash.slice(1));
  if (scrollToId(id)) { e.preventDefault(); history.replaceState(null, '', url.hash); }
});

// 주소에 #섹션 을 달고 들어온 경우 (검색 결과로 다른 페이지에 도착 등).
// 폰트·이미지까지 다 자리 잡은 뒤(load) 높이를 다시 재고 이동해야 위치가 어긋나지 않습니다.
if (location.hash) {
  const id = decodeURIComponent(location.hash.slice(1));
  const go = () => requestAnimationFrame(() => { ScrollTrigger.refresh(); scrollToId(id, false); });
  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go, { once: true });
}

/* ---------- 3. 이미지 확대 보기 ---------- */
const box = document.querySelector<HTMLElement>('[data-lightbox]');
const boxImg = box?.querySelector<HTMLImageElement>('.lightbox__img');

if (box && boxImg) {
  const dur = ms('--lightbox-dur', 0.36);
  const scaleFrom = num('--lightbox-scale-from', 0.94);
  const ease = token('--lightbox-ease') || 'power3.out';
  let opened = false;

  const open = (src: string, alt: string) => {
    if (opened) return;
    opened = true;
    boxImg.src = src;
    boxImg.alt = alt;
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    smoother?.paused(true);
    document.documentElement.classList.add('lightbox-open');
    gsap.killTweensOf([box, boxImg]);
    gsap.fromTo(box, { opacity: 0 }, { opacity: 1, duration: dur, ease });
    gsap.fromTo(boxImg, { scale: scaleFrom, opacity: 0 }, { scale: 1, opacity: 1, duration: dur, ease });
  };

  const close = () => {
    if (!opened) return;
    opened = false;
    gsap.killTweensOf([box, boxImg]);
    gsap.to(boxImg, { scale: scaleFrom, opacity: 0, duration: dur * 0.8, ease });
    gsap.to(box, {
      opacity: 0, duration: dur * 0.8, ease,
      onComplete: () => {
        box.classList.remove('is-open');
        box.setAttribute('aria-hidden', 'true');
        boxImg.removeAttribute('src');
        smoother?.paused(false);
        document.documentElement.classList.remove('lightbox-open');
      }
    });
  };

  document.addEventListener('click', e => {
    const img = (e.target as HTMLElement).closest('.fig__frame > img') as HTMLImageElement | null;
    if (img) { e.preventDefault(); open(img.currentSrc || img.src, img.alt); }
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
