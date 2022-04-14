# Upgarding the chain

Upgardes can be managed using the cosmos upgrade module. A flow to achieve this is to first make a `software-upgrade` proposal, specifying the upgrade name, height, and other info depending on how the upgrade itself is performed. Once the `software-upgrade` proposal passes, the upgrade module checks the current binary version and if it is not the latest, it panics. This ensures all the chain stops correctly at the same height, and therefore contains the same state.

## Cosmovisor

`cosmovisor` is a binary that wraps the chain process. It gets notified (using the process logs) when an ugprade is to be performed. Then it restarts the process (and optionally download the new version), then starts the new chain program binary. When opting in for the auto download option, the `--upgrade-info` in the `software-upgrade` proposal can be:
1. A json descriping the binary for each architecture: `'{"binaries":{"linux/amd64":"http://localhost:8000/rmb.zip?checksum=sha256:deaaa99fda9407c4dbe1d04bd49bab0cc3c1dd76fa392cd55a9425be074af01e"}}'`.
2. A link to the json containing the above type: `'{"binaries":{"linux/amd64":"http://localhost:8000/rmb.json?checksum=sha256:deaaa99fda9407c4dbe1d04bd49bab0cc3c1dd76fa392cd55a9425be074af01e"}}'`.

## Recovery

If an upgrade is known to be faulty, it can be reverted in two ways depending on when this is detected:
1. If the `upgrade-height` is big enough that it allows submitting and voting for a new proposal, a new `cancel-software-upgrade` proposal should be made to cancel it.
2. If the upgrade is already in effect, the `--unsafe-skip-upgrades` parameter can be used to pass the upgades heights' to skip. **All validators** must pass this argument with the upgrades to skip and it should be documented well.
3. Another way is to export the start using `threefold_hubd export`, and start a new chain with this genesis file. This basically creates a new chain.

## Migrations

Every module has a `consesnsus version` inside a chain program version which is an integer starting with 1 initially. Increasing a version corersponds to a breaking change in the module. Every module can register migrations from each version to the next. Non-breaking changes don't require version increase.

## Bootstraping

For another node to join the network, it must redo the block actions to build the state. It must start with the initial version, and perform the upgrades at their specified height as the syncing progresses. This process can be automated using `cosmovisor`.