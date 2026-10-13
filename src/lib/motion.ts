/**
 * 클라이언트 모션 (GSAP)
 *  1. 스무스 스크롤 — ScrollSmoother. --scroll-smooth 가 0 이면 만들지 않음(브라우저 기본 스크롤).
 *  2. 앵커 이동 — 같은 페이지의 #섹션 링크는 스무스 스크롤로, --anchor-offset 만큼 위를 띄움.
 *  3. 이미지 확대 보기 — .fig__frame 의 <img> 를 누르면 라이트박스. 디졸브 + 스케일.
 * 수치는 전부 tokens.css 의 5. MOTION / 1-8 / 3-9 토큰에서 읽습니다.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);

const css = getComputedStyle(document.documentElement);
const token = (name: string) => css.getPropertyValue(name).trim();
const num = (name: string, fallback: number) => {
  const v = parseFloat(token(name));
  return Number.isFinite(v) ? v : fallback;
};
/**
 * 곡선 토큰을 GSAP ease 로. GSAP 이름(power2.inOut)이면 그대로, cubic-bezier(…) 면 CustomEase 로 만들어
 * CSS 전환(목차 슬라이드)과 GSAP 전환(섹션 이동, 페이지 전환)이 같은 토큰 하나로 같은 곡선을 씁니다.
 */
const eases = new Map<string, string | gsap.EaseFunction>();
const easeOf = (name: string, fallback: string): string | gsap.EaseFunction => {
  const raw = token(name) || fallback;
  if (eases.has(raw)) return eases.get(raw)!;
  const m = raw.match(/^cubic-bezier\(\s*([^)]+)\)$/);
  const ease = m ? CustomEase.create(`token${eases.size}`, m[1].split(/\s*,\s*/).join(',')) : raw;
  eases.set(raw, ease);
  return ease;
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

/**
 * 브라우저는 주소의 #앵커로 들어오면 overflow:hidden 인 래퍼까지 안쪽에서 몰래 스크롤해 버립니다.
 * 그러면 스무더의 좌표계가 그만큼 어긋나므로, 섹션 이동 전과 로드 직후에 래퍼 스크롤을 0 으로 되돌립니다.
 */
const resetWrapperScroll = () => { if (wrapper && wrapper.scrollTop) wrapper.scrollTop = 0; };
resetWrapperScroll();
window.addEventListener('load', resetWrapperScroll);

/**
 * 섹션 이동(목차 클릭·검색 클릭·검색으로 다른 페이지에 도착).
 * 휠 스크롤의 감속 곡선(--scroll-smooth, 꼬리가 긴 expo)과는 별개의 전용 트윈으로,
 * 거리와 무관하게 --anchor-dur 초 안에 --anchor-ease 곡선으로 도착합니다.
 * 이동하는 동안 스무더를 paused 로 두고 scrollTop 을 직접 트윈합니다(ScrollSmoother 가 정한 방식).
 * 그래서 휠용 부드러움 값에 영향받지 않고, 끝나면 휠 스크롤은 평소대로 돌아갑니다.
 * 이동 중 휠·터치를 하면 트윈을 멈추고 사용자에게 넘깁니다.
 * 스무스 스크롤이 꺼져 있으면 브라우저 기본 이동(scroll-margin-top 적용).
 */
let anchorTween: gsap.core.Tween | undefined;
const stopAnchorTween = () => {
  if (!anchorTween) return;
  anchorTween.kill();
  anchorTween = undefined;
  smoother?.paused(false);
};
window.addEventListener('wheel', stopAnchorTween, { passive: true });
window.addEventListener('touchstart', stopAnchorTween, { passive: true });

/** 콘텐츠 상단 기준 세로 위치. 페이지 전환 애니메이션(transform)이 진행 중이어도 흔들리지 않도록 offset 체인으로 잽니다. */
const topWithin = (el: HTMLElement, root: HTMLElement) => {
  let y = 0;
  let n: HTMLElement | null = el;
  while (n && n !== root) {
    y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
    n && (y += n.clientTop);                                  // offsetTop 은 부모 보더 안쪽 기준이므로 보더 두께를 더함
  }
  return n === root ? y : el.getBoundingClientRect().top - root.getBoundingClientRect().top;
};

export function scrollToId(id: string, animate = true) {
  const el = document.getElementById(id);
  if (!el) return false;
  if (smoother && content && wrapper) {
    resetWrapperScroll();
    stopAnchorTween();
    const y = Math.min(ScrollTrigger.maxScroll(window), Math.max(0, topWithin(el, content) - anchorOffset()));
    if (!animate) { smoother.scrollTo(y, false); return true; }
    smoother.paused(true);                                    // 이동 중 사용자 입력은 wheel/touch 리스너가 받아 트윈을 멈춤
    anchorTween = gsap.to(smoother, {
      scrollTop: y,
      duration: num('--anchor-dur', 0.5),
      ease: easeOf('--anchor-ease', 'power2.inOut'),
      overwrite: true,
      onComplete: stopAnchorTween,
    });
  } else el.scrollIntoView({ block: 'start', behavior: animate ? 'smooth' : 'auto' });
  return true;
}
(window as any).__scrollToId = scrollToId;

/* ---------- 1.5 페이지 전환 (나갈 때) ----------
   들어올 때의 디졸브는 CSS(base.css page-in)가 맡고, 여기서는 다른 페이지로 가는 링크를 누르면
   본문을 먼저 사라지게 한 뒤 이동합니다. 새 탭·수정키·외부 링크·#앵커는 건드리지 않습니다. */
const main = document.querySelector<HTMLElement>('.main');
if (main) {
  const outDur = ms('--page-out-dur', 0.2);
  const navSlide = ms('--nav-slide-dur', 0.28);             // 목차 링크면 하위 목록 슬라이드가 끝날 때까지 기다림
  const shift = num('--page-shift', 0);
  const ease = easeOf('--page-ease', 'power2.out');
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
    const wait = a.closest('.sidebar') ? Math.max(outDur, navSlide) : outDur;
    let done = false;
    const go = () => { if (done) return; done = true; location.href = url.href; };
    gsap.to(main, { opacity: 0, y: -shift, duration: outDur, ease });
    setTimeout(go, wait * 1000 + 40);                         // 디졸브·목차 슬라이드가 끝난 뒤 이동 (탭이 숨겨져도 보장)
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
  // 다른 페이지의 섹션으로 온 경우(검색 등): 맨 위에서 섹션까지 목차 클릭과 같은 트윈으로 이동
  const go = () => requestAnimationFrame(() => { ScrollTrigger.refresh(); scrollToId(id, true); });
  if (document.readyState === 'complete') go();
  else window.addEventListener('load', go, { once: true });
}

/* ---------- 3. 이미지 확대 보기 ---------- */
const box = document.querySelector<HTMLElement>('[data-lightbox]');
const boxImg = box?.querySelector<HTMLImageElement>('.lightbox__img');

if (box && boxImg) {
  const dur = ms('--lightbox-dur', 0.36);
  const scaleFrom = num('--lightbox-scale-from', 0.94);
  const ease = easeOf('--lightbox-ease', 'power3.out');
  let opened = false;

  const open = (src: string, alt: string) => {
    if (opened) return;
    opened = true;
    boxImg.src = src;
    boxImg.alt = alt;
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    stopAnchorTween();
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
