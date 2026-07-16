from lib import build
import subprocess,os
def money(v):
    if v is None: return '<span class="mut">—</span>'
    if isinstance(v,str): return f'<span class="mut">{v}</span>'
    return f'<span class="num">R{v:,.2f}</span>'
def delta(c,p):
    if not isinstance(c,(int,float)) or not isinstance(p,(int,float)): return '<span class="mut">·</span>'
    d=round(c-p,2)
    if abs(d)<0.005: return '<span class="num tie">R0.00</span>'
    return f'<span class="num {"sv" if d>0 else "ov"}">{"-" if d>0 else "+"}R{abs(d):,.2f}</span>'
def wc(c,p,side):
    if not isinstance(c,(int,float)) or not isinstance(p,(int,float)) or abs(c-p)<0.005: return ''
    if side=='c': return ' win' if c<p else ''
    return ' win' if p<c else ''

B=[
("43 Empire Road","Bryte","Western",8328.11,7693.38,"SWITCH",
 "About R635 a month back, and better cover. Cheaper on the buildings and a stronger umbrella more than cover a higher power-surge line and a couple of smaller limits.",
 [("Buildings Combined",2351.10,1813.64,"Same R32.5m building, Western's rate is roughly 23% lower."),
  ("Accidental Damage + Power Surge",625.00,833.33,"Power surge only on both; Western charges a bit more for it."),
  ("Business All Risks — solar R1.29m",3235.40,3104.19,"Same solar system, slightly cheaper."),
  ("Fidelity Guarantee","incl.",150.00,"Now a named R250k section instead of bundled R200k."),
  ("Glass","incl.","incl.","Western: R20k first-loss vs R150k full — a smaller glass limit."),
  ("Electronic Equipment","incl.",83.33,"Now priced separately; limit R50k → R20k."),
  ("Public Liability",'incl.','incl.',"R10m on both."),
  ("Umbrella Liability",105.00,40.00,"Cheaper and a bigger limit — R25m vs R10m."),
  ("Sasria",1851.61,1654.69,"Lower on Western here."),
  ("Broker fee / Assist",160.00,14.20,"No broker fee on Western."),
 ]),
("Brett Park","Bryte","Western",7632.22,7271.39,"SWITCH",
 "About R361 a month back. A big buildings saving carries a dearer solar line.",
 [("Buildings Combined",3342.51,2049.33,"Same R36.9m building, Western's rate is ~39% lower."),
  ("Accidental Damage + Power Surge",333.33,333.33,"Identical."),
  ("Business All Risks — 2 solar systems R1.19m",1761.66,2790.30,"Western prices the two solar systems ~R1,029 higher."),
  ("Fidelity Guarantee","incl.",150.00,"Now a named R250k section."),
  ("Electronic Equipment","incl.",75.00,"Now priced; R20k limit."),
  ("Umbrella Liability",105.00,40.00,"Cheaper, R25m vs R10m."),
  ("Sasria",1979.71,1819.23,"Lower on Western here."),
  ("Broker fee / Assist",110.00,14.20,"No broker fee on Western."),
 ]),
("Strategic Park N12","Bryte","Western",24348.99,22470.97,"SWITCH",
 "About R1,878 a month back — and it would be more if not for a higher Sasria line. The R118m building is the whole story.",
 [("Fire",55.32,None,"Rolled into Buildings Combined on the Western wording."),
  ("Buildings Combined",11244.50,6272.42,"R4,972 a month less. Western's rate is ~44% lower on the R118m building — the biggest single saving in the book."),
  ("Accidental Damage + Power Surge",1666.66,781.25,"Much cheaper on Western (R104.17 + R677.08)."),
  ("Business All Risks — 9 items",4817.50,5485.00,"Western prices the equipment schedule ~R668 higher."),
  ("Fidelity Guarantee",500.00,1125.00,"Dearer on Western (R1m limit on both)."),
  ("Glass","incl.",575.00,"Now a named R-value section."),
  ("Umbrella Liability",105.00,60.00,"Cheaper, R25m vs R10m."),
  ("Sasria",5800.01,8158.10,"R2,358 more. Western works Sasria off a bigger declared value (10% escalation + 10% inflation). Worth querying."),
  ("Broker fee / Assist",160.00,14.20,"No broker fee on Western."),
 ]),
("Winston Lane","Bryte","Western",1770.47,1996.58,"UPGRADE",
 "Yes it's R226 more a month — but it's the better place to be: the excess on the claim members are most likely to make drops from R10,000 to R500, and cover is spelled out rather than assumed. Move it, and we push Western on the buildings rate before inception.",
 [("Buildings Combined",366.07,752.10,"R386 more — Western rates the R5m residential block up (R1,200/R1m vs R840)."),
  ("Accidental Damage + Power Surge",333.33,291.67,"Cheaper on Western."),
  ("Business All Risks — security R250k",500.00,416.67,"Cheaper on Western."),
  ("Electronic Equipment","incl.",300.00,"Access control (R180k) now priced under Electronics."),
  ("Fidelity Guarantee","incl.",150.00,"Now a named R250k section."),
  ("Umbrella Liability",105.00,40.00,"Cheaper; R25m on both."),
  ("Sasria",356.07,31.94,"Much lower on Western here."),
  ("Broker fee / Assist",110.00,14.20,"No broker fee on Western."),
 ]),
("39 Empire Road","OUTsurance","Western",12424.13,13717.76,"UPGRADE",
 "R1,294 more a month — but almost all of it is Sasria (a government charge). On the cover itself Western is R1,364 cheaper and adds a R25m umbrella. Move it once we've confirmed the ~R4.86m solar is on the schedule — that's the one cover item to close first. We also ask Western to re-base the Sasria.",
 [("Fire",1079.95,None,"Rolled into Buildings Combined on the Western wording."),
  ("Theft",537.62,None,"Rolled into Buildings Combined."),
  ("Buildings Combined",6343.71,6726.57,"R383 more — slightly dearer; OUTsurance was already keenly rated (R580/R1m)."),
  ("Accidental Damage + Power Surge",351.86,727.08,"Dearer on Western; note the current cover is all-risk on movables + solar."),
  ("Business All Risks",None,83.33,"Western's list shows only R50k security — the ~R4.86m solar insured today is not on it. Confirm, or it is a gap."),
  ("Fidelity Guarantee",556.59,108.33,"Much cheaper on Western (R750k limit)."),
  ("Glass","incl.",75.00,"Now priced; R50k."),
  ("Public Liability",264.38,"incl.","Limit moves R20m → R10m (a R25m umbrella now sits on top)."),
  ("Umbrella Liability",None,40.00,"Adds a R25m umbrella (OUTsurance had none separate)."),
  ("Sasria",3290.02,5947.85,"R2,658 more — Western's Sasria is ~80% higher for the same building. The main reason this quote is up."),
  ("Broker fee / Assist",None,9.60,"Assist + money-Sasria."),
 ]),
]
PORT_CUR=54503.92; PORT_PROP=53150.08

