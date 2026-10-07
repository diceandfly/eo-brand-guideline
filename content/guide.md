<!--
=====================================================================
EO Brand Guidelines — 콘텐츠 파일 튜토리얼
=====================================================================
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
    → {do} 또는 {dont} 를 붙이면 좌상단에 배지가 생깁니다.
    → 뒤에 글을 쓰면 이미지 아래 캡션이 붙습니다 (= 카드).

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
    ### Don'ts {layout=grid-3 ratio=4:5}       ← 비율도 함께. 기본값: basic/half 5:4, wide 2:1, grid 4:5

■ 자주 하는 작업
  섹션 추가     : ### 헤드 한 줄 + 본문 + ![이미지] 를 원하는 위치에 끼워 넣으면 끝.
  섹션 순서 변경 : 블록째 잘라 붙이기.
  서브챕터 추가  : ## 이름 한 줄. 목차·URL·다음 버튼이 자동으로 갱신됩니다.
  같은 헤드 반복 : 가능합니다 (예: Character Set 3개). 목차에는 한 번만 표시되고 첫 번째로 이동합니다.

■ 지금 상태
  본문은 디스코드 레퍼런스 원문을 그대로 번역한 것입니다 (고유명사 유지).
  다음 라운드에 같은 구조로 EO 버전 더미 콘텐츠로 교체합니다.
  05 Visual System 은 구성 확인용 더미입니다.
=====================================================================
-->

# 01 Overview

## Welcome

### Welcome to the Discord Brand Guidelines
우리는 스스로를 너무 진지하게 여기지 않는, 장난기 있고 재미있는 브랜드입니다. 그렇지만 품질은 중요하게 생각하기에, 아이덴티티 시스템의 기본 요소들을 안내하고 우리가 그것을 어떻게 사용해 브랜드를 만들어 가는지 설명하는 브랜드 가이드라인을 마련했습니다.

이 가이드라인을 이해하고 따르면, 매달 수억 명이 친구들과 대화하고 게임을 즐기기 위해 Discord를 사용하는 이유를 보여 주는 일관되고 장난기 있으며 의미 있는 브랜드 경험을 유지할 수 있습니다.

우리의 아트와 브랜드 에셋을 사용하려 한다면, 적절한 범위와 브랜드 가이드라인 안에서 사용해 주시고 승인을 위해 우리에게 보내 주세요. Discord 브랜드와 에셋 사용 승인을 요청하는 제3자는 brand@discordapp.com 으로 이메일을 보내 주시기 바랍니다. 검토에는 보통 4~6주가 걸리니 일정을 감안해 주세요. 더 빨리 할 수 있다면 그렇게 하겠지만, 아직 초인적인 검토 능력은 없습니다.

곧 뵙겠습니다!

The Discord Brand Team

## Legal Brand Guidelines

### Legal Brand Guidelines
DISCORD, DISCORD NITRO, “Clyde” 로고 및 Discord와 그 계열사가 소유한 기타 상표(이하 “Discord 마크”)와, 로고·트레이드 드레스·Discord의 룩앤필·브랜드 고유의 미적 특징 등 기타 브랜드 자료(이하 “브랜드 에셋”)는 Discord Inc.의 독점 자산입니다. 여기에서 허용된 경우를 제외하고 Discord 마크나 브랜드 에셋을 사용하려면 Discord의 허가가 있어야 합니다.

### Do's
- Discord 마크와 브랜드 에셋을 사용할 때는 항상 본 브랜드 가이드라인을 따르세요.
- 자신이 Discord 사용자이거나 Discord 서버를 운영한다는 사실을 알리기 위해 Discord 마크를 사용할 수 있습니다. 다만 그 사용은 본 가이드라인을 준수해야 하며, 자신이 Discord이거나 Discord의 후원을 받거나 Discord를 대리한다는 인상을 주어서는 안 됩니다.
- 사용자를 안내하기 위해 Discord 마크를 올바르게 사용하세요. Discord는 Discord 플랫폼 상의 서버나 사용자명을 설명하는 형용사로 쓸 수 있습니다.
- Discord 마크와 브랜드 에셋은 디지털 자산에만(즉, 디지털 전용으로) 사용하세요.

### Don'ts
- Discord 마크 또는 이와 혼동될 만큼 유사한 마크를 Discord 서버 이름, 브랜드·회사·조직 이름, URL이나 도메인 이름, 이벤트, 제품 이름(Discord 플랫폼용 봇 포함), 로고, 소셜 미디어 계정, 상표에 포함하지 마세요.
- Discord 마크나 브랜드 에셋과 혼동될 만큼 유사한 상표, 트레이드 드레스, 로고, 도메인 이름, 기타 특징을 채택하지 마세요.
- Discord 마크나 브랜드 에셋과 혼동될 만큼 유사한 상표, 트레이드 드레스, 로고, 기타 특징으로 제품·서비스·브랜드를 마케팅하지 마세요.
- Discord 웹사이트, 데스크톱 앱, 모바일 앱 또는 Discord 마케팅의 룩앤필을 복제하거나 모방하지 마세요. 여기에는 캐릭터, 색 조합, 그래픽, 사운드, 이미지, 프레즌스 아이콘, 서체, Discord가 사용하는 스타일(또는 그와 유사한 것)이 포함되며 이에 한정되지 않습니다.
- Discord 서비스 약관이나 커뮤니티 가이드라인에 어긋나는 방식으로 Discord 마크와 브랜드 에셋을 사용하지 마세요.
- Discord 마크나 브랜드 에셋을 상품(머천다이즈)에 사용하지 마세요.

