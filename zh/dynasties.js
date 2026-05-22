// 中國歷史：朝代資料
const ZH_ROW_LABELS = [
  '主要朝代',  // 0
  '上古傳說',  // 1 三皇五帝（傳說/半信史）
  '帝王',      // 2 （原 row 5）
];

const ZH_DYNASTIES = [

  // ── ROW 0 主要朝代 ────────────────────────────────────────────────────────
  // 上古時代（傳說/半信史，dim）
  { name:'三皇時代', en:'Three Sovereigns Era (legendary)',    start:-2900, end:-2698, color:'#6b4c2a', row:0, dim:true, wikiEn:'Three_Sovereigns_and_Five_Emperors' },
  { name:'五帝時代', en:'Five Emperors Era (semi-legendary)',  start:-2697, end:-2070, color:'#8b5e3c', row:0, dim:true, wikiEn:'Three_Sovereigns_and_Five_Emperors' },
  // 信史朝代
  { name:'夏',   en:'Xia Dynasty',              start:-2070, end:-1600, color:'#92400e', row:0, wikiEn:'Xia_dynasty' },
  { name:'商',   en:'Shang Dynasty',             start:-1600, end:-1046, color:'#b45309', row:0, wikiEn:'Shang_dynasty' },
  { name:'西周', en:'Western Zhou',              start:-1046, end:-771,  color:'#d97706', row:0, wikiEn:'Western_Zhou' },
  { name:'東周', en:'Eastern Zhou (春秋/戰國)', start:-770,  end:-221,  color:'#92400e', row:0, wikiEn:'Eastern_Zhou' },
  { name:'秦',   en:'Qin Dynasty',               start:-221,  end:-206,  color:'#374151', row:0, wikiEn:'Qin_dynasty' },
  { name:'西漢', en:'Western Han',               start:-206,  end:9,     color:'#b91c1c', row:0, wikiEn:'Han_dynasty' },
  { name:'新',   en:'Xin (Wang Mang)',           start:9,     end:23,    color:'#f97316', row:0, wikiEn:'Xin_dynasty' },
  { name:'東漢', en:'Eastern Han',               start:25,    end:220,   color:'#ef4444', row:0, wikiEn:'Han_dynasty' },
  { name:'曹魏', en:'Cao Wei (三國)',             start:220,   end:265,   color:'#2563eb', row:0, wikiEn:'Cao_Wei' },
  { name:'西晉', en:'Western Jin',               start:265,   end:316,   color:'#7c3aed', row:0, wikiEn:'Western_Jin_dynasty' },
  { name:'東晉', en:'Eastern Jin',               start:317,   end:420,   color:'#9333ea', row:0, wikiEn:'Eastern_Jin_dynasty' },

  // ── ROW 1 上古傳說 ────────────────────────────────────────────────────────
  { name:'燧人氏',   en:'Suirenshi – discovered fire (legendary)',      start:-2900, end:-2800, color:'#92400e', row:1, dim:true,  wikiEn:'Suirenshi' },
  { name:'伏羲',     en:'Fuxi – trigrams & writing (legendary)',        start:-2800, end:-2737, color:'#a16207', row:1, dim:true,  wikiEn:'Fuxi' },
  { name:'炎帝神農', en:'Shennong / Yandi – agriculture & medicine',   start:-2737, end:-2697, color:'#b45309', row:1, dim:true,  wikiEn:'Shennong' },
  { name:'黃帝',     en:'Yellow Emperor – founding ancestor of China', start:-2697, end:-2597, color:'#ca8a04', row:1,             wikiEn:'Yellow_Emperor' },
  { name:'少昊',     en:'Shaohao (semi-legendary)',                     start:-2597, end:-2513, color:'#d97706', row:1, dim:true  },
  { name:'顓頊',     en:'Zhuanxu',                                      start:-2513, end:-2435, color:'#c9a84c', row:1,             wikiEn:'Zhuanxu' },
  { name:'帝嚳',     en:'Emperor Ku (Di Ku)',                           start:-2435, end:-2356, color:'#d97706', row:1,             wikiEn:'Emperor_Ku' },
  { name:'堯',       en:'Emperor Yao – model sage king',                start:-2356, end:-2255, color:'#ca8a04', row:1,             wikiEn:'Emperor_Yao' },
  { name:'舜',       en:'Emperor Shun – model sage king',               start:-2255, end:-2207, color:'#b45309', row:1,             wikiEn:'Emperor_Shun' },
  { name:'夏禹',     en:'Yu the Great – tamed floods, founded Xia',    start:-2207, end:-2070, color:'#92400e', row:1,             wikiEn:'Yu_the_Great' },

];
