// Downloads all real assets from onpointcosmetictattoo.com.au into public/
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const IMG = "https://lirp.cdn-website.com/87b310aa/dms3rep/multi/opt/";
const CDN = "https://irp.cdn-website.com/87b310aa/";

// [remoteUrl, localPath]
const assets = [
  // Logo
  [IMG + "on-point-logo-removeimage-1920w.png", "images/logo.png"],
  // Hero
  [IMG + "Hero_Image_Home_Page_v1-1920w.png", "images/hero.png"],
  [IMG + "image-%281%29-64a38f3a-1920w.png", "images/hero-portrait.png"],
  // Welcome
  [IMG + "Untitled+design+%2812%29+copy+2-1800h.png", "images/welcome-face.png"],
  // Services banner + cards
  [IMG + "Untitled-design-%282%29-8f14978c-1920w.jpg", "images/services-bg.jpg"],
  [IMG + "81944556_2574054152878368_3577295290383728640_n-1920w.png", "images/service-eyebrows.png"],
  [IMG + "76644592_2524152664535184_5212801261694353408_n-1920w.png", "images/service-eyeliners.png"],
  [IMG + "485710305_1194113096047465_4289385667348414653_n-1920w.png", "images/service-lips.png"],
  // Artist
  [IMG + "336925857_225154123381278_1249783152866605482_n-1400h.jpg", "images/artist-lisa.jpg"],
  // Testimonials bottom full-width image
  [IMG + "Hero+41-1920w.jpg", "images/facial-treatment.jpg"],
  // Footer decorative line-art background
  [IMG + "Untitled+design+%2813%29-1920w.png", "images/footer-bg.png"],
  // Favicon
  [CDN + "site_favicon_16_1771988659024.ico", "seo/favicon.ico"],
  [CDN + "dms3rep/multi/57.png", "seo/apple-touch-icon.png"],
  [IMG + "200-1920w.png", "seo/og-image.png"],
];

async function download([url, dest], i) {
  const out = join("public", dest);
  await mkdir(join("public", dest.split("/").slice(0, -1).join("/")), { recursive: true });
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(out, buf);
    console.log(`✓ ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.error(`✗ ${dest} — ${e.message}  [${url}]`);
  }
}

// batched 4 at a time
const batchSize = 4;
for (let i = 0; i < assets.length; i += batchSize) {
  await Promise.all(assets.slice(i, i + batchSize).map((a, j) => download(a, i + j)));
}
console.log("Done.");
