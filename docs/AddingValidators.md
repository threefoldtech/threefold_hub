# Adding more validator nodes to cosmos
## Assuming that you already have a one node chain running and you need to add another one
1-  Get the genesis file from your running node and move it to the new node 
```
$HOME/.threefold_hubd/config/genesis.json
```
2- Add persistent peer to your config.toml

``` 
#$HOME/.threefold_hubd/config/genesis.json
persistent_peers = "48231a3a58636f1e27fccddbaa17c34ccf4eca24@161.35.85.34:26656"
```
to get the node id above issue this command on the already running node
```
threefold_hubd tendermint show-node-id
```

3- start your node
```
threefold_hubd start
```
4- add a key 
```
threefold_hubd keys add ashraf
```
5- try to get some money to your account address printed form the above command
6- create a validator 
```
threefold_hubd tx staking create-validator \
  --amount=5000000TFT \
  --pubkey="$( threefold_hubd tendermint show-validator)" \
  --moniker="validator2" \
  --chain-id="threefold-hub" \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000" \   
  --gas="auto" \
  --gas-prices="0.00TFT" \
  --from=ashraf \
  --keyring-backend="test" # make sure to user the keyring backend you created the key in
```
7- check that you are already a validator 
```
 threefold_hubd query staking validators
```
you should see an entry with your key there
8- add delegate keys
```
#threefold_hubd tx gravity set-orchestrator-address [validator-address] [orchestrator-address] [ethereum-address] [flags]
# validator-address: is the valoper address for the validator
# orchestrator-address: is the address for user in cosmos i.e `ashraf`
# ethereum-address: the address on the other chain i.e binance or eth
```
```
threefold_hubd tx gravity set-orchestrator-address <tfvaloper1rmaj8nl03kzcrqajjnsnjh> tf1rmaj8nl03kzcrqajjnsnjh62hslaewf5t8xz4l 0xaE3A4c49268009A3160265b0bC9BD2edF1 --from ashraf --chain-id threefold-hub --keyring-backend test
```
