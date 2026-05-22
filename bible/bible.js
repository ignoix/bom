// 聖經時間線資料
// 年份均為近似學術估計，負數為西元前

const BIBLE_ROW_LABELS = ['以色列/猶大', '聖經人物', '舊約各書', '新約各書', '以色列/北國諸王', '猶大諸王', '外邦帝國'];

const BIBLE_GROUPS = [

  // ══ Row 0 以色列/猶大（歷史分期）══════════════════════════════════
  { name:'先祖時代',   en:'Age of Patriarchs (Abraham–Joseph)',     start:-2000, end:-1446, color:'#0e7490', row:0 },
  { name:'出埃及/曠野', en:'Exodus & Wilderness Wandering',          start:-1446, end:-1406, color:'#0891b2', row:0 },
  { name:'征服/士師',  en:'Conquest of Canaan & Period of Judges',  start:-1406, end:-1050, color:'#0284c7', row:0 },
  { name:'聯合王國',   en:'United Monarchy (Saul, David, Solomon)', start:-1050, end: -930, color:'#1e40af', row:0 },
  { name:'南北分裂',   en:'Divided Kingdom',                        start: -930, end: -722, color:'#2563eb', row:0 },
  { name:'南國猶大',   en:'Kingdom of Judah (alone after north fell)', start:-722, end:-586, color:'#3b82f6', row:0 },
  { name:'被擄/歸回',  en:'Babylonian Exile & Persian Restoration', start: -586, end: -400, color:'#7c3aed', row:0 },
  { name:'兩約之間',   en:'Intertestamental Period',                start: -400, end:   -4, color:'#475569', row:0 },
  { name:'新約時代',   en:'New Testament Era',                      start:   -4, end:  100, color:'#15803d', row:0 },

  // ══ Row 1 聖經人物 ════════════════════════════════════════════════
  // ── 洪水前族長（傳統馬索拉文本年代）──────────────────────────────
  { name:'亞當',       en:'Adam',               start:-4004, end:-3074, color:'#6d28d9', row:1, personal:'', wikiEn:'Adam_and_Eve' },
  { name:'以諾',       en:'Enoch',              start:-3382, end:-3017, color:'#8b5cf6', row:1, personal:'', wikiEn:'Enoch_(ancestor_of_Noah)' },
  { name:'瑪土撒拉',   en:'Methuselah',         start:-3317, end:-2348, color:'#7c3aed', row:1, personal:'', wikiEn:'Methuselah' },
  { name:'挪亞',       en:'Noah',               start:-2948, end:-1998, color:'#6d28d9', row:1, personal:'', wikiEn:'Noah' },
  // ── 後洪水族長 ───────────────────────────────────────────────────
  { name:'閃',         en:'Shem',               start:-2448, end:-1848, color:'#0d9488', row:1, personal:'', wikiEn:'Shem' },
  { name:'亞伯拉罕',   en:'Abraham',            start:-2166, end:-1991, color:'#0891b2', row:1, personal:'', wikiEn:'Abraham' },
  { name:'以撒',       en:'Isaac',              start:-2066, end:-1886, color:'#0284c7', row:1, personal:'', wikiEn:'Isaac' },
  { name:'雅各',       en:'Jacob/Israel',       start:-2006, end:-1859, color:'#0369a1', row:1, personal:'', wikiEn:'Jacob' },
  { name:'約瑟',       en:'Joseph (son of Jacob)', start:-1915, end:-1805, color:'#075985', row:1, personal:'', wikiEn:'Joseph_(Genesis)' },
  // ── 出埃及/征服 ──────────────────────────────────────────────────
  { name:'摩西',       en:'Moses',              start:-1526, end:-1406, color:'#d97706', row:1, personal:'', wikiEn:'Moses' },
  { name:'約書亞',     en:'Joshua',             start:-1490, end:-1380, color:'#b45309', row:1, personal:'', wikiEn:'Joshua' },
  // ── 士師時代 ─────────────────────────────────────────────────────
  { name:'底波拉',     en:'Deborah',            start:-1200, end:-1150, color:'#c2410c', row:1, personal:'', wikiEn:'Deborah' },
  { name:'基甸',       en:'Gideon',             start:-1170, end:-1130, color:'#ea580c', row:1, personal:'', wikiEn:'Gideon' },
  { name:'參孫',       en:'Samson',             start:-1100, end:-1060, color:'#dc2626', row:1, personal:'', wikiEn:'Samson' },
  { name:'撒母耳',     en:'Samuel',             start:-1105, end:-1020, color:'#b91c1c', row:1, personal:'', wikiEn:'Samuel' },
  // ── 先知 ─────────────────────────────────────────────────────────
  { name:'以利亞',     en:'Elijah',             start: -875, end: -848, color:'#7c3aed', row:1, personal:'', wikiEn:'Elijah' },
  { name:'以利沙',     en:'Elisha',             start: -848, end: -797, color:'#6d28d9', row:1, personal:'', wikiEn:'Elisha' },
  { name:'以賽亞',     en:'Isaiah',             start: -765, end: -686, color:'#dc2626', row:1, personal:'', wikiEn:'Isaiah' },
  { name:'耶利米',     en:'Jeremiah',           start: -650, end: -585, color:'#b91c1c', row:1, personal:'', wikiEn:'Jeremiah' },
  { name:'但以理',     en:'Daniel',             start: -620, end: -536, color:'#991b1b', row:1, personal:'', wikiEn:'Daniel_(biblical_figure)' },
  { name:'以斯拉',     en:'Ezra',               start: -480, end: -440, color:'#1d4ed8', row:1, personal:'', wikiEn:'Ezra' },
  { name:'尼希米',     en:'Nehemiah',           start: -470, end: -430, color:'#2563eb', row:1, personal:'', wikiEn:'Nehemiah' },
  // ── 新約人物 ─────────────────────────────────────────────────────
  { name:'施洗約翰',   en:'John the Baptist',   start:   -5, end:   29, color:'#0d9488', row:1, personal:'', wikiEn:'John_the_Baptist' },
  { name:'耶穌',       en:'Jesus Christ',       start:   -4, end:   33, color:'#16a34a', row:1, personal:'', wikiEn:'Jesus' },
  { name:'彼得',       en:'Peter the Apostle',  start:    1, end:   64, color:'#15803d', row:1, personal:'', wikiEn:'Saint_Peter' },
  { name:'保羅',       en:'Paul the Apostle',   start:    5, end:   67, color:'#166534', row:1, personal:'', wikiEn:'Paul_the_Apostle' },

  // ══ Row 6 外邦帝國 ════════════════════════════════════════════════
  { name:'古埃及',     en:'Ancient Egypt',              start:-2000, end: -525, color:'#b45309', row:6 },
  { name:'亞述帝國',   en:'Assyrian Empire',             start: -911, end: -609, color:'#dc2626', row:6 },
  { name:'新巴比倫',   en:'Neo-Babylonian Empire',       start: -626, end: -539, color:'#7c2d12', row:6 },
  { name:'波斯帝國',   en:'Persian Empire',              start: -550, end: -330, color:'#c2410c', row:6 },
  { name:'希臘/塞琉古', en:'Greek & Seleucid Empire',    start: -336, end:  -63, color:'#1d4ed8', row:6 },
  { name:'羅馬帝國',   en:'Roman Empire',                start:  -63, end:  100, color:'#991b1b', row:6 },

  // ══ Row 2 舊約各書 ════════════════════════════════════════════════
  // ── 摩西五經（律法書）────────────────────────────────────────────
  { name:'創世記',    en:'Genesis',      start:-2000, end:-1447, color:'#78350f', row:2 },
  { name:'出埃及記',  en:'Exodus',       start:-1446, end:-1406, color:'#92400e', row:2 },
  { name:'利未記',    en:'Leviticus',    start:-1446, end:-1430, color:'#b45309', row:2 },
  { name:'民數記',    en:'Numbers',      start:-1430, end:-1407, color:'#d97706', row:2 },
  { name:'申命記',    en:'Deuteronomy',  start:-1407, end:-1400, color:'#f59e0b', row:2 },

  // ── 歷史書 ──────────────────────────────────────────────────────
  { name:'約書亞記',   en:'Joshua',      start:-1406, end:-1375, color:'#16a34a', row:2 },
  { name:'士師記',     en:'Judges',      start:-1375, end:-1075, color:'#15803d', row:2 },
  { name:'路得記',     en:'Ruth',        start:-1100, end:-1060, color:'#166534', row:2 },
  { name:'撒母耳記上', en:'1 Samuel',    start:-1060, end:-1010, color:'#14532d', row:2 },
  { name:'撒母耳記下', en:'2 Samuel',    start:-1010, end: -970, color:'#065f46', row:2 },
  { name:'列王記上',   en:'1 Kings',     start: -970, end: -853, color:'#0d9488', row:2 },
  { name:'列王記下',   en:'2 Kings',     start: -853, end: -586, color:'#0891b2', row:2 },
  { name:'以斯拉記',   en:'Ezra',        start: -538, end: -457, color:'#0369a1', row:2 },
  { name:'尼希米記',   en:'Nehemiah',    start: -445, end: -420, color:'#1d4ed8', row:2 },
  { name:'以斯帖記',   en:'Esther',      start: -483, end: -465, color:'#2563eb', row:2 },

  // ── 詩歌智慧書 ──────────────────────────────────────────────────
  { name:'約伯記',    en:'Job',           start:-2000, end:-1800, color:'#7c3aed', row:2 },
  { name:'詩篇',      en:'Psalms',        start:-1000, end: -430, color:'#6d28d9', row:2 },
  { name:'箴言',      en:'Proverbs',      start: -970, end: -700, color:'#5b21b6', row:2 },
  { name:'傳道書',    en:'Ecclesiastes',  start: -935, end: -895, color:'#4c1d95', row:2 },
  { name:'雅歌',      en:'Song of Songs', start: -965, end: -940, color:'#7e22ce', row:2 },

  // ── 大先知書 ────────────────────────────────────────────────────
  { name:'以賽亞書',  en:'Isaiah',         start: -740, end: -686, color:'#dc2626', row:2 },
  { name:'耶利米書',  en:'Jeremiah',       start: -627, end: -586, color:'#b91c1c', row:2 },
  { name:'哀歌',      en:'Lamentations',   start: -586, end: -580, color:'#991b1b', row:2 },
  { name:'以西結書',  en:'Ezekiel',        start: -593, end: -571, color:'#7f1d1d', row:2 },
  { name:'但以理書',  en:'Daniel',         start: -605, end: -536, color:'#ef4444', row:2 },

  // ── 小先知書 ────────────────────────────────────────────────────
  { name:'何西阿書',   en:'Hosea',      start: -760, end: -720, color:'#f97316', row:2 },
  { name:'約珥書',     en:'Joel',       start: -835, end: -796, color:'#fb923c', row:2 },
  { name:'阿摩司書',   en:'Amos',       start: -760, end: -750, color:'#fdba74', row:2 },
  { name:'俄巴底亞書', en:'Obadiah',    start: -586, end: -580, color:'#f59e0b', row:2 },
  { name:'約拿書',     en:'Jonah',      start: -785, end: -760, color:'#eab308', row:2 },
  { name:'彌迦書',     en:'Micah',      start: -735, end: -700, color:'#ca8a04', row:2 },
  { name:'那鴻書',     en:'Nahum',      start: -660, end: -612, color:'#a16207', row:2 },
  { name:'哈巴谷書',   en:'Habakkuk',   start: -612, end: -589, color:'#854d0e', row:2 },
  { name:'西番雅書',   en:'Zephaniah',  start: -640, end: -609, color:'#713f12', row:2 },
  { name:'哈該書',     en:'Haggai',     start: -520, end: -516, color:'#65a30d', row:2 },
  { name:'撒迦利亞書', en:'Zechariah',  start: -520, end: -480, color:'#4d7c0f', row:2 },
  { name:'瑪拉基書',   en:'Malachi',    start: -450, end: -400, color:'#3f6212', row:2 },

  // ══ Row 3 新約各書 ════════════════════════════════════════════════
  // ── 四福音書（記錄耶穌生平，以事件年代標示）─────────────────────
  { name:'馬太福音',   en:'Matthew',          start:  -4, end:  33, color:'#0d9488', row:3 },
  { name:'馬可福音',   en:'Mark',             start:  27, end:  33, color:'#0891b2', row:3 },
  { name:'路加福音',   en:'Luke',             start:  -4, end:  33, color:'#0369a1', row:3 },
  { name:'約翰福音',   en:'John',             start:  -4, end:  33, color:'#1d4ed8', row:3 },
  // ── 使徒行傳（早期教會事件）──────────────────────────────────────
  { name:'使徒行傳',   en:'Acts',             start:  33, end:  62, color:'#2563eb', row:3 },
  // ── 保羅書信（著作年代）──────────────────────────────────────────
  { name:'加拉太書',   en:'Galatians',        start:  48, end:  49, color:'#4f46e5', row:3 },
  { name:'帖前書',     en:'1 Thessalonians',  start:  51, end:  52, color:'#4338ca', row:3 },
  { name:'帖後書',     en:'2 Thessalonians',  start:  52, end:  53, color:'#3730a3', row:3 },
  { name:'哥前書',     en:'1 Corinthians',    start:  55, end:  56, color:'#312e81', row:3 },
  { name:'哥後書',     en:'2 Corinthians',    start:  56, end:  57, color:'#4338ca', row:3 },
  { name:'羅馬書',     en:'Romans',           start:  57, end:  58, color:'#6d28d9', row:3 },
  { name:'以弗所書',   en:'Ephesians',        start:  60, end:  62, color:'#7c3aed', row:3 },
  { name:'歌羅西書',   en:'Colossians',       start:  60, end:  62, color:'#8b5cf6', row:3 },
  { name:'腓立比書',   en:'Philippians',      start:  61, end:  62, color:'#9333ea', row:3 },
  { name:'腓利門書',   en:'Philemon',         start:  61, end:  62, color:'#a855f7', row:3 },
  { name:'提摩太前書', en:'1 Timothy',        start:  62, end:  65, color:'#c026d3', row:3 },
  { name:'提多書',     en:'Titus',            start:  64, end:  66, color:'#db2777', row:3 },
  { name:'提摩太後書', en:'2 Timothy',        start:  66, end:  67, color:'#be185d', row:3 },
  // ── 公眾書信 ────────────────────────────────────────────────────
  { name:'雅各書',     en:'James',            start:  48, end:  50, color:'#ec4899', row:3 },
  { name:'希伯來書',   en:'Hebrews',          start:  64, end:  69, color:'#f472b6', row:3 },
  { name:'彼得前書',   en:'1 Peter',          start:  63, end:  64, color:'#f9a8d4', row:3 },
  { name:'彼得後書',   en:'2 Peter',          start:  66, end:  68, color:'#fda4af', row:3 },
  { name:'猶大書',     en:'Jude',             start:  68, end:  70, color:'#fb7185', row:3 },
  { name:'約翰一書',   en:'1 John',           start:  90, end:  95, color:'#f43f5e', row:3 },
  { name:'約翰二書',   en:'2 John',           start:  91, end:  95, color:'#e11d48', row:3 },
  { name:'約翰三書',   en:'3 John',           start:  91, end:  95, color:'#be123c', row:3 },
  // ── 啟示錄 ──────────────────────────────────────────────────────
  { name:'啟示錄',     en:'Revelation',       start:  95, end:  96, color:'#dc2626', row:3 },

  // ══ Row 4 以色列/北國諸王 ══════════════════════════════════════════
  // ── 聯合王國 ─────────────────────────────────────────────────────
  { name:'掃羅',       en:'Saul',              start:-1050, end:-1010, color:'#d97706', row:4, personal:'', wikiEn:'Saul' },
  { name:'大衛',       en:'David',             start:-1010, end: -970, color:'#f59e0b', row:4, personal:'', wikiEn:'David' },
  { name:'所羅門',     en:'Solomon',           start: -970, end: -930, color:'#ca8a04', row:4, personal:'', wikiEn:'Solomon' },
  // ── 北國以色列（耶羅波安一世至何細亞）───────────────────────────
  { name:'耶羅波安一世', en:'Jeroboam I',      start: -930, end: -909, color:'#ea580c', row:4, personal:'', wikiEn:'Jeroboam_I' },
  { name:'拿答',       en:'Nadab',             start: -909, end: -907, color:'#dc2626', row:4, personal:'' },
  { name:'巴沙',       en:'Baasha',            start: -907, end: -884, color:'#ef4444', row:4, personal:'' },
  { name:'以拉',       en:'Elah',              start: -884, end: -883, color:'#dc2626', row:4, personal:'' },
  { name:'心利',       en:'Zimri (7 days)',    start: -883, end: -882, color:'#b91c1c', row:4, personal:'' },
  { name:'暗利',       en:'Omri',              start: -882, end: -871, color:'#ea580c', row:4, personal:'', wikiEn:'Omri' },
  { name:'亞哈',       en:'Ahab',              start: -871, end: -852, color:'#dc2626', row:4, personal:'', wikiEn:'Ahab' },
  { name:'亞哈謝',     en:'Ahaziah of Israel', start: -852, end: -851, color:'#ef4444', row:4, personal:'' },
  { name:'約蘭',       en:'Joram of Israel',   start: -851, end: -840, color:'#dc2626', row:4, personal:'' },
  { name:'耶戶',       en:'Jehu',              start: -840, end: -813, color:'#ea580c', row:4, personal:'', wikiEn:'Jehu' },
  { name:'約哈斯',     en:'Jehoahaz of Israel',start: -813, end: -797, color:'#dc2626', row:4, personal:'' },
  { name:'約阿施',     en:'Jehoash of Israel', start: -797, end: -781, color:'#ef4444', row:4, personal:'' },
  { name:'耶羅波安二世', en:'Jeroboam II',     start: -781, end: -753, color:'#dc2626', row:4, personal:'', wikiEn:'Jeroboam_II' },
  { name:'撒迦利亞',   en:'Zechariah of Israel',start:-753, end: -752, color:'#b91c1c', row:4, personal:'' },
  { name:'沙龍',       en:'Shallum (1 month)', start: -752, end: -751, color:'#dc2626', row:4, personal:'' },
  { name:'米拿現',     en:'Menahem',           start: -751, end: -741, color:'#ef4444', row:4, personal:'' },
  { name:'比加轄',     en:'Pekahiah',          start: -741, end: -739, color:'#dc2626', row:4, personal:'' },
  { name:'比加',       en:'Pekah',             start: -739, end: -730, color:'#ea580c', row:4, personal:'', wikiEn:'Pekah' },
  { name:'何細亞',     en:'Hoshea of Israel',  start: -730, end: -722, color:'#dc2626', row:4, personal:'', wikiEn:'Hoshea' },

  // ══ Row 5 猶大諸王 ════════════════════════════════════════════════
  { name:'羅波安',     en:'Rehoboam',          start: -930, end: -913, color:'#2563eb', row:5, personal:'', wikiEn:'Rehoboam' },
  { name:'亞比雅',     en:'Abijah',            start: -913, end: -910, color:'#3b82f6', row:5, personal:'' },
  { name:'亞撒',       en:'Asa',               start: -910, end: -869, color:'#1d4ed8', row:5, personal:'', wikiEn:'Asa_of_Judah' },
  { name:'約沙法',     en:'Jehoshaphat',       start: -869, end: -848, color:'#2563eb', row:5, personal:'', wikiEn:'Jehoshaphat' },
  { name:'約蘭',       en:'Jehoram of Judah',  start: -848, end: -841, color:'#3b82f6', row:5, personal:'' },
  { name:'亞哈謝',     en:'Ahaziah of Judah',  start: -841, end: -840, color:'#1d4ed8', row:5, personal:'' },
  { name:'亞他利雅',   en:'Athaliah (Queen)',  start: -840, end: -835, color:'#4338ca', row:5, personal:'' },
  { name:'約阿施',     en:'Joash of Judah',    start: -835, end: -796, color:'#2563eb', row:5, personal:'', wikiEn:'Jehoash_of_Judah' },
  { name:'亞瑪謝',     en:'Amaziah of Judah',  start: -796, end: -767, color:'#1d4ed8', row:5, personal:'' },
  { name:'烏西雅',     en:'Uzziah/Azariah',    start: -767, end: -740, color:'#2563eb', row:5, personal:'', wikiEn:'Uzziah' },
  { name:'約坦',       en:'Jotham',            start: -740, end: -732, color:'#3b82f6', row:5, personal:'' },
  { name:'亞哈斯',     en:'Ahaz',              start: -732, end: -715, color:'#1d4ed8', row:5, personal:'', wikiEn:'Ahaz' },
  { name:'希西家',     en:'Hezekiah',          start: -715, end: -686, color:'#2563eb', row:5, personal:'', wikiEn:'Hezekiah' },
  { name:'瑪拿西',     en:'Manasseh',          start: -686, end: -642, color:'#1d4ed8', row:5, personal:'', wikiEn:'Manasseh_of_Judah' },
  { name:'亞們',       en:'Amon of Judah',     start: -642, end: -640, color:'#3b82f6', row:5, personal:'' },
  { name:'約西亞',     en:'Josiah',            start: -640, end: -609, color:'#2563eb', row:5, personal:'', wikiEn:'Josiah' },
  { name:'約哈斯',     en:'Jehoahaz of Judah', start: -609, end: -608, color:'#3b82f6', row:5, personal:'' },
  { name:'約雅敬',     en:'Jehoiakim',         start: -608, end: -598, color:'#1d4ed8', row:5, personal:'', wikiEn:'Jehoiakim' },
  { name:'約雅斤',     en:'Jehoiachin',        start: -598, end: -597, color:'#3b82f6', row:5, personal:'', wikiEn:'Jehoiachin' },
  { name:'西底家',     en:'Zedekiah',          start: -597, end: -586, color:'#2563eb', row:5, personal:'', wikiEn:'Zedekiah' },
];

