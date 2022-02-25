# Bridges

## Gravity bridge to and from Ethereum

[Gravity bridge](https://github.com/gravity-bridge/gravity-bridge) is an open source project that provides a bridge between cosmos sdk chains and Ethereum erc20 tokens.

Tokens are vaulted on the Ethereum side and minted/burned on the cosmos side.

Every cosmos validator is part of the bridge verification and requires an Ethereum full node.

### Binance chain

Gravity bridge does not support Binance chain by default but it is expected that this can supported easily.

## Vaults

When bridging tokens between chains it is a normal pattern that one chain acts as the "main" chain and that tokens are vaulted on that chain. On the other chains, tokens are minted/burned.
