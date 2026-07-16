import { chromium } from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage({viewport:{width:1280,height:720},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/bizoverview.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const sl=await p.$$('.slide'); console.log('slides',sl.length); let i=1; for(const s of sl){await s.screenshot({path:`bz${i}.png`});i++;}
await b.close();