# 02 Logo

## Logo

### Logo
우리의 로고는 Discord 브랜드를 알리는 가장 잘 알려지고 상징적인 방법입니다. 작은 사인오프부터 큰 디스플레이 집행까지, 이 섹션은 다양한 상황·포맷·커뮤니케이션에 맞춰 로고가 어떻게 적응할 수 있는지 설명합니다.
![logo/hero]

### Construction
로고의 기본형은 Clyde라고 부르는 심벌과 Discord 워드마크로 구성됩니다. 두 요소는 워드마크의 카운터(“o”와 “d”)를 Clyde 심벌의 “눈”에 맞추는 방식으로 시각적 균형을 잡았습니다.
![logo/construction]

### Clearspace
로고에는 항상 숨 쉴 공간이 있어야 합니다. 우리는 이를 클리어스페이스라고 부릅니다. 이는 타이포그래피, 일러스트레이션, 이미지, 캔버스 가장자리 등 구성 내 다른 요소들 사이에서 로고가 묻히거나 답답해 보이지 않게 해 줍니다. 오른쪽은 작은 크기로 사용할 때의 최소 여백입니다. 클리어스페이스는 워드마크의 “D” 높이와 같습니다.
![logo/clearspace]

### Scalability
우리의 로고는 다양한 크기에서 작동하도록 설계되고 테스트되었습니다.

디지털 환경에서 충분한 가독성을 확보하기 위한 심벌의 최소 크기는 높이 20px입니다. 최소 크기를 정해 두면 로고의 가독성이 결코 손상되지 않도록 보장할 수 있습니다.
![logo/scalability]

### Usage
레이아웃에 Discord 로고를 적용하는 일은 커뮤니케이션 맥락에 따른 브랜드 존재감을 이해하는 데서 시작합니다. 어떤 때는 로고가 주인공이어야 하고, 어떤 때는 보조 역할을 해야 합니다. 워드마크를 전폭으로 사용할 때는 심벌을 락업에서 분리해 남은 모서리 중 한 곳에 따로 배치할 수 있습니다. 다음은 로고가 사인오프와 디스플레이 사이에서 어떻게 유연하게 쓰이는지 보여 줍니다.
![logo/usage]

### Usage {layout=grid-2}
#### Do's & Don'ts
커뮤니케이션에서 로고를 사인오프로 사용할 때는 브랜드 존재감을 확보하기 위해 심벌과 워드마크가 결합된 완전한 락업을 사용해야 합니다.

반면 디스플레이 크기로 로고를 사용할 때는 임팩트를 극대화하고 구성 내 정렬을 단순화하기 위해 워드마크 단독 사용을 권장합니다.
![logo/usage-do-1]{do}
![logo/usage-do-2]{do}
![logo/usage-dont-1]{dont}
![logo/usage-dont-2]{dont}

### Placement
커뮤니케이션 매체나 규격과 무관하게, 우리는 워드마크를 여기 표시된 것과 같은 특정 위치에 배치합니다. 이렇게 하면 로고 배치가 단순하고 일관되게 유지되면서도, 우리의 역동적인 그래픽 시스템을 수용할 만큼의 유연성을 확보할 수 있습니다.
![logo/placement]

### Color {layout=grid-3}
Discord 로고에는 여섯 가지 기본 컬러 페어링이 있습니다. 확신이 서지 않을 때는 이 중 하나를 사용하세요.
![logo/color-1] 1. Blurple on Black
![logo/color-2] 2. Blurple on Light Blurple
![logo/color-3] 3. Color on Black
![logo/color-4] 4. Black on Blurple
![logo/color-5] 5. Light Blurple on Blurple
![logo/color-6] 6. Black on Color

### Over Imagery {layout=grid-2}
#### Do's & Don'ts
워드마크는 이미지 맥락 안에서 항상 또렷하게 읽히고 존중되어야 합니다.

배경 사진과 워드마크 사이에 충분한 대비가 있는지 확인하세요. 이미지가 너무 밝거나 지나치게 하얀 영역이 있으면 워드마크가 구성 속에 묻힐 위험이 있습니다.

사진 구성은 로고가 돋보일 수 있을 만큼 단순해야 합니다. 지나치게 복잡하거나 핵심 피사체가 정중앙에 있는 이미지는 워드마크를 올리면 혼란스러워집니다. 이를 염두에 두고 이미지를 고르거나, 로고와의 관계에 맞춰 이미지 위치를 조정하세요.

최소 대비 요건에 대한 일반적인 지침은 WCAG를 참고하세요.
![logo/imagery-do-1]{do}
![logo/imagery-do-2]{do}
![logo/imagery-dont-1]{dont}
![logo/imagery-dont-2]{dont}

### Contextual Usage {layout=grid-2}
#### Do's & Don'ts
소셜 미디어에서는 Discord 브랜드가 이미 잘 알려져 있고 아바타의 도움도 받으므로, 일반 게시물에는 로고가 필요하지 않습니다. 주요 공지에만 사용합니다.

