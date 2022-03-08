# IBC hub

The following steps explains how to interconnect multiple chains using a hub and perform ibc tranfers through it. `hermes` sometime takes time to process the ibc message, causing it to timeout and the money to be returned to the original account.

- install hermes by downloading it from `https://github.com/informalsystems/ibc-rs/releases`, extracting it, and moving the binary in a directory in the path (e.g. `/usr/local/bin/`)

- scaffold a new chain `starport scaffold chain github.com/threefoldtech/galaxy --no-module`

- start the chains in different terminals
```bash
cd galaxy
starport chain serve -c ../venus.yml
starport chain serve -c ../earth.yml
starport chain serve -c ../mars.yml
starport chain serve -c ../hub.yml
```

- to get importable keys from each chain to hermes relayer, for the sake of brevify, the key files are included with prespecified mnemonics, so this step and the next don't have to be done:
```bash
cd .. # one dir outside the chain root, next to the chain yml files
galaxyd keys show alice --home ~/.venus --output json | jq > venus.json
galaxyd keys show alice --home ~/.earth --output json | jq > earth.json
galaxyd keys show alice --home ~/.mars --output json | jq > mars.json
galaxyd keys show alice --home ~/.hub --output json | jq > hub.json
```

- add the mnemonic of alice printed (printed in `starport chain serve ...`) in the files from the previous step. Example:
```json
{
  "name": "alice",
  "type": "local",
  "address": "cosmos1wd3ffsxxu502dxr9f3uzxcqa4rsgdk4ldce6jq",
  "pubkey": "{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"Aod4QkiPm/zEp9YRNISqeX+dIB1DQXpKRZCkSMxBZprz\"}",
  "mnemonic": "wall bamboo lumber hobby ugly pool conduct pattern render shoe cement hip surprise grant range crisp say shove brain table movie useless piece captain" # <--- this line is added manually
}
```

- create the relayer configuration file in `~/.hermes/config.toml`.
```bash
mkdir -p ~/.hermes/ && cp config.toml ~/.hermes
```

- import the keys to hermes:
```bash
hermes keys add --file venus.json venus
hermes keys add --file earth.json earth
hermes keys add --file mars.json mars
hermes keys add --file hub.json hub
```

- add paths between the hub and each chain:
```bash
hermes create channel --port-a transfer --port-b transfer venus hub
hermes create channel --port-a transfer --port-b transfer earth hub
hermes create channel --port-a transfer --port-b transfer mars hub
```

- start the relayer:
```bash
hermes start # you should see the channel ends between the hub and each chain
```

- add the chains to keplr by copying the code in `keplr.js` and executing it in the console of the chrome browser on which keplr addon is installed.

- add the wallets to keplr using the mnemonics of alice printed in `starport chain serve ...` step for each chain. The names can be anything, but for the next steps it's assumed they are named `venus-alice`, `earth-alice`, `mars-alice`, and `hub-alice`.

- you can do `ibc transfer` using the keplr wallet from any chain to/from the hub. So to move tokens along the path earth->hub->mars:
1. Select the account `earth-alice`.
2. Select the chain `earth`.
3. Click on `ibc transfer`.
4. On `select chain` choose `New IBC Transfer Channel`. Enter `hub` as the `Destination chain`, and `channel-0` as `channel`.
5. Choose the destination address of alice in the hub. You can get it from the output of `starport chain serve -c ../hub.yml`. And an empty memo text.
6. Choose the amount you want to transfer and low fees. Then `next` and finally `approve`.
7. By switching the account to `hub-alice` and the chain to hub. You can see the tokens appear in the `Tokens` section.
8. Same steps can be done to transfer from the hub to mars. But the channel should be `channel-2` for mars, `channel-0` for venus, and `channel-1` for mars. The channel id in general is the one printed in the output of `hermes start` as the channel id of the source chain in the conncetion between the two channels.

- Note that the tokens appear in the wallet associated with a specific channel, meaning that moving money from A->B->C->A won't return the money in the original token. Instead, it should be returned along the reverse of the same path, for example, A->B->C->B->A.

- Transfered money by default is not a native token, meaning it can't be used to do operations using them the same way as the native token. However, the app can be adjusted to make use of them, but it should be designed carefully as anyone can spawn a chain and transfer money using ibc to the chain. For example, an account can create a transaction stating he allows access to resources he owns using tokens transfered along a specific channel id.
