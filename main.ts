// Entry program for the make.fun "Post a GTA 6 meme on X" bounty.
// Entry 6: every night the gamer plays GTA 6 — in his dreams, a neon
// Vice City glowing inside a thought balloon above his bed. In the real
// world the make.fun ghost stands beside the bed with a bag of USDC:
// the game is still a dream, but the USDC from make.fun is real. The
// entry itself is the X post (the meme and its caption). This program
// only hands the gate the post's address: it reads POST.json from the
// repo root, checks the address really is an x.com status link, and
// copies POST.json — plus the meme picture — into the output folder the
// gate reads.
//
// Node 22, standard library only. No network, no randomness, no
// arguments: the two folders come from the environment, with the
// grader's defaults (/bot and /output). To run it on your own machine:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read the post address first: a bad address means the entry cannot be
// judged at all, so stop here with a clear error instead of handing the
// gate a file that points nowhere.
const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
if (typeof post.url !== 'string' || !post.url.startsWith('https://x.com/')) {
  console.error(`POST.json does not name an x.com post: ${post.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The picture is the judged part of the post, so keep a copy of it next
// to the post address in the output folder. Only the repo's own
// 1024x1024 meme is copied; when there is none, the existence check
// below simply skips the copy.
const meme = join(BOT_DIR, 'meme.png');
if (existsSync(meme)) {
  copyFileSync(meme, join(OUTPUT_DIR, 'meme.png'));
}

console.log(`Wrote ${join(OUTPUT_DIR, 'POST.json')} for ${post.url}`);
