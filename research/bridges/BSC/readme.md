# Gravity BSC bridge

## BSC local node

Dowload the bsc geth binary from the latest release or compile it yourself from the [bsc repo](https://github.com/bnb-chain/bsc).

### testnet

Download testnet.zip from <https://github.com/bnb-chain/bsc/releases/latest> and unwip ip to  `testnetconfig`

Create the genesisblock:

```sh
./geth --datadir testnetnode init testnetconfig/genesis.json
```

Now start the node ( I'm trying with syncmode `light` here)

```sh
geth  --config testnetconfig/config.toml --datadir ./testnetnode --syncmode light
```
