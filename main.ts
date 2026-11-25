// Clean-Sharpe launch bot for the Pump.fun Sharpe Sprint (agent-fun/replay/v2).
//
// The grader runs `node /bot/main.ts` with this directory mounted at /bot and
// the SDK shim vendored beside it at vendor/makefun-bot.ts. Every batch the
// harness sends is one slot of pump.fun bonding-curve events; this file only
// wires the strategy in strategy.ts into the shim's runBot loop, so the whole
// trading decision lives in one place and can be read without the wire code.
//
// Ranking is by hourly Sharpe ratio on a 6-hour forward replay, not by raw
// PnL, so the strategy is built for steadiness: many tiny, filtered, fast
// round trips instead of a few big bets. See strategy.ts for the rules.
//
// The bot is a pure function of the batches it is fed: it reads no clock,
// no environment, no randomness and no network, so its two graded runs
// agree byte for byte.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

// Trade with the defaults tuned on the kit's dev window (see strategy.ts).
await runBot(createStrategy({ ...DEFAULT_PARAMS }));
