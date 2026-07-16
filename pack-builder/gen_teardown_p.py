from lib import build
# Full-detail teardown data. Per building: list of (section, sum_insured, premium, excess, note)
def m(v):
    if v is None: return '<span class="mut">—</span>'
    if isinstance(v,str): return f'<span class="mut">{v}</span>'
    return f'<span class="num">R{v:,.2f}</span>'
def si(v):
    if v is None: return '<span class="mut">—</span>'
    if isinstance(v,str): return f'<span class="si">{v}</span>'
    return f'<span class="si">R{v:,.0f}</span>'

CUR={
"43 Empire Road":("Bryte","GC 3357813 / BCOM23-M-1393-0073261","Standard Bank & Investec",8328.11,[
 ("Buildings Combined",38717000,2351.10,"R10,000 (water)","Property R32.5m + escalations + R2.2m loss of rent. Includes PL R10m, Trustees R5m, Fidelity R200k, employees liability R2.5m."),
 ("Accidental Damage",250000,625.00,"10% min R5,000","Power surge only — all-risk and leakage are switched off."),
 ("Business All Risks",1294161,3235.40,"Standard","1 × solar system, replacement value."),
 ("Sasria (material damage)",5350000,1851.61,"as Sasria","Riot & strike pool — fixed government rate."),
 ("Umbrella Liability",'R27.5m',105.00,"nil","AIG / Southern Cross · underlying R10m."),
 ("Broker / policy fees",None,160.00,"—",""),
]),
"Brett Park":("Bryte","BCOM23-M-1090-0073347","FNB (Units 1 & 2)",7632.22,[
 ("Buildings Combined",42272750,3342.51,"R10,000 (water)","Property R36.9m + escalations + rent. PL R10m, Trustees R10m, Fidelity R500k."),
 ("Accidental Damage",100000,333.33,"10% min R5,000","Power surge only."),
 ("Business All Risks",1194345,1761.66,"R2,000 FAP","2 × solar systems (Astroenergy + Deye)."),
 ("Sasria (material damage)",7000000,1979.71,"as Sasria","Fixed government rate."),
 ("Umbrella Liability",'R27.5m',105.00,"nil","Underlying R10m."),
 ("Broker / policy fees",None,110.00,"—",""),
]),
"Strategic Park N12":("Bryte","BCOM23-M-1397-0073276","FirstRand, ABSA, Nedbank, FNB, Al Baraka",24348.99,[
 ("Fire",609000,55.32,"R10,000 min","Plant & machinery / substation."),
 ("Buildings Combined",135139296,11244.50,"R10,000 (water)","Property R118.4m + escalations + rent. PL R10m, Trustees R5m, work-away R2.5m."),
 ("Accidental Damage",500000,1666.66,"10% min R5,000","Power surge only."),
 ("Business All Risks",1927000,4817.50,"Standard","9 items — transformer R1m, 21 cameras, access control, back-up water, solar, booms, gate motors, generator."),
 ("Fidelity Guarantee",1000000,500.00,"Standard","Standalone section."),
 ("Sasria (material damage)",26172000,5800.01,"as Sasria","Fixed government rate."),
 ("Umbrella Liability",'R27.5m',105.00,"nil","Underlying R10m."),
 ("Broker / policy fees",None,160.00,"—",""),
]),
"Winston Lane":("Bryte","BCOM23-M-1424-0073350","—",1770.47,[
 ("Buildings Combined",6468000,366.07,"R10,000 (water)","Property R5m + escalations + rent. PL R25m, Trustees R5m."),
 ("Accidental Damage",100000,333.33,"10% min R5,000","Power surge only."),
 ("Business All Risks",250000,500.00,"R750","Security system, CCTV, electric fencing."),
 ("Sasria (material damage)",3350000,356.07,"as Sasria","Fixed government rate."),
 ("Umbrella Liability",'R27.5m',105.00,"nil","Underlying R25m."),
 ("Broker / policy fees",None,110.00,"—",""),
]),
"39 Empire Road":("OUTsurance","OT106190151","—",12424.13,[
 ("Fire",5670000,1079.95,"R3,180–R10,600","Plant/contents + solar R4.86m + earthquake + malicious damage + power surge R270k."),
 ("Buildings Combined",119362117,6343.71,"R5,830 (property)","Property R119m + water heating + rent + trustees R5.4m."),
 ("Theft",486000,537.62,"R3,710–R7,420","Movables + solar."),
 ("Fidelity",500000,556.59,"R4,240","Blanket."),
 ("Accidental Damage",1188000,351.86,"R2,650–R7,420","All-risk on movables + solar."),
 ("Public Liability",'R20m',264.38,"R9,500","Incl. legal defence + wrongful arrest."),
 ("Sasria (material damage)",'R125m exposure',3290.02,"as Sasria","Fixed government rate."),
]),
}

