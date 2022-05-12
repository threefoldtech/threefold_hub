## Creating basic scaffolding for the modules
```
starport scaffold chain github.com/ashraffouda/multisigwallet --no-module
cd multisigwallet 
starport scaffold module multisigwallet --dep bank,account
starport scaffold map wallet name description address members min-signs --no-message
starport scaffold map transaction title  description walletName toAddress amount state members --no-message
starport scaffold single nextTransaction idValue:uint  --no-message --response transactionID
starport scaffold message create_wallet name members min-signs --response address
starport scaffold message create-transaction walltName toAddress amount
starport scaffold message sign-transaction transactionID
starport scaffold message execute-transaction transactionID
starport scaffold message add-signers walletName members
starport scaffold message remove-signers walletName members
starport scaffold message update-min-signs walletName min-signs
```
# Starting the chain
```
starport chain serve
```

# Usage
## Create wallet passing wallet-name, signers (comma-separated), minimum signs for each transaction
```
threefold_hubd tx multisigwallet create-wallet cs-wallet cosmos19tpu45jxztm30qtkmhw8agmnjq8arh5dxct7zl,cosmos1uh9274j4auudw4u3x4llf4ehdz6rf8mdjd8t3a 2  --from bob
```
## Get wallet address 
```
threefold_hubd query multisigwallet show-wallet cs-wallet
```
## Send tokens to wallet 
```
threefold_hubd tx bank send <alice-address> <wallet-address>  500token
```
## Updating min signatures
```
threefold_hubd tx multisigwallet update-min-signs cs-wallet 2 --from alice
```
## Adding members to the wallet
```
threefold_hubd tx multisigwallet add-member cs-wallet <member_address> --from alice
```
## Removing members from the wallet
```
threefold_hubd tx multisigwallet remove-member cs-wallet <member_address> --from alice
```
## List member transactions
```
threefold_hubd query multisigwallet list-member-transaction
```
## Sign member transaction
```
threefold_hubd tx multisigwallet sign-member-transaction <member_transaction_id> --from alice
```
## Create a new transaction passing wallet-name, toAddress, tokens 
```
threefold_hubd tx multisigwallet create-transaction cs-wallet  <toAddress> 10stake   --from bob
```
## List transactions

```
threefold_hubd query multisigwallet list-transaction
```
if transaction reached the min-signs it will be in `Ready` state otherwise will be `Pending`
## Sign transaction 
```
threefold_hubd tx multisigwallet sign-transaction <transactionId or Index> --from alice
```
## Execute transaction
```
threefold_hubd query multisigwallet list-transaction
```