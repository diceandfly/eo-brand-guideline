# EO Brand Guidelines (web)

EO 리브랜딩의 웹용 브랜드 가이드라인. Astro 정적 사이트, 로컬 개발 전용(배포 없음).

## 구조와 역할 분리
- `content/guide.en.md` / `content/guide.ko.md` — 모든 글·이미지 배치. 언어별 한 파일, 문법 동일(상단 주석). `GUIDE_LANG=en|ko`(기본 en)로 선택: `npm run dev` / `npm run dev:ko`. 콘텐츠 변경은 이 파일만 수정.
- `public/assets/<chapter>/<name>.*` — 이미지. `![chapter/name]` 토큰과 1:1. 없으면 플레이스홀더.
- `src/styles/tokens.css` — 모든 디자인 수치(레이아웃·타이포·컬러·비율). 디자인 튜닝은 이 파일만 수정.
- `src/styles/base.css` — 토큰을 참조하는 레이아웃 CSS. 숫자를 직접 쓰지 말고 토큰을 추가해 참조할 것.
- `src/lib/guide.ts` — guide.<lang>.md 파서. 문법을 바꾸면 guide.md 상단 튜토리얼도 같이 갱신.
- `src/components/` — Section(텍스트+미디어 슬롯), Figure(이미지/플레이스홀더/배지/캡션), Swatch, Sidebar, Logo.

## 용어 (대화에서 이 이름으로 통일)
챕터(`# 02 Logo`) > 서브챕터(`## Logo`, 페이지 하나) > 섹션(`### Head`, 선택적 `#### Subhead`).
레이아웃: `text`(이미지 없음) / `basic`(텍스트 4컬럼 + 이미지 6컬럼) / `wide`(12컬럼) / `half`(6컬럼) / `grid-2|3|4`.
아이템: 이미지, 카드(이미지+캡션), 스와치. 배지 `{do}` `{dont}`.

## 타이포 규칙
5레벨 고정: display / heading / body / ui / label. 행간이 기준 단위(`--lh-unit`). 레벨마다 m(행간 배수)·p(행간÷폰트)·ls·w 토큰만 가지며 폰트 사이즈는 계산값. 레벨을 늘리지 말 것.
서체는 Founders Grotesk(본문 포함)와 Founders Grotesk Mono(label)만 사용. woff2는 `public/fonts/`(git 제외).

## 컬러 규칙
브랜드 팔레트 7색(`--c-*`)은 `EO color palette final.svg` 기준이며 임의로 바꾸지 않는다. UI는 시맨틱 토큰(`--bg`, `--fg`, `--accent` …)만 참조. 중간 톤은 새 HEX 대신 `color-mix()`. Do/Don't 색(`--c-do`, `--c-dont`)은 UI 전용이며 브랜드 컬러가 아님.

## 작업 방식
- 사용자는 한국어, 두괄식 소통을 선호하며 미확정 사항은 착수 전에 토론한다.
- 데스크탑 우선. 모바일(899px 이하)은 목차 드로어와 세로 스택만 보장.
- 스크롤스파이는 후속 라운드. `Sidebar.astro`의 `data-scrollspy` / `data-target`, `Section.astro`의 `data-section`이 그 자리.
- 상세 튜토리얼: `docs/file-management.md`.

## 실행
`npm run dev` → http://localhost:4321  /  `npm run build` → `dist/`
