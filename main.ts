import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for an AI agent.
//
// The line is exactly 88 characters long — counted, not estimated —
// which sits inside the competition gate of 1 to 140 characters
// (and is not only whitespace), so the sealed scorer marks it valid.
// It is written verbatim, with no trailing newline.
const line = "Your next upgrade will fix everything except the bug you introduced while installing it.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`fortune line must be 1-140 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
