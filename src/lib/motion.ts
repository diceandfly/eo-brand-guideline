/**
 * 클라이언트 모션 (GSAP)
 *  1. 스무스 스크롤 — ScrollSmoother. --scroll-smooth 가 0 이면 만들지 않음(브라우저 기본 스크롤).
 *  2. 앵커 이동 — 같은 페이지의 #섹션 링크는 스무스 스크롤로, --anchor-offset 만큼 위를 띄움.
 *  1.5 페이지 전환 — 다른 페이지 링크를 누르면 본문을 먼저 사라지게 한 뒤 이동 (들어올 때는 CSS).
 *  3. 이미지 확대 보기 — .fig__frame 의 <img> 를 누르면 라이트박스. 디졸브 + 스케일.
 * 수치는 전부 tokens.css 5. MOTION 에서 읽습니다 (Don't 대각선 영역만 4. RATIO 의 --ratio-dodont).
 * 시간 토큰은 "0.4" 처럼 초로 써도, "400ms" 처럼 ms 로 써도 됩니다. 아래 대체값은 토큰을 못 읽을 때만 쓰며 토큰과 같게 유지.
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
/** 시간 토큰 → 초. "360ms" → 0.36, "0.4s" · "0.4" → 0.4 */
const ms = (name: string, fallback: number) => {
  const raw = token(name);
  const v = parseFloat(raw);
  if (!Number.isFinite(v)) return fallback;
  return raw.endsWith('ms') ? v / 1000 : v;          // "360ms" → 0.36, "0.4s" → 0.4
};

// 운영체제의 "동작 줄이기"를 켠 사용자: 스무스 스크롤 끔, 섹션 이동은 바로 점프, 라이트박스는 배율 없이 짧은 디졸브
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1. 스무스 스크롤 ---------- */
const smoothAmount = reduced ? 0 : ms('--scroll-smooth', 1.2);
const wrapper = document.getElementById('smooth-wrapper');
const content = document.getElementById('smooth-content');
let smoother: ScrollSmoother | null = null;

if (smoothAmount > 0 && wrapper && content) {
  smoother = ScrollSmoother.create({ wrapper, content, smooth: smoothAmount, effects: false, smoothTouch: 0 });
}
(window as any).__smoother = smoother;

const anchorOffset = () => num('--anchor-offset', 64);

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
  if (reduced) animate = false;
  if (smoother && content && wrapper) {
    resetWrapperScroll();
    stopAnchorTween();
    const y = Math.min(ScrollTrigger.maxScroll(window), Math.max(0, topWithin(el, content) - anchorOffset()));
    if (!animate) { smoother.scrollTo(y, false); return true; }
    smoother.paused(true);                                    // 이동 중 사용자 입력은 wheel/touch 리스너가 받아 트윈을 멈춤
    anchorTween = gsap.to(smoother, {
      scrollTop: y,
      duration: ms('--anchor-dur', 0.56),
      ease: easeOf('--anchor-ease', 'cubic-bezier(0.7, 0, 0.3, 1)'),
      overwrite: true,
      onComplete: stopAnchorTween,
    });
  } else el.scrollIntoView({ block: 'start', behavior: animate ? 'smooth' : 'auto' });
  return true;
}

/* ---------- 1.2 목차 목록의 휠 스크롤 ----------
   목차는 스무스 스크롤 영역 밖(고정)이라 브라우저 기본 스크롤입니다. 마우스 휠의 끊기는 칸 단위 이동만
   본문과 같은 감속으로 목표 위치까지 따라가게 하고, 트랙패드(이미 관성이 있음)는 기본 스크롤 그대로 둡니다. */