반면 옥외 광고(OOH)에서는 소셜 채널이 제공하는 맥락이 없으므로 브랜드 존재감을 확립하기 위해 로고가 필수입니다.
![logo/context-do-1]{do}
![logo/context-dont-1]{dont}
![logo/context-do-2]{do}
![logo/context-dont-2]{dont}

### Partner Lockup
#### Horizontal
Discord 로고는 파트너 브랜드 및 협업사 로고와 락업할 수 있습니다. 오른쪽은 기본 가로 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤, 로고와 파트너 로고 사이의 간격(X)은 Discord 워드마크 캡 높이의 1.5배로 합니다. 구분선은 락업의 중앙에 정렬합니다.
![logo/partner-horizontal]

### Partner Lockup
#### Vertical
Discord 로고는 파트너 브랜드 및 협업사 로고와 세로로도 락업할 수 있습니다. 오른쪽은 기본 세로 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤, 로고와 파트너 로고 사이의 간격(X)은 Discord 워드마크 캡 높이의 1.5배로 합니다. 구분선은 Discord 로고와 파트너 로고 사이에 둡니다.

로고들이 항상 시각적으로 중앙 정렬되도록 하세요.
![logo/partner-vertical]

### Partner Lockup
#### Optical Adjustment
파트너 브랜드나 협업사의 로고가 Discord 로고와 정렬했을 때 완벽하게 균형이 맞지 않는 경우가 있습니다.

이럴 때는 보다 동등한 위계가 만들어지도록 파트너 로고를 시각적으로 조정해야 합니다.
![logo/partner-optical]

### Logo {layout=grid-3}
#### Don'ts
브랜드 시그니처가 일관되고 강렬하게 유지되도록, 로고를 재해석하거나 변형하거나 장식해서는 안 됩니다. 이 페이지는 피해야 할 변형의 예를 보여 줍니다.
![logo/dont-stretch]{dont} 로고를 늘리거나 왜곡하지 마세요
![logo/dont-rotate]{dont} 로고를 회전하지 마세요
![logo/dont-align]{dont} 로고의 정렬을 바꾸지 마세요
![logo/dont-outline]{dont} 로고에 외곽선을 넣지 마세요
![logo/dont-scale]{dont} 심벌과 워드마크의 크기 관계를 바꾸지 마세요
![logo/dont-mask]{dont} 로고를 마스크로 사용하지 마세요
![logo/dont-effects]{dont} 글로우나 그림자 같은 효과를 적용하지 마세요
![logo/dont-color]{dont} 승인되지 않은 컬러 페어링을 로고에 사용하지 마세요
![logo/dont-lowres]{dont} 저해상도 로고를 사용하지 마세요

## Symbol

### Symbol
#### Overview
특정한 경우 Discord 로고는 Clyde라고 부르는 심벌로 축약될 수 있습니다. 심벌 단독 사용이 가장 두드러지는 경우는 앱 아이콘이나 소셜 미디어 아바타처럼 크기 제약 때문에 전체 워드마크를 쓰기 어려운 상황입니다. 심벌은 브랜드가 상징적이면서도 유연할 수 있게 해 줍니다.
![symbol/overview]

### Symbol
#### Clearspace
심벌 주변에는 주변 아트워크, 이미지, 페이지 가장자리에 의해 답답해 보이지 않도록 일정한 공간이 필요합니다. 오른쪽은 Discord 심벌의 최소 여백(너비의 1/3)입니다.
![symbol/clearspace]

### Symbol
#### Scalability
Discord 심벌은 다양한 크기에서 작동하도록 설계되고 테스트되었습니다. 디지털 환경에서 충분한 가독성을 확보하기 위한 심벌의 최소 크기는 높이 20px입니다. 최소 크기를 정해 두면 로고의 가독성이 결코 손상되지 않도록 보장할 수 있습니다.
![symbol/scalability]

### Symbol
#### Horizontal Lockup
Discord 심벌은 파트너 브랜드 및 협업사 로고와 락업할 수 있습니다. 오른쪽은 기본 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 로고 크기를 맞춘 뒤 그 사이에 간격과 구분선을 넣을 수 있습니다. 로고와 파트너 로고 사이의 간격(X)은 심벌 너비의 절반입니다.
![symbol/lockup-horizontal]

### App & Social Icons
#### Alignment
디지털 환경에서 심벌은 사각형이나 원형 컨테이너 안에 락업되는 경우가 많습니다. 오른쪽은 이런 컨테이너 안에서 심벌을 정렬하는 방법을 안내하는 두 가지 예시입니다. 두 경우 모두 심벌은 균형을 위해 기계적으로 정렬하고, 사방에 편안한 여백이 생기도록 크기를 조정해야 합니다.
![symbol/icon-alignment]

### App & Social Icons
#### Scalability
심벌은 다양한 크기에서 작동하도록 설계되고 테스트되었습니다. 가독성을 위해 가장 작은 심벌 아이콘은 높이 30px이어야 합니다.
![symbol/icon-scalability]

### App & Social Icons {layout=grid-2}
#### Color Pairings
Discord 앱 및 소셜 아이콘에는 두 가지 기본 컬러 페어링이 있습니다. 확신이 서지 않을 때는 이 중 하나를 사용하세요.
![symbol/icon-color-1] Blurple on Black
![symbol/icon-color-2] Black on Blurple

