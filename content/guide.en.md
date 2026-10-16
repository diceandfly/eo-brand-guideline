<!--
=====================================================================
EO Brand Guidelines — 콘텐츠 파일 튜토리얼 (영어판)
=====================================================================
이 파일은 영어판입니다. 한국어판은 guide.ko.md 이며 문법은 같습니다.
두 언어가 한 사이트에 같이 빌드됩니다. 영어판은 /en/… , 한국어판은 /ko/… 이고
목차 하단의 EN | KR 로 전환합니다. 같은 챕터·서브챕터 이름(slug)이 있으면 같은 페이지로, 없으면 첫 페이지로 갑니다.

■ 위계 (기호로 구분)
  # 02 Logo              ← 챕터.   "번호 이름" 형식. 번호는 목차와 URL(/02-logo/…)에 쓰입니다.
  ## Logo                ← 서브챕터. 페이지 하나가 됩니다. URL: /02-logo/logo
  ### Construction       ← 섹션 헤드. 목차의 앵커로도 쓰입니다.
  #### Primary Lockup    ← 서브헤드 (선택). 헤드 바로 다음 줄에만 씁니다. 없으면 표시되지 않습니다.
  그 아래 줄들            ← 본문. 마크다운(문단, 굵게, 링크, 목록)을 쓸 수 있습니다.

■ 이미지 (한 줄에 하나)
  ![construction]
    → 파일 이름만 씁니다. 이 서브챕터의 이미지 폴더 안에서 같은 이름의 .svg .png .jpg .webp 를 찾아 넣습니다.
      파일: public/assets/<챕터>/<서브챕터>/<주제 번호>-<이름>  예) public/assets/02-logo/01-symbol/04-clearspace.png
      주제 = 목차 항목(헤드, 헤드가 페이지 이름과 같으면 서브헤드). 앞 번호는 페이지 순서대로 정렬하기 위한 것이라
      없거나 틀려도 이미지는 나옵니다. 이름만 붙여 넣어도(clearspace.png) 됩니다.
    → 파일이 아직 없으면 넣을 경로와 비율이 적힌 플레이스홀더 박스가 나옵니다.
    → 섹션 순서를 바꾸거나 이름만 붙여 넣은 뒤 npm run assets 를 실행하면 파일 앞 번호를 지금 순서에 맞춰 줍니다.
    → 예전 형식 ![logo/construction] 도 그대로 동작합니다 (앞의 logo/ 는 무시).
  ![dont-stretch]{dont} Don't stretch the logo
    → {do} 또는 {dont} 를 붙이면 캡션 줄 맨 앞에 체크 / 엑스 아이콘이 붙습니다.
    → 뒤에 글을 쓰면 이미지 아래 캡션이 붙습니다 (= 카드). 배지만 있고 글이 없으면 "Do" / "Don't" 가 기본 문구.

■ 따옴표
  본문·캡션·헤드 어디서든 곧은 따옴표 " 와 ' 로 씁니다. 화면에는 자동으로 둥근 따옴표 “ ” ‘ ’ 로 바뀝니다.
    → "Build Anyway." 는 “Build Anyway.” 로, Don't 는 Don’t 로 표시됩니다. `코드` 안은 바뀌지 않습니다.

