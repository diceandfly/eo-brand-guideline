# 파일 관리 튜토리얼

이 사이트를 편집할 때 손대는 파일은 세 종류뿐입니다. 글은 `content/guide.en.md`(영어판)와 `content/guide.ko.md`(한국어판), 이미지는 `public/assets/`, 디자인 수치는 `src/styles/tokens.css`.

## 1. 실행

```bash
npm install
npm run dev        # 영어판 (guide.en.md)
npm run dev:ko     # 한국어판 (guide.ko.md)
```

브라우저에서 http://localhost:4321 을 엽니다. 두 언어판은 파일이 따로 있어 서로 영향을 주지 않으며, 실행 명령만 바꾸면 바로 교체됩니다. 파일을 저장하면 바로 반영됩니다. 정적 파일로 빌드하려면 `npm run build` (결과물은 `dist/`).

## 2. 폴더 구조

```
content/guide.en.md       ← 영어판. 모든 글과 이미지 배치 (문법은 파일 상단 주석)
content/guide.ko.md       ← 한국어판. 같은 문법
public/assets/<챕터>/     ← 이미지. guide.md 의 ![토큰] 과 1:1 대응
public/fonts/             ← Founders Grotesk woff2 (저장소에 커밋되지 않음)
src/styles/tokens.css     ← 마진·거터·타이포·컬러·비율 토큰. 디자인 튜닝은 여기서만
src/styles/base.css       ← 토큰을 참조하는 레이아웃 CSS
src/styles/fonts.css      ← @font-face 선언 (파일명 매핑)
src/components/           ← Section / Figure / Swatch / Sidebar / Logo
src/layouts/Layout.astro  ← 페이지 셸 (목차 + 본문 + 모바일 드로어)
src/pages/                ← 라우팅. 건드릴 일 거의 없음
src/lib/guide.ts          ← guide.md 파서
docs/                     ← 이 문서
```

## 3. 이미지 넣기

1. `guide.md` 에서 `![logo/construction]` 처럼 토큰을 씁니다.
2. 같은 경로에 파일을 넣습니다: `public/assets/logo/construction.svg`
   - 확장자는 svg, png, jpg, jpeg, webp, gif, avif 중 아무거나. 같은 이름이 여럿이면 svg 가 우선합니다.
   - 파일이 없는 동안은 토큰 경로가 적힌 플레이스홀더 박스로 표시되므로, 어떤 이미지가 비어 있는지 화면에서 바로 보입니다.
3. 이미지는 지정된 비율(`basic` 5:4, `wide` 2:1, 카드 4:5)로 잘려서(cover) 들어갑니다. 비율에 맞춰 내보내는 것이 가장 안전합니다.

폴더 이름 규칙: 챕터 하나당 폴더 하나(`logo`, `symbol`, `type`, `color`, `visual`), 파일명은 소문자와 하이픈만. `brand/logo.svg` 를 넣으면 목차 상단의 "EO" 텍스트가 그 로고로 바뀝니다.

## 4. 폰트 넣기

`public/fonts/` 에 아래 파일명으로 woff2 를 넣습니다.

| 파일명 | 웨이트 |
|---|---|
| FoundersGrotesk-Light.woff2 | 300 |
| FoundersGrotesk-Regular.woff2 | 400 |
| FoundersGrotesk-Medium.woff2 | 500 |
| FoundersGroteskMono-Regular.woff2 | 400 (모노) |

파일명이 다르면 `src/styles/fonts.css` 의 경로만 고칩니다. 폰트 폴더는 `.gitignore` 에 들어 있어 저장소에 커밋되지 않습니다(유료 폰트 재배포 방지). 폰트가 없으면 시스템 산세리프로 폴백되니, 토큰 튜닝은 폰트를 넣은 뒤에 하세요.

## 5. 디자인 튜닝

`src/styles/tokens.css` 한 파일만 수정합니다. 항목마다 주석이 있습니다.

- 레이아웃: 목차 폭, 마진, 거터, 섹션 간격, 기본 섹션의 텍스트/이미지 컬럼 수
- 타이포: `--lh-unit`(기준 행간)과 레벨별 `m`(행간 배수), `p`(행간÷폰트), `ls`(자간), `w`(웨이트). 폰트 사이즈는 계산값이라 직접 쓰지 않습니다.
- 컬러: 브랜드 팔레트 7색은 그대로 두고, UI 시맨틱 토큰(`--bg`, `--fg`, `--accent` …)만 바꿉니다. 중간 톤은 `color-mix()` 퍼센트로 조절합니다.
- 비율: `--ratio-basic`, `--ratio-wide`, `--ratio-card`, `--ratio-swatch`

브레이크포인트(모바일 899px 이하)만 CSS 변수로 쓸 수 없어 `base.css` 의 `@media` 에 직접 적혀 있습니다.

## 6. 글 편집

문법은 `content/guide.en.md` 맨 위 주석에 전부 있습니다. 요약하면 `#` 챕터, `##` 서브챕터(=페이지), `###` 섹션 헤드, `####` 서브헤드, `![토큰]` 이미지, `[swatch]` 컬러 카드입니다. 섹션의 레이아웃은 이미지 개수로 자동 결정되고, 헤드 뒤 `{layout=… ratio=…}` 로 직접 지정할 수 있습니다.

## 7. 클로드코드로 편집할 때

프로젝트 루트의 `CLAUDE.md` 에 위 규칙이 요약되어 있어 클로드코드가 자동으로 읽습니다. "Logo 챕터에 Favicon 섹션 추가해 줘", "섹션 간격을 조금 줄여 줘" 처럼 말하면 각각 `guide.md` 와 `tokens.css` 만 수정합니다.