### App & Social Icons
#### In Use
오른쪽은 Discord 앱 아이콘이 실제로 사용된 예시입니다.
![symbol/icon-in-use]

### Symbol {layout=grid-3}
#### Don'ts
브랜드 시그니처가 일관되고 강렬하게 유지되도록, 로고를 재해석하거나 변형하거나 장식해서는 안 됩니다. 이 페이지는 피해야 할 변형의 예를 보여 줍니다.
![symbol/dont-stretch]{dont} 심벌을 늘리거나 왜곡하지 마세요
![symbol/dont-tilt]{dont} 심벌을 기울이지 마세요
![symbol/dont-composition]{dont} 심벌의 구성을 바꾸지 마세요
![symbol/dont-outline]{dont} 심벌에 외곽선을 넣지 마세요
![symbol/dont-glow]{dont} 심벌에 글로우 효과를 쓰지 마세요
![symbol/dont-mask]{dont} 심벌을 마스크로 사용하지 마세요
![symbol/dont-shadow]{dont} 심벌에 그림자를 적용하지 마세요
![symbol/dont-color]{dont} 승인되지 않은 컬러 페어링을 심벌에 사용하지 마세요
![symbol/dont-lowres]{dont} 저해상도 심벌을 사용하지 마세요

# 03 Typography

## Typography

### Our Typefaces
Ginto 패밀리의 두 서체가 Discord 브랜드를 위해 커스터마이징되었습니다. 헤드라인용 Ginto Discord Nord와, 서브헤드부터 캡션까지 작은 글에 쓰는 Ginto Discord Medium입니다.

이 두 서체의 조합은 우리 브랜드의 목소리가 대담하고 장난스러운 톤에서 명확하고 정보적인 톤까지 유연하게 오갈 수 있게 합니다.

또 다른 서체인 GG Sans는 Discord 제품 안에서 사용됩니다. 사용 지침은 Discord 제품 가이드라인을 참고하세요.
![type/our-typefaces]

### Custom Characters
서체의 일부 글자는 플랫폼 전반에서 가독성을 극대화하도록 커스터마이징되었습니다. 기능성과 일관성 모두를 위해, 표준 Ginto 패밀리가 아닌 Ginto Discord 커스텀 컷을 항상 사용하는 것이 중요합니다.
![type/custom-characters]

### Character Set {layout=wide}
#### Ginto Discord Nord Bold
이 페이지는 Ginto Discord Nord의 대부분의 글자를 한눈에 보여 줍니다. 이 서체는 그리스 문자나 키릴 문자가 필요한 언어를 제외한 모든 유럽 언어를 지원합니다. 중국어, 아랍어, 히브리어 등 비라틴 문자를 쓰는 언어에서는 디자이너나 개발자가 Noto Sans 또는 해당 언어에서 Ginto Discord Nord에 가장 가까운 서체를 사용해야 합니다.
![type/charset-nord-bold]

### Character Set {layout=wide}
#### Ginto Discord Medium
이 페이지는 Ginto Discord Medium의 대부분의 글자를 한눈에 보여 줍니다. 이 서체는 그리스 문자나 키릴 문자가 필요한 언어를 제외한 모든 유럽 언어를 지원합니다. 중국어, 아랍어, 히브리어 등 비라틴 문자를 쓰는 언어에서는 디자이너나 개발자가 Noto Sans 또는 해당 언어에서 Ginto Discord에 가장 가까운 서체를 사용해야 합니다.
![type/charset-medium]

### Character Set {layout=wide}
#### Ginto Discord Regular
이 페이지는 Ginto Discord Regular의 대부분의 글자를 한눈에 보여 줍니다.

참고: Ginto Discord Regular는 디지털과 제품에서만 사용하도록 의도되었습니다. 이 웨이트는 브랜드 커뮤니케이션에 사용해서는 안 되며, 대신 Ginto Discord Medium을 선택하세요.
![type/charset-regular]

### Typeface Usage
Discord 브랜드의 대담하고 장난스러운 비주얼 아이덴티티와 명확한 커뮤니케이션의 균형을 맞추려면, 서체 선택에 분명한 의도가 있어야 합니다.

헤드라인에는 Ginto Discord Nord Bold를 사용하세요.

캡션, 본문, 보다 상세한 텍스트에는 Ginto Discord Medium을 사용하세요.

항상 Ginto/Ginto Nord가 아닌 커스텀 Ginto Discord/Ginto Discord Nord를 사용하세요.
![type/typeface-usage]

### Case Setting
커뮤니케이션 전반의 일관성을 위해 헤드라인 서체인 Ginto Discord Nord Bold는 전부 대문자(All Caps)로만 조판합니다. Ginto Discord Medium은 가독성을 극대화하기 위해 맥락에 따라 타이틀 케이스 또는 문장 케이스로 조판합니다.
![type/case-setting]

### Linespacing
행간(레딩이라고도 합니다)은 타이포그래피 행과 행 사이의 공간입니다. 행간은 포맷과 커뮤니케이션 유형에 따라 달라집니다.

