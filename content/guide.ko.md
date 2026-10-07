<!--
=====================================================================
EO Brand Guidelines — 콘텐츠 파일 튜토리얼 (한국어판)
=====================================================================
이 파일은 한국어판입니다. 영어판은 guide.en.md 이며 문법은 같습니다.
두 언어가 한 사이트에 같이 빌드됩니다. 영어판은 /en/… , 한국어판은 /ko/… 이고
목차 하단의 EN | KR 로 전환합니다. 같은 챕터·서브챕터 이름(slug)이 있으면 같은 페이지로, 없으면 첫 페이지로 갑니다.

이 파일 하나가 사이트의 모든 글과 이미지 배치를 결정합니다.
이 주석 블록(<!-- -->)은 화면에 나오지 않습니다. 자유롭게 메모를 남기세요.

■ 위계 (기호로 구분)
  # 02 Logo              ← 챕터.   "번호 이름" 형식. 번호는 목차와 URL(/02-logo/…)에 쓰입니다.
  ## Logo                ← 서브챕터. 페이지 하나가 됩니다. URL: /02-logo/logo
  ### Construction       ← 섹션 헤드. 목차의 앵커로도 쓰입니다.
  #### Primary Lockup    ← 서브헤드 (선택). 헤드 바로 다음 줄에만 씁니다. 없으면 표시되지 않습니다.
  그 아래 줄들            ← 본문. 마크다운(문단, 굵게, 링크, 목록)을 쓸 수 있습니다.

■ 이미지 (한 줄에 하나)
  ![logo/construction]
    → public/assets/logo/construction.svg (또는 .png .jpg .webp) 를 찾아 넣습니다.
    → 파일이 아직 없으면 경로와 비율이 적힌 플레이스홀더 박스가 나옵니다.
  ![logo/dont-stretch]{dont} 로고를 늘리거나 왜곡하지 마세요
    → {do} 또는 {dont} 를 붙이면 캡션 줄 맨 앞에 체크 / 엑스 아이콘이 붙습니다.
    → 뒤에 글을 쓰면 이미지 아래 캡션이 붙습니다 (= 카드). 배지만 있고 글이 없으면 "Do" / "Don't" 가 기본 문구.

