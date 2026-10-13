/**
 * 이미지 목록 (빌드 시 dist/asset-manifest.json 으로 생성).
 * scripts/assets.mjs 가 이 목록으로 public/assets 의 번호 폴더를 만들고 파일을 옮깁니다. 사이트 화면과는 무관합니다.
 */
import type { APIRoute } from 'astro';
import { loadAllGuides, assetEntries } from '../lib/guide';

export const GET: APIRoute = () => {
  const guides = loadAllGuides();
  const body = { ko: assetEntries(guides.ko), en: assetEntries(guides.en) };
  return new Response(JSON.stringify(body, null, 1), { headers: { 'Content-Type': 'application/json' } });
};
