#!/usr/bin/env python3
"""
Mobile v3: full UI-designer pass.
- Dark drawer, card layout, semantic type scale
- Section cards: colored left border accent
- Sidebar: 2-col grid table
- No horizontal scroll anywhere
"""
import glob, re

MOBILE_CSS = """
/* ── mobile base ── */
.hamburger{display:none;background:none;border:none;cursor:pointer;
  width:40px;height:40px;color:#1e293b;flex-shrink:0;border-radius:8px;
  display:none;align-items:center;justify-content:center}
.hamburger:active{background:#f1f5f9}

/* drawer — dark slate */
.drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);
  z-index:200;opacity:0;pointer-events:none;transition:opacity .25s}
.drawer-overlay.open{opacity:1;pointer-events:auto}
.drawer{position:fixed;top:0;left:0;width:280px;max-width:88vw;height:100%;
  background:#1e293b;z-index:201;display:flex;flex-direction:column;
  transform:translateX(-110%);transition:transform .32s cubic-bezier(.4,0,.2,1);
  box-shadow:8px 0 40px rgba(0,0,0,.3)}
.drawer.open{transform:translateX(0)}
.drawer-hd{display:flex;align-items:center;justify-content:space-between;
  padding:18px 20px 16px;border-bottom:1px solid #334155;flex-shrink:0}
.drawer-title{font-size:9px;font-weight:700;letter-spacing:3px;color:#475569;
  text-transform:uppercase}
.drawer-close{background:none;border:none;cursor:pointer;font-size:20px;
  color:#475569;padding:2px 6px;line-height:1;border-radius:4px}
.drawer-close:hover{color:#94a3b8}
.drawer-links{overflow-y:auto;flex:1;padding:8px 0 36px}
.drawer-tab{display:flex;align-items:center;padding:13px 22px;font-size:14px;
  color:#94a3b8;text-decoration:none;border-left:3px solid transparent;
  transition:background .12s;line-height:1.3;letter-spacing:.1px}
.drawer-tab:active{background:rgba(255,255,255,.05)}
.drawer-tab.on{color:#f1f5f9;font-weight:600;border-left-color:#94a3b8;
  background:rgba(255,255,255,.07)}

/* chapter summary cards (desktop: hidden) */
.mob-ch{display:none}
.mob-sec{border-radius:10px;padding:13px 14px;background:#fff;
  display:flex;flex-direction:column;gap:3px;
  border-left:3px solid #e2e8f0;
  box-shadow:0 1px 4px rgba(0,0,0,.07)}
.mob-nl{font-size:10px;color:#94a3b8;font-weight:700;letter-spacing:.6px}
.mob-nt{font-size:13px;font-weight:700;color:#1e293b;line-height:1.25}
.mob-nc{font-size:10px;color:#b0bac5;margin-top:1px}

@media(max-width:640px){
  /* ── global ── */
  body{font-size:15px;background:#eef1f6}

  /* ── header ── */
  header{padding:0 14px 0 6px;gap:6px;height:54px;
    border-bottom:1px solid #dde3ec;box-shadow:0 1px 0 #dde3ec}
  .hamburger{display:flex}
  .nav,.back-btn,.hb,.hs{display:none}
  .h-info{flex:1;justify-content:center;text-align:center}
  .hn{font-size:15px;font-weight:600;letter-spacing:.3px;color:#1e293b}
  .lang-btn{font-size:11px;padding:5px 10px;border-radius:7px;flex-shrink:0}
  .drawer-overlay.open,.drawer.open{opacity:1;pointer-events:auto}
  .drawer.open{transform:translateX(0)}

  /* ── page grid ── */
  .page{grid-template-columns:1fr;padding:14px 12px 96px;gap:0;background:#eef1f6}

  /* ── intro ── */
  .intro{text-align:left;padding:22px 18px 20px;border-radius:16px;border:none;
    background:#fff;margin-bottom:14px;
    box-shadow:0 1px 4px rgba(0,0,0,.07)}
  .intro-sup{font-size:9.5px;letter-spacing:3px;color:#94a3b8;margin-bottom:10px}
  .intro-h{font-size:28px;font-weight:300;letter-spacing:-.5px;line-height:1.1;
    margin-bottom:14px;color:#1e293b}
  .intro-meta{flex-direction:column;gap:7px;justify-content:flex-start}
  .im{font-size:12px;display:flex;gap:7px;align-items:baseline;color:#64748b}
  .im b{color:#1e293b;font-weight:600}
  .intro-en{font-size:11px;margin-top:8px;padding-top:10px;border-top:1px solid #f1f5f9;
    color:#94a3b8}

  /* ── chapter summary cards ── */
  .mob-ch{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
    gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid #f0f2f6}
  .intro+div:not([class]){display:none}

  /* ── phase labels ── hidden; color carried by card left border */
  .ph,.ph-sp,.arr,.si-sp{display:none}

  /* ── section card ── */
  .n{grid-column:1;
    border-top:none!important;border-right:none!important;border-bottom:none!important;
    border-left-width:4px!important;
    border-radius:0 16px 16px 0;
    padding:18px 17px 20px;margin-bottom:4px;
    box-shadow:0 1px 4px rgba(0,0,0,.07)}
  .n:hover{filter:none}

  /* ── section header: chapter → title → location · time ── */
  .nh{display:flex;flex-wrap:wrap;gap:0 8px;margin-bottom:14px;align-items:baseline}
  .nl{order:1;flex:0 0 100%;font-size:10px;font-weight:700;letter-spacing:1.2px;
    margin-bottom:6px}
  .nt{order:2;flex:0 0 100%;font-size:20px;font-weight:700;line-height:1.2;
    margin-bottom:8px}
  .nw{order:3;font-size:12px}
  .nc{order:4;font-size:12px;margin-left:0}
  .nc::before{content:' · '}

  /* ── scripture list ── */
  .np{padding:0;margin:0}
  .np li{font-size:14.5px;color:#374151;line-height:1.85;
    padding-left:2.4em;text-indent:-2.4em;
    padding-top:7px;padding-bottom:7px;
    border-bottom:1px solid rgba(0,0,0,.05)}
  .np li:last-child{border-bottom:none;padding-bottom:0}
  .cn{display:inline-block;width:1.8em;font-size:11px;font-weight:700;
    color:#94a3b8;letter-spacing:0;text-align:right;margin-right:6px}
  .ns{font-size:14.5px;line-height:1.85;color:#374151}

  /* ── event box ── */
  .ev{grid-column:1;border-radius:12px;
    border-style:solid!important;border-width:1px!important;
    padding:12px 16px;margin-bottom:4px;font-size:13px;line-height:1.6}
  .ev-icon{display:none}
  .ev-date{font-size:9px;letter-spacing:1.5px;font-weight:700;margin-bottom:5px}

  /* ── sidebar ── */
  .si{grid-column:1;padding:0;margin-bottom:20px}
  .si::before{display:none}
  .nms{background:#fff;border-radius:12px;padding:14px 16px;
    border:1px solid #dde3ec;box-shadow:0 1px 3px rgba(0,0,0,.05)}
  .nms+.nms{margin-top:8px}
  .nm-title{font-size:9px;font-weight:700;letter-spacing:2px;color:#94a3b8;
    text-transform:uppercase;margin-bottom:10px;
    padding-bottom:8px;border-bottom:1px solid #f0f2f6}
  .nm{display:grid;grid-template-columns:84px 1fr;gap:4px;
    padding:6px 0;border-top:1px solid #f6f8fb;
    align-items:baseline;line-height:1.45}
  .nm:first-of-type{border-top:none;padding-top:0}
  .nm b{font-size:12px;font-weight:600;color:#334155}
  .nm span{font-size:12px;color:#64748b}

  /* 1/2 Nephi character sidebar cards */
  .sb{background:#f8fafc;border-radius:10px;padding:10px 13px;
    border:1px solid #f0f2f6;margin-bottom:6px}
  .sn{font-size:13.5px;font-weight:700;color:#1e293b}
  .se{font-size:10.5px;color:#94a3b8;margin-top:1px}
  .sd{font-size:12px;color:#475569;line-height:1.5;margin-top:5px}

  /* ── legend ── */
  .legend{grid-column:1;background:#fff;border-radius:12px;
    padding:14px 16px;border:1px solid #dde3ec;
    box-shadow:0 1px 3px rgba(0,0,0,.05)}
  .legend-title{font-size:9px;letter-spacing:2px;color:#94a3b8;margin-bottom:10px}
  .lg-item{font-size:12px;color:#475569}

  /* ── arc / character SVG ── scale to fit, card container */
  .rel{grid-column:1;margin:0 0 20px;overflow:hidden;
    border:1px solid #dde3ec;border-radius:14px;
    background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.05)}
  .rel-title{font-size:9px;letter-spacing:2px;color:#94a3b8;
    padding:14px 16px 0;margin-bottom:6px;text-align:left}
  .rel svg{width:100%;height:auto;min-width:0;display:block}

  /* ── activity maps & other no-class SVG divs ── */
  .page>div:not([class]) svg{
    width:100%!important;height:auto!important;min-width:0;display:block}
}"""

