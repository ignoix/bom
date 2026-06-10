#!/usr/bin/env python3
"""
Nav redesign:
- back-btn → icon only (SVG list/timeline icon via CSS mask)
- .h-info  → hidden on desktop, visible on mobile (book title only)
- .nav     → flex:1, stretches to fill, left-aligned tabs
- .lang-btn stays rightmost (no change needed)
"""
import glob, re

# ── SVG mask icon: 3 staggered bars (list/timeline) ──────────────
SVG_MASK = (
    "url(\"data:image/svg+xml,"
    "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 12'%3E"
    "%3Crect x='0' y='0' width='15' height='2.5' rx='1.2'/%3E"
    "%3Crect x='0' y='4.75' width='15' height='2.5' rx='1.2'/%3E"
    "%3Crect x='0' y='9.5' width='10' height='2.5' rx='1.2'/%3E"
    "%3C/svg%3E\") no-repeat center/contain"
)

# New .back-btn (icon-only square button)
BACK_BTN_NEW = (
    ".back-btn{display:inline-flex;align-items:center;justify-content:center;"
    "width:32px;height:32px;padding:0;flex-shrink:0;"
    "border:1px solid #e2e8f0;border-radius:7px;"
    "text-decoration:none;color:#64748b;transition:all .15s}"
)
BACK_BTN_HOVER_NEW = (
    ".back-btn:hover{background:#f1f5f9;border-color:#cbd5e1}"
)
BACK_BTN_BEFORE = (
    ".back-btn::before{content:'';display:block;width:15px;height:12px;"
    f"background-color:#64748b;-webkit-mask:{SVG_MASK};mask:{SVG_MASK}}}"
)
BACK_BTN_HOVER_BEFORE = (
    ".back-btn:hover::before{background-color:#1e293b}"
)

# Hide breadcrumb on desktop
H_INFO_HIDDEN = ".h-info{display:none}"

# Nav: stretch to fill, tabs left-aligned
NAV_NEW = ".nav{flex:1;display:flex;gap:2px;overflow-x:auto}"

# Mobile: explicitly show .h-info (book title only, .hb/.hs already hidden)
H_INFO_MOBILE_OLD = ".h-info{flex:1;justify-content:center;text-align:center}"
H_INFO_MOBILE_NEW = ".h-info{display:flex;flex:1;justify-content:center;text-align:center}"

for fn in sorted(glob.glob('bom*.html')):
    with open(fn, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Hide .h-info in base CSS
    html = re.sub(
        r'\.h-info\{display:flex;[^}]+\}',
        H_INFO_HIDDEN,
        html
    )

    # 2. Replace .back-btn base style (matches font-size:11px variant)
    html = re.sub(
        r'\.back-btn\{font-size:[^}]+\}',
        BACK_BTN_NEW,
        html
    )

    # 3. Replace .back-btn:hover and inject ::before rules after it
    html = re.sub(
        r'\.back-btn:hover\{[^}]+\}',
        '\n'.join([BACK_BTN_HOVER_NEW, BACK_BTN_BEFORE, BACK_BTN_HOVER_BEFORE]),
        html
    )

    # 4. Stretch .nav in base CSS (flex:1, no margin-left:auto)
    html = re.sub(
        r'\.nav\{margin-left:auto;[^}]+\}',
        NAV_NEW,
        html
    )

    # 5. Mobile: restore .h-info visibility (add display:flex)
    html = html.replace(H_INFO_MOBILE_OLD, H_INFO_MOBILE_NEW)

    with open(fn, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'OK: {fn}')

print('Done.')