■ 스와치 (컬러 스펙 카드)
  [swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
    → 이름 | HEX | 이후는 자유 항목. HEX 는 색면 채우기에 쓰입니다.

■ 레이아웃
  섹션 안의 이미지/스와치 개수로 자동 결정됩니다.
    0개 → text    (텍스트만, 8컬럼)
    1개 → basic   (텍스트 4컬럼 + 이미지 6컬럼)
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
  섹션 목록 숨김 : ## 이름 {toc=none}  ← 이 페이지는 목차에서 섹션 목록을 펼치지 않음 (섹션이 하나뿐이면 자동으로 숨김)
  같은 헤드 반복 : 가능합니다. 목차에는 한 번만 표시되고 첫 번째로 이동합니다.
  목차에 올릴 섹션 고르기 : ### + Construction  ← 헤드 앞에 + 를 붙이면 그 섹션만 목차에 오름 (에디터에서는 제목으로 보임).
                        한 페이지에 + 가 하나라도 있으면 + 붙은 것만, 하나도 없으면 전부(자동) 올라갑니다.
                        헤드가 반복되는 섹션은 서브헤드 줄에 붙여도 됩니다: #### + Clearspace
                        {layout=…} 속성도 헤드 줄·서브헤드 줄 어느 쪽에 써도 됩니다.
                  헤드가 페이지 이름과 같으면(Colors 페이지의 "Color") 목차에는 서브헤드가 표시됩니다.

■ 지금 상태
  EO 버전 더미 콘텐츠 초안의 영어 번역입니다. [대괄호] 안은 아직 확정되지 않아 채워야 하는 값입니다.
=====================================================================
-->

# 01 Overview

## Welcome

### Welcome to the EO Brand Guidelines
EO is media for builders. We earn trust, not clicks. We count the people who come back instead of views, and we record the real journeys of founders instead of chasing the loudest thumbnail.

These guidelines explain the basic elements of the EO identity system — logo, typography, color, and the visual system — and how we use them to build the brand. When you understand and follow them, content made in Seoul, San Francisco, or Saigon looks and reads as one EO.

External partners who wish to use EO brand assets should contact jemin@eoeoeo.net. 

Build Anyway.

The EO Brand Team

## Legal Brand Guidelines

### Legal Brand Guidelines
EO, the EO monogram, the Block symbol, “Build Anyway”, “Even the Odds”, and any other trademark owned by EO Studio (the “EO Marks”), together with other brand materials such as logos, graphic units, patterns, and the EO look and feel (the “Brand Assets”), are the exclusive property of EO Studio. Except as permitted here, you must have prior permission from EO before using any of the EO Marks or Brand Assets.

### Do's
- Always follow these Brand Guidelines when using the EO Marks and Brand Assets.
- You may use the EO Marks to let people know that you appeared in EO content or took part in an EO program, as long as it does not imply that EO endorses or sponsors your product or service.
- When quoting EO videos or articles, credit the source clearly as “EO” and link to the original.
- Use the EO Marks and Brand Assets only as provided, in the original files and within the approved color pairings.

### Don'ts
- Incorporate the EO Marks, or any mark confusingly similar to them, into the name of a company, product, service, event, community, URL, social media account, or trademark.
- Modify or recombine the Block symbol, graphic units, or patterns into graphics of your own.
- Re-edit or re-upload EO videos, articles, or thumbnails without EO’s permission.
- Copy or imitate the look and feel of the EO website, magazine, or social channels, including layouts, color combinations, typefaces, and the graphic system.
- Use the EO Marks alongside political or religious messaging, adult content, or discriminatory content.
- Use the EO Marks or Brand Assets on merchandise without permission.

# 02 Logo

## Symbol

### Logo
#### + Overview
The EO logo is the umbrella term for every mark covered in this chapter: the EO Symbol, the EO Signature, the Service Signatures, and the EO Sub Symbol.
![logo/hero]


### Symbol
The EO Symbol is both a graphic metaphor built on a screw motif that makes the brand recognizable, and a monogram that holds the two letters E and O. Throughout these guidelines, this logo is referred to as the **EO Symbol**.

The EO Symbol is the most iconic and effective way to signal the EO brand. This page explains how to apply it across situations, formats, and communications, from small sign-offs to large display executions.
![logo/symbol]{zoom=1.3}


### Symbol
#### + Geometry
The EO Symbol is a monogram built from two blocks. The E block depicts the facade of a screw and consists of a shaft — the base geometry of our graphic unit — and three tiers of threads. The O block is an octagonal screw head pierced by a cross. Set side by side, the two blocks stand for “Entrepreneur Onwards.”
![geometry]


### Symbol
#### + Clearspace
Clearspace is the minimum safeguard that protects the symbol whenever it sits next to other visual elements, such as typography, graphic units, images, or the edges of the canvas. Taking the vertical height of one E block as H, always keep a margin of at least H/2 on every side between the symbol and anything around it.
![logo/clearspace]


### Symbol
#### + Scalability
The EO Symbol is designed and tested to work across a wide range of sizes.

The **optimal range** is 40–100px in height (approx. 8–20mm) on a 16-inch Mac display viewed from 500mm. Relative to viewing distance, that is 1/60–1/25 of the distance; use this ratio to size the symbol in other media. The optical correction of the thread angles is also tuned to this range.

The **minimum size** is 20px in height on screen (approx. 4mm, 1/125 of the viewing distance) and 5mm in height in print. Below this, the threads of the E block begin to fill in, so check with the EO Brand Team before going smaller.
![logo/scalability]


### Symbol
#### + Inversion
The EO Symbol is built primarily for a light symbol in a bright color, such as Builder Neon or Air White, on a dark background such as Space Black or Solid Gray. When you need a dark symbol on a light background, simply inverting the colors creates an optical illusion: the shape looks thinner and more loosely spaced.

In this case, offset the outline of the light symbol outward by H/100, then scale each of the two blocks up proportionally by H/30 in all four directions. Finally, reduce the gap between the two expanded blocks from the original (4/30)H to (3/30)H to complete the dark symbol. This converts a light symbol anywhere on the size spectrum into its equivalent dark symbol.

On a light background, clearspace also tends to look larger than it is. Keep the clearspace of the equivalent light symbol as is, and center the dark symbol within it.
![inversion]


### + Usage
#### Placement
The EO Symbol is a bold yet simple shape. In a typical layout, we therefore recommend using it as a sign-off in one of the four corners of the content area. The symbol should take a step back, so that the main content can lead in a video thumbnail that has to earn a click, and the graphic pattern can lead in a poster that has to catch the eye.

When used as a sign-off, place the symbol in the corner farthest from the hero of the layout — a person or a graphic pattern — with comfortable distance from the surrounding visual elements. This keeps symbol placement simple and consistent, while leaving enough flexibility to accommodate our dynamic graphic system.
![logo/usage-placement]


### Usage {layout=grid-2}
#### Do's & Don'ts
When using the symbol for display purposes, **avoid raising its visual hierarchy simply by making it bigger.** Secure generous empty space around the symbol so that it keeps its impact at a moderate size. As a rule of thumb, the symbol works best when it occupies around 10–20% of the empty area, with a margin of at least 2–3 times its size from surrounding elements.
![logo/usage-do-1]{do} Size the symbol at around 10–20% of the empty space it sits in
![logo/usage-do-2]{do} Surround the symbol with generous space so it holds strong presence even at a moderate size
![logo/usage-dont-1]{dont} Don’t enlarge the symbol to fill the empty space
![logo/usage-dont-2]{dont} Don’t place the symbol against other elements without space


### Symbol
#### + Color {layout=grid-3} {zoom=1.6}
The EO Symbol has six primary color pairings. **The symbol is always rendered in a single color**; when you’re unsure about the background, use one of the following.
![logo/color-1] 1. Space Black on Builder Neon
![logo/color-2] 2. Air White on Space Black
![logo/color-3] 3. Air White on Solid Gray
![logo/color-4] 4. Space Black on Air White
![logo/color-5] 5. Builder Neon on Space Black
![logo/color-6] 6. Space Black on Solid Gray


### + Over Imagery {layout=grid-2}
#### Do's & Don'ts
The EO Symbol must always read clearly over photography, so overlay the Air White symbol on images that provide sufficient contrast. If an image is too bright or has areas that are too white, the symbol risks getting lost in the composition; in that case, overlay a gradient or a black box at around 30% opacity before applying the symbol.

The composition should be simple enough to let the symbol stand out. Images that are overly complex or have the key subject dead center become cluttered once the symbol is placed on them. Keep this in mind when choosing images, or reposition the image to suit its relationship with the logo.

The guidance in this section focuses on overlays on still images rather than video sequences, where the composition keeps changing.
![logo/imagery-do-1]{do} Place the symbol where it contrasts clearly with the background
![logo/imagery-do-2]{do} When a photo’s brightness is uneven, overlay a gradient at around 30% opacity to secure contrast
![logo/imagery-dont-1]{dont} Don’t place the symbol over a person’s face or the key subject
![logo/imagery-dont-2]{dont} Don’t place the symbol where it lacks contrast with the photo


### + Partner Lockup
#### Horizontal
The following image shows the primary horizontal lockup of the EO Symbol with partner brands and collaborators’ logos.

The elements should be optically adjusted so that they appear to be the same size. Once each logo is sized, add space between them along with a vertical dividing line or a collaboration mark. The space between the EO Symbol and the partner logo equals 2 or 3 times the width of one E block (W), and the two logos must always be optically centered on the vertical axis.
![logo/partner-horizontal]


### Partner Lockup
#### Vertical
The following image shows the primary vertical lockup of the EO Symbol with partner brands and collaborators’ logos.

The elements should be optically adjusted so that they appear to be the same size. Once each logo is sized, add a horizontal dividing line between them. The space between the EO Symbol and the partner logo equals 1.5 times the height of the EO Symbol (H), and the two logos must always be optically centered on the horizontal axis.
![logo/partner-vertical]


### Partner Lockup
#### Optical Adjustment
In some cases, a partner’s logo may not look perfectly balanced when aligned with the EO Symbol. Because the EO Symbol is wide and heavy, a thin or tall partner logo can look smaller even at a mathematically equal height.

In such cases, optically scale the partner logo up or down to create a more equal hierarchy.
![logo/partner-optical]


### + App & Social Icons
#### Alignment
Because the EO Symbol is asymmetrical from left to right, placing it dead center in an app icon or profile image makes its visual weight appear to lean slightly to the left — and the smaller it appears, the more noticeable this becomes. When applying the symbol within a tight frame, shift it to the right by n px according to the following rule.

**n = H × (4 − 0.06 × S) %**

H is the symbol’s height in the working file (px), and S is the height at which the symbol actually appears on screen or in the end user’s view (mm). When n is positive, shift the symbol to the right; when n is negative, no correction is needed. The formula is an approximation derived from the optimal correction values measured at each symbol size under typical desktop working conditions. It was tested for a visible symbol height S of 4–50mm (at a viewing distance of 500mm), with a maximum error of ±0.02mm.

When applying the symbol to surfaces larger than a desktop monitor, set the range by the end user’s typical viewing distance and apply the formula using the average size across the key range.
![logo/icon-alignment]


### App & Social Icons
#### In Use
The following image shows the EO Symbol in use as an app icon.
![logo/icon-in-use]


### Symbol {layout=grid-3}
#### + Don'ts
To keep the EO Symbol consistent and impactful, it should never be reinterpreted, modified, or embellished. This page shows examples of modifications to avoid. When the company name needs to appear, use the EO Signature instead of the symbol. When a sub-brand needs to be identified, consult the EO Brand Team and create a service signature.


![dont-1]{dont} Don’t stretch or distort the symbol
![dont-2]{dont} Don’t rotate the symbol
![dont-3]{dont} Don’t outline the symbol
![dont-4]{dont} Don’t use a color symbol with a black outline on a light background
![dont-5]{dont} Don’t change the number, angle, or spacing of the E’s threads
![dont-6]{dont} Don’t apply visual effects such as glows, shadows, or gradients
![dont-7]{dont} Don’t scale the symbol so large that it fills most of the space
![dont-8]{dont} Don’t use the symbol as a mask for photos or patterns, or in unapproved colors
![dont-9]{dont} Don’t add arbitrary context around the symbol


## Discripter

### Symbol
#### Overview
In specific instances the EO logo can be reduced to the E block alone. We call this the Block symbol. The most prominent uses of the symbol by itself are contexts where size constraints rule out the full monogram: app icons, favicons, social media avatars, and pin badges. The Block symbol shares its geometry with the graphic unit, so it connects naturally with the whole visual system.
![symbol/overview]

### Symbol
#### Clearspace
A certain amount of space is needed around the symbol to prevent it from becoming cluttered by surrounding artwork, imagery, or the edge of a page. To the right is the minimum spacing for the Block symbol: one third of the symbol’s width, applied equally on the left side where the threads project.
![symbol/clearspace]

### Symbol
#### Scalability
The Block symbol is designed and tested to work at various sizes. The minimum symbol size for adequate legibility in digital applications is 16px in height. For favicons smaller than 16px, use the reduced version with two steps of thread.
![symbol/scalability]

### Symbol
#### Horizontal Lockup
The Block symbol can be locked up with partner brands and collaborators’ logos. To the right is an example of our primary lockup construction.

The size of the elements should be optically adjusted so that they appear to be the same size. Once the logos have been sized, we can add space and a dividing line between them. The space between the symbol and the partner logo (X) is half the width of the symbol.
![symbol/lockup-horizontal]

### App & Social Icons
#### Alignment
For digital applications the symbol is locked up in a rounded-square container (app icon) or a circular container (social avatar). To the right is how to align the symbol inside each. The symbol is optically aligned to the center of the shaft — excluding the threads — rather than the geometric center of the container, and its height is [50]% of the container height.
![symbol/icon-alignment]

### App & Social Icons
#### Scalability
The symbol icon is designed and tested to work at various sizes. The smallest symbol icon should be 32px tall to be legible; below that, use the reduced symbol.
![symbol/icon-scalability]

### App & Social Icons {layout=grid-2}
#### Color Pairings
There are two primary color pairings for the EO app and social icons. When in doubt, use one of these. The main YouTube and Instagram channels use Builder Neon on Space Black; regional channels (KR, US, VN) use Space Black on Builder Neon to tell them apart.
![symbol/icon-color-1] Builder Neon on Space Black
![symbol/icon-color-2] Space Black on Builder Neon

### App & Social Icons
#### In Use
To the right is an example of the EO app icon and social avatar in use.
![symbol/icon-in-use]

### Symbol {layout=grid-3}
#### Don'ts
To ensure our brand signature remains consistent and impactful, the symbol should not be reinterpreted, modified, or embellished. This page illustrates some modifications to avoid.
![symbol/dont-stretch]{dont} Don’t stretch or distort the symbol
![symbol/dont-tilt]{dont} Don’t tilt the symbol
![symbol/dont-flip]{dont} Don’t flip the symbol horizontally
![symbol/dont-outline]{dont} Don’t outline the symbol
![symbol/dont-thread]{dont} Don’t add or remove threads
![symbol/dont-mask]{dont} Don’t use the symbol as a mask
![symbol/dont-shadow]{dont} Don’t apply drop shadows or 3D effects
![symbol/dont-color]{dont} Don’t use unapproved color pairings on the symbol
![symbol/dont-o]{dont} Don’t use the O block as a standalone symbol

# 03 Typography

## Typography

### Our Typefaces
EO’s typeface is the Founders Grotesk family. Founders Grotesk is used for headlines and body copy; Founders Grotesk Mono is used for informational text — labels, tags, dates, and specifications.

Founders Grotesk is plain and clear. Its wide proportions and low contrast make it read like solid blocks at large sizes, which carries EO’s voice of “clear, open confidence” directly. The Mono is the typeface of information, recalling a builder’s terminal and spec sheet.

Korean body copy is set in Pretendard and Vietnamese body copy in Noto Sans. See the Backup Typeface section for multilingual pairing.
![type/our-typefaces]

### Custom Characters
EO does not modify the glyphs of its typefaces. Instead, two brand marks taken from the O block are used alongside text. The plus (+) is the conjunction in “Entrepreneur + Optimism” and the action mark on buttons and links; the spark (✦) is the bullet for lists and quotes. Both marks are supplied as vector files rather than taken from the font, and they are sized to the x-height of the text they accompany.
![type/custom-characters]

### Character Set {layout=wide}
#### Founders Grotesk Medium
This page shows an overview of most of the characters in Founders Grotesk Medium. Medium is the default weight for headlines and display typography. The typeface supports Latin Extended characters, including Vietnamese tone marks. For scripts it does not support, such as Hangul, use the alternatives in the Backup Typeface section.
![type/charset-medium]

### Character Set {layout=wide}
#### Founders Grotesk Light
This page shows an overview of most of the characters in Founders Grotesk Light. Light is the default weight for body copy, subheads, and captions. It can look thin at large sizes, so use it at 24pt and below.
![type/charset-light]

### Character Set {layout=wide}
#### Founders Grotesk Mono
This page shows an overview of most of the characters in Founders Grotesk Mono Regular.

NOTE: The Mono is for informational text only. Use it for tags, dates, reading time, color specifications, and caption numbers — never for headlines or body copy.
![type/charset-mono]

### Typeface Usage
To balance EO’s solid visual identity with clear communication, weight selection should be approached with clear intention.

Use Founders Grotesk Medium for headlines and display.

Use Founders Grotesk Light for body copy, subheads, and captions.

Use Founders Grotesk Mono Regular for informational text such as tags, dates, and specifications.

Regular and Semibold are reserved for UI components (buttons, navigation) and are not used in communication design.
![type/typeface-usage]

### Case Setting
EO headlines are set in sentence case and end with a period. “Build Anyway.” “Trust, not clicks.” A headline is a sentence, not a slogan, and the period is the conviction behind it. All caps is used only for Mono labels, never for headlines.
![type/case-setting]

### Linespacing
EO typography is calculated from line spacing, not font size. Once a base line-spacing unit (L) is set, each level’s line spacing is a multiple of it, and the font size is that line spacing divided by the level’s ratio. This keeps the space text occupies fixed as layouts develop, and lets you fine-tune the gray value of each level by eye through ratio and letterspacing alone.

Display 7L / 87.5%, Head 3L / 109%, Sub-head 2L / 133%, Body 1.5L / 150%, Caption 0.5L / 125%.
![type/linespacing]

### Linespacing
#### Founders Grotesk Medium
To the right are headline examples of correct and incorrect linespacing set in Founders Grotesk Medium.

At the Display and Head levels, line spacing is smaller than the font size (87.5%, 109%). Lines are meant to interlock like blocks, but ascenders and descenders must never touch. If they do, change the copy — not the ratio.
![type/linespacing-medium]

### Linespacing
#### Founders Grotesk Light
To the right are examples of correct and incorrect linespacing of body copy set in Founders Grotesk Light.

At the Body level, line spacing is 150%. Tighter than this, the thin strokes of the Light weight clump together; looser, the paragraph falls apart. If set right, it should allow readers to breeze through text.
![type/linespacing-light]

### Linespacing Scale {layout=wide}
#### Founders Grotesk Medium
To the right are some examples of linespacing for headlines at different scales.

Note that as a general rule, the bigger the typography, the tighter the linespacing ratio should be. Display 87.5%, Head 109%, and Sub-head 133% are ratios that change with size on the same base unit.
![type/linespacing-scale-medium]

### Linespacing Scale {layout=wide}
#### Founders Grotesk Light
To the right are some examples of linespacing for body copy at different scales.

Note that as a general rule, the smaller the typography, the looser the linespacing ratio should be. Body 150% and Caption 125% are ratios that change with size on the same base unit.
![type/linespacing-scale-light]

### Letterspacing
For large headlines and title moments, the typography must go through a three-step process to ensure letterspacing is both tight and optically equal across all letters. This process is outlined below:

**Step 1: Original**
This is the space between the letters before letterspacing metrics have been applied.

**Step 2: Tracking**
This is the spacing that is applied across all letters. The defaults per level are Display -3%, Head -2%, Sub-head -1.5%, Body -1%, Caption 0.

**Step 3: Kerning**
Once the right tracking amount has been set, you need to manually adjust (or kern) specific spaces between letters to ensure no letters are touching and there is equal spacing across all the letters. Founders Grotesk particularly needs kerning where diagonal strokes meet, as in “A” and “y” or “W” and “a”.
![type/letterspacing]

### Letterspacing
#### Founders Grotesk Medium
To the right are examples of correct and incorrect letterspacing of headlines set in Founders Grotesk Medium.

At Display size, tracking is -3%. This is the point where letters sit together like blocks without strokes touching. Any tighter and combinations of consecutive vertical strokes, such as “ild”, read as one mass.
![type/letterspacing-medium]

### Letterspacing
#### Founders Grotesk Light
To the right are examples of correct and incorrect letterspacing of body copy set in Founders Grotesk Light.

At Body size, tracking is between -1% and 0. The Light weight loses legibility quickly when tracked tighter, so if you want to adjust the gray value, adjust the line spacing rather than the letterspacing.
![type/letterspacing-light]

### Letterspacing Scale {layout=wide}
#### Founders Grotesk Medium
To the right are some additional examples of letterspacing set in Founders Grotesk Medium at different scales.

Note that as a general rule, the bigger the type size, the tighter the letterspacing should be and vice versa; the smaller the type size, the looser the letterspacing should be.
![type/letterspacing-scale-medium]

### Letterspacing Scale {layout=wide}
#### Founders Grotesk Light
To the right are some additional examples of letterspacing set in Founders Grotesk Light at different scales.

Note that as a general rule, the bigger the type size, the tighter the letterspacing should be and vice versa; the smaller the type size, the looser the letterspacing should be.
![type/letterspacing-scale-light]

### Alignment
#### Founders Grotesk Medium
All headlines in EO brand communications are left-aligned. A headline starts on the left grid line of the layout and faces the graphic unit on the right. Centered alignment is allowed only for single-line text such as standalone symbol icons and merchandise back prints. Never right-align or force-justify.
![type/alignment-medium]

### Alignment
#### Founders Grotesk Light
Body copy and captions are also left-aligned. When body copy runs in multiple columns, align the first baseline of every column; align captions to the left edge of the image. Never right-align or force-justify.
![type/alignment-light]

### Ragging
In typography, the ‘rag’ refers to the right-hand edge of a block of type. A paragraph or headline is badly ragged when the optical edge feels irregular, with certain lines sticking out more than others, or when a single word is left by itself on the last line, known as a widow.

EO headlines are short with few lines, so the rag is fully exposed. Break lines so that each line holds a unit of meaning, as in “Build / Anyway.”, and avoid the staircase shape of alternating long and short lines. In body copy, shift words to new lines until the edge is smooth and the copy reads well.
![type/ragging]

### Sizing
In order to make sure our communications are simple, a single layout generally uses no more than two type levels: one headline and one body, or one headline and one caption.

Sizes between levels are determined by multiples of the base line-spacing unit (L): Display 7L, Head 3L, Sub-head 2L, Body 1.5L, Caption 0.5L. Changing L scales every level together, so you only need to set L for each format. For example, if L is 24pt on an A2 poster, Display line spacing is 168pt and Body line spacing is 36pt.

Take note that this rule is a guide for communication design. On the web and in product, the size difference between levels is smaller.
![type/sizing]

### Sizing {layout=grid-2}
#### In Layout
To the right are two examples of how headline typography should be sized and spaced within compositions.

**Large:** The headline fills the left half of the layout and the graphic unit occupies the right half. The headline’s line-spacing blocks and the unit’s columns sit on the same grid.

**Small:** The headline is scaled down and the space beneath it is left empty in multiples of the Body line spacing. Use this when a photo or video still is the hero.
![type/sizing-large] Large — the headline fills the left half and shares its grid with the graphic unit.
![type/sizing-small] Small — the headline is reduced and the space beneath is a multiple of the Body line spacing.

### Don'ts {layout=grid-3}
#### Headline
Below are a few things never to do with typography. To guarantee consistency across all touchpoints, follow the typesetting rules and recommendations provided in the typography section of these guidelines.
![type/dont-1]{dont} Don’t set headlines in all caps
![type/dont-2]{dont} Don’t use the Light weight for headlines
![type/dont-3]{dont} Don’t tighten line spacing below 87.5% so strokes touch
![type/dont-4]{dont} Don’t open up tracking and scatter the letters
![type/dont-5]{dont} Don’t center or right-align
![type/dont-6]{dont} Don’t use three or more levels in one layout
![type/dont-7]{dont} Don’t use more than one color in a headline
![type/dont-8]{dont} Don’t apply outlines, shadows, or italics
![type/dont-9]{dont} Don’t overlap a headline on a graphic unit

### Backup Typeface
#### Primary – Inter
When it isn’t possible to use Founders Grotesk — in email, or on external platforms restricted to system fonts — Inter is the preferred alternative. Use Inter Medium for headlines and Inter Light for body copy.

Keep in mind the basic rules of our typography and try to act in the spirit of these. Avoid using other alternative fonts (like Arial), and only use Inter if Founders Grotesk is not available.

The comparison on this page shows some of the differences between Founders Grotesk Medium and Inter Medium.
![type/backup-inter]

### Backup Typeface
#### Secondary – Pretendard
Korean text is set in Pretendard. Since Korean is one of EO’s primary languages, Pretendard is treated as the default Hangul typeface rather than a fallback. When mixed with English, use the reference pairing of Pretendard Light 20pt, -6% tracking, baseline +5pt, matched to Founders Grotesk Light 22pt.

Where Pretendard is unavailable, use Noto Sans KR.

The comparison on this page shows the adjustments when Founders Grotesk Light and Pretendard Light share a line.
![type/backup-pretendard]

### Backup Typeface
#### Non-latin – Noto Sans
For Vietnamese and other languages not supported by Founders Grotesk or Pretendard, Noto Sans is the preferred alternative. Vietnamese uses the reference pairing of Noto Sans Light 18pt, -3.5% tracking, baseline +2pt, matched to Founders Grotesk Light 22pt. If Noto Sans is unavailable for a particular language, use the closest approximation to Founders Grotesk available in that language.
![type/backup-non-latin]

# 04 Color

## Colors

### Color
#### Builder Neon
Builder Neon is the foundation of the EO color palette and the most recognizable element of the brand — so much so that it can communicate “EO” even without the logo. Set against a black sky it creates dramatic contrast; it is the lit window of a hacker house at night, the optimism of the builder.

It is important that we use Builder Neon consistently and deliberately in our communications. It is strongest when concentrated in one place within a composition rather than spread across wide areas.
![color/builder-neon]

### Color {layout=grid-3}
#### Core Palette
The core palette consists of three colors: Builder Neon, Space Black, and Air White. It forms the basis of our color strategy and should serve as the first impression across core brand touchpoints. Its consistent usage establishes a recognizable visual cue for the EO brand and is complemented by the secondary palette.

The information to the right shows the approved color values for each color in the palette in Pantone inks (for solid color printing), CMYK (for four-color process printing), as well as HEX and RGB (for screens).

Always use the correct color mode and ink formulation for the appropriate application type to ensure color consistency across all media. In print, Air White can be left unprinted and replaced by an off-white raw paper stock.
[swatch] Builder Neon | #F9EE3A | R249 G238 B58 | C5 M0 Y95 K0 | PANTONE 3945 C
[swatch] Space Black | #000000 | R0 G0 B0 | C60 M60 Y0 K100
[swatch] Air White | #FCFBF5 | R252 G251 B245 | C1 M2 Y2 K0 or raw paper

### Color {layout=grid-4}
#### Core Pairings
There are four core pairings that we use with typography. Text is Air White or Space Black; Builder Neon is reserved for surfaces and graphic units rather than text by default.
![color/core-pair-1] 1. Air White on Space Black
![color/core-pair-2] 2. Space Black on Air White
![color/core-pair-3] 3. Space Black on Builder Neon
![color/core-pair-4] 4. Builder Neon on Space Black

### Color {layout=grid-3}
#### In Use
Here are some examples of the core palette in use.
![color/core-in-use-1] Poster
![color/core-in-use-2] Hang Tag
![color/core-in-use-3] Web Magazine

### Color {layout=grid-4}
#### Secondary Palette
The secondary palette opens our range of brand expression. Day Blue and Bay Green are taken from the sky and the bay of the San Francisco landscape and toned down a step or two, so they can distinguish series and channels without challenging Builder Neon’s lead role. Medium Gray and Solid Gray stand for the neutrality of media: the lighter gray is used for graphic elements, the darker gray for backgrounds.

The information below shows the approved color values for each color in the palette in Pantone, CMYK, HEX, and RGB.
[swatch] Day Blue | #6EC6D2 | R110 G198 B210 | C60 M0 Y10 K0 | PANTONE 298 C
[swatch] Bay Green | #66B88A | R102 G184 B138 | C60 M0 Y50 K0 | PANTONE 2248 C
[swatch] Medium Gray | #8E8E8E | R142 G142 B142 | C2 M0 Y0 K45 or K45 only
[swatch] Solid Gray | #333333 | R51 G51 B51 | C4 M0 Y0 K100 or K100 only

### Secondary Palette {layout=grid-4}
#### Pairings
There are four secondary pairings that we use with typography. Avoid using any pairings outside of this approved set. Secondary colors are always paired with Space Black only.
![color/secondary-pair-1] Day Blue on Space Black
![color/secondary-pair-2] Bay Green on Space Black
![color/secondary-pair-3] Space Black on Day Blue
![color/secondary-pair-4] Space Black on Bay Green

### Secondary Palette {layout=grid-4}
#### Pairings to Avoid
To the right are examples of pairings to avoid when using our secondary colors.

In general, avoid placing Day Blue and Bay Green against each other in the same composition, and avoid layering a secondary color over Builder Neon.
![color/avoid-1]{dont} Builder Neon on Air White
![color/avoid-2]{dont} Day Blue on Bay Green
![color/avoid-3]{dont} Medium Gray on Solid Gray
![color/avoid-4]{dont} Day Blue on Builder Neon

### Color
#### Usage Ratio
To the right is the correct ratio of color usage that should be applied across EO communications from a holistic perspective.

For core touchpoints and when introducing EO to new audiences, we lean heavily on the core palette: Air White text and Builder Neon graphics on a Space Black ground. By area, the reference ratio is 70 black, 20 neon, 10 white.

In contexts that users already understand as “EO”, such as our social channels and series artwork, Day Blue and Bay Green can be used more frequently as series colors. Even then, a single composition uses only one secondary color.
![color/usage-ratio]

### Secondary Palette {layout=grid-3}
#### In Use
Here are some examples of the secondary palette in use.
![color/secondary-in-use-1] Episode One Tee
![color/secondary-in-use-2] Sticker Pack
![color/secondary-in-use-3] Series Thumbnail

### Color {layout=grid-3}
#### Don'ts
Below are a few things never to do with color. For general guidance on minimum contrast requirements, please visit WCAG.
![color/dont-1]{dont} Don’t use Builder Neon as a body text color
![color/dont-2]{dont} Don’t create gradients
![color/dont-3]{dont} Don’t add colors outside the palette
![color/dont-4]{dont} Don’t use two secondary colors in one composition
![color/dont-5]{dont} Don’t change the brightness or saturation of Builder Neon
![color/dont-6]{dont} Don’t set Builder Neon text on Air White
![color/dont-7]{dont} Don’t lower opacity to create new tints
![color/dont-8]{dont} Don’t apply color overlays to photography
![color/dont-9]{dont} Don’t paint a single graphic unit in multiple colors

# 05 Visual System

## Graphic Unit

### Graphic Unit
#### Overview
The graphic unit is the smallest element of the EO visual system. It abstracts the trajectory of a builder stacking blocks into the repetition of a shaft and its threads. The E block of the logo, the pattern library, and every application graphic derive from this unit. Units are never drawn by hand; they are generated from parameters in the EO Graphic Builder.
![visual/unit-overview]

### Construction
The unit canvas (W × H) is divided into vertical columns (col), with a horizontal bar of height D — the shaft — at the vertical center. In the bands above and below the shaft, each column carries one pair of trapezoidal threads. The vertices of the upper thread are set by Δa (top edge, measured from the right edge of the column) and Δb (bottom edge, measured from the left edge); the lower thread is the upper one rotated 180° about the column center. The shaft runs continuously across the gutters, while the gutters in the thread bands stay empty.
![visual/unit-construction]

### Grid & Pitch
Column widths are compressed in a geometric sequence. A width ratio between adjacent columns (compression rate) of 1 gives equal division; as it grows, the illusion of convergence to one side strengthens. The defaults are 12 columns and a rate of 1.67 (2:1 pitch). Gutters have two modes — fixed, or proportional to the column width — and the proportional mode is structurally incapable of overflow and gives the strongest convergence.
![visual/unit-grid]

### Variations {layout=grid-3}
Combine column count, compression rate, shaft height (D), and the Δa·Δb of the threads to create units with different characters. Below are the six representative variations that form the basis of the pattern library.
![visual/unit-var-1] 01 / path of builder — wide on the left, converging right
![visual/unit-var-2] 02 / power — equal columns, thick shaft
![visual/unit-var-3] 03 / resistance — wide on the right, converging left
![visual/unit-var-4] 04 / builders — repetition of narrow columns
![visual/unit-var-5] 05 / rivals — symmetrical compression about the center
![visual/unit-var-6] 06 / team — two interlocking units

### Color Application {layout=grid-2}
Units are used in a single color. Contrast between the unit and its background is the point; within one composition, combine at most one core color and one secondary color. When several units sit side by side, build depth with combinations of clearly different value, such as Medium Gray, Builder Neon, and Air White.
![visual/unit-color-1] Builder Neon on Space Black
![visual/unit-color-2] Medium Gray · Builder Neon · Air White on Solid Gray

### Graphic Unit {layout=grid-3}
#### Don'ts
Never modify the geometry of a unit by hand. Every variation must happen within the parameters of the Graphic Builder.
![visual/unit-dont-1]{dont} Don’t rotate or tilt a unit
![visual/unit-dont-2]{dont} Don’t remove or add threads by hand
![visual/unit-dont-3]{dont} Don’t use three or more colors in one unit
![visual/unit-dont-4]{dont} Don’t add outlines or shadows to a unit
![visual/unit-dont-5]{dont} Don’t use a unit as a photo mask
![visual/unit-dont-6]{dont} Don’t adjust the compression column by column by hand

## Pattern Library

### Pattern Library {layout=grid-4}
#### 30 Patterns
A library of thirty patterns built from combinations of units. Each pattern stands for one keyword from the builder’s journey and is reused across every touchpoint — campaigns, merchandise, social, and video. When a new pattern is needed, choosing from the library comes first; additions go through the brand team for approval.
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
Patterns are used as the hero, not as a background. Give the pattern an entire half of the layout (usually the right) and set the headline left-aligned on the other side. Never overlap text on a pattern, and place the logo in the margin outside it. Patterns may be cropped, but crop on column boundaries so that no thread trapezoid is cut through the middle.
![visual/pattern-usage]

## Applications

### Merch {layout=grid-3}
The merchandise line consists of tees, hoodies, and caps. Single-color silkscreen graphics are the default: Space Black on white tees and Builder Neon on gray tees. The front chest carries the Block symbol or monogram at a small size; the back carries a pattern and copy (“Build Anyway.” “Even the Odds”) at a large size.
![visual/app-tee] Standard Tee
![visual/app-hoodie] Hoodie
![visual/app-cap] 5-panel Cap

### Print {layout=grid-3}
Printed matter includes posters, hang tags, stickers, and pins. The default is Space Black units on an Air White ground, with Builder Neon on one surface only. Hang tags carry a pattern on the front and size and material information in Mono on the back.
![visual/app-poster] Poster
![visual/app-hangtag] Hang Tag
![visual/app-sticker] Sticker Pack & Pin

### Digital {layout=grid-3}
Digital touchpoints include the web magazine, social feeds, and video thumbnails. Units extend into motion, with the compression rate changing over time; thumbnails use only part of a unit, cropped on column boundaries. The web grid (12 columns, 40 gutter, 44 margin at 1728) shares the same system as the unit’s column grid.
![visual/app-web] Web Magazine
![visual/app-social] Social Feed
![visual/app-thumbnail] Video Thumbnail
