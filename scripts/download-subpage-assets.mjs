// Downloads images for the cloned sub-pages into public/images/sub/
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OPT = "https://lirp.cdn-website.com/87b310aa/dms3rep/multi/opt/";
const OUT = "public/images/sub";

// [remoteFilename, localName]
const files = [
  // shared sub-page hero (beauty portrait)
  ["image-%281%29-64a38f3a-febf7d5e-1920w.png", "sub-hero.png"],

  // eyebrow
  ["2026-05-14+12_44_10.523-1000-1920w.jpg", "eb-design.jpg"],
  ["20260511_182427-1920w.jpg", "eb-technique.jpg"],
  ["487824722_1202498981875543_7185010510956689159_n-1920w.jpg", "eb-work-1.jpg"],
  ["488483049_1205369354921839_8667406140507602670_n-1920w.jpg", "eb-work-2.jpg"],
  ["476426154_1161305225994919_6449873689523524636_n-1920w.jpg", "eb-work-3.jpg"],

  // eyeliner
  ["2026-05-14+12_54_04.941-1000-1920w.jpg", "el-design.jpg"],
  ["472958003_1137972934994815_2841225902335055034_n-1920w.jpg", "el-technique.jpg"],
  ["127660019_2849576925326088_4004939976322241251_n-1920w.jpg", "el-work-1.jpg"],
  ["116333414_2736751403275308_4578789673846640130_n-1920w.jpg", "el-work-2.jpg"],
  ["123946814_2827819897501791_6989629367485376382_n-1920w.jpg", "el-work-3.jpg"],

  // lip
  ["2026-05-14+12_36_22.318-1000-1920w.jpg", "lip-design.jpg"],
  ["131723236_2864287353855045_96374226756710494_n-1920w.jpg", "lip-technique.jpg"],
  ["127585044_2845138582436589_1051958858397537494_n-1920w.jpg", "lip-work-1.jpg"],
  ["118064316_2762048020745646_4908476460587296760_n-1920w.png", "lip-work-2.png"],
  ["568735089_1386996990092407_319131063016227368_n-1920w.png", "lip-work-3.png"],

  // after-care
  ["Untitled+design+%2812%29-1920w.png", "ac-section.png"],
  ["476247924_1158974529561322_7086729517051891855_n-1920w.jpg", "ac-work-1.jpg"],
  ["201994230_2998155823801530_4598444011099793256_n-1920w.jpg", "ac-work-2.jpg"],
  ["125250346_2837756536508127_5055835017621402787_n-1920w.jpg", "ac-work-3.jpg"],

  // contact
  ["336925857_225154123381278_1249783152866605482_n-1920w.jpg", "contact-portrait.jpg"],

  // locations (scenic + service portrait)
  ["362071487-2880w.jpg", "loc-buderim.jpg"],
  ["1193340973-2880w.jpg", "loc-noosa.jpg"],
  ["1095158300-2880w.jpg", "loc-caloundra.jpg"],
];

await mkdir(OUT, { recursive: true });

async function dl([remote, local]) {
  const url = OPT + remote;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(OUT, local), buf);
  return `${local} (${(buf.length / 1024).toFixed(0)}kb)`;
}

// batch of 4
for (let i = 0; i < files.length; i += 4) {
  const batch = files.slice(i, i + 4);
  const out = await Promise.allSettled(batch.map(dl));
  out.forEach((r, j) =>
    console.log(r.status === "fulfilled" ? "✓ " + r.value : "✗ " + batch[j][1] + " " + r.reason)
  );
}
console.log("done");
