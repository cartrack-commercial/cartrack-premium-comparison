import { chromium } from 'playwright';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage();
await p.goto('file://'+process.cwd()+'/bizoverview.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:'Cartrack_Business_Overview.pdf',printBackground:true,width:'1280px',height:'720px'});
await b.close();console.log('pdf done');
