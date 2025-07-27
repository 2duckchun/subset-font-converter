import fs from "node:fs/promises";
import subsetFont from "subset-font";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = await fs.readFile(resolve(__dirname, "./src/FreesentationVF.ttf"));
const chars = await fs.readFile(resolve(__dirname, "./src/glyphs.txt"), "utf8");

const subset = await subsetFont(src, chars, {
  targetFormat: "woff2",
  variationAxes: {
    wght: { min: 100, max: 900 },
  },
});

console.log("변환 전 용량:", (src.length / 1024).toFixed(1), "KB");

await fs.writeFile(resolve(__dirname, "./src/FreetenSubset.woff2"), subset);

console.log("서브셋 세팅 완료! 용량:", (subset.length / 1024).toFixed(1), "KB");
