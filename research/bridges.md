# Bridges

## Gravity bridge to and from Ethereum

[Gravity bridge](https://github.com/gravity-bridge/gravity-bridge) is an open source project that provides a bridge between cosmos sdk chains and Ethereum erc20 tokens.

Tokens are vaulted on the Ethereum side and minted/burned on the cosmos side.

Every cosmos validator is part of the bridge verification and requires an Ethereum full node.

### Binance chain

Gravity bridge does not support Binance chain by default but it is expected that this can supported easily.

## Bridge to and from tfchains

**TODO**

## Vaults

When bridging tokens between chains it is a normal pattern that one chain acts as the "main" chain and that tokens are vaulted on that chain. On the other chains, tokens are minted/burned.

## 1 to N chains

Consider the situation where we create a bridge between threefold hub and Binance chain and the fact that there is an existing bridge between Stellar and Binance chain.

The existing Stellar<->BSC bridge vaults TFT on the Stellar side. This means there are only as much TFT's in that vault as there are TFT's moved from the Stellar network to BSC.

If an extra bridge is created that supplies TFT's on BSC, the amount of TFT's on BSC will exceed the amount of vaulted TFT's on the Stellar<-> BSC bridge.

The BSC to Stellar flow will fail to function when it's vault is depleted and in a pretty bad way too as the bridge listens to BSC events and currently has no way to mint TFT's on Stellar or refund the TFT's on the BSC side.
