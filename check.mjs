// 커밋 전 검증: 390px / 1280px 뷰포트에서 가로 스크롤(오버플로) 여부 확인.
// 사용법:  npm run check          → 결과만 출력
//          npm run shots          → shots/ 폴더에 스크린샷도 저장(줄바꿈 육안 확인용)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const pages = [
  'index.html',
  'project_sanjae_oneshot.html',
  'project_119_ars.html',
  'project_infertility_ai.html',
  'portfolio_seongmin.html',
];
const widths = [390, 1280];
const shots = process.argv.includes('--shots');
if (shots) mkdirSync('shots', { recursive: true });

const browser = await chromium.launch();
let failed = 0;
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const p of pages) {
    await page.goto('file://' + process.cwd() + '/' + p);
    await page.waitForTimeout(300); // 줄바꿈 스크립트 실행 대기
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    const ok = sw <= w;
    if (!ok) failed++;
    console.log(`${ok ? '✅' : '❌'} ${String(w).padStart(4)}px  ${p.padEnd(30)} scrollWidth=${sw}`);
    if (shots) await page.screenshot({ path: `shots/${p.replace('.html', '')}_${w}.png`, fullPage: true });
  }
  await page.close();
}
await browser.close();
console.log(failed ? `\n${failed}개 실패 — 가로 오버플로 발생` : '\n모두 통과');
process.exit(failed ? 1 : 0);
