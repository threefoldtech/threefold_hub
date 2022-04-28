# Automated genesis config generation

Run `./build.sh` after modifying the env with appropiate values.

The output contains:
- `genesis.json`, `app.toml`, `config.toml`, `node_key.json`. These files should be moved to `~/.threefold_hub/config` on which the node will run after doing `threefold_hubd init test-node --chain-id $CHAIN_ID`.
- `gbt-config.toml` should be moved to `~/.gbt/config.toml` after doing `gbt init`.
- `threefold_hubd` binary

To run a node: `DAEMON_HOME=/root/.threefold_hub DAEMON_NAME=threefold_hubd DAEMON_ALLOW_DOWNLOAD_BINARIES=true cosmovisor start`.

The cosmovisor version used is `v1.0.0`. installed using `go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0`.

It's required to have `~/.threefold_hub/cosmovisor/genesis/bin/threefold_hubd` as the threefold_hubd binary before starting cosmovisor.