/**
 * 스크립트용 이미지 목록: 빌드 없이 md 와 tokens.css 를 읽어 파서(src/lib/guide.ts)를 직접 호출합니다.
 * Node 가 .ts 를 그대로 실행하므로(타입 제거) 별도 변환이 필요 없습니다. 결과 모양은 { ko: AssetEntry[], en: AssetEntry[] }.
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadGuide, assetEntries, LANGS } from '../../src/lib/guide.ts';
import { parseTokens } from '../../src/lib/tokens.ts';

export function loadManifest(root) {
  const tokens = parseTokens(fs.readFileSync(path.join(root, 'src', 'styles', 'tokens.css'), 'utf8'));
  return Object.fromEntries(LANGS.map(lang => {
    const source = fs.readFileSync(path.join(root, 'content', `guide.${lang}.md`), 'utf8');
    return [lang, assetEntries(loadGuide(lang, source, tokens))];
  }));
}
