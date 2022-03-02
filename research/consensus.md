# Chain consensus

## Cosmos default

A standard scaffolded cosmos chain comes with a proof of stake staking module and slashing. There is no proof of authority module available.

## Tendermint

The cosmos sdk is nothing more than a framework for the application layer on top [Tendermint](https://tendermint.com).

As such, the default Tendermint consensus with [Tendermint validators](https://docs.tendermint.com/master/nodes/validators.html) is always used.

A block is committed when +2/3 of the validator set sign precommit votes for that block at the same round.

The cosmos POS module is part of the cosmos ABCI app that responds to the EndBlock message with changes to the existing validator set.

## Initial validators

The initial validator public keys can be configured in the Tendermint [genesis state](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#genesis).

## Modifying the validator set

This will require a custom cosmos module that responds to the EndBlock message with changes to the existing validator set.

This new app will then need to be deployed on the existing validators.

Since this is just a configuration in the Tendermint daemon it feels possible to do without modifying the app but this needs to be looked in to.

## Validator keys

Currently Tendermint uses Ed25519 keys.
