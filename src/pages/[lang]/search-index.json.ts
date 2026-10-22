/**
 * 검색 색인 (언어당 하나, 빌드 시 /<lang>/search-index.json 으로 생성).
 * 페이지마다 인라인으로 넣지 않고 검색창을 처음 쓸 때 한 번 받아 캐시합니다 (Search.astro).
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { loadGuide } from '../../lib/content';
import { buildSearchIndex, LANGS, type Lang } from '../../lib/guide';

export const getStaticPaths: GetStaticPaths = () => LANGS.map(lang => ({ params: { lang } }));

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(buildSearchIndex(loadGuide(params.lang as Lang))), { headers: { 'Content-Type': 'application/json' } });
