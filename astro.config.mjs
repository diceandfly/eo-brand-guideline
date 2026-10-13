import { defineConfig } from 'astro/config';

// 콘텐츠(content/guide.*.md)는 src/lib/guide.ts 가 Vite 모듈로 읽으므로
// 저장하면 라우트 재계산과 브라우저 새로고침이 자동으로 일어납니다. 별도 감시 플러그인은 필요 없습니다.
// 빌드(npm run build, npm run assets)는 개발 서버와 다른 Vite 캐시 폴더를 씁니다.
// 같은 폴더를 쓰면 개발 서버가 켜진 채 빌드했을 때 개발 서버의 GSAP 등 의존성 캐시가 덮여
// 브라우저에 "504 Outdated Optimize Dep" 가 나고 스크립트(스무스 스크롤, 이미지 확대)가 통째로 멈춥니다.
const isBuild = process.argv.includes('build');

export default defineConfig({
  site: 'http://localhost:4321',
  vite: { cacheDir: isBuild ? 'node_modules/.vite-build' : 'node_modules/.vite' },
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false }
});