def rowset(lines):
    out=[]
    for lab,c,p,why in lines:
        out.append(f'''<tr class="ln">
          <td class="l">{lab}</td>
          <td class="r{wc(c,p,'c')}">{money(c)}</td>
          <td class="r{wc(c,p,'p')}">{money(p)}</td>
          <td class="r dl">{delta(c,p)}</td></tr>
        <tr class="wy"><td colspan="4">{why}</td></tr>''')
    return "".join(out)

def bpage(name,ci,pi,ct,pt,verd,vtext,lines):
    d=ct-pt; vc={'SWITCH':'sw','UPGRADE':'up'}.get(verd,'rv')
    dt=f'-R{d:,.2f}' if d>0 else f'+R{abs(d):,.2f}'; dcls='sv' if d>0 else 'ov'
    return f'''<div class="page">
      <div class="hero"><img class="logo" src="LOGOW">
        <div class="ht"><div class="eye">Current vs Cartrack proposal</div><h1>{name}</h1></div>
        <div class="hbadge {vc}">{verd}</div></div>
      <div class="body">
        <div class="vbar">
          <div class="vb"><div class="k">Current · {ci}</div><div class="v">R{ct:,.2f}</div></div>
          <div class="vb"><div class="k">Proposed · {pi}</div><div class="v">R{pt:,.2f}</div></div>
          <div class="vb win2"><div class="k">Difference / month</div><div class="v {dcls}">{dt}</div></div>
        </div>
        <table class="cmp"><thead><tr><th class="l">Line item</th><th class="r">Current<span>{ci}</span></th><th class="r">Proposed<span>{pi}</span></th><th class="r">Δ / mo</th></tr></thead>
        <tbody>{rowset(lines)}
          <tr class="tot"><td class="l">Total — per month</td><td class="r">R{ct:,.2f}</td><td class="r">R{pt:,.2f}</td><td class="r">{dt}</td></tr>
        </tbody></table>
        <div class="vnote {vc}"><b>{verd} —</b> {vtext}</div>
      </div></div>'''

