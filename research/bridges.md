# Bridges

## Gravity bridge to and from Ethereum

[Gravity bridge](https://github.com/gravity-bridge/gravity-bridge) is an open source project that provides a bridge between cosmos sdk chains and Ethereum erc20 tokens.

Tokens are vaulted on the Ethereum side and minted/burned on the cosmos side.

The inverse can be done as well but it's a 1-time shot. By default, the etherum part of the bridge contains an endpoint called `deployERC20`. It deploys an ERC20 contract on Ethereum, mints and locks the total amount of tokens presenton the cosmos side after which it functions as if the assets were present on the Ethereum side and sent to the cosmos side.

Minting of extra TFT's on the cosmos side does not seem to be supported.

Every cosmos validator is part of the bridge verification and requires an Ethereum full node.

Don't know if a light client node works as well.

Pretty bad docs on the compooonent setup and what to run as a validator.

### Binance chain

Gravity bridge does not support Binance chain by default but it is expected that this can supported easily.

There already is a `chainID` parameter available.

The integration with Ethereum is a separate process written in Rust which communicates to an ethereum full node using geth's rpc interface.

## Bridge to and from tfchains

**TODO**

## Vaulting

When bridging tokens between chains it is a normal pattern that one chain acts as the "main" chain and that tokens are vaulted on that chain. On the other chains, tokens are minted/burned.

## 1 to N chains

Consider the situation where we create a bridge between threefold hub and Binance chain and the fact that there is an existing bridge between Stellar and Binance chain.

The existing Stellar<->BSC bridge vaults TFT on the Stellar side. This means there are only as much TFT's in that vault as there are TFT's moved from the Stellar network to BSC.

If an extra bridge is created that supplies TFT's on BSC, the amount of TFT's on BSC will exceed the amount of vaulted TFT's on the Stellar<-> BSC bridge.

The BSC to Stellar flow will fail to function when it's vault is depleted and in a pretty bad way too as the bridge listens to BSC events and currently has no way to mint TFT's on Stellar or refund the TFT's on the BSC side.

If the threefold hub<->BSC bridge vaults TFT's on the BSC side as is it's default, there is no problem as the inflow of TFT's to BSC is restricted to the Stellar<->BSC bridge.

## bridge network

A network of chains with interconnected bridges, for example a tfchain, Threefold hub, BSC and Stellar with bridges connecting some of them:

- Stellar <-> BSC, threefold hub and 2 tfchains
- Threefold hub <-> BSC and 2 tfchains

Given the explanation in [1 to N chains](#1toNchains), one can easily imagine this scenario to fail.

There might be some solutions:

- Do not use vaulting
- Make sure all vaults have enough tokens ( fund them when minting for farming payouts)

### No vaulting

Given the issues with vaulting mentioned above, it seems attractive not to use vaulting at all but burn and mint with every bridged transfer.

Every bridge needs minting and burning rights on the chains it connects.

Requires rewrites of vaulting bridges.

Statistics of TFT requires a snapshot over all chains where TFT lives.

### Fat validators

Since Cosmos bridges like Gravity require a full node of the chain it bridges too, validators become very heavy.

## Kick off bridges with vaulting

Consider the Threefold hub, BSC and Stellar chains and we want bridges between these 3 networks. This means we need 3 bridges:

- Threefold hub <-> BSC
- Threefold hub <-> Stellar
- Stellar <-> BSC

The third one (Stellar <-> BSC) already exists and vaults on the Stellar side.

Adding Threefold hub <-> BSC does not pose any problem since the default gravity implementation vaults on the BSC (Ethereum) side.

Adding the Threefold hub <-> Stellar bridge is possible if the Threefold hub <-> Stellar bridge and the Stellar <-> BSC share their vaults and when TFT is transferred from Stellar to Threefold hub, the same amount of TFT's is minted on BSC and added to the Threefold hub <-> BSC bridge vault.

This is a quick but solid solution until bridges to other networks like tfchain are added.  