MOBILE_JS = """<script data-mob="3">(function(){
  if(!window.matchMedia('(max-width:640px)').matches)return;
  function mk(t,c){var e=document.createElement(t);if(c)e.className=c;return e;}

  /* ── hamburger + dark drawer ── */
  var ov=mk('div','drawer-overlay');
  var dr=mk('nav','drawer');
  var hd=mk('div','drawer-hd');
  var tit=mk('span','drawer-title');
  tit.innerHTML='<span lang="en">Book of Mormon</span><span lang="zh">摩尔门经</span>';
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
  ham.innerHTML='<svg width="18" height="13" viewBox="0 0 18 13" fill="currentColor">'+
    '<rect width="18" height="2" rx="1"/>'+
    '<rect y="5.5" width="14" height="2" rx="1"/>'+
    '<rect y="11" width="18" height="2" rx="1"/></svg>';
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

  /* ── chapter summary cards ── */
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

    # Remove ALL prior mobile CSS blocks
    idx = html.find('\n/* ── mobile')
    if idx >= 0:
        end = html.find('\n</style>', idx)
        if end >= 0:
            html = html[:idx] + html[end:]

    html = html.replace('\n</style>', MOBILE_CSS + '\n</style>', 1)

    # Remove old mobile JS (any version)
    html = re.sub(r'<script data-mob(?:ile)?="[^"]*">[\s\S]*?</script>\n', '', html)
    html = re.sub(
        r'<script>\(function\(\)\{\n  if\(!window\.matchMedia[\s\S]*?\}\)\(\);</script>\n',
        '', html
    )

    html = html.replace('</body>', MOBILE_JS + '\n</body>', 1)

    with open(fn, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'OK: {fn}')

print('Done.')
