#!/usr/bin/env python3
"""
Mobile v2: app-style layout, chapter cards, better typography.
Removes any prior mobile CSS/JS and replaces wholesale.
"""
import glob, re

# ─────────────────────────────────────────────────────────────────
# CSS: drawer base + mobile chapter cards + media query
# ─────────────────────────────────────────────────────────────────
MOBILE_CSS = """
/* ── mobile base (drawer + chapter cards) ── */
.hamburger{display:none;background:none;border:none;cursor:pointer;
  padding:7px 9px;color:#1e293b;flex-shrink:0;border-radius:6px;line-height:1}
.hamburger:active{background:#f1f5f9}
.drawer-overlay{position:fixed;inset:0;background:rgba(15,23,42,.45);
  z-index:200;opacity:0;pointer-events:none;transition:opacity .25s}
.drawer-overlay.open{opacity:1;pointer-events:auto}
.drawer{position:fixed;top:0;left:0;width:272px;max-width:86vw;height:100%;
  background:#fff;z-index:201;display:flex;flex-direction:column;
  transform:translateX(-110%);transition:transform .3s cubic-bezier(.4,0,.2,1);
  box-shadow:6px 0 36px rgba(0,0,0,.15)}
.drawer.open{transform:translateX(0)}
.drawer-hd{display:flex;align-items:center;justify-content:space-between;
  padding:16px 18px 14px;border-bottom:1px solid #f1f5f9;flex-shrink:0}
.drawer-title{font-size:10px;font-weight:700;letter-spacing:2.5px;color:#94a3b8}
.drawer-close{background:none;border:none;cursor:pointer;font-size:22px;
  color:#cbd5e1;padding:0 4px;line-height:1;border-radius:4px}
.drawer-close:hover{color:#64748b}
.drawer-links{overflow-y:auto;flex:1;padding:6px 0 32px}
.drawer-tab{display:flex;align-items:center;padding:12px 20px;font-size:14px;
  color:#64748b;text-decoration:none;border-left:3px solid transparent;
  transition:background .12s;line-height:1.3}
.drawer-tab:active{background:#f1f5f9}
.drawer-tab.on{color:#1e293b;font-weight:700;border-left-color:#334155;background:#f8fafc}
/* chapter summary cards (shown mobile only) */
.mob-ch{display:none}
.mob-sec{border-left:3px solid #e2e8f0;border-radius:0 7px 7px 0;
  padding:10px 12px;background:#fff;display:flex;flex-direction:column;gap:3px;
  box-shadow:0 1px 4px rgba(0,0,0,.07)}
.mob-nl{font-size:10px;color:#94a3b8;font-weight:700;letter-spacing:.5px}
.mob-nt{font-size:13px;font-weight:700;color:#1e293b;line-height:1.3}
.mob-nc{font-size:10px;color:#94a3b8;margin-top:1px}

@media(max-width:640px){
  /* header */
  body{font-size:14px}
  header{padding:0 14px;gap:8px;height:52px}
  .hamburger{display:flex;align-items:center;justify-content:center}
  .nav,.back-btn{display:none}
  .hb,.hs{display:none}
  .h-info{flex:1;flex-shrink:1;justify-content:center}
  .hn{font-size:14px}
  .drawer-overlay.open{opacity:1;pointer-events:auto}
  .drawer.open{transform:translateX(0)}

  /* page grid → single column */
  .page{grid-template-columns:1fr;padding:14px 14px 80px}

  /* intro */
  .intro{padding-bottom:12px}
  .intro-h{font-size:23px;margin-bottom:6px}
  .intro-sup{font-size:10px;letter-spacing:2px}
  .intro-meta{gap:8px 16px;justify-content:flex-start}
  .im{font-size:11.5px}
  .intro-en{font-size:11px}

  /* chapter summary cards replace SVG overview */
  .mob-ch{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));
    gap:8px;padding:14px 0 8px;border-top:1px solid #e2e8f0;margin-top:6px}
  .page>div:not([class]){display:none}  /* hide SVG overviews + maps */

  /* phase label → horizontal strip */
  .ph{grid-column:1;flex-direction:row;align-items:center;
    padding:16px 0 4px;padding-right:0;gap:10px}
  .ph-dot{margin-bottom:0;flex-shrink:0}
  .ph-text{text-align:left;font-size:10.5px}

  /* section block */
  .n{grid-column:1;padding:14px 15px}
  .ev{grid-column:1;padding:10px 13px;font-size:13px}
  .ev-date{font-size:10px}

  /* section header typography: title first, metadata below */
  .nh{flex-wrap:wrap;gap:3px 8px;margin-bottom:8px}
  .nt{order:-1;flex:1 1 100%;font-size:17px;margin-bottom:4px;line-height:1.3}
  .nl{order:0;font-size:11px}
  .nw{order:1;font-size:11px}
  .nc{order:2;font-size:11px;margin-left:0}

  /* body text */
  .np li,.ns{font-size:14px;line-height:1.9}
  .cn{width:1.8em;font-size:11px}

  /* sidebar → full-width below section */
  .si{grid-column:1;padding-left:0;margin-left:0;padding-top:8px}
  .si::before{display:none}
  .nms{padding:10px 12px}
  .nms+.nms{margin-top:8px}
  .nm-title{font-size:9px;letter-spacing:1.5px;margin-bottom:6px}
  .nm{font-size:12px;padding:4px 0}
  .nm b{font-size:12px}
  .nm span{font-size:11px}
  /* 1/2 Nephi-style character cards */
  .sb{padding:9px 11px}
  .sn{font-size:13px}
  .se{font-size:10.5px}
  .sd{font-size:12px}

  /* spacers / arrows */
  .si-sp,.ph-sp,.arr{display:none}

  /* legend */
  .legend{grid-column:1;margin-top:12px;padding:12px 14px;gap:8px 18px}
  .lg-item{font-size:12px}
  .legend-title{font-size:9px}

  /* arc / character SVG → horizontal scroll zone */
  .rel{grid-column:1;margin-top:20px;overflow-x:auto;-webkit-overflow-scrolling:touch;
    border:1px solid #e2e8f0;border-radius:8px}
  .rel-title{font-size:9.5px;letter-spacing:1.5px;padding:10px 12px 0;margin-bottom:8px}
  .rel svg{min-width:600px;display:block}
}"""

