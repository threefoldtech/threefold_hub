# Threefold hub

**threefoldhub** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Requirements

1. [Go toolchain](https://go.dev)
2. gcc and build-essential ( on apt based systems like Ubuntu: `apt install gcc build-essential`)
3. [ignite binary v0.20.0](https://ignite.com/cli)
4. Cosmovisor v1.0.0 (`go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`)
5. [BSC geth v1.1.9](https://github.com/bnb-chain/bsc/releases/tag/v1.1.9)
6. [gbt 1.5.0](https://github.com/Gravity-Bridge/Gravity-Bridge/releases/tag/v1.5.0)

## Overview

The threefold chain contains a bridge module to move TFT from/to Binance Smart Chain (BSC). It contains the following components:

- A Gravity Smart Contract on BSC. This contract is per chain and it contains the BSC-side logic of bridging.
- The threefold hub chain. A cosmos-based chain which can be run using `threefold_hubd start` after creating/copying the proper genesis file and modifying the proper config files depending on whether it's the first node on the chain or a joining validator. It can also be run using `cosmovisor` to allow automated updates.
- The orchestrator (gbt) process. This process takes as an input the cosmos words of the validator, the BSC private key of the BSC account to which the validator delegates his signing power to, the Gravity Contract address, and a BSC node JSON-RPC endpoint. It monitors both the cosmos chain and the BSC chain and performs ~signing of events on both sides and relaying those events so that both chains are aware of them. Every validator must run its own orchestrator. However, only one relayer (an option of gbt that can be switched) must run so that the signatures are relayed between the two chains.
- The BSC node (whose endpoint are passed to gbt). It can be a light node, full node, or a third party node.
- The [frontend](./frontend) (probably relevant only for developer/devops) can be used to interact with the threefold hub chain as an alternative to the cmdline client provided by gbt.

## Components setup

In this setup we start a new Threefold hub chain with a bridge to BSC and 1 validator (with the account named `alice`).

First create a BSC account for the validator, in this example we will use `0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc`

### Gravity Smart Contract on BSC

The gravity contracts are available [here](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.5.3/solidity/contracts).

Deploy the [`Gravity.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.5.3/solidity/contracts/Gravity.sol) contract with the following parameters:

- `_gravityId` is [a random 32 byte value to prevent signature reuse](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/docs/design/parameters.md#gravity_id). It must match the id entered in the `genesis.json` file where it is a UTF-8 encoded string, by converting it to hex and appending zeros to the right until its length is 64. After that, it must be prefixed with `0x`.
Since It is a string in the genesis file, it is easier to define that first and convert that to the hex encoded value needed in deploying the contract instead of generating a random hex encoded 32 byte value here and converting it to a string later.  Note that the UTF-8 encoding of the string may not exceed 32 bytes ( the character `€` for example is encoded in UTF-8 using 3 bytes).  

Let's take `my-threefoldhub` as the gravityId. It can be converted to the required value for the contract using Python for example:

```python
"0x"+"my-threefoldhub".encode("utf-8").hex().ljust(64,"0")
'0x6d792d7468726565666f6c646875620000000000000000000000000000000000'
```

- `_validators` is a list of BSC account addresses that corresponds to the validators. Example: `["0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc"]`
- `_powers` is the signing power of each validator, they are normalized so their sum is `2 ** 32`. Example: `[4294967296]`

#### Using remix to deploy the contract

You can use [remix](https://remix.ethereum.org/) to deploy the contract.

The [`Gravity.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.5.3/solidity/contracts/Gravity.sol) contract and the imported [`CosmosToken.sol`](https://github.com/Gravity-Bridge/Gravity-Bridge/blob/v1.5.3/solidity/contracts/CosmosToken.sol) dependency must be copied into the remix contracts directory. The `Gravity.sol` contract is then compiled (with optimization enabled or you get a stack too deep error) and deployed on the Binance Smart Chain. The Binance Smart Chain must be added first to [metamask](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) and it must be selected with an account that contains BNBs.
If deploying on BSC testnet, there is [a faucet available for testnet BNB's](https://testnet.binance.org/faucet-smart).
The Environment in the deployment tab in remix should be set to "Injected Web3".

### The threefold hub chain

The command `ignite chain build` installs the `threefold_hubd` binary.

Generating the genesis can be done manually or automated (along other things) using the docker automated [script](https://github.com/threefoldtech/threefold_hub/tree/development/docker/genesis). The manual flow and parameters descriptions are outlined here.

The default keyring-backend is `os` not `test` even though it's printed `test` so keep that in mind while executing the rest of the commands.

To configure the chain:

```bash
threefold_hubd keys add dummy --keyring-backend test # because keplr doesn't work with account id 0
threefold_hubd keys add alice --keyring-backend test # add --recover if a known mnemonics is to be used
threefold_hubd keys show alice --keyring-backend test # to view the address from alice
threefold_hubd init test-node --chain-id threefold-hub
threefold_hubd add-genesis-account dummy 0TFT --keyring-backend=test
threefold_hubd add-genesis-account alice 2000000000TFT --keyring-backend=test
threefold_hubd gentx --moniker test-node alice 1000000000TFT <validator-BSC-address> <alice-cosmos-address> --chain-id=threefold-hub --keyring-backend=test
threefold_hubd collect-gentxs
```

The genesis file contains the following default parameters:

- `max_validators` are set to 100

The ignite's `serve` subcommand doesn't work as the gentx format is changed. The above snippet creates a new user in the local test keyring, Initializes the genesis file with this account as a validator. The validator delegates its signing power to the Binance account with address `<validator-BSC-address`. This address will be used later in the gravity contract and the orchestrator setup.

An example of the addresses are:

- alice-cosmos-address: tf12m75luwtqthas2kkc53p4kwsakatptfgn6sunz
- validator-BSC-address 0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc

The gravity params in the genesis file should be modified:

- `gravity_id` must match the `_gravityId` parameter from the `Gravity.sol` contract deployment. In other words, "0x"+hex(genesis.gravity_id) appended with `0`'s until a length of 64 must equal to the gravity id in the contract.
- crisis constant fee is the amount to perform an invariant check, which is usually expensive, and can halt the chain if the invariant does nott hold (e.g. 1 TFT, `10000000TFT` in genesis)
- gov `min_deposit` is the minimum amount for a proposal to be put to a vote (e.g. 1 TFT, `10000000TFT` in genesis)
- `bridge_ethereum_address` to `<bridge-contract-address>`. This corresponds to the gravity smart contract address. It's currently not used by the module (i.e. it's for doc-purposes only for now).
- `bridge_chain_id` is 97 for BSC testnet. For BSC mainnet, the chain id is 56.
- Gravity's `average_ethereum_block_time` to 3000. This value is used to estimate blocks timeout.
- The TFT BEP20 token has to be added to the gravity configuration:

  Unless you deployed your own TFT BEP20 contract on BSC testnet, the `TFT-BSC-contract-address` is `0xDC5a9199e2604A6BF4A99A583034506AE53F4B34`, for BSC mainnet, it is `0x8f0FB159380176D324542b3a7933F0C2Fd0c2bbf`.

```json
       "eth_erc20_to_denoms": [
          {
            "erc20": "<TFT-BSC-contract-address>",
            "denom": "TFT"
         }
       ]
```

- `mint_denom` to TFT
- Set `inflation`, `inflation_rate_change`, `inflation_max`, and `inflation_min` to "0".
- `bond_denom` to TFT

The chain is started then by executing `threefold_hubd start`. Or using `cosmosvisor` by running `DAEMON_HOME=/root/.threefold_hub DAEMON_NAME=threefold_hubd DAEMON_ALLOW_DOWNLOAD_BINARIES=true cosmovisor start`. After storing the binary in `~/.threefold_hub/cosmovisor/genesis/bin/threefold_hubd`.

### Orchestrator setup

Similarly, the gbt config file in `~/.gbt/config.toml` and the command to run it can be auto-generated using the same docker script in the above step. The manual configuration is described here.

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

### BSC node setup

See [here](./research/bridges/BSC/readme.md). Takes about ~3 hours to complete on testnet. The docs says that the node must be a Full Ethereum Node, but a light node works fine. Light clients peer with a full node that's configured to serve them. Serving light clients is disabled by default in `full nodes`, so this may be a problem in the mainnet setup. More [info](https://github.com/Gravity-Bridge/Gravity-Docs/blob/67e78b3242e8de653a3fdee0285030fac1a0522e/docs/setting-up-your-genesis-validator.md) from the gravity doc repo. What's recommended is to create a full node and then start another light client that peers with it. This should be researched along with the slashing specs to check if light clients being unreliable can cause slashing.

As suggested [here](https://github.com/threefoldtech/threefold_hub/issues/42), we'll be running a light node until indicated otherwise.

### Web Frontend

The frontend development and production setup is described [here](./frontend/README.md). The frontend must be configured to match the proper threefold hub chain endpoints, and BSC configs as described in its README.

## Threefold hub usage

After the threefold hub chain is up and running, money can be transfered both ways using it. From binance to threefold_hub chain:

```bash
./gbt -a tf client eth-to-cosmos --ethereum-key '<private-key-of-the-sender>' --gravity-contract-address '<gravity-contract-address>' --token-contract-address '<TFT-BSC-contract-address>' --amount 5 --destination '<cosmos-destination-address>' --ethereum-rpc '<binance-node-endpoint>'
```

To transfer the money back to binance:

```bash
./gbt -a tf client cosmos-to-eth --amount '<amount-to-transfer>' -b 30000000TFT -c '<cosmos-words-of-the-sender>' -e '<binance-address-of-the-receiver>' -f 0TFT
```

## Common flows

### Developer (chain from scratch)

1. Create a gravity contract.
2. Generate the genesis file.
3. Start a BSC light node (or use something like <https://data-seed-prebsc-2-s1.binance.org:8545/> for bsc testnet for a quick setup)
4. Run the chain and the orchestor.

### Developer (multivalidator chain from scratch)

1. Setup the initial node as described above.
2. Create two keys and fund them (by sending tokens from the initial account, or sending tokens from bsc).
3. Use these two accounts to spawn two docker containers to run as validators as described [here](./docker/validator/README.md). The node endpoint can be 172.17.0.1 or whatever ip the host has on the docker interface.
4. Revise the notes about [valset creation](https://github.com/cosmos/gravity-bridge/blob/main/spec/valset-creation-spec.md), and note that valset on the gravity contract doesn't have to be in sync all the time with the active valset on the hub depending on the relayer config.

### Developer (modifying an already deployed chain)

Needs to be researched. The running chain can be hardforked by exporting the genesis `threefold_hubd export`. But how to fork (create another one?) the gravity contract is still not researched.

### Devops (deploying the first node to start a new chain)

1. Create a gravity contract.
2. Generate the genesis file.
3. Start a BSC light node (or use something like <https://data-seed-prebsc-2-s1.binance.org:8545/> for bsc testnet for a quick setup)
4. Run the chain and the orchestor.

The genesis file must be shared to be used by other validator joining the chain.

### Devops (adding a new validator)

The validator is dockerized [here](./docker/validator/README.md) and descibed manually [here](./docs/AddingValidators.md).

### Devops (running the frontend)

The config must be updated and then run as described [here](./frontend/README.md).

## Running chains

### Demo

The process of how it's deployed and how to access it is documented [here](./docs/deployment/demo/).

### Testnet

After deploying, its related config and set parameter should be documented [here](./docs/deployment/testnet/).

## Glossary

[Smart Contract](https://en.wikipedia.org/wiki/Smart_contract): A transaction protocol which is intended to automatically execute events and actions according to the terms of a contract. Here, the smart contracts are deployed on BSC.

Token contract address; Token contracts are a sepcial type of smart contracts. Every token has a smart contract which has an addres. For example, TFT on testnet are deployed as a smart contract with address 0xDC5a9199e2604A6BF4A99A583034506AE53F4B34.

Gravity contract address: As described above on how to deploy a gravity contract. Its address are then used in many places including the genesis, the orchestrator, and the frontend config.

BSC delegator address: Each cosmos validator delegates its signing power to a BSC account. This account is named a degator. If created using metamask, its address can be copied from there.

BSC private key: The private key of the above account, can be retrieved using metamask.

Min Gas Price: Specified by each validator, but usually set to a value reached using a social consensus. The validator rejects transactions for which the price is less than the min gas price. Min gas price is used in the frontend configuration and genesis generation or app config.

Bridge fees: In the frontend and the orchestrator config, the bridge fees are (for threefold hub) a fixed amount for which the validator (orchestrator) agrees to process the Cosmos-to-BSC transaction.