■ 스와치 (컬러 스펙 카드)
  [swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
    → 이름 | HEX | 이후는 자유 항목. HEX 는 색면 채우기에 쓰입니다.

■ 레이아웃
  섹션 안의 이미지/스와치 개수로 자동 결정됩니다.
    0개 → text    (텍스트만, 8컬럼)
    1개 → basic   (텍스트 4컬럼 + 이미지 6컬럼, 레퍼런스와 동일)
    2개 → grid-2  (텍스트 아래 2열)
    3·6·9개 → grid-3
    그 외 → grid-4
  직접 지정하려면 헤드 뒤에 중괄호로 씁니다.
    ### Character Set {layout=wide}            ← 텍스트 아래 12컬럼 전폭 이미지
    ### Alignment {layout=half}                ← 텍스트 아래 6컬럼 이미지
    ### Core Palette {layout=grid-4}           ← 개수와 무관하게 4열
    ### Dont's {layout=grid-3 ratio=4:5}       ← 비율도 함께. 기본값: basic/half 5:4, wide 2:1, grid 4:5

■ 자주 하는 작업
  섹션 추가     : ### 헤드 한 줄 + 본문 + ![이미지] 를 원하는 위치에 끼워 넣으면 끝.
  섹션 순서 변경 : 블록째 잘라 붙이기.
  서브챕터 추가  : ## 이름 한 줄. 목차·URL·다음 버튼이 자동으로 갱신됩니다.
  섹션 목록 숨김 : ## 이름 {toc=none}  ← 이 페이지는 목차에서 섹션 목록을 펼치지 않음 (섹션이 하나뿐이면 자동으로 숨김)
  같은 헤드 반복 : 가능합니다 (예: Character Set 3개). 목차에는 한 번만 표시되고 첫 번째로 이동합니다.
                  헤드가 페이지 이름과 같으면(Colors 페이지의 "Color") 목차에는 서브헤드가 표시됩니다.

■ 지금 상태
  EO 버전 더미 콘텐츠 초안입니다. 섹션 구성은 디스코드 레퍼런스를 그대로 따르고,
  내용은 R6·R7 덱, 핸드오프 문서, 팔레트 SVG, 그래픽 빌더 스펙을 바탕으로 작성했습니다.
  [대괄호] 안은 아직 확정되지 않아 채워야 하는 값입니다.
  디스코드 원문 직역본은 docs/reference-translation.md 에 따로 있습니다.
=====================================================================
-->

# 01 Overview

## Welcome

### Welcome to the EO Brand Guidelines
EO는 빌더를 위한 미디어입니다. 우리는 클릭이 아니라 신뢰를 쌓습니다. 조회수 대신 다시 돌아오는 사람을 세고, 자극적인 썸네일 대신 창업가의 진짜 여정을 기록합니다.

이 가이드라인은 EO 아이덴티티 시스템의 기본 요소인 로고, 타이포그래피, 컬러, 비주얼 시스템을 설명하고, 우리가 그것을 어떻게 사용해 브랜드를 만들어 가는지 안내합니다. 가이드라인을 이해하고 따르면 서울, 샌프란시스코, 사이공 어디에서 만들어진 콘텐츠든 하나의 EO로 보이고 읽힙니다.

EO의 브랜드 에셋을 사용하려는 외부 파트너는 jemin@eoeoeo.net로 연락주시길 바랍니다. 검토에는 보통 2주가 걸립니다.

Build Anyway.

The EO Brand Team

## Legal Brand Guidelines {toc=none}

### Legal Brand Guidelines
EO, EO 모노그램, 블록 심벌, “Build Anyway”, “Even the Odds” 및 EO Studio(이오스튜디오)가 소유한 기타 상표(이하 “EO 마크”)와, 로고·그래픽 유닛·패턴·EO의 룩앤필 등 브랜드 고유의 미적 특징(이하 “브랜드 에셋”)은 EO Studio의 독점 자산입니다. 여기에서 허용된 경우를 제외하고 EO 마크나 브랜드 에셋을 사용하려면 EO의 사전 허가가 있어야 합니다.

### Do's
- EO 마크와 브랜드 에셋을 사용할 때는 항상 본 브랜드 가이드라인을 따르세요.
- EO 콘텐츠에 출연했거나 EO 프로그램에 참여했다는 사실을 알리기 위해 EO 마크를 사용할 수 있습니다. 다만 EO가 해당 제품이나 서비스를 보증하거나 후원한다는 인상을 주어서는 안 됩니다.
- EO 영상과 아티클을 인용할 때는 출처를 “EO”로 명확히 표기하고, 원본 링크를 함께 제공하세요.
- EO 마크와 브랜드 에셋은 제공된 원본 파일 그대로, 승인된 컬러 페어링 안에서만 사용하세요.

### Dont's
- EO 마크 또는 이와 혼동될 만큼 유사한 마크를 회사·제품·서비스·이벤트·커뮤니티 이름, URL, 소셜 미디어 계정, 상표에 포함하지 마세요.
- 블록 심벌, 그래픽 유닛, 패턴을 변형하거나 재조합해 자신의 그래픽으로 사용하지 마세요.
- EO의 영상·아티클·썸네일을 EO의 허가 없이 재편집하거나 재업로드하지 마세요.
- EO 웹사이트, 매거진, 소셜 채널의 룩앤필(레이아웃, 컬러 조합, 서체, 그래픽 시스템)을 복제하거나 모방하지 마세요.
- EO 마크를 정치적·종교적 메시지, 성인물, 차별적 콘텐츠와 함께 사용하지 마세요.
- EO 마크나 브랜드 에셋을 허가 없이 상품(머천다이즈)에 사용하지 마세요.

# 02 Logo

## Logo

### Symbol
로고는 EO 브랜드를 알리는 가장 잘 알려지고 상징적인 방법입니다. 작은 사인오프부터 큰 디스플레이 집행까지, 이 서브챕터은 다양한 상황·포맷·커뮤니케이션에 맞춰 로고가 어떻게 적응할 수 있는지 설명합니다.
![logo/hero]

### Clearspace
로고에는 항상 숨 쉴 공간이 있어야 합니다. 클리어스페이스는 타이포그래피, 그래픽 유닛, 사진, 캔버스 가장자리로부터 로고를 지켜 줍니다. 최소 여백은 O 블록 십자의 팔 길이(X)와 같고, 여유가 있다면 로고 높이(H)의 절반까지 넓히는 것을 권장합니다.
![logo/clearspace]

### Scalability
EO 로고는 다양한 크기에서 작동하도록 설계되고 테스트되었습니다.

디지털 환경에서 충분한 가독성을 확보하기 위한 로고의 최소 크기는 높이 20px입니다. 인쇄물에서는 높이 5mm입니다. 이보다 작은 크기에서는 E 블록의 나사선이 뭉개지므로 심벌 단독 사용을 검토하세요.
![logo/scalability]

### Usage
레이아웃에 EO 로고를 적용하는 일은 커뮤니케이션 맥락에서 브랜드가 얼마나 앞에 나서야 하는지를 판단하는 데서 시작합니다. 영상 썸네일처럼 콘텐츠가 주인공인 곳에서는 로고가 모서리의 사인오프로 물러나고, 포스터나 굿즈처럼 브랜드가 주인공인 곳에서는 로고가 디스플레이 크기로 커집니다. 다음은 로고가 사인오프와 디스플레이 사이에서 어떻게 유연하게 쓰이는지 보여 줍니다.
![logo/usage]

### Usage {layout=grid-2}
#### Do's & Dont's
사인오프로 사용할 때는 모노그램 전체를 사용하고, 그래픽 유닛이나 패턴과 겹치지 않는 여백에 배치합니다.

디스플레이 크기로 사용할 때는 로고를 레이아웃의 그리드에 정렬하고, 로고 외에 다른 그래픽 요소를 최소화해 임팩트를 유지합니다.
![logo/usage-do-1]{do}
![logo/usage-do-2]{do}
![logo/usage-dont-1]{dont}
![logo/usage-dont-2]{dont}

### Placement
매체나 규격과 무관하게 로고는 레이아웃의 네 모서리 중 한 곳에 배치합니다. 기본 위치는 좌상단(디지털)과 좌하단(인쇄물)이며, 그래픽 유닛이 왼쪽을 차지할 때는 오른쪽 모서리로 옮깁니다. 로고의 바깥 여백은 레이아웃의 페이지 마진과 같습니다.
![logo/placement]

### Color {layout=grid-3}
EO 로고에는 여섯 가지 기본 컬러 페어링이 있습니다. 확신이 서지 않을 때는 이 중 하나를 사용하세요. 로고는 항상 단색입니다.
![logo/color-1] 1. Builder Neon on Space Black
![logo/color-2] 2. Space Black on Builder Neon
![logo/color-3] 3. Air White on Space Black
![logo/color-4] 4. Space Black on Air White
![logo/color-5] 5. Air White on Solid Gray
![logo/color-6] 6. Space Black on Color

### Over Imagery {layout=grid-2}
#### Do's & Dont's
로고는 사진 위에서도 항상 또렷하게 읽혀야 합니다.

EO의 사진은 대부분 인터뷰 현장과 해커하우스처럼 어둡고 거친 공간입니다. 이런 이미지 위에는 Air White 또는 Builder Neon 로고를, 밝은 이미지 위에는 Space Black 로고를 사용하세요. 사진의 밝기가 고르지 않다면 로고를 올릴 영역에 Space Black 면을 깔거나, 로고를 사진 바깥의 여백으로 옮깁니다.

인물의 얼굴이나 핵심 피사체 위에 로고를 올리지 마세요.

최소 대비 요건에 대한 일반적인 지침은 WCAG를 참고하세요.
![logo/imagery-do-1]{do}
![logo/imagery-do-2]{do}
![logo/imagery-dont-1]{dont}
![logo/imagery-dont-2]{dont}

### Contextual Usage {layout=grid-2}
#### Do's & Dont's
유튜브와 인스타그램처럼 채널 이름과 아바타가 이미 EO를 말해 주는 곳에서는 일반 게시물에 로고를 넣지 않습니다. 로고는 시리즈 런칭, 이벤트 공지 같은 핵심 순간에만 사용합니다.

반면 포스터, 굿즈, 파트너 행사장처럼 채널의 맥락이 없는 곳에서는 브랜드 존재감을 확립하기 위해 로고가 필수입니다.
![logo/context-do-1]{do}
![logo/context-dont-1]{dont}
![logo/context-do-2]{do}
![logo/context-dont-2]{dont}

### Partner Lockup
#### Horizontal
EO 로고는 파트너 브랜드 및 협업사 로고와 락업할 수 있습니다. 오른쪽은 기본 가로 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤, EO 로고와 파트너 로고 사이의 간격(X)은 로고 높이(H)와 같게 하고 그 중앙에 구분선을 둡니다. 구분선의 높이는 H, 두께는 O 블록 십자의 두께와 같습니다.
![logo/partner-horizontal]

### Partner Lockup
#### Vertical
EO 로고는 파트너 브랜드 및 협업사 로고와 세로로도 락업할 수 있습니다. 오른쪽은 기본 세로 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤, 두 로고 사이의 간격(X)은 로고 높이(H)와 같게 하고 구분선은 그 중앙에 가로로 둡니다.

로고들이 항상 시각적으로 중앙 정렬되도록 하세요.
![logo/partner-vertical]

### Partner Lockup
#### Optical Adjustment
파트너 브랜드의 로고가 EO 로고와 정렬했을 때 완벽하게 균형이 맞지 않는 경우가 있습니다. EO 모노그램은 가로로 넓고 묵직하기 때문에, 가늘거나 세로로 긴 파트너 로고는 수학적으로 같은 높이여도 작아 보입니다.

이럴 때는 보다 동등한 위계가 만들어지도록 파트너 로고를 시각적으로 키우거나 줄여 조정해야 합니다.
![logo/partner-optical]

### Logo {layout=grid-3}
#### Dont's
브랜드 시그니처가 일관되고 강렬하게 유지되도록, 로고를 재해석하거나 변형하거나 장식해서는 안 됩니다. 이 페이지는 피해야 할 변형의 예를 보여 줍니다.
![logo/dont-stretch]{dont} 로고를 늘리거나 왜곡하지 마세요
![logo/dont-rotate]{dont} 로고를 회전하지 마세요
![logo/dont-spacing]{dont} E와 O 사이의 간격을 바꾸지 마세요
![logo/dont-outline]{dont} 로고에 외곽선을 넣지 마세요
![logo/dont-thread]{dont} E의 나사선 수나 각도를 바꾸지 마세요
![logo/dont-mask]{dont} 로고를 사진이나 패턴의 마스크로 사용하지 마세요
![logo/dont-effects]{dont} 글로우, 그림자, 그라데이션을 적용하지 마세요
![logo/dont-color]{dont} 두 가지 색으로 칠하거나 승인되지 않은 페어링을 쓰지 마세요
![logo/dont-wordmark]{dont} 로고 옆에 “EO” 글자를 추가로 쓰지 마세요

## Discripter

### Discripter
#### Overview
특정한 경우 EO 로고는 E 블록 하나로 축약될 수 있습니다. 우리는 이것을 블록 심벌이라고 부릅니다. 심벌 단독 사용이 가장 두드러지는 경우는 앱 아이콘, 파비콘, 소셜 미디어 아바타, 핀 배지처럼 크기 제약 때문에 모노그램 전체를 쓰기 어려운 상황입니다. 블록 심벌은 그래픽 유닛과 같은 지오메트리를 공유하므로 비주얼 시스템 전체와 자연스럽게 이어집니다.
![symbol/overview]

### Construction
EO 로고는 두 개의 블록으로 이루어진 모노그램 심볼입니다. 나사의 파사드를 표현한 E 블록은 그래픽 유닛의 기본 지오메트리인 나사기둥(shaft)과 나사선(thread) 세 단으로 구성됩니다. O 블록은 십자구멍을 뚫린 팔각형 나사헤드로, 두 블록이 나란히 놓여 “Entrepreneur Onwards”을 뜻합니다. 두 블록의 높이는 같고(H), 사이 간격은 H의 [0.25]배입니다. E의 나사선 각도는 O 팔각형의 모서리 각도와 일치합니다.
![logo/construction]

### Symbol
#### Clearspace
심벌 주변에는 주변 아트워크, 이미지, 페이지 가장자리에 의해 답답해 보이지 않도록 일정한 공간이 필요합니다. 오른쪽은 블록 심벌의 최소 여백입니다. 최소 여백은 심벌 너비의 1/3이며, 나사선이 튀어나온 왼쪽에서도 같은 값을 적용합니다.
![symbol/clearspace]

### Symbol
#### Scalability
블록 심벌은 다양한 크기에서 작동하도록 설계되고 테스트되었습니다. 디지털 환경에서 충분한 가독성을 확보하기 위한 심벌의 최소 크기는 높이 16px입니다. 이보다 작은 파비콘(16px 미만)에는 나사선을 두 단으로 줄인 축소 버전을 사용합니다.
![symbol/scalability]

### Symbol
#### Horizontal Lockup
블록 심벌은 파트너 브랜드 및 협업사 로고와 락업할 수 있습니다. 오른쪽은 기본 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤 그 사이에 간격과 구분선을 넣을 수 있습니다. 심벌과 파트너 로고 사이의 간격(X)은 심벌 너비의 절반입니다.
![symbol/lockup-horizontal]

### App & Social Icons
#### Alignment
디지털 환경에서 심벌은 둥근 사각형(앱 아이콘)이나 원형(소셜 아바타) 컨테이너 안에 락업됩니다. 오른쪽은 두 컨테이너 안에서 심벌을 정렬하는 방법입니다. 심벌은 컨테이너의 기하학적 중심이 아니라 나사선을 제외한 기둥(shaft)의 중심에 맞춰 시각적으로 정렬하고, 심벌 높이는 컨테이너 높이의 [50]%로 합니다.
![symbol/icon-alignment]

### App & Social Icons
#### Scalability
심벌 아이콘은 다양한 크기에서 작동하도록 설계되고 테스트되었습니다. 가독성을 위해 가장 작은 심벌 아이콘은 높이 32px이어야 하며, 그 이하에서는 축소 버전 심벌을 사용합니다.
![symbol/icon-scalability]

### App & Social Icons {layout=grid-2}
#### Color Pairings
EO 앱 및 소셜 아이콘에는 두 가지 기본 컬러 페어링이 있습니다. 확신이 서지 않을 때는 이 중 하나를 사용하세요. 유튜브와 인스타그램의 메인 채널은 Builder Neon on Space Black을, 지역 채널(KR·US·VN)은 Space Black on Builder Neon을 사용해 구분합니다.
![symbol/icon-color-1] Builder Neon on Space Black
![symbol/icon-color-2] Space Black on Builder Neon

### App & Social Icons
#### In Use
오른쪽은 EO 앱 아이콘과 소셜 아바타가 실제로 사용된 예시입니다.
![symbol/icon-in-use]

### Symbol {layout=grid-3}
#### Dont's
브랜드 시그니처가 일관되고 강렬하게 유지되도록, 심벌을 재해석하거나 변형하거나 장식해서는 안 됩니다. 이 페이지는 피해야 할 변형의 예를 보여 줍니다.
![symbol/dont-stretch]{dont} 심벌을 늘리거나 왜곡하지 마세요
![symbol/dont-tilt]{dont} 심벌을 기울이지 마세요
![symbol/dont-flip]{dont} 심벌을 좌우로 뒤집지 마세요
![symbol/dont-outline]{dont} 심벌에 외곽선을 넣지 마세요
![symbol/dont-thread]{dont} 나사선을 추가하거나 지우지 마세요
![symbol/dont-mask]{dont} 심벌을 마스크로 사용하지 마세요
![symbol/dont-shadow]{dont} 그림자나 입체 효과를 적용하지 마세요
![symbol/dont-color]{dont} 승인되지 않은 컬러 페어링을 심벌에 사용하지 마세요
![symbol/dont-o]{dont} O 블록을 단독 심벌로 사용하지 마세요

# 03 Typography

## Typography

### Our Typefaces
EO의 서체는 Founders Grotesk 패밀리입니다. 헤드라인과 본문에는 Founders Grotesk를, 정보성 텍스트(라벨, 태그, 날짜, 스펙)에는 Founders Grotesk Mono를 사용합니다.

Founders Grotesk는 장식 없이 명료하고, 넓은 폭과 낮은 콘트라스트 덕분에 큰 크기에서 단단한 블록처럼 보입니다. 이 성격이 “명료하고 열린 자신감”이라는 EO의 목소리를 그대로 전달합니다. 모노는 빌더의 터미널과 스펙 시트를 연상시키는 정보의 서체입니다.

한국어 본문에는 Pretendard를, 베트남어 본문에는 Noto Sans를 사용합니다. 다국어 조합은 Backup Typeface 섹션을 참고하세요.
![type/our-typefaces]

### Custom Characters
EO는 서체의 글리프를 수정하지 않습니다. 대신 O 블록에서 가져온 두 개의 브랜드 기호를 텍스트와 함께 사용합니다. 플러스(+)는 “Entrepreneur + Optimism”의 접속사이자 버튼과 링크의 액션 기호이고, 스파크(✦)는 리스트와 인용의 불릿입니다. 두 기호는 서체의 기본 글리프가 아니라 제공된 벡터 파일을 사용하며, 크기는 함께 쓰는 텍스트의 x-height에 맞춥니다.
![type/custom-characters]

### Character Set {layout=wide}
#### Founders Grotesk Medium
이 페이지는 Founders Grotesk Medium의 대부분의 글자를 한눈에 보여 줍니다. Medium은 헤드라인과 디스플레이 타이포그래피의 기본 웨이트입니다. 이 서체는 라틴 확장 문자를 지원하며, 베트남어 성조 부호를 포함합니다. 한글처럼 지원하지 않는 문자는 Backup Typeface 섹션의 대체 서체를 사용합니다.
![type/charset-medium]

### Character Set {layout=wide}
#### Founders Grotesk Light
이 페이지는 Founders Grotesk Light의 대부분의 글자를 한눈에 보여 줍니다. Light는 본문, 서브헤드, 캡션의 기본 웨이트입니다. 큰 크기에서는 가늘어 보일 수 있으므로 24pt 이하에서 사용합니다.
![type/charset-light]

### Character Set {layout=wide}
#### Founders Grotesk Mono
이 페이지는 Founders Grotesk Mono Regular의 대부분의 글자를 한눈에 보여 줍니다.

참고: 모노는 정보성 텍스트 전용입니다. 태그, 날짜, 읽기 시간, 컬러 스펙, 캡션 번호에 사용하며 헤드라인이나 본문에는 사용하지 않습니다.
![type/charset-mono]

### Typeface Usage
EO의 단단한 비주얼 아이덴티티와 명확한 커뮤니케이션의 균형을 맞추려면, 웨이트 선택에 분명한 의도가 있어야 합니다.

헤드라인과 디스플레이에는 Founders Grotesk Medium을 사용하세요.

본문, 서브헤드, 캡션에는 Founders Grotesk Light를 사용하세요.

태그, 날짜, 스펙 같은 정보성 텍스트에는 Founders Grotesk Mono Regular를 사용하세요.

Regular와 Semibold는 UI 컴포넌트(버튼, 내비게이션)에만 사용하고 커뮤니케이션 디자인에서는 사용하지 않습니다.
![type/typeface-usage]

### Case Setting
EO의 헤드라인은 문장 케이스(Sentence case)로 조판하고 마침표로 끝냅니다. “Build Anyway.” “Trust, not clicks.”처럼 헤드라인은 구호가 아니라 문장이며, 마침표는 그 문장에 대한 확신입니다. 전부 대문자(All Caps)는 모노 라벨에서만 사용하고 헤드라인에는 사용하지 않습니다.
![type/case-setting]

### Linespacing
EO 타이포그래피는 폰트 크기가 아니라 행간을 기준 단위로 계산합니다. 기본 행간 단위(L)를 정하면 각 레벨의 행간은 그 배수가 되고, 폰트 크기는 행간을 레벨별 비율로 나눈 값이 됩니다. 이렇게 하면 텍스트가 차지하는 공간이 고정된 채로 레이아웃이 전개되고, 비율과 자간만 조절해 각 레벨의 회색도를 눈으로 미세 조정할 수 있습니다.

Display 7L / 87.5%, Head 3L / 109%, Sub-head 2L / 133%, Body 1.5L / 150%, Caption 0.5L / 125%.
![type/linespacing]

### Linespacing
#### Founders Grotesk Medium
오른쪽은 Founders Grotesk Medium으로 조판한 헤드라인에서 올바른 행간과 잘못된 행간의 예시입니다.

Display와 Head 레벨은 행간이 폰트 크기보다 작습니다(87.5%, 109%). 행과 행이 블록처럼 맞물리는 것이 의도이지만, 어센더와 디센더가 서로 닿아서는 안 됩니다. 닿는다면 비율이 아니라 문구를 바꾸세요.
![type/linespacing-medium]

### Linespacing
#### Founders Grotesk Light
오른쪽은 Founders Grotesk Light로 조판한 본문에서 올바른 행간과 잘못된 행간의 예시입니다.

Body 레벨의 행간은 150%입니다. 이보다 좁으면 Light 웨이트의 가는 획이 뭉쳐 보이고, 넓으면 문단이 흩어집니다. 제대로 설정하면 독자가 글을 막힘없이 읽어 내려갈 수 있습니다.
![type/linespacing-light]

### Linespacing Scale {layout=wide}
#### Founders Grotesk Medium
오른쪽은 다양한 크기의 헤드라인 행간 예시입니다.

일반적인 규칙으로, 타이포그래피가 클수록 행간 비율은 더 타이트해야 합니다. Display 87.5%, Head 109%, Sub-head 133%는 같은 기준 단위 위에서 크기에 따라 달라지는 비율입니다.
![type/linespacing-scale-medium]

### Linespacing Scale {layout=wide}
#### Founders Grotesk Light
오른쪽은 다양한 크기의 본문 행간 예시입니다.

일반적인 규칙으로, 타이포그래피가 작을수록 행간 비율은 더 느슨해야 합니다. Body 150%, Caption 125%는 같은 기준 단위 위에서 크기에 따라 달라지는 비율입니다.
![type/linespacing-scale-light]

### Letterspacing
큰 헤드라인과 타이틀의 경우, 자간이 타이트하면서도 모든 글자에 걸쳐 시각적으로 균등하도록 세 단계 과정을 거쳐야 합니다. 그 과정은 다음과 같습니다.

**1단계: 원본**
자간 수치를 적용하기 전 글자 사이의 공간입니다.

**2단계: 트래킹**
모든 글자에 일괄 적용하는 간격입니다. 레벨별 기본값은 Display -3%, Head -2%, Sub-head -1.5%, Body -1%, Caption 0입니다.

**3단계: 커닝**
적절한 트래킹 값을 설정한 뒤에는 글자끼리 닿지 않고 모든 글자 사이가 균등해지도록 특정 글자 사이의 공간을 수동으로 조정(커닝)해야 합니다. Founders Grotesk는 “A”와 “y”, “W”와 “a”처럼 사선 획이 만나는 조합에서 커닝이 특히 필요합니다.
![type/letterspacing]

### Letterspacing
#### Founders Grotesk Medium
오른쪽은 Founders Grotesk Medium으로 조판한 헤드라인에서 올바른 자간과 잘못된 자간의 예시입니다.

Display 크기에서 자간은 -3%입니다. 글자가 블록처럼 붙어 보이되 획이 닿지 않는 지점입니다. 더 좁히면 “ild”처럼 세로획이 연속되는 조합이 하나의 덩어리로 읽힙니다.
![type/letterspacing-medium]

### Letterspacing
#### Founders Grotesk Light
오른쪽은 Founders Grotesk Light로 조판한 본문에서 올바른 자간과 잘못된 자간의 예시입니다.

Body 크기에서 자간은 -1%에서 0 사이입니다. Light 웨이트는 자간을 좁히면 가독성이 빠르게 떨어지므로, 회색도를 맞추고 싶다면 자간 대신 행간을 조절하세요.
![type/letterspacing-light]

### Letterspacing Scale {layout=wide}
#### Founders Grotesk Medium
오른쪽은 다양한 크기에서 Founders Grotesk Medium으로 조판한 자간의 추가 예시입니다.

일반적인 규칙으로, 글자 크기가 클수록 자간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 글자 크기가 작을수록 자간은 더 느슨해야 합니다.
![type/letterspacing-scale-medium]

### Letterspacing Scale {layout=wide}
#### Founders Grotesk Light
오른쪽은 다양한 크기에서 Founders Grotesk Light로 조판한 자간의 추가 예시입니다.

일반적인 규칙으로, 글자 크기가 클수록 자간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 글자 크기가 작을수록 자간은 더 느슨해야 합니다.
![type/letterspacing-scale-light]

### Alignment
#### Founders Grotesk Medium
EO 브랜드 커뮤니케이션의 모든 헤드라인은 왼쪽 정렬입니다. 헤드라인은 레이아웃의 왼쪽 그리드 라인에서 시작해 그래픽 유닛이 놓인 오른쪽을 향합니다. 가운데 정렬은 심벌 단독 아이콘과 굿즈 백프린트처럼 텍스트가 한 줄인 경우에만 허용하고, 오른쪽 정렬과 강제 양끝 정렬은 사용하지 않습니다.
![type/alignment-medium]

### Alignment
#### Founders Grotesk Light
본문과 캡션도 왼쪽 정렬입니다. 여러 단으로 나뉜 본문은 모든 단의 첫 행 베이스라인을 맞추고, 캡션은 이미지의 왼쪽 가장자리에 정렬합니다. 오른쪽 정렬과 강제 양끝 정렬은 사용하지 않습니다.
![type/alignment-light]

### Ragging
타이포그래피에서 ‘래그’는 글 덩어리의 오른쪽 가장자리를 뜻합니다. 시각적 가장자리가 불규칙하게 느껴지고 특정 행이 튀어나오거나, 마지막 행에 단어 하나만 남는 경우(위도우) 문단이나 헤드라인의 래그가 나쁘다고 말합니다.

EO의 헤드라인은 짧고 행 수가 적어 래그가 그대로 드러납니다. “Build / Anyway.”처럼 행마다 의미 단위가 끊어지도록 줄을 바꾸고, 긴 행과 짧은 행이 번갈아 나오는 계단 모양을 피하세요. 본문에서는 가장자리가 고르고 글이 잘 읽힐 때까지 단어를 다음 행으로 옮깁니다.
![type/ragging]

### Sizing
커뮤니케이션을 단순하게 유지하기 위해, 하나의 레이아웃에는 일반적으로 두 가지를 넘는 타입 레벨을 사용하지 않습니다. 헤드라인 하나와 본문 하나, 또는 헤드라인 하나와 캡션 하나입니다.

레벨 간 크기는 기준 행간 단위(L)의 배수로 결정됩니다. Display 7L, Head 3L, Sub-head 2L, Body 1.5L, Caption 0.5L. L을 바꾸면 모든 레벨이 함께 커지거나 작아지므로, 포맷별로 L만 정하면 됩니다. 예를 들어 A2 포스터의 L이 24pt라면 Display 행간은 168pt, Body 행간은 36pt입니다.

이 규칙은 커뮤니케이션 디자인을 위한 지침이라는 점에 유의하세요. 웹과 제품에서는 레벨 간 크기 차이가 더 작아집니다.
![type/sizing]

### Sizing {layout=grid-2}
#### In Layout
오른쪽은 구성 안에서 헤드라인 타이포그래피의 크기와 간격을 정하는 두 가지 예시입니다.

**Large:** 헤드라인이 레이아웃의 왼쪽 절반을 가득 채우고, 오른쪽 절반은 그래픽 유닛이 차지합니다. 헤드라인의 행간 블록과 유닛의 컬럼이 같은 그리드 위에 놓입니다.

**Small:** 헤드라인을 축소하고, 아래 공간은 Body 행간의 배수로 비웁니다. 사진이나 영상 스틸이 주인공일 때 사용합니다.
![type/sizing-large] Large — 헤드라인이 왼쪽 절반을 채우고 그래픽 유닛과 같은 그리드를 공유합니다.
![type/sizing-small] Small — 헤드라인을 줄이고 아래 공간을 Body 행간의 배수로 비웁니다.

### Dont's {layout=grid-3}
#### Headline
아래는 타이포그래피로 절대 하지 말아야 할 몇 가지입니다. 모든 접점에서 일관성을 보장하려면 이 가이드라인의 타이포그래피 섹션에 제시된 조판 규칙과 권장 사항을 따르세요.
![type/dont-1]{dont} 헤드라인을 전부 대문자로 쓰지 마세요
![type/dont-2]{dont} 헤드라인에 Light 웨이트를 쓰지 마세요
![type/dont-3]{dont} 행간을 87.5%보다 좁혀 획이 닿게 하지 마세요
![type/dont-4]{dont} 자간을 벌려 글자를 흩뜨리지 마세요
![type/dont-5]{dont} 가운데 정렬이나 오른쪽 정렬을 쓰지 마세요
![type/dont-6]{dont} 한 레이아웃에 세 가지 이상의 레벨을 쓰지 마세요
![type/dont-7]{dont} 헤드라인에 색을 두 가지 이상 쓰지 마세요
![type/dont-8]{dont} 외곽선, 그림자, 기울임을 적용하지 마세요
![type/dont-9]{dont} 헤드라인을 그래픽 유닛 위에 겹치지 마세요

### Backup Typeface
#### Primary – Inter
Founders Grotesk를 사용할 수 없는 환경(이메일, 외부 플랫폼의 시스템 서체 제약 등)에서는 Inter가 선호되는 대안입니다. Inter Medium을 헤드라인에, Inter Light를 본문에 사용합니다.

우리 타이포그래피의 기본 규칙을 염두에 두고 그 정신에 맞게 행동하세요. 다른 대체 폰트(Arial 등)는 피하고, Founders Grotesk를 쓸 수 없을 때만 Inter를 사용하세요.

이 페이지의 비교는 Founders Grotesk Medium과 Inter Medium의 차이점 일부를 보여 줍니다.
![type/backup-inter]

### Backup Typeface
#### Secondary – Pretendard
한국어 텍스트에는 Pretendard를 사용합니다. 한국어는 EO의 주요 언어이므로 대체 서체가 아니라 한글 전용 기본 서체로 취급합니다. 영문과 혼용할 때는 Pretendard Light 20pt, 자간 -6%, 베이스라인 +5pt를 Founders Grotesk Light 22pt에 맞춘 기준 조합을 사용합니다.

Pretendard를 쓸 수 없는 환경에서는 Noto Sans KR을 사용합니다.

이 페이지의 비교는 Founders Grotesk Light와 Pretendard Light가 한 행에 섞였을 때의 조정값을 보여 줍니다.
![type/backup-pretendard]

### Backup Typeface
#### Non-latin – Noto Sans
베트남어를 비롯해 Founders Grotesk와 Pretendard가 지원하지 않는 언어에는 Noto Sans가 선호되는 대안입니다. 베트남어는 Noto Sans Light 18pt, 자간 -3.5%, 베이스라인 +2pt를 Founders Grotesk Light 22pt에 맞춘 기준 조합을 사용합니다. 특정 언어에서 Noto Sans를 쓸 수 없다면 해당 언어에서 Founders Grotesk에 가장 가까운 서체를 사용합니다.
![type/backup-non-latin]

# 04 Color

## Colors

### Color
#### Builder Neon
Builder Neon은 EO 컬러 팔레트의 토대이자 브랜드에서 가장 잘 알려진 요소입니다. 로고가 없어도 “EO”를 전달할 수 있을 정도입니다. 검은 하늘 위에서 드라마틱한 대비를 만드는 이 노랑은 밤새 불이 켜진 해커하우스의 창, 빌더의 낙관을 상징합니다.

커뮤니케이션에서 Builder Neon을 일관되고 의도적으로 사용하는 것이 중요합니다. 넓은 면보다는 한 구성 안의 한 곳에 집중해서 사용할 때 가장 강합니다.
![color/builder-neon]

### Color {layout=grid-3}
#### Core Palette
핵심 팔레트는 Builder Neon, Space Black, Air White 세 색으로 이루어집니다. 컬러 전략의 기반을 이루며, 핵심 브랜드 접점에서 첫인상 역할을 해야 합니다. 일관된 사용은 EO 브랜드를 알아볼 수 있는 시각적 단서를 확립하며, 보조 팔레트가 이를 보완합니다.

오른쪽 정보는 팔레트 각 색상의 승인된 값을 Pantone 잉크(별색 인쇄), CMYK(4도 인쇄), 그리고 화면용 HEX와 RGB로 보여 줍니다.

모든 매체에서 색 일관성을 보장하려면 적용 유형에 맞는 올바른 컬러 모드와 잉크 조성을 항상 사용하세요. Air White는 인쇄에서 잉크를 쓰지 않고 미색 용지(raw paper)로 대체할 수 있습니다.
[swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
[swatch] Space Black | #000000 | R0 G0 B0 | C60 M60 Y0 K100
[swatch] Air White | #FCFBF5 | R252 G251 B245 | C1 M2 Y2 K0 or raw paper

### Color {layout=grid-4}
#### Core Pairings
타이포그래피와 함께 사용하는 네 가지 핵심 페어링이 있습니다. 텍스트는 Air White 또는 Space Black이고, Builder Neon은 텍스트가 아니라 면과 그래픽 유닛에 사용하는 것이 기본입니다.
![color/core-pair-1] 1. Air White on Space Black
![color/core-pair-2] 2. Space Black on Air White
![color/core-pair-3] 3. Space Black on Builder Neon
![color/core-pair-4] 4. Builder Neon on Space Black

### Color {layout=grid-3}
#### In Use
핵심 팔레트가 실제로 사용된 몇 가지 예시입니다.
![color/core-in-use-1] Poster
![color/core-in-use-2] Hang Tag
![color/core-in-use-3] Web Magazine

### Color {layout=grid-4}
#### Secondary Palette
보조 팔레트는 브랜드 표현의 범위를 넓힙니다. Day Blue와 Bay Green은 SF 풍경의 하늘과 만(bay)에서 가져온 색을 한두 단계 톤다운한 것으로, Builder Neon의 메인 지위를 해치지 않으면서 시리즈와 채널을 구분하는 데 사용합니다. Medium Gray와 Solid Gray는 미디어의 중립성을 뜻하며, 밝은 그레이는 그래픽 요소에, 어두운 그레이는 배경에 사용합니다.

아래 정보는 팔레트 각 색상의 승인된 값을 Pantone 잉크, CMYK, HEX, RGB로 보여 줍니다.
[swatch] Day Blue | #6EC6D2 | R110 G198 B210 | C60 M0 Y10 K0 | PANTONE 298 C
[swatch] Bay Green | #66B88A | R102 G184 B138 | C60 M0 Y50 K0 | PANTONE 2248 C
[swatch] Medium Gray | #8E8E8E | R142 G142 B142 | C2 M0 Y0 K45 or K45 only
[swatch] Solid Gray | #333333 | R51 G51 B51 | C4 M0 Y0 K100 or K100 only

### Secondary Palette {layout=grid-4}
#### Pairings
타이포그래피와 함께 사용하는 네 가지 보조 페어링이 있습니다. 이 승인된 조합 외의 페어링은 사용하지 마세요. 보조 색은 언제나 Space Black과만 짝을 이룹니다.
![color/secondary-pair-1] Day Blue on Space Black
![color/secondary-pair-2] Bay Green on Space Black
![color/secondary-pair-3] Space Black on Day Blue
![color/secondary-pair-4] Space Black on Bay Green

### Secondary Palette {layout=grid-4}
#### Pairings to Avoid
오른쪽은 보조 색상을 사용할 때 피해야 할 페어링의 예시입니다.

일반적으로 Day Blue와 Bay Green을 같은 구성 안에서 맞붙이거나, 보조 색을 Builder Neon과 겹쳐 쓰는 것을 피하세요.
![color/avoid-1]{dont} Builder Neon on Air White
![color/avoid-2]{dont} Day Blue on Bay Green
![color/avoid-3]{dont} Medium Gray on Solid Gray
![color/avoid-4]{dont} Day Blue on Builder Neon

### Color
#### Usage Ratio
오른쪽은 전체적인 관점에서 EO 커뮤니케이션 전반에 적용해야 할 올바른 색 사용 비율입니다.

핵심 접점과 새로운 오디언스에게 EO를 소개할 때는 Space Black 바탕에 Air White 텍스트, Builder Neon 그래픽이라는 핵심 팔레트에 크게 의존합니다. 면적으로는 블랙 70, 네온 20, 화이트 10이 기준입니다.

소셜 채널과 시리즈별 아트워크처럼 사용자가 이미 “EO”라고 인식하는 맥락에서는 Day Blue와 Bay Green을 시리즈 구분색으로 더 자주 사용할 수 있습니다. 이때도 한 구성 안의 보조 색은 하나입니다.
![color/usage-ratio]

### Secondary Palette {layout=grid-3}
#### In Use
보조 팔레트가 실제로 사용된 몇 가지 예시입니다.
![color/secondary-in-use-1] Episode One Tee
![color/secondary-in-use-2] Sticker Pack
![color/secondary-in-use-3] Series Thumbnail

### Color {layout=grid-3}
#### Dont's
아래는 컬러로 절대 하지 말아야 할 몇 가지입니다. 최소 대비 요건에 대한 일반적인 지침은 WCAG를 참고하세요.
![color/dont-1]{dont} Builder Neon을 본문 텍스트 색으로 쓰지 마세요
![color/dont-2]{dont} 그라데이션을 만들지 마세요
![color/dont-3]{dont} 팔레트 밖의 색을 추가하지 마세요
![color/dont-4]{dont} 한 구성에 보조 색 두 가지를 함께 쓰지 마세요
![color/dont-5]{dont} Builder Neon의 명도나 채도를 바꾸지 마세요
![color/dont-6]{dont} Air White 바탕에 Builder Neon 텍스트를 쓰지 마세요
![color/dont-7]{dont} 투명도를 낮춰 새로운 톤을 만들지 마세요
![color/dont-8]{dont} 사진에 컬러 오버레이를 씌우지 마세요
![color/dont-9]{dont} 그래픽 유닛 하나에 여러 색을 칠하지 마세요

# 05 Visual System

## Graphic Unit

### Graphic Unit
#### Overview
그래픽 유닛은 EO 비주얼 시스템의 최소 단위입니다. 블록을 재료 삼아 쌓아 올리는 빌더의 궤적을 나사기둥(shaft)과 나사선(thread)의 반복으로 추상화했습니다. 로고의 E 블록, 패턴 라이브러리, 모든 어플리케이션 그래픽이 이 유닛에서 파생됩니다. 유닛은 손으로 그리지 않고 EO Graphic Builder에서 파라미터로 생성합니다.
![visual/unit-overview]

### Construction
유닛 캔버스(W × H)는 세로 컬럼(col)으로 나뉘고, 세로 중앙에 높이 D의 가로 막대인 shaft가 놓입니다. shaft 위아래 밴드에는 컬럼마다 사다리꼴 thread 한 쌍이 붙습니다. 상단 thread의 꼭지점 위치는 Δa(윗변, 컬럼 오른쪽 끝 기준)와 Δb(아랫변, 컬럼 왼쪽 끝 기준)로 정하고, 하단 thread는 상단을 컬럼 중심 기준으로 180° 회전한 점대칭입니다. shaft는 거터를 가로질러 이어지고 thread 밴드의 거터는 비워 둡니다.
![visual/unit-construction]

### Grid & Pitch
컬럼 폭은 등비수열로 압축됩니다. 인접 컬럼의 폭 비율(compression rate)이 1이면 균등 분할이고, 커질수록 한쪽으로 수렴하는 착시가 강해집니다. 기본값은 12컬럼, rate 1.67(2:1 피치)입니다. 거터는 고정(fixed) 또는 컬럼 폭에 비례(proportional)하는 두 가지 모드가 있으며, 비례 모드는 구조적으로 오버플로가 불가능하고 수렴 착시가 가장 강합니다.
![visual/unit-grid]

### Variations {layout=grid-3}
컬럼 수, 압축 비율, shaft 높이(D), thread의 Δa·Δb를 조합해 성격이 다른 유닛을 만듭니다. 아래는 패턴 라이브러리의 바탕이 되는 대표 변형 여섯 가지입니다.
![visual/unit-var-1] 01 / path of builder — 왼쪽이 넓고 오른쪽으로 수렴
![visual/unit-var-2] 02 / power — 균등 컬럼, 두꺼운 shaft
![visual/unit-var-3] 03 / resistance — 오른쪽이 넓고 왼쪽으로 수렴
![visual/unit-var-4] 04 / builders — 좁은 컬럼의 반복
![visual/unit-var-5] 05 / rivals — 중앙 대칭 압축
![visual/unit-var-6] 06 / team — 두 유닛의 맞물림

### Color Application {layout=grid-2}
유닛은 단색으로 사용합니다. 배경과 유닛 사이의 대비가 핵심이며, 한 구성 안에서는 핵심 팔레트 하나와 보조 색 하나까지만 조합합니다. 여러 유닛을 나란히 놓을 때는 Medium Gray, Builder Neon, Air White처럼 명도 차가 뚜렷한 조합으로 깊이를 만듭니다.
![visual/unit-color-1] Builder Neon on Space Black
![visual/unit-color-2] Medium Gray · Builder Neon · Air White on Solid Gray

### Graphic Unit {layout=grid-3}
#### Dont's
유닛의 지오메트리를 손으로 변형하지 마세요. 모든 변형은 Graphic Builder의 파라미터 안에서만 이루어져야 합니다.
![visual/unit-dont-1]{dont} 유닛을 회전하거나 기울이지 마세요
![visual/unit-dont-2]{dont} thread를 임의로 지우거나 추가하지 마세요
![visual/unit-dont-3]{dont} 세 가지 이상의 색을 한 유닛에 쓰지 마세요
![visual/unit-dont-4]{dont} 유닛에 외곽선이나 그림자를 넣지 마세요
![visual/unit-dont-5]{dont} 유닛을 사진의 마스크로 쓰지 마세요
![visual/unit-dont-6]{dont} 압축 비율을 컬럼마다 다르게 손으로 조정하지 마세요

## Pattern Library

### Pattern Library {layout=grid-4}
#### 30 Patterns
유닛을 조합해 만든 30종의 패턴 라이브러리입니다. 각 패턴은 빌더의 여정에서 가져온 키워드 하나를 상징하며, 캠페인·굿즈·소셜·영상 등 모든 접점에서 재사용합니다. 새 패턴이 필요하면 라이브러리에서 고르는 것이 먼저이고, 추가는 브랜드팀의 승인을 거칩니다.
![visual/pattern-01] 01 / path of builder
![visual/pattern-02] 02 / power
![visual/pattern-03] 03 / resistance
![visual/pattern-04] 04 / builders
![visual/pattern-05] 05 / rivals
![visual/pattern-06] 06 / team
![visual/pattern-07] 07 / backing
![visual/pattern-08] 08 / teamwork
![visual/pattern-09] 09 / teamwork
![visual/pattern-10] 10 / rallying
![visual/pattern-11] 11 / conviction
![visual/pattern-12] 12 / community
![visual/pattern-13] 13 / advantage
![visual/pattern-14] 14 / disadvantage
![visual/pattern-15] 15 / cycle
![visual/pattern-16] 16 / routine
![visual/pattern-17] 17 / competition
![visual/pattern-18] 18 / collaborate intelligence
![visual/pattern-19] 19 / growth
![visual/pattern-20] 20 / diversity
![visual/pattern-21] 21 / momentum
![visual/pattern-22] 22 / real world
![visual/pattern-23] 23 / singularity
![visual/pattern-24] 24 / multi-dimension
![visual/pattern-25] 25 / a-ha
![visual/pattern-26] 26 / wow
![visual/pattern-27] 27 / problem
![visual/pattern-28] 28 / adventure
![visual/pattern-29] 29 / nature
![visual/pattern-30] 30 / bang!

### Usage
패턴은 배경이 아니라 주인공으로 사용합니다. 레이아웃의 한쪽 절반(보통 오른쪽)을 통째로 내어 주고, 헤드라인은 반대쪽에 왼쪽 정렬로 놓습니다. 텍스트를 패턴 위에 겹치지 않고, 로고는 패턴 바깥의 여백에 배치합니다. 패턴은 잘라 쓸 수 있지만 thread의 사다리꼴이 중간에서 잘리지 않도록 컬럼 경계에서 크롭합니다.
![visual/pattern-usage]

## Applications

### Merch {layout=grid-3}
티셔츠, 후디, 캡으로 구성된 굿즈 라인입니다. 실크스크린 단색 그래픽을 기본으로 하며, 흰 티에는 Space Black, 회색 티에는 Builder Neon 컬러웨이를 적용합니다. 앞면 가슴에는 블록 심벌 또는 모노그램을 작게, 뒷면에는 패턴과 카피(“Build Anyway.” “Even the Odds”)를 크게 배치합니다.
![visual/app-tee] Standard Tee
![visual/app-hoodie] Hoodie
![visual/app-cap] 5-panel Cap

### Print {layout=grid-3}
포스터, 행택, 스티커, 핀 등 인쇄물입니다. Air White 바탕에 Space Black 유닛을 기본으로 하고, Builder Neon은 한 면에만 사용합니다. 행택은 앞면에 패턴, 뒷면에 사이즈와 소재 정보를 모노로 적습니다.
![visual/app-poster] Poster
![visual/app-hangtag] Hang Tag
![visual/app-sticker] Sticker Pack & Pin

### Digital {layout=grid-3}
웹 매거진, 소셜 피드, 영상 썸네일 등 디지털 접점입니다. 유닛은 모션으로 확장되어 compression rate가 시간에 따라 변하며, 썸네일에서는 유닛의 일부만 컬럼 경계에서 크롭해 사용합니다. 웹의 그리드(12컬럼, 거터 40, 마진 44 @1728)는 유닛의 컬럼 그리드와 같은 체계를 공유합니다.
![visual/app-web] Web Magazine
![visual/app-social] Social Feed
![visual/app-thumbnail] Video Thumbnail
