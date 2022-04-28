This document covers how to add a validator to the threefold hub

## building the image

`docker build -t tfhub-validator -f ./Dockerfile .`


### running the container
- copy `env.list.example` to `env.list` 
- `docker run --env-file ./env.list --name tfhub-validator -ti tfhub-validator`
## how to add new validators
- At first you should have at least 1 running node in order to do this follow these [doc](https://github.com/threefoldtech/threefold_hub/blob/development/readme.md)
- you can use this [terraform example](https://github.com/threefoldtech/terraform-provider-grid/blob/development/examples/resources/cosmosvalidator/main.tf)
you need to set these environment variables
```
MNEMONICS="<MNEMONICS>"
KEYNAME="<KEY NAME>"
STAKE_AMOUNT="100000000TFT"
MONIKER="<NODE NAME>"
CHAIN_ID="<YOUR CHAIN ID>"
ETHEREUM_ADDRESS="<ETHEREUM ADDRESS>"
ETHEREUM_PRIV_KEY="ETHEREUM PRIVATE KEY"
GRAVITY_ADDRESS="GRAVITY CONTRACT ADDRESS"
ETHEREUM_RPC="http://<IP>:8575"
PERSISTENT_PEERS="PEERID@IP:26656"
GENESIS_URL="URL TO genesis.json"
```

- MNEMONICS: for the cosmos account that will stake token
- KEYNAME: any name to use as a key name in the keyring
- STAKE_AMOUNT: amount of tokens you want to stake
- MONIKER: any name as a node name
- CHAIN_ID: your chain id `must match the chain id in genesis`
- ETHEREUM_ADDRESS: this address will be used in the bridge
- ETHEREUM_PRIV_KEY: the private key of the previous address
- GRAVIRY_ADDRESS: Gravity contract address
- ETHEREUM_RPC: address to ETHEREUM Node and port for RPC
- PERSISTENT_PEERS: comma separated list of the peers 
- GENESIS_URL: URL to genesis.json file

Notes:
- your node should have a public ip and you can not have to nodes on the same machine
- the account matches MNEMONICS above should have enough tokens to stake before deployment