const BIBLE_EVENTS = [
  // ── 族長時代 ──────────────────────────────────────────────────────
  { year: -2000, text: '亞伯拉罕蒙召，神應許賜迦南地並賜他後裔如星' },
  { year: -1876, text: '約瑟被兄長賣至埃及，後升任宰相，拯救埃及和自己家族' },
  { year: -1526, text: '摩西生於埃及，被法老女兒所救，暗中由母親哺養' },

  // ── 出埃及 ──────────────────────────────────────────────────────
  { year: -1446, text: '十災降臨埃及，逾越節羔羊之血保護以色列人；摩西帶領約二百萬人出埃及' },
  { year: -1446, text: '分開紅海，摩西在西奈山頒佈十誡，立約版納入約櫃' },

  // ── 進迦南 ──────────────────────────────────────────────────────
  { year: -1406, text: '約書亞帶領以色列人奇蹟渡過約旦河，攻陷耶利哥城（喇合以紅線得救）' },

  // ── 王國時代 ────────────────────────────────────────────────────
  { year: -1050, text: '掃羅膏立為以色列第一位王（由先知撒母耳膏抹）' },
  { year: -1010, text: '大衛成為以色列全地之王，攻取耶路撒冷定都，迎回約櫃' },
  { year:  -966, text: '所羅門王開始建造聖殿；神異象中應許：若離棄神聖殿將被拆毀' },
  { year:  -930, text: '所羅門死後王國分裂：耶羅波安領北國以色列，羅波安領南國猶大' },

  // ── 先知與亡國 ──────────────────────────────────────────────────
  { year:  -870, text: '先知以利亞在迦密山大獲全勝：一人對抗四百五十名巴力先知，火從天降' },
  { year:  -740, text: '先知以賽亞蒙召（「我在這裡，請差遣我」），預言童女懷孕生子以馬內利' },
  { year:  -722, text: '亞述王撒珥根攻陷撒瑪利亞，北國以色列亡，十支派被擄散入萬國' },
  { year:  -701, text: '亞述王西拿基立圍攻耶路撒冷，希西家王禱告，天使一夜擊殺十八萬五千亞述兵' },
  { year:  -627, text: '先知耶利米蒙召，傳悔改信息，預言七十年被擄' },
  { year:  -621, text: '猶大王約西亞重新找到律法書，推行宗教改革，廢除偶像' },
  { year:  -605, text: '但以理及一批猶大貴族首次被擄至巴比倫，拒食王膳，仍健壯' },
  { year:  -586, text: '尼布甲尼撒攻陷耶路撒冷，火燒聖殿，拆毀城牆，猶大亡國' },

  // ── 被擄與歸回 ──────────────────────────────────────────────────
  { year:  -539, text: '但以理在獅子坑中平安（波斯王古列元年），波斯征服巴比倫' },
  { year:  -538, text: '古列大帝頒布詔書，允許猶太人歸回故土重建聖殿' },
  { year:  -516, text: '第二聖殿落成獻殿，距所羅門聖殿被毀剛好七十年' },
  { year:  -458, text: '文士以斯拉率第二批歸回者，推行律法改革，解散異族婚姻' },
  { year:  -445, text: '尼希米率眾重建耶路撒冷城牆，僅五十二天完工' },
  { year:  -483, text: '以斯帖在波斯王宮挺身護衛猶太人，免遭哈曼滅族之禍' },

  // ── 新約時代 ────────────────────────────────────────────────────
  { year:   -4,  text: '耶穌基督降生於伯利恆（馬利亞由聖靈感孕），東方博士獻禮朝拜' },
  { year:   27,  text: '耶穌在約旦河受洗，聖靈如鴿降下，神聲說：「這是我的愛子」；開始三年傳道' },
  { year:   30,  text: '耶穌在耶路撒冷被釘十字架，受難，葬後第三天復活，向五百多人顯現' },
  { year:   30,  text: '五旬節聖靈降臨如同大風、火舌，教會建立，三千人受洗' },
  { year:   35,  text: '掃羅（保羅）在大馬士革路上遇見復活的主，悔改歸主，後成為外邦使徒' },
  { year:   50,  text: '耶路撒冷大公會議：決議外邦信徒不需遵守割禮律法，確立因信稱義' },
  { year:   67,  text: '使徒保羅在羅馬城殉道' },
  { year:   68,  text: '使徒彼得在羅馬殉道（據傳倒掛十字架）' },
  { year:   70,  text: '羅馬將軍提多攻陷耶路撒冷，第二聖殿被完全拆毀（耶穌預言應驗）' },
  { year:   95,  text: '使徒約翰在拔摩孤島獲啟示，寫成《啟示錄》，描繪末世與新天新地' },
];
