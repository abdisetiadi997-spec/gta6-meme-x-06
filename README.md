# gta6-meme-x-06

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/abdisetiadi997-spec/gta6-meme-x-06/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/abdisetiadi997-spec/gta6-meme-x-06/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC).

At night in a cozy bedroom, a gamer is fast asleep in bed still holding a game controller, a dream thought-balloon above his head showing a bright Vice City street with neon signs, palm trees and a classic car from GTA 6. In the real world beside the bed stands the make.fun ghost mascot, carrying a big bag of USDC. Big text across the top reads:

> GTA 6 CUMA ADA DI MIMPI, TAPI USDC-NYA NYATA

The joke: every night he plays GTA 6 — in his dreams. When he wakes up, the only real thing is the USDC from make.fun. The make.fun name is written at the bottom of the image.

The meme was posted from the public X account [@utuy633](https://x.com/utuy633) on 2026-11-22:

https://x.com/utuy633/status/2124405667968778614

Post text:

> Tiap malam main GTA 6… di mimpi 😴 Bangun-bangun, yang nyata cuma USDC dari make.fun 👻 Play code: makefun-flamingo-gold-falcon — https://make.fun

The meme image in this repository (`meme.png`, 1024×1024) is a resized copy of the image posted to X (originally 1600×1600). The post's first — and only — picture is that meme. `POST.json` at the root names the post.

## Run it

```sh
node main.ts
```

Requires Node.js 22.18 or later. Standard library only, no network, no randomness. The program validates that `POST.json` names an x.com post, then copies `POST.json` and `meme.png` to `$MAKEFUN_OUTPUT_DIR` (defaults to `/output`). To test locally with a different output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=8kcq8zmn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
