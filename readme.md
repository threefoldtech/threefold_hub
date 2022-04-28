# Threefold hub

**threefoldhub** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).


## requirements

1- [Go toolchain](https://go.dev)
2- gcc package and build-essential `apt install gcc build-essential`
3- [startport binary](https://ignite.com/cli)

## Get started

To build the binary:

```bash
starport chain build
```

The default keyring-backend appears to be os not test even though it's printed test so keep that in mind while executing the rest of the commands.

To configure the chain:

```bash
threefold_hubd keys add placeholder --keyring-backend test # because keplr doesn't work with account id 0
threefold_hubd keys add alice --keyring-backend test # add --recover if a known mnemonics is to be used
threefold_hubd keys list alice --keyring-backend test # to view alice address
threefold_hubd init test-node --chain-id threefold-hub
threefold_hubd add-genesis-account placeholder 0TFT --keyring-backend=test
threefold_hubd add-genesis-account alice 2000000000TFT --keyring-backend=test
threefold_hubd gentx --moniker test-node alice 1000000000TFT <BSC-delegator-address> <alice-cosmos-address> --chain-id=threefold-hub --keyring-backend=test
threefold_hubd collect-gentxs
```

The genesis file contains the following default parameters:

- `max_validators` are set to 100

The starport's `serve` subcommand doesn't work as the gentx format is changed. The above snippet creates a new user in the local test keyring, Initializes the genesis file with this account as a validator. The validator delegates its signing power to the Binance account with address `<BSC-delegator-address>`. This address will be used later in the gravity contract and the orchestrator setup.

An example of the addresses are:

- alice-cosmos-address: tf12m75luwtqthas2kkc53p4kwsakatptfgn6sunz
- BSC-delegator-address: 0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc

The gravity params in the genesis file should be modified:

- the gravity_id must match the `gravity_id` in the `Gravity.sol` contract. In other words, (hex(genesis.gravity_id) + "0" * 64).substr(0, 64) must equal to the gravity id in the contract.
- crisis constant fee is the amount to perform an invariant check, which is usually expensive, and can halt the chain if it doens't hold (e.g. `10000000TFT`)
- gov `min_deposit` is the minimum amount for a proposal to be put to a vote (e.g. `10000000TFT`)
- `gravity_id` should be unique to chain (in case of hard forks?) (e.g. `threefold-hub`)
- `bridge_ethereum_address` to `<bridge-contract-address>`. This corresponds to the gravity smart contract address. It's currently not used by the module (i.e. it's for doc-purposes only for now).
- `bridge_chain_id` is 97. The BSC testnet chain id.
- Gravity's `average_ethereum_block_time` to 3000. This value is used to estimate blocks timeout.
- The following `erc20` token is added to gravity:

```json
       "eth_erc20_to_denoms": [
          {
            "erc20": "<TFT-BSC-contract-address>",
            "denom": "TFT"
         }
       ]
```

- `mint_denom` to TFT
- Setting `inflation`, `inflation_rate_change`, `inflation_max`, and `inflation_min` to zero.
- `bond_denom` to TFT

The chain is started then by executing `threefold_hubd start`.

### Binance gravity contract

The gravity contract is available [here](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts). To use remix to deploy it, the [`Gravity.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts/Gravity.sol) contract and [`CosmosToken.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.4.2/solidity/contracts/CosmosToken.sol) must be copied into remix, compiled, and then deployed on the Binance chain with the following params:

- `gravity_id` must match the id entered in the `genesis.json` file, By converting it to hex and appending zeros to the right until its length is 64. After that, it must be prefixed with `0x`.
- `validators` is a list of Binance account addresses that corresponds to the validators.
- `powers` are the signing power of each validator, they are normalized such that their sum is `2 ** 32`.

### BSC node setup

See [here](./research/bridges/BSC/readme.md). Takes about ~3 hours to complete on testnet. The docs says that the node must be a Full Ethereum Node, but a light node works fine. Light clients peer with a full node that's configured to serve them. Serving light clients is disabled by default in `full nodes`, so this may be a problem in the mainnet setup. More [info](https://github.com/Gravity-Bridge/Gravity-Docs/blob/67e78b3242e8de653a3fdee0285030fac1a0522e/docs/setting-up-your-genesis-validator.md) from the gravity doc repo. What's recommended is to create a full node and then start another light client that peers with it. This should be researched along with the slashing specs to check if light clients being unreliable can cause slashing.

### Orchestrator setup

Download the [`gbt`](https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.5.0/gbt) binary. Then execute `gbt init` to initalize the gbt config. Modify the config to contain the following:

```toml
[orchestrator]
relayer_enabled = true 

[relayer]
batch_request_mode = "EveryBatch"
relayer_loop_speed = 20

[relayer.valset_relaying_mode]
mode = "Altruistic"

[relayer.batch_relaying_mode]
mode = "ProfitableWithWhitelist"
margin = 1.1
[[relayer.batch_relaying_mode.whitelist]]
token = "<TFT-BSC-contract-address>"
amount = "30000000" # min fee amount for a batch to be relayed
```

To start the orchestrator:

```bash
gbt -a tf orchestrator --cosmos-phrase "<cosmos-phrase-of-validator-alice-in-our-example>" -e "<ethereum-private-key-of-the-validator-delegate>" --gravity-contract-address "<get-after-deploying-Gravity.sol>" -f 0TFT --ethereum-rpc "<endpoint-of-the-node>"
```

The fee (here 0TFT) should generally be `250000 x min-gas-price`. The min-gas-price can be specified in `~/.threefold_hub/config/app.toml`, it's 0 by default.

### Usage

To transfer money from binance to threefold_hub chain:

```bash
./gbt -a tf client eth-to-cosmos --ethereum-key '<private-key-of-the-sender>' --gravity-contract-address '<gravity-contract-address>' --token-contract-address '<TFT-BSC-contract-address>' --amount 5 --destination '<cosmos-destination-address>' --ethereum-rpc '<binance-node-endpoint>'
```

To transfer the money back to binance:

```bash
./gbt -a tf client cosmos-to-eth --amount '<amount-to-transfer>' -b 30000000TFT -c '<cosmos-words-of-the-sender>' -e '<binance-address-of-the-receiver>' -f 0TFT
```

### Slashing specs

Validators get slashed for not relaying claims for events that happened on ethereum. In addition to the slashing that happens because of double-signing and downtime.

More info:

- gravity slashing: <https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/spec/slashing-spec.md>
- cosmos slashing: <https://docs.cosmos.network/v0.44/modules/slashing/>

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```sh
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release

To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```sh
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install

To install the latest version of your blockchain node's binary, execute the following command on your machine:

```sh
curl https://get.starport.com/threefoldtech/threefold_hub@latest! | sudo bash
```

`threefoldtech/threefold_hub` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)



## Operations

Please check [ops guide](./opsguide.md) for how to operate the node(s)