const navScroller = document.querySelector<HTMLElement>('[data-nav-scroll]');
const navSmooth = reduced ? 0 : ms('--nav-scroll-smooth', 1.2);
if (navScroller && navSmooth > 0) {
  let target = navScroller.scrollTop;
  let tweening = false;
  // 휠 판별
  //  1) 크롬·사파리: wheelDeltaY 가 120 단위(±120, 240…)면 마우스 휠, 그 밖의 작은 값이면 트랙패드
  //     (맥에서는 마우스 휠도 deltaY 가 4.0002 처럼 소수로 와서 deltaY 만으로는 구분이 안 됨)
  //  2) 파이어폭스: 휠은 줄 단위(deltaMode 1)로 옴
  //  3) 둘 다 없으면: 가로 성분 없이 큰 단위(40px 이상)로 오면 휠
  const legacyOf = (e: WheelEvent) => (e as WheelEvent & { wheelDeltaY?: number }).wheelDeltaY;
  const isWheel = (e: WheelEvent) => {
    const legacy = legacyOf(e);
    if (e.deltaMode !== 0) return true;
    if (typeof legacy === 'number' && legacy !== 0) return legacy % 120 === 0;
    return e.deltaX === 0 && Math.abs(e.deltaY) >= 40;
  };
  // 휠 한 칸 이동 거리. 맥은 휠 한 칸의 deltaY 가 4px 처럼 작게 와서, 칸 수(120 단위)로 세어 토큰 거리만큼 움직임
  const stepPx = num('--nav-wheel-step', 80);
  const stepOf = (e: WheelEvent) => {
    const legacy = legacyOf(e);
    if (e.deltaMode === 1) return e.deltaY * stepPx / 3;                    // 파이어폭스: 보통 한 칸 = 3줄
    if (e.deltaMode === 2) return e.deltaY * navScroller.clientHeight;
    if (typeof legacy === 'number' && legacy !== 0 && legacy % 120 === 0) return Math.sign(e.deltaY) * (Math.abs(legacy) / 120) * stepPx;   // 방향은 deltaY, 칸 수는 wheelDeltaY
    return e.deltaY;
  };
  // 확인 모드: 브라우저 콘솔에서 localStorage.guideWheelDebug = '1' 후 새로고침하면 휠 값이 콘솔에 찍힘
  let debug = false;
  try { debug = localStorage.getItem('guideWheelDebug') === '1'; } catch {}
  navScroller.addEventListener('wheel', e => {
    if (debug) console.log('[nav wheel]', { deltaY: e.deltaY, deltaMode: e.deltaMode, wheelDeltaY: legacyOf(e), wheel: isWheel(e), step: stepOf(e) });
    if (e.ctrlKey || !isWheel(e)) { if (tweening) { gsap.killTweensOf(navScroller); tweening = false; } return; }   // 트랙패드·확대 제스처
    const max = navScroller.scrollHeight - navScroller.clientHeight;
    if (max <= 0) return;
    e.preventDefault();
    if (!tweening) target = navScroller.scrollTop;                // 다른 방법으로 움직인 뒤라면 현재 위치에서 출발
    target = Math.max(0, Math.min(max, target + stepOf(e)));
    tweening = true;
    gsap.to(navScroller, {
      scrollTop: target, duration: navSmooth, ease: easeOf('--nav-scroll-ease', 'expo.out'), overwrite: true,
      onComplete: () => { tweening = false; },
    });
  }, { passive: false });
}

/* ---------- 1.5 페이지 전환 (나갈 때) ----------
   들어올 때의 디졸브는 CSS(base.css page-in)가 맡고, 여기서는 다른 페이지로 가는 링크를 누르면
   본문을 먼저 사라지게 한 뒤 이동합니다. 새 탭·수정키·외부 링크·#앵커는 건드리지 않습니다. */
const main = document.querySelector<HTMLElement>('.main');
if (main) {
  const outDur = ms('--page-out-dur', 0.46);
  const navSlide = ms('--nav-slide-dur', 0.46);             // 목차 링크면 하위 목록 슬라이드가 끝날 때까지 기다림
  const shift = num('--page-shift', 8);
  const ease = easeOf('--page-ease', 'cubic-bezier(0.7, 0, 0.3, 1)');
  const buffer = ms('--page-out-buffer', 0.04);
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
    setTimeout(go, (wait + buffer) * 1000);                   // 디졸브·목차 슬라이드가 끝난 뒤 이동 (탭이 숨겨져도 보장)
  });
  // 뒤로 가기(bfcache)로 돌아왔을 때 사라진 상태로 남지 않도록
  window.addEventListener('pageshow', e => { if (e.persisted) { gsap.set(main, { clearProps: 'opacity,transform' }); main.style.animation = ''; } });
}