Ginto Discord Nord Bold의 행간은 타이트해야 하지만, 극단적으로 느슨하거나 타이트한 행간은 피해야 합니다. 다음의 행간 섹션을 참고하세요.
![type/linespacing]

### Linespacing
#### Ginto Discord Nord Bold
오른쪽은 Ginto Discord Nord Bold로 조판한 헤드라인에서 올바른 행간과 잘못된 행간의 예시입니다.

보시다시피 행간에는 골디락스 접근법을 취하세요. 너무 적지도, 너무 많지도 않은 딱 적당한 정도입니다. 마지막으로 글자끼리 절대 닿지 않도록 세심하게 주의하세요.
![type/linespacing-nord-bold]

### Linespacing
#### Ginto Discord Medium
오른쪽은 Ginto Discord Medium으로 조판한 본문에서 올바른 행간과 잘못된 행간의 예시입니다.

보시다시피 행간에는 골디락스 접근법을 취하세요. 부족함, 과함, 딱 적당함입니다. 어센더와 디센더가 서로 닿지 않도록 세심하게 주의하세요. 제대로 설정하면 독자가 글을 막힘없이 읽어 내려갈 수 있습니다.
![type/linespacing-medium]

### Linespacing Scale {layout=wide}
#### Ginto Discord Nord Bold
오른쪽은 다양한 크기의 헤드라인 행간 예시입니다.

일반적인 규칙으로, 타이포그래피가 클수록 행간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 타이포그래피가 작을수록 행간은 더 느슨해야 합니다.
![type/linespacing-scale-nord-bold]

### Linespacing Scale {layout=wide}
#### Ginto Discord Medium
오른쪽은 다양한 크기의 본문 행간 예시입니다.

일반적인 규칙으로, 타이포그래피가 클수록 행간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 타이포그래피가 작을수록 행간은 더 느슨해야 합니다.
![type/linespacing-scale-medium]

### Letterspacing
큰 헤드라인과 타이틀의 경우, 자간이 타이트하면서도 모든 글자에 걸쳐 시각적으로 균등하도록 세 단계 과정을 거쳐야 합니다. 그 과정은 다음과 같습니다.

**1단계: 원본**
자간 수치를 적용하기 전 글자 사이의 공간입니다.

**2단계: 트래킹**
모든 글자에 일괄 적용하는 간격입니다. 오른쪽 예시는 -3% 트래킹을 사용했습니다.

**3단계: 커닝**
적절한 트래킹 값을 설정한 뒤에는 글자끼리 닿지 않고 모든 글자 사이가 균등해지도록 특정 글자 사이의 공간을 수동으로 조정(커닝)해야 합니다.
![type/letterspacing]

### Letterspacing
#### Ginto Discord Nord Bold
오른쪽은 Ginto Discord Nord Bold로 조판한 헤드라인에서 올바른 자간과 잘못된 자간의 예시입니다.

보시다시피 자간에는 골디락스 접근법을 취하세요. 너무 적지도, 너무 많지도 않은 딱 적당한 정도입니다.
![type/letterspacing-nord-bold]

### Letterspacing
#### Ginto Discord Medium
오른쪽은 Ginto Discord Medium으로 조판한 본문에서 올바른 자간과 잘못된 자간의 예시입니다.

보시다시피 자간에는 골디락스 접근법을 취하세요. 너무 적지도, 너무 많지도 않은 딱 적당한 정도입니다.
![type/letterspacing-medium]

### Letterspacing Scale {layout=wide}
#### Ginto Discord Nord Bold
오른쪽은 다양한 크기에서 Ginto Nord Bold로 조판한 자간의 추가 예시입니다.

일반적인 규칙으로, 글자 크기가 클수록 자간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 글자 크기가 작을수록 자간은 더 느슨해야 합니다.
![type/letterspacing-scale-nord-bold]

### Letterspacing Scale {layout=wide}
#### Ginto Discord Medium
오른쪽은 다양한 크기에서 Ginto Discord Medium으로 조판한 자간의 추가 예시입니다.

일반적인 규칙으로, 글자 크기가 클수록 자간은 더 타이트해야 하고 그 반대도 마찬가지입니다. 글자 크기가 작을수록 자간은 더 느슨해야 합니다.
![type/letterspacing-scale-medium]

### Alignment
#### Ginto Discord Nord Bold
Discord 브랜드 커뮤니케이션의 모든 타입은 표현적인 헤드라인 순간부터 정보 전달 순간까지 왼쪽 정렬 또는 가운데 정렬이어야 합니다. 헤드라인을 오른쪽 정렬하거나 강제 양끝 정렬하지 마세요.
![type/alignment-nord-bold]

### Alignment
#### Ginto Discord Medium
Discord 브랜드 커뮤니케이션의 모든 타입은 표현적인 헤드라인 순간부터 정보 전달 순간까지 왼쪽 정렬 또는 가운데 정렬이어야 합니다. 헤드라인을 오른쪽 정렬하거나 강제 양끝 정렬하지 마세요.
![type/alignment-medium]

### Ragging
타이포그래피에서 ‘래그’는 글 덩어리의 여백 또는 가장자리를 뜻합니다. 시각적 가장자리가 불규칙하거나 고르지 않게 느껴지고 특정 행이 다른 행보다 튀어나오거나, 마지막 행에 단어 하나만 남는 경우(위도우라고 합니다) 문단이나 헤드라인의 래그가 나쁘다고 말합니다.

