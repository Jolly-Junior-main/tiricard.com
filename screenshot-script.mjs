import { chromium } from 'playwright';
async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  console.log('Navigating...');
  await page.goto('https://tiricard-dr6.pages.dev', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('Waiting for network...');
  await page.waitForTimeout(5000);
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'tiricard-thumbnail.png', fullPage: false });
  await page.screenshot({ path: 'tiricard-fullpage.png', fullPage: true });
  await browser.close();
  console.log('Done!');
}
main().catch(console.error);