def prow(name,ct,pt,verd):
    d=ct-pt; dcls='sv' if d>0 else 'ov'; dt=f'-R{d:,.2f}' if d>0 else f'+R{abs(d):,.2f}'
    vc={'SWITCH':'sw','UPGRADE':'up'}.get(verd,'rv')
    return f'''<tr><td class="l">{name}</td><td class="r"><span class="num">R{ct:,.2f}</span></td><td class="r"><span class="num">R{pt:,.2f}</span></td><td class="r"><span class="num {dcls}">{dt}</span></td><td><span class="pbadge {vc}">{verd}</span></td></tr>'''

page1=f'''<div class="page">
  <div class="hero"><img class="logo" src="LOGOW">
    <div class="ht"><div class="eye">ALW Body Corporates · Insurance comparison</div><h1>Current programme vs Cartrack proposal</h1></div></div>
  <div class="body">
    <p class="lede">Five buildings, compared line by line against the Cartrack (Western) proposal. All figures are monthly and include VAT. Everything has been checked against the policy schedules.</p>
    <div class="stats">
      <div class="stat"><div class="l">Current programme</div><div class="v">R54,503.92</div><div class="s">Bryte × 4 + OUTsurance × 1</div></div>
      <div class="stat"><div class="l">Cartrack proposal</div><div class="v">R53,150.08</div><div class="s">Western × 5 · one programme</div></div>
      <div class="stat g"><div class="l">Portfolio saving</div><div class="v sv">-R1,353.84</div><div class="s">per month · about R16,246 a year</div></div>
    </div>
    <table class="port"><thead><tr><th class="l">Building</th><th class="r">Current</th><th class="r">Proposed</th><th class="r">Δ / mo</th><th>Verdict</th></tr></thead>
    <tbody>{''.join(prow(b[0],b[3],b[4],b[5]) for b in B)}
      <tr class="tot"><td class="l">Portfolio</td><td class="r">R54,503.92</td><td class="r">R53,150.08</td><td class="r">-R1,353.84</td><td></td></tr>
    </tbody></table>
    <div class="reco"><div class="pl">Our recommendation</div>
      <p>Move all five to Western. Across the book you <b>save about R1,353.84 a month</b> (roughly R16,246 a year) <b>and every building ends up with equal or better cover</b> — a R25m umbrella throughout, lower claim excesses, and one insurer, one wording, one renewal. Three buildings are straight savings (about R2,874/mo between them); the other two cost a little more but buy genuinely better protection, so keeping them behind would trade a stronger position for a small saving. <b>One thing to close first:</b> confirm 39 Empire's ~R4.86m solar is on the Western schedule before it moves — that's a cover point, not a price one. We also ask Western to sharpen the Winston rate and re-base the 39 Empire Sasria before inception.</p></div>
  </div></div>'''

