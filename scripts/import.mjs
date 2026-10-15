/**
 * 이미지 가져오기: npm run import -- <서브챕터> [폴더]      (미리 보기: npm run import -- <서브챕터> --dry)
 *   예) npm run import -- symbol
 *       npm run import -- sub-symbol ~/Desktop/export
 *
 * 폴더(기본: 다운로드/temp)의 이미지를 국문 가이드(content/guide.ko.md)의 이미지 이름에 맞춰
 * public/assets/<챕터>/<서브챕터>/<주제 번호>-<이름>.<확장자> 로 복사합니다. 원본은 그대로 둡니다.
 *   - 파일명 앞 접두어(마지막 _ 까지, 예: "20261016 Finalization_")와 앞 번호(예: 03-)는 떼고 비교합니다.
 *   - 공백은 - 로 바꿉니다 ("icon-in use" → icon-in-use). 대소문자는 무시합니다.
 *   - 같은 이름의 예전 파일(번호·확장자가 달라도)은 새 파일로 바꾸고, 내용이 같으면 건드리지 않습니다.
 *   - 가이드에 자리가 없는 파일은 복사하지 않고 목록으로 알려 줍니다.
 * 같은 이미지 이름이 여러 서브챕터에 있으므로(clearspace, dont-1 …) 서브챕터를 꼭 지정합니다.
 * 폴더 안에 서브챕터 이름의 하위 폴더(예: temp/typography/)가 있으면 그 폴더에서만 가져옵니다.
 * 서브챕터별로 하위 폴더를 나눠 두면 이름이 겹쳐도 다른 페이지 이미지가 섞이지 않습니다.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const ASSETS = path.join(ROOT, 'public', 'assets');
const EXTS = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];
const args = process.argv.slice(2).filter(a => a !== '--dry');
const dry = process.argv.includes('--dry');
const [subArg, dirArg] = args;

const manifestFile = path.join(ROOT, 'dist', 'asset-manifest.json');
if (!fs.existsSync(manifestFile)) { console.error('dist/asset-manifest.json 이 없습니다. npm run import 로 실행하세요 (빌드 후 가져오기).'); process.exit(1); }
const entries = JSON.parse(fs.readFileSync(manifestFile, 'utf8')).ko;
const pages = [...new Set(entries.map(e => e.page))];
const slugOf = p => p.split('/').slice(-1)[0];

if (!subArg) {
  console.log('서브챕터를 지정하세요. 예) npm run import -- symbol\n\n가능한 서브챕터:');
  for (const p of pages) console.log(`  ${slugOf(p).padEnd(18)} ${entries.filter(e => e.page === p).length}자리`);
  process.exit(1);
}
const page = pages.find(p => slugOf(p) === subArg) ?? pages.find(p => p.endsWith(subArg));
if (!page) { console.error(`"${subArg}" 서브챕터를 찾지 못했습니다. 인자 없이 실행하면 목록이 나옵니다.`); process.exit(1); }

const baseDir = (dirArg ?? path.join(os.homedir(), 'Downloads', 'temp')).replace(/^~(?=\/|$)/, os.homedir());
if (!fs.existsSync(baseDir)) { console.error(`폴더가 없습니다: ${baseDir}`); process.exit(1); }
const subDir = path.join(baseDir, slugOf(page));
const srcDir = fs.existsSync(subDir) && fs.statSync(subDir).isDirectory() ? subDir : baseDir;
console.log(`가져오는 폴더: ${srcDir}${srcDir === baseDir ? '  (서브챕터 하위 폴더 없음)' : ''}`);

const norm = s => s.toLowerCase().replace(/^.*_/, '').replace(/^\d{2}-/, '').trim().replace(/\s+/g, '-');
const strip = s => s.replace(/^\d{2}-/, '');
const slots = new Map(entries.filter(e => e.page === page).map(e => [strip(e.path.split('/').pop()), e]));
const md5 = f => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex');

const files = fs.readdirSync(srcDir).filter(f => EXTS.includes(path.extname(f).slice(1).toLowerCase()));
let added = 0, updated = 0, same = 0;
const unmatched = [];
const done = new Set();
for (const f of files) {
  const name = norm(path.basename(f, path.extname(f)));
  const slot = slots.get(name);
  if (!slot) { unmatched.push(f); continue; }
  const dst = path.join(ASSETS, `${slot.path}${path.extname(f).toLowerCase()}`);
  const dir = path.dirname(dst);
  const src = path.join(srcDir, f);
  done.add(name);
  if (fs.existsSync(dst) && md5(dst) === md5(src)) { same++; continue; }
  const existed = fs.existsSync(dir) && fs.readdirSync(dir).some(o => strip(path.basename(o, path.extname(o))) === name);
  if (!dry) {
    fs.mkdirSync(dir, { recursive: true });
    for (const o of fs.readdirSync(dir)) {                    // 같은 이름의 예전 파일 정리 (번호·확장자가 달라도)
      if (strip(path.basename(o, path.extname(o))) === name && path.join(dir, o) !== dst) fs.rmSync(path.join(dir, o));
    }
    fs.copyFileSync(src, dst);
  }
  existed ? updated++ : added++;
  console.log(`${dry ? '[dry] ' : ''}${existed ? '교체' : '추가'}  ${path.relative(ASSETS, dst)}`);
}
const missing = [...slots.keys()].filter(n => !done.has(n) && !slots.get(n).src);
console.log(`\n${slugOf(page)}: 추가 ${added} · 교체 ${updated} · 그대로 ${same}${dry ? '  (미리 보기, 복사 안 함)' : ''}`);
if (unmatched.length) console.log(`\n가이드에 자리가 없는 파일 ${unmatched.length} (복사 안 함. 이름을 가이드의 이미지 이름과 맞추세요):\n  ${unmatched.join('\n  ')}`);
if (missing.length) console.log(`\n아직 비어 있는 자리 ${missing.length}:\n  ${missing.join(', ')}`);
