import { defineConfig } from 'astro/config';

// 콘텐츠(content/guide.*.md)는 src/lib/guide.ts 가 Vite 모듈로 읽으므로
// 저장하면 라우트 재계산과 브라우저 새로고침이 자동으로 일어납니다. 별도 감시 플러그인은 필요 없습니다.
export default defineConfig({
  site: 'http://localhost:4321',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false }
});
