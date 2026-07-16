import { chromium } from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
// comparison (portrait)
let p=await b.newPage();
await p.goto('file://'+process.cwd()+'/cmp_p.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const ch=await p.evaluate(()=>[...document.querySelectorAll('.page')].map(e=>Math.round(e.getBoundingClientRect().height)));
console.log('cmp heights',ch.join(','));
await p.pdf({path:'ALW_Comparison_portrait.pdf',printBackground:true,preferCSSPageSize:true});
// teardown (portrait)
await p.goto('file://'+process.cwd()+'/teardown_p.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const th=await p.evaluate(()=>[...document.querySelectorAll('.page')].map(e=>Math.round(e.getBoundingClientRect().height)));
console.log('teardown heights',th.join(','));
await p.pdf({path:'ALW_Teardowns_portrait.pdf',printBackground:true,preferCSSPageSize:true});
// deck slides
const pd=await b.newPage({viewport:{width:1280,height:720},deviceScaleFactor:2});
await pd.goto('file://'+process.cwd()+'/deckalw.html',{waitUntil:'networkidle'});await pd.evaluate(()=>document.fonts.ready);
const sl=await pd.$$('.slide'); let i=1; for(const s of sl){await s.screenshot({path:`sl${i}.png`});i++;}
// previews
const pg=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:2});
await pg.goto('file://'+process.cwd()+'/cmp_p.html',{waitUntil:'networkidle'});await pg.evaluate(()=>document.fonts.ready);
let w=await pg.$$('.page'); await w[0].screenshot({path:'cp_reco.png'}); await w[5].screenshot({path:'cp_39.png'});
await pg.goto('file://'+process.cwd()+'/teardown_p.html',{waitUntil:'networkidle'});await pg.evaluate(()=>document.fonts.ready);
w=await pg.$$('.page'); await w[1].screenshot({path:'td_strat.png'});
await b.close(); console.log('done');