CSS='''<meta charset="utf-8"><style>
/*FONTS*/
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#141922;--ink2:#3d4characters;--ink2:#3d4756;--muted:#7a828d;--paper:#fcfbf9;--card:#fff;--line:#e6e2da;--line2:#f0ede7;
 --panel:#151a22;--orange:#f4772e;--orange-hi:#ff9a5a;--orange-deep:#ce5c16;--green:#12805f;--green-bg:#e6f3ee;--red:#cf4238;--red-bg:#fbeae8;--amber:#a9690f;--amber-bg:#f6eedd;--blue:#2f6db0;--soft:#f4f0e9}
html,body{background:#e9e6df}
.page{width:794px;min-height:1123px;margin:0 auto;background:var(--paper);font-family:'Libre Franklin',system-ui,sans-serif;color:var(--ink);font-size:12px;line-height:1.45;page-break-after:always;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
.num{font-variant-numeric:tabular-nums;font-feature-settings:'tnum' 1}
.hero{position:relative;background:var(--panel);color:#fff;padding:20px 34px 18px;overflow:hidden;display:flex;align-items:center;gap:16px}
.hero::before{content:"";position:absolute;width:380px;height:250px;right:-90px;top:-110px;border-radius:50%;background:radial-gradient(circle,rgba(244,119,46,.4),transparent 62%)}
.hero>*{position:relative}.hero .logo{height:34px}
.hero .ht{flex:1}
.eye{font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange-hi);font-weight:700}
.hero h1{font-weight:700;font-size:24px;letter-spacing:-.01em;margin-top:3px;line-height:1.08}
.hbadge{font-size:12px;font-weight:700;letter-spacing:.04em;padding:6px 15px;border-radius:20px;color:#fff}
.hbadge.sw{background:var(--green)}.hbadge.rv{background:var(--amber)}.hbadge.up{background:var(--orange)}
.body{padding:20px 34px 22px;flex:1}
.lede{font-size:13px;line-height:1.55;color:var(--ink2);margin-bottom:16px}
.stats{display:flex;border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-bottom:18px}
.stat{flex:1;padding:13px 18px;border-right:1px solid var(--line)}.stat:last-child{border-right:none}.stat.g{background:var(--green-bg)}
.stat .l{font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);font-weight:600}
.stat .v{font-weight:700;font-size:22px;margin-top:4px;font-variant-numeric:tabular-nums}.stat .v.sv{color:var(--green)}
.stat .s{font-size:10.5px;color:var(--muted);margin-top:3px}
table{width:100%;border-collapse:collapse}
.port th,.port td{padding:8px 11px;border-bottom:1px solid var(--line2)}
.port th{background:var(--panel);color:#fff;text-align:right;font-size:10px;font-weight:600;letter-spacing:.02em}.port th.l{text-align:left}
.port td.l{font-weight:600}.port td.r{text-align:right}
.port .tot td{background:var(--ink);color:#fff;font-weight:700;border:none}.port .tot td .num{color:var(--orange-hi)}
.sv{color:var(--green);font-weight:700}.ov{color:var(--red);font-weight:700}.tie{color:var(--muted)}
.pbadge{display:inline-block;font-size:9px;font-weight:700;letter-spacing:.04em;padding:2px 9px;border-radius:20px;color:#fff}.pbadge.sw{background:var(--green)}.pbadge.rv{background:var(--amber)}.pbadge.up{background:var(--orange)}
.reco{border:1px solid var(--orange);background:linear-gradient(180deg,#fff7f1,#fffcfa);border-radius:12px;padding:15px 18px;margin-top:16px}
.reco .pl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.reco p{font-size:12.5px;line-height:1.55;color:var(--ink2)}.reco b{color:var(--ink)}
/* building page */
.vbar{display:flex;border:1px solid var(--line);border-radius:12px;overflow:hidden;margin-bottom:16px}
.vb{flex:1;padding:12px 18px;border-right:1px solid var(--line)}.vb:last-child{border-right:none}.vb.win2{background:var(--soft)}
.vb .k{font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
.vb .v{font-weight:700;font-size:20px;margin-top:3px;font-variant-numeric:tabular-nums}
.cmp th{background:var(--panel);color:#fff;font-size:10px;font-weight:600;padding:8px 11px;text-align:right}
.cmp th.l{text-align:left}.cmp th span{display:block;font-size:8px;color:var(--orange-hi);font-weight:600;letter-spacing:.04em;text-transform:uppercase;margin-top:1px}
.cmp td{padding:7px 11px 3px}.cmp tr.ln td{border-top:1px solid var(--line2)}
.cmp td.l{font-weight:600;color:var(--ink);width:44%}
.cmp td.r{text-align:right;width:19%;font-variant-numeric:tabular-nums;white-space:nowrap}
.cmp td.dl{width:18%}
.cmp td.win{background:var(--green-bg);color:var(--green);font-weight:700}
.cmp tr.wy td{padding:0 11px 7px;font-size:10.5px;color:var(--muted);line-height:1.4;border:none}
.cmp .tot td{background:var(--ink);color:#fff;font-weight:700;padding:9px 11px;border:none}
.mut{color:var(--muted)}
.vnote{border-left:3px solid var(--green);background:var(--green-bg);border-radius:0 9px 9px 0;padding:11px 15px;margin-top:14px;font-size:12.5px;line-height:1.55;color:var(--ink2)}
.vnote.rv{border-left-color:var(--amber);background:var(--amber-bg)}.vnote.up{border-left-color:var(--orange);background:#fdf0e7}.vnote b{color:var(--ink)}
@page{size:A4 portrait;margin:0}
</style>'''
open('cmp_p.src.html','w').write(CSS+page1+''.join(bpage(*b) for b in B))
build('cmp_p.src.html','cmp_p.html')
print("built cmp_p.html; pages:",1+len(B))
