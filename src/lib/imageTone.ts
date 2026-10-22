/**
 * 이미지 가장자리의 밝기 → 'light' | 'dark'. 카드 테두리(1px 띠)가 이미지 가장자리 위에 놓이므로,
 * 호버 색을 밝은 회색/어두운 회색 중 어느 쪽으로 할지 이 값으로 가릅니다 (Figure.astro 의 data-tone).
 *
 * 비용을 작게: sharp 로 64×64 로 한 번만 줄여 받아(원본 해상도·채널 통계 호출 없이) JS 로 띠 평균을 냅니다.
 * 결과는 node_modules/.cache/eo-image-tone.json 에 (경로 · 수정 시각 · 크기 · 배율 · 배경색) 키로 저장해
 * 빌드·dev 재시작·npm run assets 에서 다시 재지 않습니다. 브라우저에서는 아무 일도 하지 않습니다.
 */
import fs from 'node:fs';
import path from 'node:path';

export type Tone = 'light' | 'dark';

const LIGHT_THRESHOLD = 0.5;   // 가장자리 평균 휘도(0~1, 감마 보정)가 이 값보다 크면 밝은 이미지
const RING = 0.03;             // 가장자리 띠의 두께 (보이는 영역 각 변 길이에 대한 비율)
const SAMPLE = 64;             // 줄여서 재는 크기 (px). 띠 두께가 최소 1px 이 되도록 RING × SAMPLE ≥ 1

const CACHE_FILE = path.join(process.cwd(), 'node_modules', '.cache', 'eo-image-tone.json');
type Cache = Record<string, Tone>;
let cache: Cache | null = null;
let dirty = false;
const loadCache = (): Cache => {
  if (cache) return cache;
  try { cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch { cache = {}; }
  return cache!;
};
const saveCache = () => {
  if (!dirty || !cache) return;
  try { fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true }); fs.writeFileSync(CACHE_FILE, JSON.stringify(cache)); dirty = false; } catch {}
};
process.on('exit', saveCache);

/** srgb 평균값(0~255)으로 상대 휘도 근사 (BT.709 계수, 감마 보정) */
function luminance(r: number, g: number, b: number): number {
  const lin = (c: number) => { const v = c / 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/**
 * @param publicSrc  <img src> 값 (/assets/…). public/ 아래 파일로 읽습니다.
 * @param zoom       카드 안 배율. 1 보다 크면 가운데만 보이므로 그만큼 안쪽 띠를 잽니다.
 * @param background 투명 부분을 깔 색 (#rrggbb). 카드가 놓이는 면의 색이어야 투명 PNG·SVG 가 제대로 판정됩니다.
 */
export async function imageTone(publicSrc: string, zoom = 1, background = '#000000'): Promise<Tone | undefined> {
  const file = path.join(process.cwd(), 'public', decodeURI(publicSrc));
  let st: fs.Stats;
  try { st = fs.statSync(file); } catch { return undefined; }
  const key = `${publicSrc}|${st.mtimeMs}|${st.size}|${zoom}|${background}`;
  const c = loadCache();
  if (c[key]) return c[key];

  const sharp = (await import('sharp')).default;
  const { data } = await sharp(file).resize(SAMPLE, SAMPLE, { fit: 'fill' }).flatten({ background }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const z = Math.max(1, zoom);
  const inset = Math.round(SAMPLE * (1 - 1 / z) / 2);          // 배율로 잘려 나가는 픽셀 수 (각 변)
  const lo = inset, hi = SAMPLE - inset - 1;                   // 보이는 영역의 첫·끝 픽셀
  const t = Math.max(1, Math.round((hi - lo + 1) * RING));     // 띠 두께(px)
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = lo; y <= hi; y++) for (let x = lo; x <= hi; x++) {
    if (x >= lo + t && x <= hi - t && y >= lo + t && y <= hi - t) continue;   // 띠 안쪽은 건너뜀
    const i = (y * SAMPLE + x) * 3;
    r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
  }
  const tone: Tone = luminance(r / n, g / n, b / n) > LIGHT_THRESHOLD ? 'light' : 'dark';
  c[key] = tone; dirty = true;
  return tone;
}