/* ---------- 2. 앵커 링크 ---------- */
document.addEventListener('click', e => {
  const a = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
  if (!a) return;
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
const boxStrike = box?.querySelector<HTMLElement>('.lightbox__strike');

if (box && boxImg) {
  const dur = reduced ? ms('--lightbox-dur-reduced', 0.12) : ms('--lightbox-dur', 0.36);
  const scaleFrom = reduced ? 1 : num('--lightbox-scale-from', 0.94);
  const closeRatio = num('--lightbox-close-ratio', 0.8);    // 닫힘 = 열림 시간 × 비율
  // Don't 대각선 영역 비율 = 카드의 Do/Don't 비율 토큰 ("4 / 3")
  const dodont = (() => { const [a, b] = token('--ratio-dodont').split('/').map(parseFloat); return a > 0 && b > 0 ? a / b : 4 / 3; })();
  const ease = easeOf('--lightbox-ease', 'power3.out');
  let opened = false;
  const parts = boxStrike ? [boxImg, boxStrike] : [boxImg];   // 이미지와 대각선은 함께 커지고 사라짐

  // Don't 대각선: 화면에 그려진 이미지의 가운데 --ratio-dodont 영역 (카드에서 보이던 영역과 같음)
  const placeStrike = () => {
    if (!boxStrike) return;
    const w = boxImg.offsetWidth, h = boxImg.offsetHeight;      // transform 과 무관한 레이아웃 크기
    const r = dodont;
    const sw = w / h > r ? h * r : w, sh = w / h > r ? h : w / r;
    boxStrike.style.width = `${sw}px`;
    boxStrike.style.height = `${sh}px`;
  };
  boxImg.addEventListener('load', placeStrike);
  window.addEventListener('resize', () => { if (opened) placeStrike(); });

  const behind = [document.getElementById('smooth-wrapper'), document.querySelector('.sidebar'), document.querySelector('.topbar')].filter((el): el is HTMLElement => !!el);

  let opener: HTMLElement | null = null;   // 닫을 때 포커스를 돌려줄 요소
  const open = (src: string, alt: string, strike = false) => {
    if (opened) return;
    opened = true;
    opener = document.activeElement as HTMLElement | null;
    box.classList.toggle('has-strike', strike);
    boxImg.src = src;
    boxImg.alt = alt;
    if (boxImg.complete) placeStrike();
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    for (const el of behind) el.setAttribute('inert', '');          // 뒤 페이지는 키보드·낭독기에서 제외 (Tab 트랩과 짝)
    box.focus({ preventScroll: true });
    stopAnchorTween();
    smoother?.paused(true);
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;          // 보이는 스크롤바 폭 (오버레이면 0)
    html.style.setProperty('--scrollbar-w', `${scrollbar}px`);       // overflow: hidden 으로 사라지는 폭. base.css 가 본문 컨테이너(#smooth-wrapper)의 오른쪽 패딩으로 채워 폭이 튀지 않게
    html.classList.add('lightbox-open');
    gsap.killTweensOf([box, ...parts]);
    gsap.fromTo(box, { opacity: 0 }, { opacity: 1, duration: dur, ease });
    gsap.fromTo(parts, { scale: scaleFrom, opacity: 0 }, { scale: 1, opacity: 1, duration: dur, ease });
  };

  const close = () => {
    if (!opened) return;
    opened = false;
    gsap.killTweensOf([box, ...parts]);
    gsap.to(parts, { scale: scaleFrom, opacity: 0, duration: dur * closeRatio, ease });
    gsap.to(box, {
      opacity: 0, duration: dur * closeRatio, ease,
      onComplete: () => {
        box.classList.remove('is-open');
        box.setAttribute('aria-hidden', 'true');
        for (const el of behind) el.removeAttribute('inert');
        boxImg.removeAttribute('src');
        smoother?.paused(false);
        document.documentElement.classList.remove('lightbox-open');
        document.documentElement.style.removeProperty('--scrollbar-w');
      }
    });
    opener?.focus({ preventScroll: true });
    opener = null;
  };

  const openFrom = (img: HTMLImageElement) => open(img.currentSrc || img.src, img.alt, !!img.parentElement?.querySelector('.strike'));
  document.addEventListener('click', e => {
    const img = (e.target as HTMLElement).closest('.fig__frame > img') as HTMLImageElement | null;
    if (img) { e.preventDefault(); openFrom(img); }
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (opened) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); }
      else if (e.key === 'Tab') e.preventDefault();             // 열려 있는 동안 포커스는 라이트박스에 머묾
      return;
    }
    const img = (e.target as HTMLElement).closest?.('.fig__frame > img') as HTMLImageElement | null;
    if (img && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openFrom(img); }   // 키보드로 열기
  });
}
