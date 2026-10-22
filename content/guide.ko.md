<!--
=====================================================================
EO Brand Guidelines — 콘텐츠 파일 튜토리얼 (한국어판)
=====================================================================
이 파일은 한국어판입니다. 영어판은 guide.en.md 이며 문법은 같습니다.
두 언어가 한 사이트에 같이 빌드됩니다. 영어판은 /en/… , 한국어판은 /ko/… 이고
목차 하단의 EN | KR 로 전환합니다. 같은 챕터·페이지 이름(slug)이 있으면 같은 페이지로, 없으면 첫 페이지로 갑니다.

이 파일 하나가 사이트의 모든 글과 이미지 배치를 결정합니다.
이 주석 블록(<!-- -->)은 화면에 나오지 않습니다. 자유롭게 메모를 남기세요.

■ 위계 (기호로 구분)
  # 02 Logo              ← 챕터.   "번호 이름" 형식. 번호는 목차와 URL(/02-logo/…)에 쓰입니다.
  ## Logo                ← 페이지. 화면 하나 = URL 하나. URL: /02-logo/logo
  ### Construction       ← 섹션 헤드. 목차의 앵커로도 쓰입니다.
                            앵커 id = 목차 라벨의 슬러그 (헤드가 페이지 이름과 같으면 서브헤드, 예: #color-pairing).

■ 참조 링크 (본문·캡션 어디서나)
  [[pattern#color-pairing]]            → "Pattern › Color Pairing" 링크. 글자는 목차에서 자동, 언어별 경로도 자동
  [[pattern]]                          → "Pattern" (페이지로)
  [[#grammar]]                         → 같은 페이지의 섹션 ("Grammar")
  [[→ pattern#color-pairing]]          → "→ Pattern › Color Pairing" (화살표까지 한 밑줄. -> 로 써도 됨)
  [[02-logo/symbol#clearspace]]        → 같은 페이지 이름이 여러 챕터에 있을 때 챕터로 한정
  [[pattern#grammar|문법 원칙]]         → 링크 글자를 직접 지정
  [[https://eopla.net|EO Planet]]      → 외부 링크 (새 탭). 라벨이 없으면 "eopla.net" 처럼 주소가 글자로
    → 페이지 이름 = URL 의 slug (symbol, signature, pattern …), 섹션 = 앵커 id. 없는 대상은 빌드 로그에 경고가 뜨고 글자만 남습니다.
    → 일반 마크다운 링크 [글자](주소) 도 그대로 됩니다.
  #### Primary Lockup    ← 서브헤드 (선택). 헤드 바로 다음 줄에만 씁니다. 없으면 표시되지 않습니다.
  그 아래 줄들            ← 본문. 마크다운(문단, 굵게, 링크, 목록)을 쓸 수 있습니다.

■ 이미지 (한 줄에 하나)
  ![construction]
    → 파일 이름만 씁니다. 이 페이지의 이미지 폴더 안에서 같은 이름의 .svg .png .jpg .webp 를 찾아 넣습니다.
      파일: public/assets/<챕터>/<페이지>/<주제 번호>-<이름>  예) public/assets/02-logo/01-symbol/04-clearspace.png
      주제 = 목차 항목(헤드, 헤드가 페이지 이름과 같으면 서브헤드). 앞 번호는 페이지 순서대로 정렬하기 위한 것이라
      없거나 틀려도 이미지는 나옵니다. 이름만 붙여 넣어도(clearspace.png) 됩니다.
    → 파일이 아직 없으면 넣을 경로와 비율이 적힌 플레이스홀더 박스가 나옵니다.
    → 섹션 순서를 바꾸거나 이름만 붙여 넣은 뒤 npm run assets 를 실행하면 파일 앞 번호를 지금 순서에 맞춰 줍니다.
    → 예전 형식 ![logo/construction] 도 그대로 동작합니다 (앞의 logo/ 는 무시).
  ![dont-stretch]{dont} 로고를 늘리거나 왜곡하지 마세요
    → {do} 또는 {dont} 를 붙이면 캡션 줄 맨 앞에 체크 / 엑스 아이콘이 붙습니다.
    → {dont} 이미지에는 빨간 대각선이 자동으로 그려집니다 (카드와 확대 보기 모두). 끄려면 {dont nostrike}.
    → {con} 은 조건부(conditional, 애매한 경우): 흰 삼각형 아이콘, 대각선 없음. 캡션이 없으면 "Conditional".
    → 카드 안 배율: {zoom=1.2} 를 붙이면 그 이미지만 카드 안에서 가운데 기준 1.2배로 보입니다 (확대 보기는 원본).
      Do/Don't 카드는 그리드별 기본 배율(tokens.css --dodont-zoom-2/3/4)을 따르고, {do nozoom} 처럼 쓰면 그 카드만 끕니다.
      여러 개는 띄어서 함께 씁니다: ![dont-3]{dont nostrike zoom=1.3} 캡션
      섹션 전체에 걸려면 헤드나 서브헤드 줄에 씁니다: ### Symbol {layout=grid-3 zoom=1.5}
      중괄호는 나눠 써도 됩니다: {layout=grid-3} {zoom=1.5}
      (이미지 태그 > 섹션 zoom > Do/Don't 그리드 기본값 순서로 적용)
    → Do/Don't 만 있는 섹션은 4:3 카드입니다. 원본은 16:9 로 만들면 카드에서는 가운데 4:3 이 보이고, 확대하면 전체가 보입니다.
    → 뒤에 글을 쓰면 이미지 아래 캡션이 붙습니다 (= 카드). 배지만 있고 글이 없으면 "Do" / "Don't" 가 기본 문구.

■ 따옴표
  본문·캡션·헤드 어디서든 곧은 따옴표 " 와 ' 로 씁니다. 화면에는 자동으로 둥근 따옴표 “ ” ‘ ’ 로 바뀝니다.
    → "Build Anyway." 는 “Build Anyway.” 로, Don't 는 Don’t 로 표시됩니다. `코드` 안은 바뀌지 않습니다.

■ 나열 (가운뎃점)
  나열은 앞뒤를 띄운 가운뎃점으로 씁니다: 상황 · 포맷 · 커뮤니케이션. 숫자 사이는 "2배 또는 3배"처럼 말로 풉니다.
    → 점 앞 공백은 화면에서 줄바꿈 없는 공백이 되어, 줄이 점으로 시작하지 않습니다.

■ 스와치 (컬러 스펙 카드)
  [swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
    → 이름 | HEX | 이후는 자유 항목. HEX 는 색면 채우기에 쓰입니다.
  본문·캡션에 Builder Neon · Day Blue · Bay Green · Medium Gray · Solid Gray · Space Black · Air White 를
    영문 공식 명칭 그대로 쓰면 이름 앞에 색 네모가 자동으로 붙습니다 (대소문자 동일, 7색 고정).
    [Builder Neon] 처럼 대괄호로 감싸면 이름 없이 색 네모만 보입니다 (마우스를 올리면 이름이 툴팁으로).
    색 네모에 마우스를 올리면 Copy 알약이 뜨고, 누르면 HEX 값이 복사됩니다 (컬러 카드의 값과 같은 동작).

■ 레이아웃
  섹션 안의 이미지/스와치 개수로 자동 결정됩니다.
    0개 → text    (텍스트만, 8컬럼)
    1개 → basic   (텍스트 4컬럼 + 이미지 6컬럼, 레퍼런스와 동일)
    2개 → grid-2  (텍스트 아래 2열)
    3·6·9개 → grid-3
    그 외 → grid-4
  직접 지정하려면 헤드 뒤에 중괄호로 씁니다.
    ### Character Set {layout=wide}            ← 텍스트 아래 12컬럼 전폭 이미지(여러 장이면 세로로 쌓임)
    ### Alignment {layout=half}                ← 텍스트 아래 6컬럼 이미지
    ### Core Palette {layout=grid-4}           ← 개수와 무관하게 4열
    ### Don'ts {layout=grid-3 ratio=4:5}       ← 비율도 함께. 기본값: basic/half 5:4, wide 2:1, grid 4:5

■ 자주 하는 작업
  섹션 추가     : ### 헤드 한 줄 + 본문 + ![이미지] 를 원하는 위치에 끼워 넣으면 끝.
  섹션 순서 변경 : 블록째 잘라 붙이기.
  페이지 추가  : ## 이름 한 줄. 목차·URL·다음 버튼이 자동으로 갱신됩니다.
  섹션 목록 숨김 : ## 이름 {toc=none}  ← 이 페이지는 목차에서 섹션 목록을 펼치지 않음 (섹션이 하나뿐이면 자동으로 숨김)
  같은 헤드 반복 : 가능합니다 (예: Character Set 3개). 목차에는 한 번만 표시되고 첫 번째로 이동합니다.
  목차에 올릴 섹션 고르기 : ### + Construction  ← 헤드 앞에 + 를 붙이면 그 섹션만 목차에 오름 (에디터에서는 제목으로 보임).
                        한 페이지에 + 가 하나라도 있으면 + 붙은 것만, 하나도 없으면 전부(자동) 올라갑니다.
                        헤드가 반복되는 섹션은 서브헤드 줄에 붙여도 됩니다: #### + Clearspace
                        {layout=…} 속성도 헤드 줄·서브헤드 줄 어느 쪽에 써도 됩니다.
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

이 가이드라인은 EO 아이덴티티 시스템의 기본 요소인 로고 · 타이포그래피 · 컬러 · 비주얼 시스템을 설명하고, 우리가 그것을 어떻게 사용해 브랜드를 만들어 가는지 안내합니다. 가이드라인을 이해하고 따르면 샌프란시스코 · 서울 · 베트남 어디에서 만들어진 콘텐츠든 하나의 EO로 보이고 읽힙니다.

EO의 브랜드 에셋을 사용하려는 외부 파트너는 jemin@eoeoeo.net으로 연락해 주시기 바랍니다.

Build Anyway.

The EO Brand Team



## Legal Brand Guidelines {toc=none}

### Legal Brand Guidelines
EO, EO 모노그램, 블록 심볼, "Build Anyway", "Entrepreneur Onwards" 및 EO Studio(이오스튜디오)가 소유한 기타 상표(이하 **"EO 로고"**)와, 심볼 · 그래픽 유닛 · 패턴 · EO의 룩앤필 등 브랜드 고유의 미적 특징(이하 "브랜드 에셋")은 EO Studio의 독점 자산입니다. 여기에서 허용된 경우를 제외하고 EO 로고나 브랜드 에셋을 사용하려면 EO Studio의 사전 허가가 있어야 합니다.


### Do's
- EO 로고와 브랜드 에셋을 사용할 때는 항상 본 브랜드 가이드라인을 따르세요.
- EO 콘텐츠에 출연했거나 EO 프로그램에 참여했다는 사실을 알리기 위해 EO 로고를 사용할 수 있습니다. 다만 EO가 해당 제품이나 서비스를 보증하거나 후원한다는 인상을 주어서는 안 됩니다.
- EO 영상과 아티클을 인용할 때는 출처를 "EO"로 명확히 표기하고, 원본 링크를 함께 제공하세요.
- EO 로고와 브랜드 에셋은 제공된 원본 파일 그대로, 승인된 컬러 페어링 안에서만 사용하세요.


### Don'ts
- EO 로고 또는 이와 혼동될 만큼 유사한 로고를 회사 · 제품 · 서비스 · 이벤트 · 커뮤니티 이름, URL, 소셜 미디어 계정, 상표에 포함하지 마세요.
- EO 심볼 · 그래픽 유닛 · 패턴을 변형하거나 재조합해 자신의 그래픽으로 사용하지 마세요.
- EO의 영상 · 아티클 · 썸네일을 EO의 허가 없이 재편집하거나 재업로드하지 마세요.
- EO 웹사이트 · 매거진 · 소셜 채널의 룩앤필(레이아웃 · 컬러 조합 · 서체 · 그래픽 시스템)을 복제하거나 모방하지 마세요.
- EO 로고를 정치적 · 종교적 메시지, 성인물, 차별적 콘텐츠와 함께 사용하지 마세요.
- EO 로고 및 브랜드 에셋을 허가 없이 상품(머천다이즈)에 사용하지 마세요.




# 02 Logo

## Symbol

### Logo
#### + Overview 
EO 로고는 이 챕터에서 다루는 EO 심볼 · EO 시그니처 · 서비스 시그니처 · EO 서브심볼을 모두 아우르는 총칭입니다. 이 페이지는 작은 사인오프부터 큰 디스플레이 집행까지 다양한 상황 · 포맷 · 커뮤니케이션에 맞춰 EO 심볼을 어떻게 적용할 수 있는지 설명합니다. 
![logo/hero]{zoom=1.2}


### Symbol
나사 모티프로의 식별 기능을 가진 그래픽 메타포이자 E와 O 두 글자를 담은 모노그램 로고입니다. 이 형태의 로고를 이하 **EO 심볼**이라 부릅니다.

EO 심볼은 미디어 브랜드 EO를 알리는 가장 상징적이고 효과적인 방법입니다.
![logo/symbol]{zoom=1.3}


### Symbol
#### + Geometry {layout=wide}
EO 심볼은 두 개의 블록으로 이루어진 모노그램입니다. 나사의 파사드를 표현한 E 블록은 그래픽 유닛의 기본 지오메트리인 shaft와 스레드(thread) 세 단으로 구성됩니다. O 블록은 십자 구멍이 뚫린 팔각형 나사헤드로, 두 블록이 나란히 놓여 "Entrepreneur Onwards"를 뜻합니다.
![geometry]


### Symbol
#### + Clearspace 
클리어스페이스는 타이포그래피 · 그래픽 유닛 · 이미지 · 캔버스 가장자리 등 다른 시각 요소와 인접할 때 심볼을 지켜 주는 최소한의 안전 장치입니다. E 블록 하나의 수직 방향 높이를 H라 할 때, 심볼과 인접한 모든 요소에 대해 상하좌우 각 H/2 이상의 최소 여백을 반드시 확보해야 합니다.
![logo/clearspace]


### Symbol
#### + Scalability
EO 심볼은 다양한 크기에서 작동하도록 설계되고 테스트되었습니다.

**최적 범위**는 16인치 맥 디스플레이를 500mm 거리에서 볼 때 높이 40–100px(약 8–20mm)입니다. 보는 거리로 환산하면 거리의 1/60–1/25이며, 다른 매체에서는 이 비율로 크기를 정합니다. 스레드 각도의 시각 보정도 이 범위를 기준으로 맞췄습니다.

**최소 크기**는 화면에서 높이 20px(약 4mm, 보는 거리의 1/125), 인쇄물에서 높이 5mm입니다. 이보다 작은 크기에서는 E 블록의 스레드가 뭉개지므로 EO 브랜드팀에 확인을 요청하세요.
![logo/scalability]


### Symbol
#### + Inversion
EO 심볼은 Space Black · Solid Gray 등 어두운 컬러의 배경 위에 Builder Neon · Air White 등 밝은 컬러의 라이트 심볼을 조합하는 것을 기본으로 제작되었습니다. 밝은 컬러의 배경 위에 어두운 컬러의 다크 심볼을 쓰고자 할 때, 단지 색을 반전하여 적용하면 심볼의 형태가 가늘고 벌어져 보이는 착시 효과가 발생합니다.

이때는 라이트 심볼에 대해 H/100만큼 바깥으로 외곽선 오프셋을 한 후, 두 블록 각각 상하좌우 네 방향으로 H/30만큼 정비율 스케일업합니다. 그 후 확장된 두 블록 사이의 간격을 기존 (4/30)H에서 (3/30)H로 줄여서 다크 심볼을 완성합니다. 이렇게 하면 모든 사이즈 스펙트럼의 라이트 심볼을 동일 레벨의 다크 심볼로 변환할 수 있습니다.

또한 밝은 배경에서의 클리어스페이스는 크기가 확장돼 보이는 착시 효과를 만들기 때문에, 다크 심볼을 동일 레벨의 라이트 심볼 클리어스페이스 영역 위에 그대로 중앙 정렬하여 사용하세요. 
![inversion]


### + Usage
#### Placement
EO 심볼은 강렬하지만 단순한 셰이프로 이뤄졌습니다. 따라서 일반적인 레이아웃에서는, 콘텐츠 영역의 네 모서리 중 한 곳에 사인오프로 사용하는 방식을 권장합니다. 클릭을 유도하는 영상 썸네일에서는 메인 콘텐츠가, 시선을 잡아끄는 포스터에서는 그래픽 패턴이 주인공이 될 수 있도록, 심볼의 존재감은 한발 물러나야 합니다.

사인오프로 사용할 때 심볼은 레이아웃의 주인공이 되는 인물이나 그래픽 패턴과 먼 쪽의 모서리에, 주변의 다른 시각 요소들과 적절한 간격을 두고 배치합니다. 이렇게 하면 심볼 배치가 단순하고 일관되게 유지되면서도, 역동적인 그래픽 시스템을 수용할 만큼의 유연성을 확보할 수 있습니다.
![logo/usage-placement]


### Usage {layout=grid-2}
#### Do's & Don'ts
심볼을 디스플레이 목적으로 사용할 때는 **단지 사이즈를 크게 키워 시각적 위계를 높이는 방식은 지양합니다.** 심볼의 배치 위치 주변의 여백 공간을 충분히 확보해 적절한 사이즈로도 임팩트를 유지하도록 합니다. 심볼의 실질 점유 면적은 빈 구역 전체의 10% 수준, 주변 여백 공간은 심볼 너비의 2–3배 이상을 두는 것이 가장 좋습니다.
![logo/usage-do-1]{do} 심볼 크기를 배치하는 여백 공간 면적의 10–20% 수준으로 조절합니다 
![logo/usage-do-2]{do} 심볼 주변에 넉넉한 여백을 두어, 적당한 크기로도 충분한 존재감을 만듭니다
![logo/usage-dont-1]{dont} 심볼로 빈 공간을 가득 채우지 마세요
![logo/usage-dont-2]{dont} 여백 없이 심볼을 다른 요소에 붙이지 마세요


### Symbol
#### + Color{layout=grid-3} {zoom=1.6}
EO 심볼에는 여섯 가지 기본 컬러 페어링이 있습니다. **심볼은 항상 단색으로 표현되어야 하며**, 배경색에 확신이 서지 않을 때는 다음 중 하나를 사용하세요. 
![logo/color-1] 1. Space Black on Builder Neon
![logo/color-2] 2. Air White on Space Black
![logo/color-3] 3. Air White on Solid Gray
![logo/color-4] 4. Space Black on Air White
![logo/color-5] 5. Builder Neon on Space Black
![logo/color-6] 6. Space Black on Solid Gray


### + Over Imagery {layout=grid-2}
#### Do's & Don'ts
EO 심볼은 사진 위에서도 항상 또렷하게 읽혀야 하므로 충분한 대비를 이루는 이미지 위에 Air White 심볼을 오버레이해 사용합니다. 이미지가 너무 밝거나 지나치게 하얀 영역이 있으면 심볼이 구성 속에 묻힐 위험이 있으므로, 투명도 30% 수준의 그라데이션 또는 블랙 박스를 오버레이한 후 심볼을 적용합니다. 

사진 구성은 심볼이 돋보일 수 있을 만큼 단순해야 하며, 지나치게 복잡하거나 핵심 피사체가 정중앙에 있는 이미지는 심볼을 올리면 혼란스러워집니다. 이를 염두에 두고 이미지를 고르거나 로고와의 관계에 맞춰 이미지 위치를 조정하세요. 

본 섹션의 지침은 화면 구성이 변화하는 영상 시퀀스보다는 정지된 이미지의 오버레이 상황에 초점을 맞추고 있습니다.
![logo/imagery-do-1]{do} 배경과 대비가 충분한 곳에 심볼을 둡니다
![logo/imagery-do-2]{do} 밝기가 고르지 않은 사진을 써야할 경우 투명도 30% 수준의 그라데이션을 오버레이해 대비를 확보합니다
![logo/imagery-dont-1]{dont} 사진에 조명하는 인물 또는 오브제의 주요한 실루엣 위에 심볼을 두지 마세요
![logo/imagery-dont-2]{dont} 사진과 대비가 부족한 곳에 심볼을 두지 마세요


### + Partner Lockup
#### Horizontal
다음 이미지는 EO 심볼과 파트너 브랜드 및 협업사 로고의 기본 가로 락업 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 하며, 각 로고의 크기를 맞춘 뒤 그 사이에 간격과 세로 구분선 · 콜라보 기호를 넣습니다. EO 심볼과 파트너 로고 사이의 간격은 E 블록 하나의 너비(W)의 2배 또는 3배와 같으며, 두 로고는 항상 시각적으로 수직 중앙 정렬되어야 합니다.
![logo/partner-horizontal]


### Partner Lockup
#### Vertical
다음 이미지는 EO 심볼과 파트너 브랜드 및 협업사 로고의 기본 세로 락업 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다.  각 로고의 크기를 맞춘 뒤 그 사이에 가로 구분선을 넣습니다. EO 심볼과 파트너 로고 사이의 간격은 EO 심볼의 높이(H)의 1.5배와 같으며, 두 로고는 항상 시각적으로 수평 중앙 정렬되어야 합니다.
![logo/partner-vertical]


### Partner Lockup
#### Optical Adjustment
파트너 브랜드의 로고가 EO 심볼과 정렬했을 때 완벽하게 균형이 맞지 않는 경우가 있습니다. EO 심볼은 가로로 넓고 묵직하기 때문에, 가늘거나 세로로 긴 파트너 로고는 수학적으로 같은 높이여도 작아 보입니다.

이럴 때는 보다 동등한 위계가 만들어지도록 파트너 로고를 시각적으로 키우거나 줄여 조정해야 합니다.
![logo/partner-optical]


### + App & Social Icons
#### Alignment
EO 심볼을 앱 아이콘이나 프로필 이미지 중앙에 그대로 배치할 때, 작게 볼수록 무게중심이 왼쪽으로 미세하게 치우쳐 보이게 됩니다. 좁은 프레임 안에 심볼을 적용할 때, 다음 규칙에 따라 심볼을 n px만큼 오른쪽으로 보정합니다.

**n = H × (4 − 0.06 × S) %**

H는 작업 파일 속 심볼의 높이(px), S는 화면에서 보이는 또는 엔드유저 뷰에서 실제 심볼이 그려지는 높이(mm)입니다. n이 양수일 때는 오른쪽으로 보정하며, 음수일 때는 따로 보정하지 않습니다. 이 식은 일반 데스크탑 작업 조건에서 심볼 크기별로 실측한 적정 보정값을 바탕으로 도출한 근사식으로, 실험 범위는 화면에서 보이는 심볼 높이 S 4mm - 50mm(관찰 거리 500mm)이며, 오차 범위는 최대 ±0.02mm입니다

데스크탑 모니터보다 더 큰 지면에 심볼을 적용할 시엔, 엔드 유저의 일반적인 관찰 거리를 범위로 설정하고, 주요 구간의 평균 크기를 감안하여 위 공식을 적용하세요.
![logo/icon-alignment]


### App & Social Icons
#### In Use
다음 이미지는 EO 심볼이 앱 아이콘에 사용된 예시입니다.
![logo/icon-in-use]


### Symbol {layout=grid-3}
#### + Don'ts
EO 심볼이 일관되고 강렬하게 유지되도록, 재해석하거나 변형하거나 장식해서는 안 됩니다. 이 페이지는 피해야 할 변형의 예를 보여 줍니다. 회사명 표기가 필요하면 심볼 대신 EO 시그니처를 사용하세요. 서브 브랜드 표시가 필요하면 EO 브랜드팀과 논의를 거쳐 서비스 시그니처를 만드세요.


![dont-1]{dont} 심볼을 늘리거나 왜곡하지 마세요
![dont-2]{dont} 심볼을 회전시키지 마세요
![dont-3]{dont} 심볼에 외곽선을 넣지 마세요
![dont-4]{dont} 밝은 배경에서 Space Black 이외의 컬러와 검은 외곽선을 쓰지 마세요
![dont-5]{dont} E의 스레드 수나 O의 각도, 블록 간격이 달라진 상태(로고 애니메이션 캡처 등)를 사용하지 마세요
![dont-6]{dont} 심볼에 글로우, 그림자, 그라데이션 등 시각효과를 적용하지 마세요
![dont-7]{dont} 배치할 공간의 대부분을 차지할만큼 과도하게 큰 사이즈를 적용하지 마세요
![dont-8]{dont} 심볼을 이어 붙이거나 단순 반복하는 방식으로 그래픽을 만들지 마세요
![dont-9]{dont} EO 브랜드팀의 허가 없이 심볼 주변에 임의의 맥락을 추가하지 마세요


## Signature

### Signature
#### + Overview
**시그니처**는 EO 심볼과 회사명 · 서비스명의 텍스트를 가로 또는 세로로 묶은 콤비네이션 로고입니다. 이 페이지는 다양한 상황 · 포맷 · 커뮤니케이션에 맞춰 EO 시그니처를 어떻게 적용할 수 있는지 설명합니다. 

심볼과 "EO Studio" 텍스트가 결합된 콤비네이션 로고를 이하 **회사 시그니처**, 심볼과 각 서비스명이 결합된 콤비네이션 로고는 **서비스 시그니처**라고 부릅니다.

계약서 · 제안서 · 공식 문서 · 채용 공고 · 웹사이트 푸터 등 회사가 전면에 나서는 자리에는 회사 시그니처를, 서비스 별 브랜드 커뮤니케이션에는 각 서비스 시그니처의 사용을 우선합니다. 그 밖에 영상 · 썸네일 · 소셜 게시물 · 포스터 · 콘텐츠 사인오프 등 미디어 브랜드 EO를 알려야하는 모든 자리에는 EO 심볼의 사용을 우선합니다.
![overview]


### Signature
#### + Descriptor {layout=wide}
시그니처에서 심볼을 제외한 텍스트 부분을 **디스크립터**라고 부릅니다. 회사명 · 서비스명 · 도메인 등 어떤 단어든 아래 규격을 그대로 따릅니다.

- **세로형:** 디스크립터는 Founders Grotesk Regular, 조판 사이즈 (7/15)H, 자간 0으로 조판합니다. 심볼의 하단 경계로부터 H/5 아래에 캡 박스의 윗변을 두고, 심볼과 중앙 정렬한 뒤 H/100만큼 왼쪽으로 보정합니다. EO 심볼은 E 블록의 회색도가 더 높아 시각적 중심이 왼쪽에 있기 때문입니다.
- **가로형:** 디스크립터는 Founders Grotesk Regular, 조판 사이즈 (5/4)H, 자간 0으로 조판하고, 단어 사이 포함된 공백 문자에 한해 -6%의 자간을 별도 적용합니다. 심볼의 우측 경계로부터 H/2 떨어진 곳에 캡 박스의 왼쪽 변을 두고, 베이스라인을 심볼의 하단 경계에서 H/10만큼 올립니다. 
- 디스크립터의 첫 글자나 끝 글자가 S · o처럼 측면 형태가 곡선인 글리프인 경우, 텍스트 기준선에 좌측 정렬을 유지한 채로 대문자 H, 소문자는 h로 잠시 바꿔 경계를 잡습니다. 예를 들어 “Studio”는 “Htudio”로 왼쪽 경계를, “Studih”로 오른쪽 경계를 잡습니다.

새 디스크립터를 만들거나 기존 디스크립터를 변경할 때는 반드시 EO 브랜드팀의 컨펌을 받아야 합니다. 캠페인이나 이벤트 이름처럼 한시적인 이름은 디스크립터로 사용하지 않습니다.
![descriptor-system-v]
![descriptor-system-h]


### Signature
#### + Clearspace
시그니처 주변에도 EO 심볼과 같은 기준의 여백이 필요합니다. E 블록 하나의 수직 방향 높이를 H라 할 때, 시그니처 전체를 감싸는 상하좌우 각 H/2 이상의 최소 여백을 확보합니다.
![clearspace]


### Signature
#### + Scalability {layout=grid-2}
시그니처는 작게 볼수록 심볼과 디스크립터가 하나의 덩어리로 읽히고, 크게 볼수록 디스크립터의 글자 하나하나가 또렷해집니다.따라서 지면에서 실제로 보이는 크기를 고려해 가장 알맞은 형태의 시그니처를 선택해야 합니다.

- **보이는 크기가 비교적 클 때는 세로형을 우선 사용하세요.** 세로형은 심볼과 디스크립터의 크기 대비가 커서 또렷한 인상을 주기에 유리하지만, 너무 작은 크기에서는 디스크립터의 가독성이 떨어집니다.
- **보이는 크기가 비교적 작을 때는 가로형을 우선 사용하세요.** 가로형은 작은 크기에서도 심볼과 디스크립터가 고른 가시성을 유지하지만, 너무 큰 크기에서는 두 요소가 가로로 흩어져 시각적 리듬감이 떨어집니다.
![size-1] 큰 크기 · 세로형 "EO Studio"
![size-2] 작은 크기 · 가로형 "EO Studio"
![size-dont-1]{dont} 작은 크기에서 세로형 시그니처를 쓰지 마세요
![size-dont-2]{dont} 큰 크기에서 가로형 시그니처를 쓰지 마세요


### Signature
#### + Inversion {layout=grid-2}
시그니처도 심볼과 같이 Space Black · Solid Gray 등 어두운 배경 위에 Builder Neon · Air White 등 밝은 색의 라이트 시그니처를 기본으로 제작되었습니다. 밝은 배경 위에 다크 시그니처를 쓰고자 할 때 단지 색을 반전하면, 심볼은 가늘고 벌어져 보이고 디스크립터의 글자도 같은 웨이트인데 한 단계 가늘어 보이는 착시가 생깁니다.

이때 심볼은 Symbol 챕터의 Inversion 규칙대로 변환한 다크 심볼을 그대로 씁니다. 디스크립터는 웨이트를 바꾸지 않고(Medium으로 올리면 글자 폭이 달라져 캡 박스 규격이 어긋납니다) Regular 글자에 조판 사이즈 S의 S/250만큼 바깥으로 외곽선 오프셋을 줍니다. 가로형 (5/4)H 조판에서는 H/200, 세로형 (7/15)H 조판에서는 약 H/540입니다. 이렇게 하면 밝은 배경에서도 심볼과 디스크립터의 회색도 균형이 라이트 시그니처와 같게 유지됩니다.

다크 시그니처의 레이아웃은 라이트 시그니처의 것을 그대로 둡니다. 디스크립터의 캡 박스 위치와 심볼과의 간격은 라이트 심볼의 경계를 기준으로 잡은 값을 유지하고, 그 자리에 다크 심볼을 중앙 정렬해 올립니다. 다크 심볼이 네 방향으로 커진 만큼 심볼과 디스크립터 사이의 간격이 조금 줄어드는데, 이는 두 블록 사이 간격을 줄인 것과 같은 보정이므로 다시 벌리지 않습니다. 클리어스페이스 역시 동일 레벨의 라이트 시그니처 영역을 그대로 씁니다.
![inversion-v] 세로형 — 라이트 시그니처 위에 다크 시그니처를 겹친 비교
![inversion-h] 가로형 — 라이트 시그니처 위에 다크 시그니처를 겹친 비교


### + Company Signature
#### Vertical

회사 시그니처-V는 EO 심볼 아래에 "EO Studio"를 중앙 정렬로 놓은 세로 조합입니다. 구성 규칙은 아래 Descriptor System의 세로형 규격을 따릅니다.

특별한 이유가 없다면 회사 시그니처-V의 텍스트를 다시 조판하지 말고 제공된 원본 파일을 사용하세요.
![vertical]


### Company Signature
#### Horizontal
회사 시그니처-H는 EO 심볼 오른쪽에 "Studio" 또는 "EO Studio"를 놓은 가로 조합입니다. 구성 규칙은 아래 Descriptor System의 가로형 규격을 따릅니다. 

EO를 한 번 이상 접한 사람에게 EO 심볼은 이미 "EO"로 읽힐 수 있으므로, 가로형 사용 시 디스크립터에 "Studio"만 표기하는 것을 고려하세요.

특별한 이유가 없다면 회사 시그니처-H의 텍스트를 다시 조판하지 말고 제공된 원본 파일을 사용하세요.
![horizontal]


### + Service Signature
#### Vertical {layout=grid-4}
현재 사용 중인 회사 시그니처와 서비스 시그니처입니다. 모두 같은 디스크립터 규격으로 구성되어, 이름이 달라도 하나의 가족으로 읽히는지 체크합니다.
![lineup-studio] EO Studio · 회사
![lineup-magazine] EO Magazine · 웹 매거진
![lineup-planet] EO Planet · 커뮤니티 (eopla.net)
![lineup-newsletter] EO Newsletter · 뉴스레터


### Service Signature
#### Horizontal {layout=grid-4}
현재 사용 중인 회사 시그니처와 서비스 시그니처입니다. 모두 같은 디스크립터 규격으로 구성되어, 이름이 달라도 하나의 가족으로 읽히는지 체크합니다.
![lineup-studio] EO Studio · 회사
![lineup-magazine] EO Magazine · 웹 매거진
![lineup-planet] EO Planet · 커뮤니티 (eopla.net)
![lineup-newsletter] EO Newsletter · 뉴스레터


### + Usage {layout=grid-2}
#### Symbol or Signature
시그니처와 EO 심볼은 누가 말하는지에 따라 나눠 사용합니다. 회사 EO Studio나 회사가 운영하는 서비스가 주체인 자리에는 시그니처를, 미디어 EO의 콘텐츠에는 EO 심볼을 사용합니다. 하나의 결과물에는 둘 중 하나만 사용하세요.

시그니처는 텍스트가 함께 있어 EO 심볼보다 넉넉한 크기가 필요합니다. 텍스트가 또렷하게 읽히지 않을 만큼 작은 자리(심볼 높이 기준 디지털 [20px], 인쇄물 [4mm] 미만)에서는 시그니처 대신 EO 심볼을 단독으로 사용하세요.

판단이 어렵다면 그 결과물에 EO Studio라는 회사명이 꼭 필요한지 먼저 확인하세요. 필요하지 않다면 EO 심볼로 충분하며, 그래도 판단이 어려울 때는 EO 브랜드팀에 문의하세요.
![usage-do-1]{do} 회사의 입장을 나타내는 공식 문서에는 시그니처를 사용합니다
![usage-do-2]{do} 콘텐츠 사인오프에는 EO 심볼을 사용합니다
![usage-dont-1]{dont} 콘텐츠 사인오프에 시그니처를 사용하지 마세요
![usage-dont-2]{dont} 한 결과물에 시그니처와 EO 심볼을 함께 쓰지 마세요


### Signature
#### + Color {layout=grid-3}
시그니처는 EO 심볼과 같은 여섯 가지 컬러 페어링을 사용합니다. 심볼과 글자는 항상 같은 한 가지 색으로 표현합니다.
![color-1] 1. Builder Neon on Space Black
![color-2] 2. Space Black on Builder Neon
![color-3] 3. Air White on Space Black
![color-4] 4. Space Black on Air White
![color-5] 5. Air White on Solid Gray
![color-6] 6. Space Black on Color


### + Partner Lockup
#### Horizontal
EO 시그니처은 파트너 브랜드 및 협업사 로고와 락업할 수 있습니다. 본 섹션의 이미지는 기본 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 각 로고의 크기를 맞춘 뒤 그 사이에 간격과 구분선 · 콜라보 기호를 넣을 수 있습니다. EO 심볼과 파트너 로고 사이의 간격은 E 블록 하나의 너비(W)의 2배 또는 3배를 적용합니다.
![logo/partner-horizontal]


### Partner Lockup
#### Vertical
EO 시그니처은 파트너 브랜드 및 협업사 로고와 세로로도 락업할 수 있습니다. 오른쪽은 기본 세로 락업 구성의 예시입니다.

요소들의 크기는 서로 같은 크기로 보이도록 시각적으로 조정해야 합니다. 각 로고의 크기를 맞춘 뒤 그 사이에 간격과 구분선을 넣을 수 있습니다. EO 시그니처의 높이(H)와 같게 하고 구분선은 그 중앙에 가로로 둡니다.

로고들이 항상 시각적으로 중앙 정렬되도록 하세요.
![logo/partner-vertical]


### Partner Lockup
#### Optical Adjustment
시그니처는 가로로 긴 형태라, 같은 높이로 맞추면 파트너 로고가 상대적으로 작고 가벼워 보이기 쉽습니다. 높이가 아니라 시각적 무게가 비슷해지도록 파트너 로고의 크기를 조정하세요.
![partner-optical]


### Signature {layout=grid-3}
#### + Don'ts
시그니처는 심볼과 글자의 관계가 정해진 하나의 조합입니다. 구성 요소를 따로 바꾸거나 다시 만들지 마세요.
![dont-1]{dont} EO Studio를 다른 서체로 바꾸지 마세요
![dont-2]{dont} 심볼과 글자의 간격이나 크기 비율을 바꾸지 마세요
![dont-3]{dont} 글자를 심볼의 왼쪽이나 다른 위치로 옮기지 마세요
![dont-4]{dont} EO Studio 글자만 단독으로 사용하지 마세요
![dont-5]{dont} 서브 심볼과 글자를 조합하지 마세요
![dont-6]{dont} 심볼과 글자를 서로 다른 색으로 칠하지 마세요
![dont-7]{dont} 시그니처를 늘리거나 왜곡하지 마세요
![dont-8]{dont} 글로우 · 그림자 · 그라데이션을 적용하지 마세요
![dont-9]{dont} 미디어 콘텐츠의 사인오프로 사용하지 마세요



## Sub Symbol

### + Sub Symbol
EO 심볼에서 E 블록만 떼어 쓰는 형태를 이하 **서브 심볼**이라 부릅니다. 앱 아이콘 · 파비콘 · 소셜 미디어 아바타 · 핀 배지처럼 EO 심볼 전체를 알아보기 어려운 작은 정사각형 공간에 한하여 사용합니다.

서브 심볼은 EO 심볼을 완전히 대신할 수 없으므로, 충분한 크기가 확보된 곳에서는 항상 EO 심볼을 사용하세요. E 블록은 그래픽 유닛과 같은 지오메트리를 공유하므로, 작게 쓰여도 비주얼 시스템 전체와 자연스럽게 이어집니다.
![overview]


### Sub Symbol
#### + Clearspace
서브 심볼 주변에도 EO 심볼과 같은 기준의 여백이 필요합니다. E 블록 하나의 수직 방향 높이를 H라 할 때 상하좌우 각 [H/2] 이상의 여백을 확보하고, 스레드가 튀어나온 쪽에도 같은 값을 적용합니다.
![clearspace]


### Sub Symbol
#### + Color {layout=grid-2}
서브 심볼은 EO 심볼의 1,2번 컬러 페어링을 사용합니다. 항상 단색으로 표현하세요.
![color-1] 1. Builder Neon on Space Black
![color-2] 2. Space Black on Builder Neon


### + Favicon
#### Alignment
앱 아이콘과 소셜 아바타에서는 사각형이나 원형 컨테이너 안에 서브 심볼을 놓습니다. 서브 심볼은 컨테이너 중심에 시각적으로 정렬하고, 스레드가 튀어나온 쪽 때문에 한쪽으로 치우쳐 보이지 않도록 위치를 미세 조정합니다. 원형 컨테이너에서는 가장자리에 닿지 않도록 사각형보다 조금 작게 넣습니다.
![alignment]


### Sub Symbol {layout=grid-3}
#### + Don'ts
서브 심볼은 EO 심볼의 일부이므로 EO 심볼과 같은 원칙을 따릅니다. 형태를 바꾸거나 장식하지 말고, 정해진 용도 밖에서 사용하지 마세요.
![dont-1]{dont} 서브 심볼을 늘리거나 왜곡하지 마세요
![dont-2]{dont} 서브 심볼을 회전하지 마세요
![dont-3]{dont} 서브 심볼을 좌우로 뒤집지 마세요
![dont-4]{dont} 스레드의 수나 각도를 바꾸지 마세요
![dont-5]{dont} 서브 심볼에 외곽선을 넣지 마세요
![dont-6]{dont} 글로우 · 그림자 · 그라데이션을 적용하지 마세요
![dont-7]{dont} 두 가지 색으로 칠하거나 승인되지 않은 페어링을 사용하지 마세요
![dont-8]{dont} E 블록 대신 O 블록을 서브 심볼로 사용하지 마세요



# 03 Typography

## Typography

### Our Typefaces
EO의 서체는 Founders Grotesk 패밀리입니다. 헤드라인과 본문에는 Founders Grotesk를, 정보성 텍스트(라벨 · 태그 · 날짜 · 스펙)에는 Founders Grotesk Mono를 사용합니다.

Founders Grotesk는 장식 없이 명료하고, 넓은 폭과 낮은 콘트라스트 덕분에 큰 크기에서 단단한 블록처럼 보입니다. 이 성격이 "명료하고 열린 자신감"이라는 EO의 목소리를 그대로 전달합니다. 모노는 빌더의 터미널과 스펙 시트를 연상시키는 정보의 서체입니다.

한국어 본문에는 Pretendard를, 베트남어 본문에는 Noto Sans를 사용합니다. 다국어 조합은 Backup Typeface 섹션을 참고하세요.
![type/our-typefaces]


### Custom Characters
EO 심볼의 O 블록에서 가져온 십자 모양의 브랜드 기호를 텍스트와 함께 사용합니다. 플러스(+)와 스파크(✦) 양쪽이 이미지를 모두 가진 나사헤드의 십자소켓을 버튼과 링크의 액션 기호, 리스트와 인용의 불릿 등의 시각 요소로 사용할 수 있습니다. 서체의 기본 글리프가 아니라 제공된 벡터 파일을 사용하며, 크기는 함께 쓰는 텍스트의 x-height와 회색도를 고려해 맞춥니다. 
![type/custom-characters]


### Character Set {layout=wide}
#### Founders Grotesk Medium
이 페이지는 Founders Grotesk Medium의 대부분의 글자를 한눈에 보여 줍니다. Medium은 헤드라인과 디스플레이 타이포그래피의 기본 웨이트입니다. 이 서체는 라틴 확장 문자를 지원하며, 베트남어 성조 부호를 포함합니다. 한글처럼 지원하지 않는 문자는 Backup Typeface 섹션의 대체 서체를 사용합니다.
![type/charset-medium]


### Character Set {layout=wide}
#### Founders Grotesk Light
이 페이지는 Founders Grotesk Light의 대부분의 글자를 한눈에 보여 줍니다. Light는 본문 · 서브헤드 · 캡션의 기본 웨이트입니다. 큰 크기에서는 가늘어 보일 수 있으므로 24pt 이하에서 사용합니다.
![type/charset-light]


### Character Set {layout=wide}
#### Founders Grotesk Mono
이 페이지는 Founders Grotesk Mono Regular의 대부분의 글자를 한눈에 보여 줍니다.

참고: 모노는 정보성 텍스트 전용입니다. 태그 · 날짜 · 읽기 시간 · 컬러 스펙 · 캡션 번호에 사용하며 헤드라인이나 본문에는 사용하지 않습니다.
![type/charset-mono]


### Typeface Usage
EO의 단단한 비주얼 아이덴티티와 명확한 커뮤니케이션의 균형을 맞추려면, 웨이트 선택에 분명한 의도가 있어야 합니다.

헤드라인과 디스플레이에는 Founders Grotesk Medium을 사용하세요.

본문 · 서브헤드 · 캡션에는 Founders Grotesk Light를 사용하세요.

태그 · 날짜 · 스펙 같은 정보성 텍스트에는 Founders Grotesk Mono Regular를 사용하세요.

Regular와 Semibold는 UI 컴포넌트(버튼, 내비게이션)에만 사용하고 커뮤니케이션 디자인에서는 사용하지 않습니다.
![type/typeface-usage]


### Case Setting
EO의 헤드라인은 문장 케이스(Sentence case)로 조판하고 마침표로 끝냅니다. "Build Anyway." "Trust, not clicks."처럼 헤드라인은 구호가 아니라 문장이며, 마침표는 그 문장에 대한 확신입니다. 전부 대문자(All Caps)는 모노 라벨에서만 사용하고 헤드라인에는 사용하지 않습니다.
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
적절한 트래킹 값을 설정한 뒤에는 글자끼리 닿지 않고 모든 글자 사이가 균등해지도록 특정 글자 사이의 공간을 수동으로 조정(커닝)해야 합니다. Founders Grotesk는 "A"와 "y", "W"와 "a"처럼 사선 획이 만나는 조합에서 커닝이 특히 필요합니다.
![type/letterspacing]


### Letterspacing
#### Founders Grotesk Medium
오른쪽은 Founders Grotesk Medium으로 조판한 헤드라인에서 올바른 자간과 잘못된 자간의 예시입니다.

Display 크기에서 자간은 -3%입니다. 글자가 블록처럼 붙어 보이되 획이 닿지 않는 지점입니다. 더 좁히면 "ild"처럼 세로획이 연속되는 조합이 하나의 덩어리로 읽힙니다.
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
EO 브랜드 커뮤니케이션의 모든 헤드라인은 왼쪽 정렬입니다. 헤드라인은 레이아웃의 왼쪽 그리드 라인에서 시작해 그래픽 유닛이 놓인 오른쪽을 향합니다. 가운데 정렬은 심볼 단독 아이콘과 굿즈 백프린트처럼 텍스트가 한 줄인 경우에만 허용하고, 오른쪽 정렬과 강제 양끝 정렬은 사용하지 않습니다.
![type/alignment-medium]


### Alignment
#### Founders Grotesk Light
본문과 캡션도 왼쪽 정렬입니다. 여러 단으로 나뉜 본문은 모든 단의 첫 행 베이스라인을 맞추고, 캡션은 이미지의 왼쪽 가장자리에 정렬합니다. 오른쪽 정렬과 강제 양끝 정렬은 사용하지 않습니다.
![type/alignment-light]


### Ragging
타이포그래피에서 '래그'는 글 덩어리의 오른쪽 가장자리를 뜻합니다. 시각적 가장자리가 불규칙하게 느껴지고 특정 행이 튀어나오거나, 마지막 행에 단어 하나만 남는 경우(위도우) 문단이나 헤드라인의 래그가 나쁘다고 말합니다.

EO의 헤드라인은 짧고 행 수가 적어 래그가 그대로 드러납니다. "Build / Anyway."처럼 행마다 의미 단위가 끊어지도록 줄을 바꾸고, 긴 행과 짧은 행이 번갈아 나오는 계단 모양을 피하세요. 본문에서는 가장자리가 고르고 글이 잘 읽힐 때까지 단어를 다음 행으로 옮깁니다.
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


### Don'ts {layout=grid-3}
#### Headline
아래는 타이포그래피로 절대 하지 말아야 할 몇 가지입니다. 모든 접점에서 일관성을 보장하려면 이 가이드라인의 타이포그래피 섹션에 제시된 조판 규칙과 권장 사항을 따르세요.
![type/dont-1]{dont} 헤드라인을 전부 대문자로 사용하지 마세요
![type/dont-2]{dont} 헤드라인에 Light 웨이트를 사용하지 마세요
![type/dont-3]{dont} 행간을 87.5%보다 좁혀 획이 닿게 하지 마세요
![type/dont-4]{dont} 자간을 벌려 글자를 흩뜨리지 마세요
![type/dont-5]{dont} 가운데 정렬이나 오른쪽 정렬을 사용하지 마세요
![type/dont-6]{dont} 한 레이아웃에 세 가지 이상의 레벨을 사용하지 마세요
![type/dont-7]{dont} 헤드라인에 색을 두 가지 이상 사용하지 마세요
![type/dont-8]{dont} 외곽선 · 그림자 · 기울임을 적용하지 마세요
![type/dont-9]{dont} 헤드라인을 그래픽 유닛 위에 겹치지 마세요


### Backup Typeface
#### Pretendard
Founders Grotesk를 사용할 수 없는 환경(이메일, 외부 플랫폼의 시스템 서체 제약 등)에서는 Inter가 선호되는 대안입니다. Inter Medium을 헤드라인에, Inter Light를 본문에 사용합니다.

우리 타이포그래피의 기본 규칙을 염두에 두고 그 정신에 맞게 행동하세요. 다른 대체 폰트(Arial 등)는 피하고, Founders Grotesk를 쓸 수 없을 때만 Inter를 사용하세요.

이 페이지의 비교는 Founders Grotesk Medium과 Inter Medium의 차이점 일부를 보여 줍니다.
![type/backup-inter]


### Backup Typeface
#### Non-latin – Noto Sans
베트남어를 비롯해 Founders Grotesk와 Pretendard가 지원하지 않는 언어에는 Noto Sans가 선호되는 대안입니다. 베트남어는 Noto Sans Light 18pt, 자간 -3.5%, 베이스라인 +2pt를 Founders Grotesk Light 22pt에 맞춘 기준 조합을 사용합니다. 특정 언어에서 Noto Sans를 쓸 수 없다면 해당 언어에서 Founders Grotesk에 가장 가까운 서체를 사용합니다.
![type/backup-non-latin]




# 04 Color

## Colors

### Color
#### Builder Neon
Builder Neon은 EO 팔레트의 유일한 주인공이자 브랜드에서 가장 잘 알려진 요소로, 로고 없이도 "EO"를 전달합니다. 검은 하늘 위에서 드라마틱한 대비를 만드는 이 노랑은 밤새 불이 켜진 해커하우스의 창, 빌더의 낙관을 상징합니다. 넓은 면보다 한 구성 안의 한 곳에 집중해서 사용할 때 가장 강합니다.
![color/builder-neon]


### Color {layout=grid-4}
#### Palette
EO 팔레트는 Builder Neon과 이를 받쳐 주는 여섯 가지 색으로 이루어집니다. 

Day Blue와 Bay Green은 샌프란시스코의 푸른 하늘과 청량한 공기, 그 안의 자연에서 가져온 시원한 색으로, 보색인 Builder Neon을 더욱 선명하게 살려 주며 시리즈와 채널을 구분하는 데 사용합니다. Solid Gray와 Medium Gray는 미디어의 중립성을 담아, 어두운 회색은 배경에, 밝은 회색은 그래픽 요소에 사용합니다. Space Black과 Air White는 바탕과 텍스트의 기본이 됩니다. 

각 색의 승인된 값은 화면용 HEX · RGB와 인쇄용 CMYK · Pantone으로 제공합니다. 매체에 맞는 컬러 모드를 사용하고, Air White는 인쇄에서 잉크 대신 백색 · 미색 용지로 대체할 수 있습니다.
[swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
[swatch] Day Blue | #6EC6D2 | R110 G198 B210 | C60 M0 Y10 K0 | PANTONE 298 C
[swatch] Bay Green | #66B88A | R102 G184 B138 | C60 M0 Y50 K0 | PANTONE 2248 C
[swatch] Medium Gray | #8E8E8E | R142 G142 B142 | C2 M0 Y0 K45 or K45 only
[swatch] Solid Gray | #2A2B2B | R42 G43 B43 | C4 M0 Y0 K95 or K95 only
[swatch] Space Black | #000000 | R0 G0 B0 | C60 M60 Y0 K100
[swatch] Air White | #FCFBF5 | R252 G251 B245 | C1 M2 Y2 K0 or raw paper


### Color {layout=grid-3}
#### Pairings

이 섹션은 전반적인 컬러의 사용성에 대해 설명합니다. 에셋별 구체적인 컬러 사용법은 각 페이지의 해당 섹션에 있습니다.
- **텍스트** Air White 또는 Space Black을 기본으로 합니다.
- **로고** 심볼 · 시그니처 · 서브심볼의 컬러 페어링과 반전 규칙은 각 페이지에 있습니다. [[symbol#color]] · [[signature#color]] · [[sub-symbol#color]]
- **그래픽 유닛 · 패턴** 유닛 컬러는 Builder Neon · Air White · Day Blue · Bay Green · Medium Gray를, 배경 컬러는 Solid Gray · Space Black를 기본으로 합니다. 일반적인 상황 · 마일드한 무드에는 Solid Gray 배경을, 좀 더 강렬한 무드를 추구할 땐 Space Black 배경을 사용합니다. 브랜드의 존재감을 강하게 어필해야할 때, 전달할 정보량이 적은 지면에 한해 Builder Neon을 배경 컬러로 사용하고 그 위에 Space Black 유닛을 올립니다. 조합 규칙과 Do · Don't는 [[pattern#color-pairing]]에 있습니다.
![color/pairing-1] Air White on Space Black
![color/pairing-2] Space Black on Air White
![color/pairing-3] Space Black on Builder Neon
![color/pairing-4] Builder Neon on Space Black
![color/pairing-5] Day Blue on Space Black
![color/pairing-6] Bay Green on Space Black
![color/pairing-7] Space Black on Day Blue
![color/pairing-8] Space Black on Bay Green


### Color
#### Usage Ratio
EO를 처음 만나는 오디언스와 핵심 접점에서는 Space Black 바탕, Air White 텍스트, Builder Neon 그래픽에 크게 의존합니다. 면적으로는 블랙 70, 네온 20, 화이트 10이 기준입니다. 소셜 채널이나 시리즈 아트워크처럼 이미 "EO"로 인식되는 맥락에서는 Day Blue · Bay Green을 시리즈 구분색으로 더 자주 쓸 수 있습니다.
![color/usage-ratio]


### Color {layout=grid-3}
#### In Use
EO 팔레트가 실제로 사용된 예시입니다.
![color/in-use-1] Poster
![color/in-use-2] Hang Tag
![color/in-use-3] Web Magazine
![color/in-use-4] Episode One Tee
![color/in-use-5] Sticker Pack
![color/in-use-6] Series Thumbnail


### Color {layout=grid-3}
#### Don'ts
EO의 컬러가 일관되게 유지되도록 다음은 피하세요. 텍스트와 배경의 최소 대비는 WCAG 기준을 참고하세요.
![color/dont-1]{dont} Builder Neon을 본문 텍스트나 밝은 바탕 위 텍스트로 사용하지 마세요
![color/dont-2]{dont} 그라데이션을 만들지 마세요
![color/dont-3]{dont} 팔레트 밖의 색을 추가하지 마세요
![color/dont-4]{dont} 명도 · 채도 · 투명도를 바꿔 새로운 톤을 만들지 마세요
![color/dont-5]{dont} Medium Gray와 Solid Gray처럼 대비가 약한 조합을 쓰지 마세요
![color/dont-6]{dont} 사진에 컬러 오버레이를 씌우지 마세요
![color/dont-7]{dont} 그래픽 유닛 하나에 여러 색을 칠하지 마세요




# 05 Visual System

## Graphic Unit

### Graphic Unit
#### + Motif  {layout=grid-2}
**EO 그래픽 유닛**은 나사의 3요소인 나사축(Shaft) · 나사산(Thread) · 나사머리(Head)을 모티프로 고안되었습니다.

- **샤프트(Shaft)** — shaft는 빌딩의 과정이자 빌더의 여정을 상징합니다. shaft의 두께는 앞으로 나아가는 용기(Build anyway)의 형태를 표현합니다.
- **스레드(Thread)** — thread 한 바퀴는 문제 해결의 사이클를 상징합니다. 단단한 벽에 맞닥뜨릴수록 저항도 세고 뚫는 시간도 오래 걸립니다. thread가 촘촘할수록 빌더의 시간이 그만큼 밀도 있게 채워져 있음(Build thorough)을 나타냅니다.
- **헤드(Head)** — head 하나는 작은 승리 하나, 또는 빌더 한 사람을 상징합니다. 작은 나사도 여럿이 모이면 무엇이든 만들 수 있습니다(Build anything). 마찬가지로 빌더 한 사람이 풀지 못하는 난제도, 여러 빌더가 함께 마주하면 결국 풀립니다(Build together).
![visual/motif-1] {zoom=1.18}
![visual/motif-2]


### Graphic Unit
#### + Vocabulary {layout=grid-3}
유닛은 놓는 방향과 개수만으로 뜻을 얻습니다. 가로로 놓인 유닛 하나는 빌딩의 시간을 재는 가장 작은 단위이고, 그것을 세우거나 이어 붙이거나 마주 놓으면 빌더 · 과정 · 집 같은 읽기가 생겨납니다. 아래는 그 가장 단순한 읽기 여섯 가지입니다. 뜻을 못 박는 사전이 아니라 의미가 어디까지 넓어질 수 있는지 보여 주는 예시이며, 새로운 읽기는 언제든 더해질 수 있습니다. 유닛이 셋 이상 모여 체계를 이루는 단계는 Pattern 챕터에서 다룹니다.
![visual/unit-voca-1] 01 / 가로 하나 — 시간의 한 단위, 타임라인
![visual/unit-voca-2] 02 / 가로 둘을 이어서 — 루틴, 되풀이되는 과정
![visual/unit-voca-3] 03 / 세로 하나 — 빌더 한 사람이 될 잠재력
![visual/unit-voca-4] 04 / 세로 둘을 나란히 — 두 빌더, 개체로서의 존재감
![visual/unit-voca-5] 05 / 세로 둘을 대칭으로 — 집, EO House
![visual/unit-voca-6] 06 / 여럿을 맞물려서 — 팀, 커뮤니티의 시작


### Graphic Unit
#### + Geometry & Parameters {layout=grid-3}
**EO 그래픽 유닛**(이하 유닛)은 그래픽 시스템의 최소 단위이며, 로고의 E 블록 · 패턴 라이브러리 · 애플리케이션 그래픽 모두 동일한 시스템으로 제작되었습니다. 유닛은 **EO Graphic Builder**에서 파라미터로 생성하며, 자세한 사용 방법은 빌더 내 도움말(Help) 메뉴를 참고하시길 바랍니다.

- **shaft size** — 나사축 직사각형의 두께, 단위는 양쪽의 thread 포함 유닛 전체 높이 대비 %입니다. shaft size가 기본 값 35% 전후의 수준일 때, 비교적 복잡한 그래픽 패턴에서도 시각적 밀도를 이상적으로 유지하기 쉽습니다.
- **thread top / bottom width** — thread 윗변과 아랫변의 폭. 두 값의 차이가 thread의 기울기를 결정합니다. 기본 값은 위 40% · 아래 0%.
- **thread sides** — double은 shaft 위아래 양쪽, single은 위쪽에만 thread가 붙고 shaft가 아래쪽 바닥에 놓입니다.
- **thread amount** — shaft 위아래에 하나씩 붙는, 나사산을 추상화한 사다리꼴 쉐입. 오른쪽 변은 컬럼 끝에 수직으로 서고, 왼쪽 변은 기울어집니다. 아래쪽 thread는 위쪽을 컬럼 중심 기준으로 180° 회전한 모양입니다.
- **thread compression** — thread 폭이 한쪽으로 갈수록 점점 좁아지는 정도. 0이면 모든 thread의 너비가 균등하고, 값이 커질수록 한쪽으로 압축되는 세기가 강해집니다. 음수/양수 값은 compression의 방향을 결정하며, 개별 thread의 기울기는 반전되지 않고 그대로 유지됩니다.
- **gutter** — thread가 놓이는 세로 칸과 칸 사이 간격. gutter 구간에서 thread는 비고 shaft만 이어집니다.

![visual/param-shaft-size] shaft size — shaft의 두께 2-95%
![visual/param-thread-width] thread top / bottom width — 기울기의 변화
![visual/param-thread-sides] thread sides  — double · single
![visual/param-thread-amount] thread amount — thread 수
![visual/param-thread-compression] thread compression — thread 압축 방향 · 세기
![visual/param-gutter] thread sides — thread 사이 간격 10-50px


### Graphic Unit {layout=grid-4}
#### + Proportion & Rhythm
파라미터를 어떻게 잡느냐에 따라 유닛의 비례와 리듬은 달라집니다. 비례는 shaft 두께와 thread 수가 유닛의 길이에 맞을 때 좋아지고, 리듬은 compression으로 thread 간격이 한쪽으로 흐를 때 생깁니다. 이 섹션은 유닛 하나와 쌍까지를 다루며 셋 이상이 모이는 구성은 [[pattern#grammar]]을 참조하세요. 유닛과 배경의 색 조합에 대해선 [[pattern#color-pairing]]을 참조하세요.

- **리듬** compression이 0이면 thread가 균일하게 되풀이되어 줄무늬처럼 보입니다. 기본값 2:1처럼 한쪽으로 수렴시켜 방향과 속도를 만드세요.
- **짧은 유닛** 길이가 짧을수록 thread 수를 줄이고[6–8] shaft를 두껍게 합니다. thread가 많으면 뭉개지고, shaft가 가늘면 힘이 없습니다.
- **긴 유닛** 길이가 길수록 thread 수를 늘리되[12–16] compression을 유지해 끝까지 흐름이 이어지게 합니다. 같은 thread가 끝없이 되풀이되면 리듬이 사라집니다.
- **쌍** 두 유닛을 이을 때는 compression의 방향을 맞추고, 마주 놓을 때는 대칭을 정확히 맞춥니다. 두 유닛의 thread 수와 shaft 두께가 다르면 한 몸으로 읽히지 않습니다.
![visual/unit-rhythm-do-1]{do} 짧은 유닛 — thread는 적게, shaft는 두껍게
![visual/unit-rhythm-dont-1]{dont} 짧은 유닛에 thread를 빽빽하게 넣지 마세요
![visual/unit-rhythm-do-2]{do} 긴 유닛 — thread는 많게, compression은 유지
![visual/unit-rhythm-dont-2]{dont} compression 0의 균일한 되풀이를 쓰지 마세요
![visual/unit-rhythm-do-3]{do} 쌍 — compression 방향을 맞춰 연결
![visual/unit-rhythm-dont-3]{dont} thread 수가 다른 두 유닛을 잇지 마세요
![visual/unit-rhythm-do-4]{do} 세운 유닛 — 길이 방향으로 충분한 비례
![visual/unit-rhythm-dont-4]{dont} 세운 유닛을 납작하게 쓰지 마세요


### Graphic Unit {layout=grid-3}
#### + Don'ts
유닛 지오메트리의 모든 변형은 Graphic Builder의 파라미터 안에서만 이루어져야 하며, 수동으로 변형하는 것은 가급적 지양합니다. 유닛의 심미성과 의미는 평면 위에 펼쳐진 thread의 밀도 변화에서 나오므로, 그 평면이 흐트러지면 compression이 만드는 리듬도 함께 무너지기 때문입니다. 

단, 유닛이 놓인 평면 전체를 아이소메트릭이나 원근으로 투영하는 입체적 확장은 EO 브랜드팀의 검토를 거쳐 제한적으로 시도할 수 있습니다.
![visual/unit-dont-1]{dont} 유닛을 90° 단위가 아닌 각도로 회전하지 마세요
![visual/unit-dont-2]{dont} 유닛의 형태를 기울이지 마세요
![visual/unit-dont-3]{dont} thread를 임의로 지우거나 추가하지 마세요
![visual/unit-dont-4]{dont} 한 유닛에 두 가지 이상의 색을 칠하지 마세요
![visual/unit-dont-5]{dont} Solid Gray는 배경 컬러 전용이므로 유닛 컬러로 사용하지 마세요
![visual/unit-con]{con} 유닛을 입체적인 평면 위에 투영하기



## Pattern


### + Grammar {layout=grid-3}
같은 유닛을 아래 여섯 가지 방법으로 놓아서 패턴은 만듭니다. 30종 모두 이 방법들의 조합입니다.
![visual/comp-1] 압축 — compression으로 한쪽으로 수렴하는 밀도 차이를 만듭니다
![visual/comp-2] 세우기 — 유닛을 90° 돌려 세로로 놓습니다. 대부분의 패턴은 세운 유닛의 나열입니다
![visual/comp-3] 마주 보기 — 좌우 반전한 유닛을 마주 놓아 대칭을 만듭니다
![visual/comp-4] 쌓기 — 유닛을 행으로 쌓고 행마다 색을 바꿔 띠를 만듭니다
![visual/comp-5] 도킹 — 두 유닛의 shaft를 이어 하나의 축으로 맞물립니다
![visual/comp-6] 블렌드 — 같은 유닛을 일정 비율로 작아지게 복제해 원근을 만듭니다


### Pattern {layout=grid-4}
#### + Color Pairing
Solid Gray · Space Black를 배경 컬러, Builder Neon · Air White  · Day Blue · Bay Green · Medium Gray을 유닛 컬러로 사용하는 것이 기본 조합입니다. 여러 유닛을 나란히 놓을 때는 명도 차가 비슷한 Day Blue · Bay Green · Medium Gray를 균일한 비중 · 위치 · 동세로 배치하거나, 명도가 높은 Builder Neon · Air White를 시각 초점으로 활용해 캔버스의 깊이감을 의도적으로 조절하세요.
- 하나의 유닛에는 반드시 하나의 컬러만 적용합니다. 
- **하나의 그래픽에 동시에 사용하는 유닛 컬러는 최대 3가지**까지 권장되며, Builder Neon · Day Blue · Bay Green · Medium Gray 고정 조합에 한해 최대 네 가지까지 사용할 수 있습니다.
- Medium Gray 유닛만을 단독으로 사용하지 않고 다른 컬러의 유닛과 조합하여 사용합니다. 

일반적인 상황 · 마일드한 무드에는 Solid Gray 배경을, 좀 더 강렬한 무드를 추구할 땐 Space Black 배경을 사용합니다. 브랜드의 존재감을 강하게 어필해야할 때, 전달할 정보량이 적은 지면에 한해 Builder Neon을 배경 컬러로 사용하고 그 위에 Space Black 유닛을 올립니다.

- 배경 컬러로 Solid Gray를 사용하면, 5개의 유닛 컬러 모두 충분한 균형을 유지하면서 전체 대비가 한 단계 낮아져 차분하게 묶이므로 우선적으로 고려합니다. 
- Builder Neon · Day Blue · Bay Green · Air White 를 배경 컬러로 쓸 때는 Space Black 유닛만 올릴 수 있습니다.
- Solid Gray는 반드시 배경 컬러으로만 사용하며 유닛 컬러로는 사용하지 않습니다.
- Medium Gray는 디지털 환경에서 가급적 배경 컬러로 사용하지 않습니다. Merch 제작 시 질감이 있는 현실 소재의 컬러를 Medium Gray로 맞출 수 있는 경우에 한해, EO 브랜드팀의 허가를 거쳐 Builder Neon · Space Black 유닛을 제한적으로 올릴 수 있습니다.
![visual/unit-color-do-1] {do}[Builder Neon] · [Day Blue] · [Bay Green] · [Medium Gray] · [Air White] on [Solid Gray]
![visual/unit-color-do-2] {do}[Builder Neon] · [Day Blue] · [Bay Green] · [Medium Gray] · [Air White] on [Space Black]
![visual/unit-color-do-3] {do}[Space Black] on [Builder Neon] · [Day Blue] · [Bay Green]
![visual/unit-color-do-4] {do}[Space Black] on [Air White]
![visual/unit-color-dont-1] {dont}[Space Black] on [Solid Gray] or vice versa
![visual/unit-color-dont-2] {dont}[Medium Gray] alone on [Solid Gray] · [Space Black]
![visual/unit-color-dont-3] {dont}[Day Blue] · [Bay Green] · [Medium Gray] · [Air White] on [Builder Neon]
![visual/unit-color-dont-4] {dont}[Builder Neon] · [Bay Green] · [Medium Gray] · [Air White] on [Day Blue]
![visual/unit-color-dont-5] {dont}[Builder Neon] · [Day Blue] · [Medium Gray] · [Air White] on [Bay Green]
![visual/unit-color-dont-6] {dont}[Builder Neon] · [Day Blue] · [Bay Green] · [Medium Gray] on [Air White]
![visual/unit-color-dont-7] {dont}[Day Blue] · [Bay Green] · [Air White] on [Medium Gray]
![visual/unit-color-con] {con}[Builder Neon] · [Space Black] on [Medium Gray]


### Pattern {layout=grid-4} {ratio=16:9} {zoom=1.04}
#### References
유닛을 조합해 만든 30종의 패턴 라이브러리입니다. 각 패턴은 번호가 아니라 빌더의 여정에서 가져온 키워드 하나를 이름으로 가지며, 캠페인 · 굿즈 · 소셜 · 영상 등 모든 접점에서 재사용합니다. 새 패턴이 필요하면 라이브러리에서 고르는 것이 먼저이고, 추가는 EO 브랜드팀의 승인을 거칩니다.
![visual/pattern-01] 01 / path of builder
![visual/pattern-02] 02 / power
![visual/pattern-03] 03 / resistance
![visual/pattern-04] 04 / builders
![visual/pattern-05] 05 / rivals
![visual/pattern-06] 06 / team
![visual/pattern-07] 07 / backing
![visual/pattern-08] 08 / teamwork
![visual/pattern-09] 09 / co-working
![visual/pattern-10] 10 / rallying
![visual/pattern-11] 11 / conviction
![visual/pattern-12] 12 / resonance
![visual/pattern-13] 13 / advantage
![visual/pattern-14] 14 / disadvantage
![visual/pattern-15] 15 / cycle
![visual/pattern-16] 16 / routine
![visual/pattern-17] 17 / competition
![visual/pattern-18] 18 / collective intelligence
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
![visual/pattern-30] 30 / boom


### Usage
패턴은 배경이 아니라 주인공으로 사용합니다. 레이아웃의 한쪽 절반(보통 오른쪽)을 통째로 내어 주고, 헤드라인은 반대쪽에 왼쪽 정렬로 놓습니다. 텍스트를 패턴 위에 겹치지 않고, 로고는 패턴 바깥의 여백에 배치합니다. 패턴은 잘라 쓸 수 있지만 thread의 사다리꼴이 중간에서 잘리지 않도록 컬럼 경계에서 크롭합니다.



## Applications

### + Principles
패턴을 지면에 올릴 때 지키는 네 가지입니다.

- **밀도는 보는 거리에 맞춥니다.** 빌보드처럼 멀리서 보는 큰 면은 복잡도를 끝까지 올려 밀도로 시선을 잡고, 가까이서 보는 포스터는 중간 복잡도에 둡니다.
- **한 장에 여러 변형을 둘 수 있습니다.** 같은 모티프의 변형 여러 개를 한 구성에 놓아 리듬을 만듭니다.
- **패턴은 어떤 비율에도 맞습니다.** 지면을 서브 레이아웃으로 나누면 한 프레임에 여러 메시지를 실을 수 있습니다.
- **thread의 방향으로 시선을 이끕니다.** 모든 thread가 한 점으로 모이게 놓으면 그 자리의 마크나 메시지로 시선이 갑니다.
![visual/app-principles]


### Digital {layout=grid-3}
웹 매거진 · 소셜 피드 · 영상 썸네일 등 디지털 접점입니다. 유닛은 모션으로 확장되어 compression이 시간에 따라 변하며, 썸네일에서는 유닛의 일부만 컬럼 경계에서 크롭해 사용합니다. 웹의 그리드(12컬럼, 거터 40, 마진 44 @1728)는 유닛의 컬럼 그리드와 같은 체계를 공유합니다.
![visual/app-web] Web Magazine
![visual/app-social] Social Feed
![visual/app-thumbnail] Video Thumbnail


### Print {layout=grid-3}
포스터 · 행택 · 스티커 · 핀 등 인쇄물입니다. Air White 바탕에 Space Black 유닛을 기본으로 하고, Builder Neon은 한 면에만 사용합니다. 행택은 앞면에 패턴, 뒷면에 사이즈와 소재 정보를 모노로 적습니다.
![visual/app-poster] Poster
![visual/app-hangtag] Hang Tag
![visual/app-sticker] Sticker Pack & Pin


### Merch {layout=grid-3}
티셔츠 · 후디 · 캡으로 구성된 굿즈 라인입니다. 실크스크린 단색 그래픽을 기본으로 합니다. 티셔츠는 앞면 가슴에 EO 심볼을 작게, 뒷면에 유닛을 단순하게 정리한 전용 그래픽을 크게 놓고, 후디는 앞면에 블렌드 패턴을 올립니다. 컬러웨이는 원단색에 맞춰 Space Black · Builder Neon · Day Blue 중 하나를 고릅니다.
![visual/app-tee] Oversized Tee
![visual/app-hoodie] Hoodie
![visual/app-cap] 5-panel Cap
