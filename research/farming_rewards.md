# Farming rewards

Every month new TFT's are minted to reward farmers.

The evidence of the farming contribution exists on the tfchain level.

Pushing all evidence to the threefold_hub means a complete replication of grid model on the tfchains on the threefold_hub chain wich is quite the overhead and one can ask oneself why the tfchains exist besides the fact that it does not scale to put this all in to one chain.

It's a much better approach to secure the tfchains by having them push hashes of the blocks once and a while to the threefold_hub or having the threefold hub validators looking at the threefold chains and agree on the block hashes stored in the threefold_hub chain.

Let's assume the threefold hub is the main money chain and minting new TFT's for farming rewards happens here.

The minting transactions of the farming rewards should contain a verifiable hash of the evidence on the tfchain level together with a tfchain identifier. Since the validators need to validate the transactions they should validate the farming reward minting transactions on the linked tfchains. As such, anyone can submit the minting transactions, it are the validators that check wether are not they are valid and are accepted.