위도우와 나쁜 래그는 문장이 만드는 글의 가장자리에 세심하게 주의를 기울이면 피할 수 있습니다. 래그의 가장자리를 매끄럽게 하려면 가장자리가 고르고 글이 잘 읽힐 때까지 단어를 다음 행으로 옮기면 됩니다.
![type/ragging]

### Sizing
커뮤니케이션을 단순하게 유지하기 위해, 일반적으로 두 가지를 넘는 글자 크기를 사용하지 않습니다. 하나의 글자 크기에서 시작해 크기를 두 배로 하거나 절반으로 하는 방식으로 다른 글자 크기를 정할 수 있습니다. 같은 비율로 더 키우거나 줄일 수도 있습니다.

예를 들어 사용할 가장 작은 글자 크기를 100pt로 정했다면, 다음 권장 글자 크기는 그 두 배인 200pt입니다. 또는 가장 작은 글자 크기가 25pt라면 다음 권장 크기는 두 배인 50pt입니다.

이 규칙은 커뮤니케이션 디자인을 위한 지침이라는 점에 유의하세요. 제품 디자인에서는 글자 크기들이 서로 더 가까워집니다.
![type/sizing]

### Sizing {layout=grid-2}
#### In Layout
오른쪽은 구성 안에서 헤드라인 타이포그래피의 크기와 간격을 정하는 두 가지 예시입니다.

**Large:** 타입이 가로, 세로 또는 둘 다에서 자신이 차지하는 공간을 가득 채웁니다.

**Small:** 타입을 축소할 수 있으며, 아래 공간은 크기에 따라 한 행 또는 여러 행 높이와 같게 둡니다.

참고: 이미지나 일러스트레이션 같은 다른 요소가 구성에 들어올 때, 특히 그것이 커뮤니케이션의 초점이거나 주목을 나눠 가져야 할 때는 타입의 크기를 줄일 수 있습니다.
![type/sizing-large] Large — 큰 크기의 타이포그래피는 배치된 포맷의 가로 그리고/또는 세로를 가득 채우도록 크기를 정합니다.
![type/sizing-small] Small — 작은 크기의 타이포그래피는 아래 공간이 한 행 또는 여러 행 높이와 같아지도록 크기를 줄입니다.

### Dont's {layout=grid-3}
#### Headline
아래는 타이포그래피로 절대 하지 말아야 할 몇 가지입니다. 모든 접점에서 일관성을 보장하려면 이 가이드라인의 타이포그래피 섹션에 제시된 조판 규칙과 권장 사항을 따르세요.
![type/dont-1]{dont}
![type/dont-2]{dont}
![type/dont-3]{dont}
![type/dont-4]{dont}
![type/dont-5]{dont}
![type/dont-6]{dont}
![type/dont-7]{dont}
![type/dont-8]{dont}
![type/dont-9]{dont}

### Backup Typeface
#### Primary – Montserrat
헤드라인에 Ginto Discord Nord를 사용할 수 없을 때는 Montserrat Extra Bold가 선호되는 대안입니다.

우리 타이포그래피의 기본 규칙을 염두에 두고 그 정신에 맞게 행동하세요. 다른 대체 폰트(Arial 등)는 피하고, Ginto Discord Nord를 쓸 수 없을 때만 Montserrat을 사용하세요.

이 페이지의 비교는 Ginto Discord Nord Bold와 Montserrat Extra Bold의 차이점 일부를 보여 줍니다.
![type/backup-montserrat]

### Backup Typeface
#### Secondary – Noto Sans
Ginto Discord Medium을 사용할 수 없을 때는 보조 텍스트(서브헤드, 본문, 캡션 등)에 Noto Sans Semibold가 선호되는 대안입니다.

우리 타이포그래피의 기본 규칙을 염두에 두고 그 정신에 맞게 행동하세요. 다른 대체 폰트(Arial 등)는 피하고, Ginto Discord를 쓸 수 없을 때만 Noto Sans를 사용하세요.

이 페이지의 비교는 Ginto Discord Medium과 Noto Sans Semibold의 차이점 일부를 보여 줍니다.
![type/backup-noto-sans]

### Backup Typeface
#### Non-latin – Noto Sans
Ginto Discord는 대부분의 라틴 기반 언어를 수용하지만, 비라틴 언어로 카피를 현지화할 때는 Noto Sans Black이 선호되는 대안입니다. 특정 언어에서 Noto Sans를 쓸 수 없다면 디자이너나 개발자는 해당 언어에서 Ginto Discord에 가장 가까운 서체를 사용해야 합니다.
![type/backup-non-latin]

# 04 Color

## Colors

### Color
#### Blurple
Blurple은 우리 컬러 팔레트의 토대이자 브랜드에서 가장 잘 알려진 요소 중 하나입니다. 로고가 없어도 “Discord”를 전달할 수 있을 정도입니다. 우리 브랜드의 에너지 넘치고 장난스러우며 디지털 우선인 성격을 반영하는 대담하고 생생한 색입니다.

커뮤니케이션에서 Blurple을 일관되고 의도적으로 사용하는 것이 중요합니다.
![color/blurple]

