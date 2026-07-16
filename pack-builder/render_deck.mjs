import { chromium } from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage({viewport:{width:1280,height:720},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/deckalw.html',{waitUntil:'networkidle'});
await p.evaluate(()=>document.fonts.ready);
const slides=await p.$$('.slide');
console.log('slides:',slides.length);
let i=1;
for(const s of slides){ await s.screenshot({path:`sl${i}.png`}); i++; }
await b.close(); console.log('rendered');
