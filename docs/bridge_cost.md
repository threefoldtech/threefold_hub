# Bridge fee costs

The flow to convert from binance to cosmos is roughly as follows:

- The user makes a transaction on binance transferring some money destined to an address in cosmos
- All the validators listens on events and sends a cosmos messages to record this event on the cosmos chain.
- An internal transfer is automatically executed when the event is noted by enough validators (with > 2 / 3 power)

So the cost on the validators in this flow is only making the cosmos transactions. The fees are to-be-specified after fixing the min-gas-price.

The reverse flow from cosmos to eth is as follows:

- The user makes a send-to-eth transaction on cosmos
- After a number of send-to-eth requests is made, a validator decides to batch them and send them to binance. The relaying part is permissionless and can be done by anyone (not necessarily the validators). The validators decide that the batch is good to send based on its configuration. It can submit profiable batches only, submit always, or when the amount exceeds a specific amount.
- The gravity contract while executing the batch, performs the transfers to the destined accounts.

So the cost on the relaying validator includes a (most-costly) binance transaction. This transaction has:

- 60000 base gas consumed
- 10000 gas per additional cosmos-to-eth transaction

The gas cost is ~7 gwei, which makes the cost:

- .00042  BNB = 2.4TFT base cost
- 0.00007 BNB =  .4TFT per additional cosmos-to-eth transaction.