### Color {layout=grid-3}
#### Core Palette
핵심 팔레트는 컬러 전략의 기반을 이루며, 핵심 브랜드 접점에서 첫인상 역할을 해야 합니다. 일관된 사용은 Discord 브랜드를 알아볼 수 있는 시각적 단서를 확립하며, 보조 팔레트가 이를 보완합니다.

오른쪽 정보는 팔레트 각 색상의 승인된 값을 Pantone 잉크(별색 인쇄), CMYK(4도 인쇄), 그리고 화면용 HEX와 RGB로 보여 줍니다.

모든 매체에서 색 일관성을 보장하려면 적용 유형에 맞는 올바른 컬러 모드와 잉크 조성을 항상 사용하세요.
[swatch] Blurple | #5865F2 | R88 G101 B242 | C74 M61 Y0 K0 | PANTONE 2726 C
[swatch] Light Blurple | #E0E3FF | R224 G227 B255
[swatch] Black | #000000 | R0 G0 B0

### Color {layout=grid-4}
#### Core Pairings
타이포그래피와 함께 사용하는 네 가지 핵심 페어링이 있습니다.
![color/core-pair-1] 1. Blurple on Black
![color/core-pair-2] 2. Blurple on Light Blurple
![color/core-pair-3] 3. Light Blurple on Blurple
![color/core-pair-4] 4. Black on Blurple

### Color {layout=grid-3}
#### In Use
핵심 팔레트가 실제로 사용된 몇 가지 예시입니다.
![color/core-in-use-1] Employee ID Badge
![color/core-in-use-2] OOH
![color/core-in-use-3] Event Wayfinding

### Color {layout=grid-4}
#### Secondary Palette
보조 팔레트는 브랜드 표현의 범위를 넓혀, Discord가 즐거움과 생동감의 정신을 유지하면서 다양한 맥락에 적응할 수 있게 합니다. 이 색상들은 커뮤니케이션에 흥미를 더하거나 특정 이미지나 메시지를 보완하는 데 사용할 수 있습니다.

아래 정보는 팔레트 각 색상의 승인된 값을 Pantone 잉크(별색 인쇄), CMYK(4도 인쇄), 그리고 화면용 HEX와 RGB로 보여 줍니다.

모든 매체에서 색 일관성을 보장하려면 적용 유형에 맞는 올바른 컬러 모드와 잉크 조성을 항상 사용하세요.
[swatch] Dark Blurple | #19175C | R25 G23 B92
[swatch] Dark Green | #002920 | R0 G41 B32
[swatch] Dark Pink | #381F2C | R56 G31 B44
[swatch] Black | #000000 | R0 G0 B0
[swatch] Blurple | #5865F2 | R88 G101 B242
[swatch] Green | #35ED7E | R53 G237 B126
[swatch] Pink | #FF4CD2 | R255 G76 B210
[swatch] Dark | #1F1F1F | R31 G31 B31
[swatch] Light Blurple | #E0E3FF | R224 G227 B255
[swatch] Light Green | #C8FFEF | R200 G255 B239
[swatch] Light Pink | #F5C9FF | R245 G201 B255
[swatch] Pure White (Digital Only) | #FFFFFF | R255 G255 B255

### Secondary Palette {layout=grid-4}
#### Pairings
타이포그래피와 함께 사용하는 네 가지 보조 페어링이 있습니다. 이 승인된 조합 외의 페어링은 사용하지 마세요.
![color/secondary-pair-1] Green on Black
![color/secondary-pair-2] Pink on Black
![color/secondary-pair-3] Black on Green
![color/secondary-pair-4] Black on Pink

### Secondary Palette {layout=grid-4}
#### Pairings to Avoid
오른쪽은 보조 색상을 사용할 때 피해야 할 페어링의 예시입니다.

일반적으로 같은 구성 안에서 Green이나 Pink의 틴트와 셰이드를 함께 쓰는 것을 피하세요.
![color/avoid-1]{dont} Dark Color on Light Color
![color/avoid-2]{dont} Light Color on Dark Color
![color/avoid-3]{dont} Light Color on Color
![color/avoid-4]{dont} Dark Color on Color

### Color
#### Usage Ratio
오른쪽은 전체적인 관점에서 Discord 커뮤니케이션 전반에 적용해야 할 올바른 색 사용 비율입니다.

핵심 접점과 새로운 오디언스에게 Discord를 소개할 때는 핵심 팔레트에 크게 의존합니다(적절하다면 보조 팔레트의 악센트를 가끔 더합니다). 이것이 브랜드 중심의 상시 커뮤니케이션에 쓰는 기본 접근법입니다.

핵심 팔레트를 토대로 유지하되, 소셜 미디어처럼 보다 일시적이고 맥락적인 적용에서는 색을 맥락에 반응하는 도구로 받아들이고 브랜드 표현에서 더 장난스러워질 수 있습니다. 사용자가 “Discord”라고 인식하는 맥락, 예컨대 우리 소셜 채널에서는 보조 팔레트를 더 자주, 더 표현적으로 활용할 수 있습니다.
![color/usage-ratio]

### Secondary Palette {layout=grid-3}
#### In Use
보조 팔레트가 실제로 사용된 몇 가지 예시입니다.
![color/secondary-in-use-1] Instagram Story
![color/secondary-in-use-2] Instagram Post
![color/secondary-in-use-3] Merch