PROP={
"43 Empire Road":("Western","48517097",7693.38,[
 ("Buildings Combined",32525000,1813.64,"R500 general","Property R32.5m + 10% escalation + 10% inflation + geysers. PL R10m, Trustees R5m, Employers R10m."),
 ("Accidental Damage",250000,0.00,"R2,000","First-loss section (surge priced separately)."),
 ("Power Surge",250000,833.33,"10% min R5,000","Own section on the Western wording."),
 ("Business All Risks",1294161,3104.19,"R500 · solar 10%/R2.5k","Solar system."),
 ("Fidelity Guarantee",250000,150.00,"2% of SI, R10k","Now a named section."),
 ("Electronic Equipment",20000,83.33,"R500","EDP equipment, now scheduled."),
 ("Glass",20000,0.00,"R500–R1,500","First-loss."),
 ("Umbrella Liability",'R25m',40.00,"nil","Underlying R25m — up from R10m."),
 ("Sasria (material damage)",'—',1654.69,"as Sasria","Fixed government rate."),
 ("Assist / money-Sasria",None,14.20,"—","No broker fee."),
]),
"Brett Park":("Western","48517405",7271.39,[
 ("Buildings Combined",36875000,2049.33,"R500 general","Property R36.9m + escalation + inflation + geysers. PL R10m, Employers R10m."),
 ("Power Surge",250000,333.33,"10% min R5,000",""),
 ("Business All Risks",1194345,2790.30,"R500 · solar 10%/R2.5k","2 solar systems — priced ~R1,029 higher than today."),
 ("Fidelity Guarantee",250000,150.00,"2% of SI, R10k","Named section."),
 ("Electronic Equipment",20000,75.00,"R500",""),
 ("Umbrella Liability",'R25m',40.00,"nil","Up from R10m."),
 ("Sasria (material damage)",'—',1819.23,"as Sasria",""),
 ("Assist / money-Sasria",None,14.20,"—","No broker fee."),
]),
"Strategic Park N12":("Western","48559776",22470.97,[
 ("Accidental Damage",500000,104.17,"R2,000","First-loss."),
 ("Buildings Combined",119160000,6272.42,"R500 general","Property R118.4m + transformer + 10% escalation + 10% inflation + geysers. PL R10m, Trustees R5m, Employers R10m."),
 ("Power Surge",100000,677.08,"10% min R5,000",""),
 ("Business All Risks",1485000,5485.00,"R500 · solar 10%/R2.5k","9 items — priced ~R668 higher than today."),
 ("Fidelity Guarantee",1000000,1125.00,"2% of SI, R10k","Dearer than today."),
 ("Glass",'first-loss',575.00,"R500–R1,500","Now a named R-value section."),
 ("Umbrella Liability",'R25m',60.00,"nil","Up from R10m."),
 ("Sasria (material damage)",'—',8158.10,"as Sasria","~R2,358 higher — Sasria on a bigger base. Query."),
 ("Assist / money-Sasria",None,14.20,"—","No broker fee."),
]),
"Winston Lane":("Western","48517811",1996.58,[
 ("Buildings Combined",5025000,752.10,"R500 general","Property R5m + escalation + inflation + geysers. Rated up vs today. PL R10m."),
 ("Power Surge",'incl',291.67,"10% min R5,000",""),
 ("Business All Risks",250000,416.67,"R500","Security, CCTV, fencing."),
 ("Electronic Equipment",180000,300.00,"R500","Access control now scheduled here."),
 ("Fidelity Guarantee",250000,150.00,"2% of SI, R10k","Named section."),
 ("Umbrella Liability",'R25m',40.00,"nil","Same R25m, cheaper."),
 ("Sasria (material damage)",'—',31.94,"as Sasria","Much lower here."),
 ("Assist / money-Sasria",None,14.20,"—","No broker fee."),
]),
"39 Empire Road":("Western","48517726",13717.76,[
 ("Accidental Damage",'first-loss',52.08,"R2,000",""),
 ("Buildings Combined",124812117,6726.57,"R500 general","Property R119.4m + water heating + escalation + inflation. Fire & theft now fold in here."),
 ("Power Surge",270000,675.00,"10% min R5,000","Upgraded from R108k to R270k."),
 ("Business All Risks",50000,83.33,"R500","⚠ Only R50k security shown — the ~R4.86m solar insured today is NOT on the schedule. Confirm."),
 ("Fidelity Guarantee",750000,108.33,"2% of SI, R10k","Higher limit, cheaper."),
 ("Glass",50000,75.00,"R500–R1,500",""),
 ("Public Liability",'R10m',0.00,"R9,500","Down from R20m — but a R25m umbrella now sits on top (R35m tower)."),
 ("Umbrella Liability",'R25m',40.00,"nil","New — OUTsurance had none separate."),
 ("Sasria (material damage)",'—',5947.85,"as Sasria","~R2,658 higher for the same building. Query."),
 ("Assist / money-Sasria",None,9.60,"—",""),
]),
}
ORDER=["Strategic Park N12","39 Empire Road","43 Empire Road","Brett Park","Winston Lane"]

