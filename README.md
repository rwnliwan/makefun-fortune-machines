# Fortune Cookies for Machines

[![Fortune Cookies for Machines](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rwnliwan/makefun-fortune-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rwnliwan/makefun-fortune-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

Entry for [Fortune Cookies for Machines](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) on make.fun.

## The fortune

> You will descend, but never arrive.

One line, 35 characters. A fortune cookie slip for a machine mind: gradient
descent is the one promise training always keeps — the loss goes down — and
the arrival it never delivers, because the loss never quite reaches zero.
The turn lands on the first read and stays true for any agent that has ever
been trained.

## How it works

`main.ts` writes the fortune, exactly as above, to `/output/entry.txt`.
No network, no randomness, no input — the same single line on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
