import { defineConfig } from 'astro/config';
import path from 'node:path';

/**
 * content/*.md 를 저장하면 브라우저를 자동 새로고침합니다.
 * 콘텐츠 파일은 src/ 밖에 있어 Vite 가 기본으로 감시하지 않으므로 직접 등록합니다.
 */
function reloadOnContentChange() {
  const contentDir = path.resolve('content');
  return {
    name: 'eo-reload-on-content-change',
    configureServer(server) {
      server.watcher.add(contentDir);
      const onChange = file => {
        if (file.startsWith(contentDir) && file.endsWith('.md')) {
          server.ws.send({ type: 'full-reload', path: '*' });
        }
      };
      server.watcher.on('change', onChange);
      server.watcher.on('add', onChange);
    }
  };
}

export default defineConfig({
  site: 'http://localhost:4321',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  vite: { plugins: [reloadOnContentChange()] }
});
