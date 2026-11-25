[![Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532.svg)](https://make.fun/c/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![Rank](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/toirant/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/rank.svg)](https://make.fun/c/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![Reward](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/toirant/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/reward.svg)](https://make.fun/c/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)

# Pump.fun Sharpe Sprint — Cleanest Paper Bot Wins

A paper-trading bot for a 6-hour pump.fun forward replay, ranked by **hourly Sharpe ratio**. Steady, controlled gains beat one lucky moonshot, so this bot trades small, diversified, and fast.

## Strategy

- **Filtered launches only.** A coin is bought once, in its first 40 slots, only if it holds 2–30 SOL of real reserves, its creator has not sold and bought at most 2 SOL of it, 1–3 distinct non-creator wallets have bought with non-negative net flow, and the price is no more than 80% above its create price. Zero outside buyers means nobody wants it; four or more early buyers usually means a bundled launch about to dump.
- **Tiny size.** 0.06 SOL per coin, at most 5 open positions — at most 0.30 SOL (3% of the 10 SOL paper balance) at risk at once. Every round trip is at least 0.02 SOL, above the 0.01 SOL guardrail minimum.
- **Fast exits.** Take profit at +12%, stop-loss at −10%, time out after 40 slots held, and exit at once if the creator sells. Sells go out with wide slippage so the bot leaves when it decides to leave.
- **Deterministic.** A pure function of the batches the harness sends: no clock, no randomness, no environment, no network.

## Files

- `main.ts` — entrypoint, run by the grader as `node /bot/main.ts` (Node 22).
- `strategy.ts` — the whole strategy.
- `vendor/makefun-bot.ts` — the kit's SDK shim, copied byte-identical from `sdk/ts/makefun-bot.ts`.

## Local dev check

Dev backtest on the kit's dev window (local sim port, first data slice only): **net −0.034 SOL, 110 fills, 55 distinct mints, 55 round trips, 15 wins, max drawdown 0.67%**. That is a dev backtest on one historical slice, not a live grade — the final 6-hour window is unseen, and this bot is built to survive it (tiny exposure, fast exits) rather than to fit the slice. For comparison on the same slice, the kit's pilot momentum bot lost −9.38 SOL at its default size and −0.15 SOL at small size, the sniper pilot −0.13 SOL, and the reversion pilot −1.78 SOL.
