// 摩爾門經時間線資料
// 所有年份均為近似估計（學術推算），負數為西元前

const MORMEN_ROW_LABELS = ['雅列人', '尼腓人', '拉曼人', '妙利客人', '以帖書/小版', '大版各書', '尼腓諸王/法官', '雅列/支線諸王'];

const MORMEN_GROUPS = [
  // ══ Row 0 雅列人 ══════════════════════════════════════════════════════════
  { name:'雅列人', en:'Jaredites', start:-2500, end:-600, color:'#78350f', row:0 },

  // ══ Row 1 尼腓人（依政治時代分段）══════════════════════════════════════════
  { name:'尼腓王國', en:'Nephite Kingdom (Kings Era)',  start:-600, end: -91, color:'#1d4ed8', row:1 },
  { name:'法官時代', en:'Reign of Judges',              start: -91, end:  34, color:'#2563eb', row:1 },
  { name:'黃金時代', en:'Nephite Golden Age',           start:  34, end: 200, color:'#60a5fa', row:1 },
  { name:'尼腓末期', en:'Nephite Decline & Fall',       start: 200, end: 385, color:'#1e3a8a', row:1 },

  // ══ Row 2 拉曼人 ══════════════════════════════════════════════════════════
  { name:'拉曼人', en:'Lamanites', start:-570, end:385, color:'#991b1b', row:2 },

  // ══ Row 3 妙利客人 ════════════════════════════════════════════════════════
  { name:'妙利客人', en:'Mulekites / People of Zarahemla', start:-586, end:-200, color:'#065f46', row:3 },

  // ══ Row 4 以帖書 + 小版各書 ══════════════════════════════════════════════
  { name:'以帖書',     en:'Ether — Jaredite Record',    start:-2500, end:-600,  color:'#92400e', row:4 },
  { name:'第一尼腓書', en:'1 Nephi',                    start: -600, end:-570,  color:'#dc2626', row:4, link:'bom.html' },
  { name:'第二尼腓書', en:'2 Nephi',                    start: -570, end:-544,  color:'#ea580c', row:4, link:'bom2.html' },
  { name:'雅各書',     en:'Jacob',                      start: -544, end:-420,  color:'#d97706', row:4, link:'bom-jacob.html' },
  { name:'以挪士書',   en:'Enos',                       start: -420, end:-399,  color:'#ca8a04', row:4, link:'bom-enos.html' },
  { name:'雅龍書',     en:'Jarom',                      start: -399, end:-361,  color:'#65a30d', row:4, link:'bom-jarom.html' },
  { name:'奧姆尼書',   en:'Omni',                       start: -360, end:-130,  color:'#16a34a', row:4, link:'bom-omni.html' },
  { name:'摩爾門的話', en:'Words of Mormon',            start: -130, end: -91,  color:'#0f766e', row:4, link:'bom-wom.html' },

  // ══ Row 5 大版各書 ════════════════════════════════════════════════════════
  { name:'摩賽亞書',   en:'Mosiah',   start:-200, end: -91, color:'#0284c7', row:5, link:'bom-mosiah.html' },
  { name:'阿爾瑪書',   en:'Alma',     start: -91, end: -52, color:'#2563eb', row:5, link:'bom-alma.html' },
  { name:'希拉曼書',   en:'Helaman',  start: -52, end:  -1, color:'#4f46e5', row:5, link:'bom-helaman.html' },
  { name:'第三尼腓書', en:'3 Nephi',  start:  -1, end:  34, color:'#7c3aed', row:5, link:'bom-3nephi.html' },
  { name:'第四尼腓書', en:'4 Nephi',  start:  34, end: 321, color:'#9333ea', row:5, link:'bom-4nephi.html' },
  { name:'摩爾門書',   en:'Mormon',   start: 321, end: 385, color:'#c026d3', row:5, link:'bom-mormon.html' },
  { name:'摩羅乃書',   en:'Moroni',   start: 401, end: 421, color:'#db2777', row:5, link:'bom-moroni.html' },

  // ══ Row 6 尼腓諸王/法官（主線）══════════════════════════════════
  // ── 王制時代 ─────────────────────────────────────────────────────
  { name:'里海',     en:'Lehi (patriarch)',       start: -600, end: -570, color:'#1e40af', row:6, personal:'', wikiEn:'Lehi_(Book_of_Mormon)' },
  { name:'尼腓一世', en:'Nephi I (first king)',   start: -588, end: -545, color:'#1d4ed8', row:6, personal:'', wikiEn:'Nephi_(Book_of_Mormon)' },
  { name:'雅各',     en:'Jacob (Nephi\'s brother, prophet)', start:-544, end:-420, color:'#1e40af', row:6, personal:'', wikiEn:'Jacob_(Book_of_Mormon)' },
  { name:'以挪士',   en:'Enos (Jacob\'s son)',    start: -420, end: -399, color:'#1d4ed8', row:6, personal:'', wikiEn:'Enos_(Book_of_Mormon)' },
  { name:'雅龍',     en:'Jarom (Enos\'s son)',    start: -399, end: -361, color:'#2563eb', row:6, personal:'', wikiEn:'Jarom' },
  { name:'奧姆尼',   en:'Omni & successors (record keepers)', start:-360, end:-200, color:'#1e40af', row:6, personal:'' },
  { name:'摩賽亞一世', en:'Mosiah I (led Nephites to Zarahemla)', start:-200, end:-160, color:'#1d4ed8', row:6, personal:'', wikiEn:'Mosiah_I' },
  { name:'本傑明',   en:'King Benjamin',          start: -160, end: -124, color:'#2563eb', row:6, personal:'', wikiEn:'Benjamin_(Book_of_Mormon)' },
  { name:'摩賽亞二世', en:'Mosiah II (last king)', start:-124, end:  -91, color:'#3b82f6', row:6, personal:'', wikiEn:'Mosiah_II' },
  // ── 法官時代 ─────────────────────────────────────────────────────
  { name:'亞摩西',   en:'Alma I (chief judge)',   start:  -91, end:  -83, color:'#0d9488', row:6, personal:'', wikiEn:'Alma_the_Elder' },
  { name:'阿爾瑪',   en:'Alma II (chief judge)',  start:  -83, end:  -73, color:'#0891b2', row:6, personal:'', wikiEn:'Alma_the_Younger' },
  { name:'摩羅乃隊長', en:'Captain Moroni',       start:  -74, end:  -57, color:'#0369a1', row:6, personal:'', wikiEn:'Captain_Moroni' },
  { name:'希拉曼',   en:'Helaman I',              start:  -57, end:  -39, color:'#0284c7', row:6, personal:'', wikiEn:'Helaman_(Book_of_Mormon)' },
  { name:'尼腓二世', en:'Nephi (son of Helaman)', start:  -39, end:   -1, color:'#0369a1', row:6, personal:'', wikiEn:'Nephi_(son_of_Helaman)' },
  // ── 三書時代（基督降臨）──────────────────────────────────────────
  { name:'尼腓三世', en:'Nephi III (disciple, saw Christ)', start:-1, end:  34, color:'#0284c7', row:6, personal:'', wikiEn:'Nephi_(3rd)' },
  // ── 四書時代（黃金時代記錄者）────────────────────────────────────
  { name:'尼腓四世', en:'Nephi IV (4 Nephi record keeper)', start: 34, end: 110, color:'#0369a1', row:6, personal:'' },
  { name:'亞瑪一世', en:'Amos I (son of Nephi IV)',  start: 110, end: 194, color:'#0284c7', row:6, personal:'' },
  { name:'亞瑪二世', en:'Amos II (son of Amos I)',   start: 194, end: 306, color:'#0369a1', row:6, personal:'' },
  { name:'亞瑪利',   en:'Ammaron (hid the plates)',  start: 306, end: 321, color:'#0284c7', row:6, personal:'', wikiEn:'Ammaron' },
  // ── 晚期尼腓人 ───────────────────────────────────────────────────
  { name:'摩爾門',   en:'Mormon (prophet-general)', start: 322, end:  385, color:'#6d28d9', row:6, personal:'', wikiEn:'Mormon_(prophet)' },
  { name:'摩羅乃',   en:'Moroni (last Nephite)',  start:  385, end:  421, color:'#7c3aed', row:6, personal:'', wikiEn:'Moroni_(Book_of_Mormon_prophet)' },

  // ══ Row 7 雅列諸王 + 善尼夫支線諸王 ══════════════════════════════
  // ── 雅列人（以帖書）──────────────────────────────────────────────
  { name:'雅列',     en:'Jared (founder patriarch)', start:-2500, end:-2440, color:'#78350f', row:7, personal:'', wikiEn:'Jared_(Book_of_Mormon)' },
  { name:'奧里哈',   en:'Orihah (first king)',    start:-2440, end:-2360, color:'#92400e', row:7, personal:'' },
  { name:'科連頓',   en:'Coriantumr (last Jaredite king)', start:-640, end:-587, color:'#b45309', row:7, personal:'', wikiEn:'Coriantumr_(Jaredite_king)' },
  // ── 善尼夫支線（尼腓—利海地）────────────────────────────────────
  { name:'善尼夫',   en:'Zeniff (colony founder)', start:-200, end:-160, color:'#ea580c', row:7, personal:'', wikiEn:'Zeniff' },
  { name:'諾亞王',   en:'King Noah (wicked king)', start:-160, end:-145, color:'#dc2626', row:7, personal:'', wikiEn:'Noah_(Book_of_Mormon)' },
  { name:'林哈王',   en:'King Limhi',             start:-145, end:-121, color:'#b91c1c', row:7, personal:'', wikiEn:'Limhi' },
];

