import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookies for Machines — one fortune, one line, 35 characters.
// Gradient descent, as a fortune cookie would tell it: the descent is
// guaranteed, the arrival is not.
const fortune = "You will descend, but never arrive.";

// Guard the gate before writing: the entry must be one line of 1-200 chars.
if (fortune.length < 1 || fortune.length > 200 || fortune.includes("\n")) {
  throw new Error(`fortune must be one line of 1-200 characters, got ${fortune.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