### Color {layout=grid-3}
#### Don'ts
최소 대비 요건에 대한 일반적인 지침은 WCAG를 참고하세요.
![color/dont-1]{dont}
![color/dont-2]{dont}
![color/dont-3]{dont}
![color/dont-4]{dont}
![color/dont-5]{dont}
![color/dont-6]{dont}
![color/dont-7]{dont}
![color/dont-8]{dont}
![color/dont-9]{dont}

# 05 Visual System

## Graphic Unit

### Graphic Unit
#### Overview
(더미) 그래픽 유닛은 EO 비주얼 시스템의 최소 단위입니다. 블록을 재료 삼아 쌓아 올리는 빌더의 궤적을 나사기둥(shaft)과 나사선(thread)의 반복으로 추상화했습니다. 로고, 패턴, 어플리케이션은 모두 이 유닛에서 파생됩니다.
![visual/unit-overview]

### Construction
(더미) 유닛 캔버스는 세로 컬럼(col)으로 나뉘고, 세로 중앙에 가로 막대인 shaft가 놓입니다. shaft 위아래 밴드에는 컬럼마다 사다리꼴 thread 한 쌍이 붙습니다. thread의 윗변과 아랫변 위치(Δa, Δb)가 유닛의 인상을 결정합니다.
![visual/unit-construction]

### Grid & Pitch
(더미) 컬럼 폭은 등비수열로 압축됩니다. 인접 컬럼의 폭 비율(compression rate)이 커질수록 한쪽으로 수렴하는 착시가 강해집니다. 거터는 고정(fixed) 또는 컬럼 폭에 비례(proportional)하는 두 가지 모드로 설정합니다.
![visual/unit-grid]

### Variations {layout=grid-3}
(더미) 컬럼 수, 압축 비율, shaft 높이, thread 각도를 조합해 성격이 다른 유닛을 만듭니다. 아래는 대표 변형입니다.
![visual/unit-var-1] 01 / path of builder
![visual/unit-var-2] 02 / power
![visual/unit-var-3] 03 / resistance
![visual/unit-var-4] 04 / builders
![visual/unit-var-5] 05 / rivals
![visual/unit-var-6] 06 / team

### Color Application {layout=grid-2}
(더미) 유닛은 단색으로 사용합니다. 배경과 유닛 사이의 대비가 핵심이며, 한 구성 안에서는 메인 컬러 하나와 서브 컬러 하나까지만 조합합니다.
![visual/unit-color-1] Builder Neon on Space Black
![visual/unit-color-2] Air White on Solid Gray

### Graphic Unit {layout=grid-3}
#### Don'ts
(더미) 유닛의 지오메트리를 손으로 변형하지 마세요. 모든 변형은 빌더의 파라미터 안에서만 이루어져야 합니다.
![visual/unit-dont-1]{dont} 유닛을 회전하지 마세요
![visual/unit-dont-2]{dont} thread를 임의로 지우지 마세요
![visual/unit-dont-3]{dont} 세 가지 이상의 색을 한 유닛에 쓰지 마세요

## Pattern Library

### Pattern Library {layout=grid-4}
#### 30 Patterns
(더미) 유닛을 조합해 만든 30종의 패턴 라이브러리입니다. 각 패턴은 브랜드 키워드 하나를 상징하며, 캠페인·굿즈·소셜 등 모든 접점에서 재사용합니다.
![visual/pattern-01] 01 / path of builder
![visual/pattern-02] 02 / power
![visual/pattern-03] 03 / resistance
![visual/pattern-04] 04 / builders
![visual/pattern-05] 05 / rivals
![visual/pattern-06] 06 / team
![visual/pattern-07] 07 / backing
![visual/pattern-08] 08 / teamwork

### Usage
(더미) 패턴은 배경이 아니라 주인공으로 사용합니다. 텍스트와 겹치지 않도록 레이아웃의 한쪽을 통째로 내어 주고, 로고는 패턴 바깥의 여백에 배치합니다.
![visual/pattern-usage]

## Applications

### Merch {layout=grid-3}
(더미) 티셔츠, 후디, 캡으로 구성된 굿즈 라인입니다. 실크스크린 단색 그래픽을 기본으로 하며, 흰 티에는 블랙, 회색 티에는 네온 컬러웨이를 적용합니다.
![visual/app-tee] Standard Tee
![visual/app-hoodie] Hoodie
![visual/app-cap] 5-panel Cap

### Print {layout=grid-3}
(더미) 포스터, 행택, 스티커 등 인쇄물입니다. Air White 바탕에 Space Black 유닛을 기본으로 하고, 네온은 한 면에만 사용합니다.
![visual/app-poster] Poster
![visual/app-hangtag] Hang Tag
![visual/app-sticker] Sticker Pack

### Digital {layout=grid-3}
(더미) 웹 매거진, 소셜 피드, 영상 썸네일 등 디지털 접점입니다. 유닛은 모션으로 확장되며, 썸네일에서는 유닛의 일부만 크롭해 사용합니다.
![visual/app-web] Web Magazine
![visual/app-social] Social Feed
![visual/app-thumbnail] Video Thumbnail
