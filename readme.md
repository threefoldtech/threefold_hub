# threefoldhub
**threefoldhub** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Get started
To build the binary:
```bash
starport chain build
# default keyring-backend appears to be os not test even though it's printed test
# so keep that in mind while executing the rest of the commands 
```
To configure the chain:
```bash
threefold_hubd keys add alice --keyring-backend test --recover # enter the mnemonics here
threefold_hubd keys list alice --keyring-backend test # to view alice address
threefold_hubd init test-node --chain-id threefold-hub
threefold_hubd add-genesis-account alice 200000000stake,10000TFT --keyring-backend=test
threefold_hubd gentx --moniker test-node alice 100000000stake 0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc <alice-address> --chain-id=threefold-hub --keyring-backend=test
threefold_hubd collect-gentxs
```

The starport's `serve` subcommand doesn't work as the gentx format is changed. The above snippet creates a new user in the local test keyring, Initializes the genesis file with this account as a validator. The validator delegates its signing power to the Binance account with address `0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc`. This address will be used later in the gravity contract and the orchestrator setup.

The gravity params in the genesis file should be modified:
- the gravity_id must match the `gravity_id` in the `Gravity.sol` contract. In other words, (hex(genesis.gravity_id) + "0" * 64).substr(0, 64) must equal to the gravity id in the contract.

The chain is started then by executing `threefold_hubd start`.
### Binance gravity contract
The gravity contract is available [here](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts). To use remix to deploy it, the [`Gravity.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts/Gravity.sol) contract and [`CosmosToken.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts/CosmosToken.sol) must be copied into remix, compiled, and then deployed on the Binance chain with the following params:
- `gravity_id` must match the id entered in the `genesis.json` file, By converting it to hex and appending zeros to the right until its length is 64. After that, it must be prefixed with `0x`.
- `validators` is a list of Binance account addresses that corresponds to the validators.
- `powers` are the signing power of each validator, they are normalized such that their sum is `2 ** 32`.
### BSC node setup
See [here](./research/bridges/BSC/readme.md). Takes about ~3 hours to complete on testnet. The docs says that the node must be a Full Ethereum Node, but a light node works fine. Light clients peer with a full node that's configured to serve them. Serving light clients is disabled by default in `full nodes`, so this may be a problem in the mainnet setup. More [info](https://github.com/Gravity-Bridge/Gravity-Docs/blob/67e78b3242e8de653a3fdee0285030fac1a0522e/docs/setting-up-your-genesis-validator.md) from the gravity doc repo. What's recommended is to create a full node and then start another light client that peers with it. This should be researched along with the slashing specs to check if light clients being unreliable can cause slashing.
### Orchestrator setup
Download the [`gbt`](https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.4.2/gbt) binary. Then execute `gbt init` to initalize the gbt config. Modify the config to contain the following:
```toml
[orchestrator]
relayer_enabled = true 

[relayer]
batch_request_mode = "EveryBatch"

[relayer.valset_relaying_mode]
mode = "Altruistic"

[relayer.batch_relaying_mode]
mode = "EveryBatch"
```
This is somewhat dangerous to relay every batch, in case of low-fee transfers spams. By default, it's `ProfitableOnly` with a specified margin, to make sure the fees the validator pays to relay the batch is less than the fee it pays. The current binary works with uniswap, it should be modified (or configured of possible) to work with Binance instead, then the config can be `ProfitableOnly`.

To start the orchestrator:
```bash
gbt orchestrator --cosmos-phrase "<cosmos-phrase-of-validator-alice-in-our-example>" -e "<ethereum-private-key-of-the-validator-delegate>" --gravity-contract-address "<get-after-deploying-Gravity.sol>" -f 1TFT --ethereum-rpc "<endpoint-of-the-node>"
```
TODO: how to specify cosmos fee in the previous command
### Usage
To transfer money from binance to threefold_hub chain:
```bash
./gbt client eth-to-cosmos --ethereum-key '<private-key-of-the-sender>' --gravity-contract-address '<gravity-contract-address>' --token-contract-address '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378' --amount .000000001 --destination <cosmos-destination-address> --ethereum-rpc <binance-node-endpoint>
```
Note that transferring the money back requires that the tokens was originated from Binance (TODO: check if some tokens can be configured in genesis):
```bash
./gbt client cosmos-to-eth --amount <amount-to-transfer> -b <bridge-fee> -c '<cosmos-words-of-the-sender>' -e '<binance-address-of-the-receiver>' -f 1gravity
```
Bridge fees must be in the same tokens being transfered.
TODO: how to specify an appropriate transaction fees

### Slashing specs
TODO: fill when the validators get slashed to explain the risks of downtime.
### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.com/threefoldtech/threefold_hub@latest! | sudo bash
```
`threefoldtech/threefold_hub` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)
