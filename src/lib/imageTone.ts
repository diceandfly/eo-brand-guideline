/**
 * 이미지 가장자리의 밝기 → 'light' | 'dark'. 카드 테두리(1px 띠)가 이미지 가장자리 위에 놓이므로,
 * 호버 색을 밝은 회색으로 할지 어두운 회색으로 할지 이 값으로 가릅니다 (Figure.astro 의 data-tone).
 * 빌드(또는 dev 렌더) 때 sharp 로 한 번 재고 파일 수정 시각 기준으로 캐시합니다. 브라우저에서는 아무 일도 하지 않습니다.
 */
import fs from 'node:fs';
import path from 'node:path';

export type Tone = 'light' | 'dark';

const LIGHT_THRESHOLD = 0.5;   // 가장자리 평균 휘도(0~1)가 이 값보다 크면 밝은 이미지
const RING = 0.03;             // 가장자리 띠의 두께 (각 변 길이에 대한 비율)

const cache = new Map<string, { mtime: number; tone: Tone }>();

/** srgb 평균값(0~255)으로 상대 휘도 근사 (BT.709 계수, 감마 보정) */
function luminance(r: number, g: number, b: number): number {
  const lin = (c: number) => { const v = c / 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/**
 * @param publicSrc  <img src> 값 (/assets/… ). public/ 아래 파일로 읽습니다.
 * @param zoom       카드 안 배율. 1 보다 크면 가운데만 보이므로 그만큼 안쪽 띠를 잽니다.
 */
export async function imageTone(publicSrc: string, zoom = 1): Promise<Tone | undefined> {
  const file = path.join(process.cwd(), 'public', publicSrc);
  let mtime: number;
  try { mtime = fs.statSync(file).mtimeMs; } catch { return undefined; }
  const key = `${file}@${zoom}`;
  const hit = cache.get(key);
  if (hit && hit.mtime === mtime) return hit.tone;

  const sharp = (await import('sharp')).default;
  const img = sharp(file);
  const { width: w = 0, height: h = 0 } = await img.metadata();
  if (!w || !h) return undefined;
  const z = Math.max(1, zoom);
  const inset = (1 - 1 / z) / 2;                                   // 배율로 잘려 나가는 비율 (각 변)
  const x0 = Math.round(w * inset), y0 = Math.round(h * inset);
  const vw = Math.max(1, Math.round(w / z)), vh = Math.max(1, Math.round(h / z));
  const t = Math.max(1, Math.round(Math.min(vw, vh) * RING));   // 띠 두께(px)
  const rects = [
    { left: x0, top: y0, width: vw, height: t },                    // 위
    { left: x0, top: y0 + vh - t, width: vw, height: t },           // 아래
    { left: x0, top: y0, width: t, height: vh },                    // 왼쪽
    { left: x0 + vw - t, top: y0, width: t, height: vh },           // 오른쪽
  ];
  let r = 0, g = 0, b = 0, n = 0;
  for (const rc of rects) {
    const { channels } = await sharp(file).extract(rc).flatten({ background: '#000' }).stats();
    const area = rc.width * rc.height;
    r += channels[0].mean * area; g += channels[1].mean * area; b += channels[2].mean * area; n += area;
  }
  const tone: Tone = luminance(r / n, g / n, b / n) > LIGHT_THRESHOLD ? 'light' : 'dark';
  cache.set(key, { mtime, tone });
  return tone;
}
