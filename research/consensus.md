# Chain consensus

## Cosmos default

A standard scaffolded cosmos chain comes with a proof of stake staking module and slashing. There is no proof of authority module available.

## Tendermint

The cosmos sdk is nothing more than a framework for the application layer on top [Tendermint](https://tendermint.com).

As such, the default Tendermint consensus with [Tendermint validators](https://docs.tendermint.com/master/nodes/validators.html) is always used.

A block is committed when +2/3 of the validator set sign precommit votes for that block at the same round.

The cosmos POS module is part of the cosmos ABCI app that responds to the EndBlock message with changes to the existing validator set.

## Running without the staking module

### Initial validators

The initial validator public keys can be configured in the Tendermint [genesis state](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#genesis).

### Modifying the validator set

This will require a custom cosmos module that responds to the EndBlock message with changes to the existing validator set.

This new app will then need to be deployed on the existing validators.

Since this is just a configuration in the Tendermint daemon it feels possible to do without modifying the app but this needs to be looked in to.

### Problems

#### IBC

Creating a new IBC keeper expects a staking keeper for getting information about the consensus state.

#### Mint

The mint keeper is also dependent on the staking keeper.
The mint module description is "Creation of new units of staking token".
When looking at the mint module's `MintCoins` implementation, it just delegsates to bank module `MintCoins`. So it seems that the mint module might not be required.

### Other

- Gov module
- Evidence module

The default app module requires the stakingkeeper to apply and update the validatorset from the genesis block.

### First conclusion

The staking module is rooted pretty deep in the cosmos framework. Not all modules depending on the staking module require all its functionality, and it's often broken down in separate interfaces, like the default app module but they always call it staking keeper.

## Validator keys

Currently Tendermint uses Ed25519 keys.
