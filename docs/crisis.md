# Crisis

The [crisis module](https://docs.cosmos.network/main/modules/crisis/) halts the blockchain under the circumstance that a blockchain invariant is broken.

## Constant Fee

Since verifying an invariant might have a gas price exceeding the maximum allowable block gas limit, a constant fee is used.[Reference](https://docs.cosmos.network/main/modules/crisis/01_state.html#constantfee)