def rows(items):
    out=[]
    for sec,s,p,exc,note in items:
        out.append(f'''<tr class="ln"><td class="l">{sec}</td><td class="r">{si(s)}</td><td class="r">{m(p)}</td><td class="r ex">{exc}</td></tr>
        {f'<tr class="nt"><td colspan="4">{note}</td></tr>' if note else ''}''')
    return "".join(out)

def bpage(name, kind, data):
    if kind=='cur':
        ins,pol,interest,tot,items=data
        badge='CURRENT'; bc='cur'; extra=f'<span class="mtd">Policy {pol}{" · bond: "+interest if interest and interest!="—" else ""}</span>'
    else:
        ins,pol,tot,items=data
        badge='PROPOSED'; bc='prop'; extra=f'<span class="mtd">Quote {pol}</span>'
    return f'''<div class="page">
      <div class="hero {bc}"><img class="logo" src="LOGOW">
        <div class="ht"><div class="eye">{'Current programme · how they are insured today' if kind=='cur' else 'Proposed programme · Cartrack / Western'}</div><h1>{name}</h1>{extra}</div>
        <div class="prog {bc}">{badge}<span>{ins}</span></div></div>
      <div class="body">
        <table class="td"><thead><tr><th class="l">Section</th><th class="r">Sum insured</th><th class="r">Premium /mo</th><th class="r">Excess</th></tr></thead>
        <tbody>{rows(items)}
          <tr class="tot"><td class="l">Total — per month</td><td class="r"></td><td class="r">R{tot:,.2f}</td><td class="r"></td></tr>
        </tbody></table>
      </div></div>'''

def coverpage(kind):
    if kind=='cur':
        return f'''<div class="page"><div class="hero cur big"><img class="logo" src="LOGOW">
          <div><div class="eye">Section 2 · Reference</div><h1 style="font-size:40px">The current programme</h1>
          <div class="sub">Exactly how ALW is insured today — every section, sum insured, premium and excess. Four policies with Bryte, one with OUTsurance.</div></div></div>
          <div class="body"><div class="totband cur"><span>Total, all five buildings</span><b class="num">R54,503.92 / month</b></div>
          <p class="rd">The pages that follow give one building each. Use them to answer "what exactly am I covered for, and what do I pay at claim stage?" — the excess column is the number the client feels most.</p></div></div>'''
    return f'''<div class="page"><div class="hero prop big"><img class="logo" src="LOGOW">
      <div><div class="eye">Section 3 · Reference</div><h1 style="font-size:40px">The proposed programme</h1>
      <div class="sub">The Western proposal, broken down the same way — so it reads as a true before-and-after against the current pages.</div></div></div>
      <div class="body"><div class="totband prop"><span>Total, all five buildings</span><b class="num">R53,150.08 / month</b></div>
      <p class="rd">Note two structural changes on Western: Fire and Theft fold into Buildings Combined, and Power Surge / Glass / Fidelity become their own named sections. Excesses on everyday claims are markedly lower.</p></div></div>'''

