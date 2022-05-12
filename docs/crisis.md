# Crisis

The [crisis module](https://docs.cosmos.network/main/modules/crisis/) halts the blockchain under the circumstance that a blockchain invariant is broken.

There are no custom invariants registered butsome modules have invariants registered like the bank, distribution, staking, and gov modules. I believe that when the invariant is broken, it's a bug in the the module. It can be caused by a bad upgrade for example. The crisis module halts the chain so that not a lot is built up upon a bad state of the chain. And then it can be hard-forked or upgrade-skipped with proper fixes.

Don't think they are documented but can be inspected from the source code as in [here](https://github.com/cosmos/cosmos-sdk/blob/main/x/staking/keeper/invariants.go)

An example of a check for an invariant is: `threefold_hubd tx crisis invariant-broken bank total-supply --chain-id threefold-hub-testnet --node https://threefoldhub.test.gridtesting.xyz:26657 --gas-prices 80TFT --from placeholder --keyring-backend test --broadcast-mode block --gas-adjustment 1.3 --gas auto --home ~/.threefold_hub_devnet`

## Constant Fee

Since verifying an invariant might have a gas price exceeding the maximum allowable block gas limit, a constant fee is used.[Reference](https://docs.cosmos.network/main/modules/crisis/01_state.html#constantfee)
