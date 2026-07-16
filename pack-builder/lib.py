# shared helpers: Libre Franklin font block + logo injection + render
import base64, subprocess, os
HERE=os.path.dirname(os.path.abspath(__file__))
def b64(p): return base64.b64encode(open(os.path.join(HERE,p),'rb').read()).decode()
def fontblock():
    def ff(w,f): return f"@font-face{{font-family:'Libre Franklin';font-weight:{w};font-style:normal;src:url(data:font/woff2;base64,{b64(f)}) format('woff2')}}"
    return "\n".join([ff(400,'lf-400.woff2'),ff(600,'lf-600.woff2'),ff(700,'lf-700.woff2')])
def inject(src_html):
    logo=b64('cartrack-insurance-horizontal-white.png')
    return src_html.replace('/*FONTS*/',fontblock()).replace('LOGOW',f'data:image/png;base64,{logo}')
def build(src_path,out_html):
    h=inject(open(os.path.join(HERE,src_path)).read())
    open(os.path.join(HERE,out_html),'w').write(h); return out_html