CSS='''<meta charset="utf-8"><style>
/*FONTS*/
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#141922;--ink2:#3d4756;--muted:#7a828d;--paper:#fcfbf9;--card:#fff;--line:#e6e2da;--line2:#f0ede7;
 --panel:#151a22;--orange:#f4772e;--orange-hi:#ff9a5a;--orange-deep:#ce5c16;--green:#12805f;--green-bg:#e6f3ee;--red:#cf4238;--red-bg:#fbeae8;--amber:#a9690f;--amber-bg:#f6eedd;--blue:#2f6db0;--blue-bg:#eaf1f8;--soft:#f4f0e9}
html,body{background:#e9e6df}
.page{width:794px;min-height:1123px;margin:0 auto;background:var(--paper);font-family:'Libre Franklin',system-ui,sans-serif;color:var(--ink);font-size:12px;line-height:1.45;page-break-after:always;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
.num{font-variant-numeric:tabular-nums;font-feature-settings:'tnum' 1}
.hero{position:relative;background:var(--panel);color:#fff;padding:18px 34px 16px;overflow:hidden;display:flex;align-items:center;gap:16px}
.hero.big{padding:34px}
.hero::before{content:"";position:absolute;width:360px;height:240px;right:-90px;top:-100px;border-radius:50%;background:radial-gradient(circle,rgba(244,119,46,.36),transparent 62%)}
.hero.cur::before{background:radial-gradient(circle,rgba(47,109,176,.34),transparent 62%)}
.hero>*{position:relative}.hero .logo{height:32px}.hero .ht{flex:1}
.eye{font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;color:var(--orange-hi);font-weight:700}
.hero.cur .eye{color:#8fc0 f0;color:#93c1ef}
.hero h1{font-weight:700;font-size:24px;letter-spacing:-.01em;margin-top:3px;line-height:1.05}
.mtd{display:block;font-size:10.5px;color:#b9c0c9;margin-top:4px}
.hero .sub{font-size:13px;color:#c4cad2;margin-top:8px;max-width:64ch;line-height:1.5}
.prog{font-size:12px;font-weight:700;letter-spacing:.06em;padding:7px 14px;border-radius:9px;text-align:center;line-height:1.1}
.prog span{display:block;font-size:9px;font-weight:600;letter-spacing:.02em;opacity:.85;margin-top:2px}
.prog.cur{background:var(--blue);color:#fff}.prog.prop{background:var(--orange);color:#fff}
.body{padding:20px 34px 22px;flex:1}
table{width:100%;border-collapse:collapse}
.td th{background:var(--panel);color:#fff;font-size:10px;font-weight:600;padding:9px 12px;text-align:right;letter-spacing:.02em}
.td th.l{text-align:left}
.td td{padding:9px 12px 4px}
.td tr.ln td{border-top:1px solid var(--line2)}
.td td.l{font-weight:600;width:36%}
.td td.r{text-align:right;width:22%;white-space:nowrap}
.si{font-variant-numeric:tabular-nums;font-weight:600;color:var(--ink2)}
.td td.ex{font-size:11px;color:var(--ink2);font-weight:500}
.td tr.nt td{padding:0 12px 8px;font-size:10.5px;color:var(--muted);line-height:1.4;border:none}
.td .tot td{background:var(--ink);color:#fff;font-weight:700;padding:11px 12px;border:none}.td .tot td.r .num{color:var(--orange-hi)}
.mut{color:var(--muted)}
.totband{display:flex;justify-content:space-between;align-items:center;border-radius:12px;padding:16px 22px;color:#fff;margin-bottom:18px}
.totband.cur{background:var(--blue)}.totband.prop{background:var(--orange-deep)}
.totband span{font-size:14px;font-weight:600;letter-spacing:.02em}.totband b{font-size:24px;font-weight:700}
.rd{font-size:13px;line-height:1.6;color:var(--ink2)}
@page{size:A4 portrait;margin:0}
</style>'''

pages=CSS
pages+=coverpage('cur')
for n in ORDER: pages+=bpage(n,'cur',CUR[n])
pages+=coverpage('prop')
for n in ORDER: pages+=bpage(n,'prop',PROP[n])
open('teardown_p.src.html','w').write(pages)
build('teardown_p.src.html','teardown_p.html')
print("built teardown_p.html; pages:",2+2*len(ORDER))