# ─────────────────────────────────────────────────────────────────
# JS: drawer + chapter cards (combined, idempotent with data-mob attr)
# ─────────────────────────────────────────────────────────────────
MOBILE_JS = """<script data-mob="2">(function(){
  if(!window.matchMedia('(max-width:640px)').matches)return;
  function mk(t,c){var e=document.createElement(t);if(c)e.className=c;return e;}

  /* ── hamburger + drawer ── */
  var ov=mk('div','drawer-overlay');
  var dr=mk('nav','drawer');
  var hd=mk('div','drawer-hd');
  var tit=mk('span','drawer-title');
  tit.innerHTML='<span lang="en">BOOK OF MORMON</span><span lang="zh">摩尔门经</span>';
  var cx=mk('button','drawer-close');
  cx.setAttribute('aria-label','close');cx.textContent='×';
  cx.addEventListener('click',closeDr);
  hd.appendChild(tit);hd.appendChild(cx);
  var lks=mk('div','drawer-links');
  document.querySelectorAll('.nav .tab').forEach(function(a){
    var l=mk('a','drawer-tab'+(a.classList.contains('on')?' on':''));
    l.href=a.href;l.innerHTML=a.innerHTML;lks.appendChild(l);
  });
  dr.appendChild(hd);dr.appendChild(lks);
  document.body.appendChild(ov);document.body.appendChild(dr);

  var ham=mk('button','hamburger');
  ham.setAttribute('aria-label','menu');
  ham.innerHTML='<svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor">'+
    '<rect width="18" height="2" rx="1"/>'+
    '<rect y="6" width="18" height="2" rx="1"/>'+
    '<rect y="12" width="18" height="2" rx="1"/></svg>';
  ham.addEventListener('click',openDr);
  var hdr=document.querySelector('header');
  hdr.insertBefore(ham,hdr.firstChild);
  ov.addEventListener('click',closeDr);

  function openDr(){
    ov.classList.add('open');dr.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDr(){
    ov.classList.remove('open');dr.classList.remove('open');
    document.body.style.overflow='';
  }

  /* ── chapter summary cards (replace SVG overview) ── */
  var CM={
    vio:'#7c3aed',tea:'#0d9488',amb:'#d97706',
    pin:'#be185d',ros:'#be123c',blu:'#2563eb',grn:'#16a34a'
  };
  var intro=document.querySelector('.intro');
  if(!intro)return;
  var ct=mk('div','mob-ch');
  document.querySelectorAll('.page>.n').forEach(function(n){
    var ck=Object.keys(CM).find(function(k){return n.classList.contains(k);});
    var nl=n.querySelector('.nl'),nt=n.querySelector('.nt'),nc=n.querySelector('.nc');
    if(!nl||!nt)return;
    var c=mk('div','mob-sec');
    c.style.borderLeftColor=ck?CM[ck]:'#64748b';
    c.innerHTML=
      '<span class="mob-nl">'+nl.innerHTML+'</span>'+
      '<span class="mob-nt">'+nt.innerHTML+'</span>'+
      (nc?'<span class="mob-nc">'+nc.innerHTML+'</span>':'');
    ct.appendChild(c);
  });
  if(ct.children.length)intro.insertAdjacentElement('afterend',ct);
})();</script>"""

# ─────────────────────────────────────────────────────────────────
files = sorted(glob.glob('bom*.html'))
for fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove ALL prior mobile CSS blocks (any version)
    idx = html.find('\n/* ── mobile')
    if idx >= 0:
        end = html.find('\n</style>', idx)
        if end >= 0:
            html = html[:idx] + html[end:]

    # Inject new mobile CSS before </style>
    html = html.replace('\n</style>', MOBILE_CSS + '\n</style>', 1)

    # Remove old mobile JS scripts (any version: data-mob attr, or matchMedia iife)
    html = re.sub(r'<script data-mob(?:ile)?="[^"]*">[\s\S]*?</script>\n', '', html)
    html = re.sub(
        r'<script>\(function\(\)\{\n  if\(!window\.matchMedia[\s\S]*?\}\)\(\);</script>\n',
        '', html
    )

    # Inject new mobile JS before </body>
    html = html.replace('</body>', MOBILE_JS + '\n</body>', 1)

    with open(fn, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'OK: {fn}')

print('Done.')
