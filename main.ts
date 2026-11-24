// One Word, First Thought
// Writes exactly one word — the first that comes to mind — to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "squelch";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
