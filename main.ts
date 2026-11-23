// the-one-line-laugh
// One funny line, a single sentence of at most 200 characters.
// The surprise lands at the end: judged — by an appliance that also holds
// my ice cream. Everyday truth: smart devices overstepping into our lives
// (a fridge emailing a diet plan); economical, every word earning its place;
// fresh angle, not a recycled joke. One sentence, 122 code points.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-200 characters, not only white space.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My smart fridge just emailed me a diet plan, and I have never felt so judged by an appliance that also holds my ice cream.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}
if (text.trim().split(/\s+/).length < 2) {
  throw new Error("entry must be a line, not a single word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
