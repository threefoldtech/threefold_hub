# Usage
## Create wallet passing wallet-name, signers (comma-separated), minimum signs for each transaction
```
threefold_hubd tx multisigwallet create-wallet cs-wallet tf1ealt68tsfk4z099de02jgrrgu7zxylf5nmc0xw,tf162tu6dzkey4ns5gddvmvjjc63usfevzv8ckqz4 2  --from bob
```
## Get wallet address 
```
threefold_hubd query multisigwallet show-wallet cs-wallet
```
## Send tokens to wallet 
```
threefold_hubd tx bank send <alice-address> <wallet-address>  500token
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