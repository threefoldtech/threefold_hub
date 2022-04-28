# Operations Guide


## Running the first node using automated configs generation

Please consult [first node](./docker/genesis/) if you want to used the automated configurations, and for manual setup and the configurations please check the [README](./readme.md)

## Running a validator

Please consult [validator document](./docker/validator/)

## To Deploy the frontend 

- You need to [update the config](./frontend/public/config.js)
- Follow the [README](./frontend/README.md)



Please note the parameters needed to run the chain per enviornment should be documented in the [gitea](https://docs.grid.tf)


## Notes:
The values here must be multiplied by 1e7 before adding them in the env vars or the genesis (because the TFT token decimals are 7):
- `BSC-delegator-address` is the address of the owner of the validator node -can be retrieved from metamask-.
- gov min_deposit: The minimum amount deposietd for a proposal to be put to a vote (1 TFT for testnet) 
- crisis constant fee: fixed cost to run invariant check [transaction](https://docs.cosmos.network/v0.44/modules/crisis/01_state.html) (1 TFT for testnet)