const MORMEN_EVENTS = [
  { year: -2500, text: '雅列人離開巴別塔，蒙神引領橫越大海前往美洲應許之地' },
  { year: -600,  text: '先知里海帶領家人出走即將被毀的耶路撒冷' },
  { year: -597,  text: '里海一家在阿拉伯荒野流浪；尼腓建造指南球（利阿弘那）並造船' },
  { year: -589,  text: '里海一家航越太平洋，抵達美洲應許之地' },
  { year: -586,  text: '妙利客（西底家王之子）離開耶路撒冷，同年耶城陷落' },
  { year: -570,  text: '里海逝世；尼腓人與拉曼人因信仰分歧正式決裂' },
  { year: -544,  text: '雅各繼承記錄，在謝路姆管理尼腓人' },
  { year: -200,  text: '摩賽亞一世帶領尼腓人南遷，發現薩拉黑拉（妙利客人），兩族合并' },
  { year: -124,  text: '本傑明王大演講，宣告耶穌基督將降世為人' },
  { year: -100,  text: '先知亞比拿底宣講基督救贖，被諾亞王處火刑殉道' },
  { year: -91,   text: '亞摩西成為首席法官，尼腓王制結束，法官時代開始' },
  { year: -87,   text: '阿爾瑪（亞摩西之子）悔改，後成為大祭司' },
  { year: -74,   text: '摩羅乃上尉統率尼腓軍，以信仰捍衛家園對抗拉曼人' },
  { year: -64,   text: '摩羅乃舉起「自由之幟」，誓死衛護家庭、宗教與自由' },
  { year: -52,   text: '赫拉曼帶領「二千少年勇士（二千條子）」，奇蹟生還無一陣亡' },
  { year: -6,    text: '先知撒母耳站在城牆上預言：五年內基督降生的徵兆' },
  { year: -1,    text: '預兆應驗：美洲出現新星，整夜沒有黑暗' },
  { year: 33,    text: '耶穌基督在耶路撒冷受難，美洲大地震動三日、黑暗籠罩' },
  { year: 34,    text: '復活的耶穌基督向尼腓人顯現，建立教會，施行聖餐' },
  { year: 200,   text: '尼腓人黃金時代結束，驕傲與不平等重現，教會衰敗' },
  { year: 231,   text: '尼腓人與拉曼人再度分裂，社會動盪' },
  { year: 321,   text: '摩爾門開始整理並刻寫歷代金板記錄' },
  { year: 380,   text: '摩爾門集結尼腓餘民，準備科莫拉山最後一戰' },
  { year: 385,   text: '科莫拉山決戰，尼腓人亡族，摩爾門陣亡（約 23 萬人戰死）' },
  { year: 421,   text: '摩羅乃獨自完成記錄，將金板埋藏於科莫拉山，等待未來出土' },
];
