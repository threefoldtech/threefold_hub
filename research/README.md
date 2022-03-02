# Cosmos

a higher layer on top of tendermint consensus engine to develop apps. instead of the flow of having multiple apps (contracts) on the same chain, tendermint allows to build a chain for 1 app.

## tendermint 

tendermint has a quite simple protocol

https://github.com/tendermint/tendermint/blob/master/spec/abci/abci.md


### Errors

The `Query`, `CheckTx` and `DeliverTx` methods include a `Code` field in their `Response*`.
This field is meant to contain an application-specific response code.
A response code of `0` indicates no error.  Any other response code
indicates to Tendermint that an error occurred.

These methods also return a `Codespace` string to Tendermint. This field is
used to disambiguate `Code` values returned by different domains of the
application. The `Codespace` is a namespace for the `Code`.

The `Echo`, `Info`, `InitChain`, `BeginBlock`, `EndBlock`, `Commit` methods
do not return errors. An error in any of these methods represents a critical
issue that Tendermint has no reasonable way to handle. If there is an error in one
of these methods, the application must crash to ensure that the error is safely
handled by an operator.

The handling of non-zero response codes by Tendermint is described below

### CheckTx

The `CheckTx` ABCI method controls what transactions are considered for inclusion in a block.
When Tendermint receives a `ResponseCheckTx` with a non-zero `Code`, the associated
transaction will be not be added to Tendermint's mempool or it will be removed if
it is already included.

### DeliverTx

The `DeliverTx` ABCI method delivers transactions from Tendermint to the application.
When Tendermint recieves a `ResponseDeliverTx` with a non-zero `Code`, the response code is logged.
The transaction was already included in a block, so the `Code` does not influence
Tendermint consensus.

### Query

The `Query` ABCI method query queries the application for information about application state.
When Tendermint receives a `ResponseQuery` with a non-zero `Code`, this code is
returned directly to the client that initiated the query.

### Events

The `CheckTx`, `BeginBlock`, `DeliverTx`, `EndBlock` methods include an `Events`
field in their `Response*`. Applications may respond to these ABCI methods with a set of events.
Events allow applications to associate metadata about ABCI method execution with the
transactions and blocks this metadata relates to.
Events returned via these ABCI methods do not impact Tendermint consensus in any way
and instead exist to power subscriptions and queries of Tendermint state.

An `Event` contains a `type` and a list of `EventAttributes`, which are key-value
string pairs denoting metadata about what happened during the method's execution.
`Event` values can be used to index transactions and blocks according to what happened
during their execution. Note that the set of events returned for a block from
`BeginBlock` and `EndBlock` are merged. In case both methods return the same
key, only the value defined in `EndBlock` is used.

Each event has a `type` which is meant to categorize the event for a particular
`Response*` or `Tx`. A `Response*` or `Tx` may contain multiple events with duplicate
`type` values, where each distinct entry is meant to categorize attributes for a
particular event. Every key and value in an event's attributes must be UTF-8
encoded strings along with the event type itself.




## implementing apps on top of tendermint
What is recommended is using ABCI if you want to use another language (needs to support protobuf) and connect to it over a unixsocket, or developing the application `in process`, to run within the same server of tendermint

you can use `rmb` to as alternative interface to ABCI e.g https://github.com/threefoldtech/research/tree/development/tendermint



# Cosmos

so now that you can have too many chains (chain per app), you probably need to repeat lots of the functionality again over and over, e.g accounts, staking, slashing .. etc, that's where cosmos kicks in. they provide lots of modules for common functionality https://docs.cosmos.network/v0.44/modules/ and also it helps interconnecting all of these apps together so you could transfer value of assets between chains easily using what is called IBC https://docs.cosmos.network/v0.42/ibc/overview.html (it can even be used to work with non proof of stake chains.)


## Cosmos apps
cosmos apps has a higher level interface compared to tendermint, the system is built around `messages` and `queries`, they have governanace, accounts, banks, authentication/authorizastion builtin.

- Typically you define the messages types (transaction can have multiple messages). messages are "actions" that the app can do e.g `set key`, `increment number`, `transfer money` .. etc

- queries are to query the state of the app.
- the system is built around protobuf, so every message (request, response) are defined in protobuf schemas + rpc service created (always in protos directory)
- cosmos route the messages based on a module key (your modules should exist in x/module_name) where you have your types, keeper (keeper is the interface that has all of the functionality of the module)


## starport
starport seems to be the standard way to create a project, scaffold modules, adding messages and queries, .. etc
https://starport.com

it also handles the generation of cli command line tools and the rest apis..

https://docs.starport.com


- starport also scaffolds a webapp in `vue` directory, that you can have your custom types in and has swagger integrated.
- there's a web based wallet integrated in that webapp can be used to connect to the hub or relays


## configuring tokens

genesis can be configured by editing `config.yml`

```
accounts:
  - name: alice
    coins: ["20000token", "200000000stake", "5000omar"]
  - name: bob
    coins: ["10000token", "100000000stake"]
validator:
  name: alice
  staked: "100000000stake"
client:
  openapi:
    path: "docs/static/openapi.yml"
  vuex:
    path: "vue/src/store"
faucet:
  name: bob
  coins: ["5token", "100000stake"]
```

- here you define genesis accounts and validator account -running the node and their staking-
- coins are defined in form of {amount}{denomintation} e.g `10000TFT`


### running chain

`starport chain serve`

```🛠️  Building proto...
📦 Installing dependencies...
🛠️  Building the blockchain...
💿 Initializing the app...
🙂 Created account "alice" with address "cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd" with mnemonic: "snap square ritual toy recall echo rhythm hello elite faith install gather sibling cute demise blame satoshi salad defy educate coyote spread film diary"
🙂 Created account "bob" with address "cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m" with mnemonic: "cube kingdom lemon link gain wire mesh genius skin fire absorb seven prevent neck disagree output leopard such shoot alley twist rain drive gun"
🌍 Tendermint node: http://0.0.0.0:26657
🌍 Blockchain API: http://0.0.0.0:1317
🌍 Token faucet: http://0.0.0.0:4500

```

##### running with verbose 
`starport chain serve -v`  should show info, err logs from all modules.


### building for production
`starport chain build`


### deploying a chain
check [deploying chain](./deploying_chain.md)

### NOTE: collect-txs

- `BINARY_OF_CHAIND collect-gentxs` otherwise you may face unverified chain or unauthorized user
- The other thing you may need to pass `--chain-id` while interacting with the chain because the default value of chain id is wrongly set. 


You can customize the binary name in config.yml:

```
build:
  binary: "newchaind"
Or also add custom ldflags into your app binary:

build:
  ldflags: [ "-X main.Env=prod", "-X main.Version=1.0.1" ]

  ```

## cosmos docs
- academy https://tutorials.cosmos.network/
- official docs https://tutorials.cosmos.network/




## keplr wallet
for keplr wallet to work with non native chain, seems there's an experimental feature to suggest a chain https://docs.keplr.app/api/suggest-chain.html . I didn't find a way for having that to work with keplr "portal"

connecting to relay didn't work don't know why yet. https://github.com/threefoldtech/threefold_hub/issues/2#issuecomment-1041595377



## governance module

- need to stake tokens with a validator before voting
- voting can happen on proposal
- votes can be (yes, no, no with veto)
- if proposal is accepted (MONEY is refunded to the participants)
- if proposal is rejected (MONEY is burned)
- proposal passes if it has 2/3 of the votes as YESs and less that 1/3 of no with veto.
- proposal is active for votes as soon as it reaches its min deposit
- if the validator voted for you and you revoted, your vote will override the validator vote. 
- proposal can be for system upgrade or plain text proposals

https://docs.cosmos.network/v0.44/modules/gov/



##  keys


### listing
```
➜  cosmos-counterd git:(master) ✗ ./cosmos-counterd keys list                                 
- name: alice
  type: local
  address: cosmos1y9wqlhvldqqt8hstx63kwt0y2lc5pfkd74jth4
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+54rf0ZAPMeEYc7R1l3X0E5uv8cpcKD3b3VUFZ2O8QL"}'
  mnemonic: ""
- name: bob
  type: local
  address: cosmos1frkz5ezty9l56phfyxyhng8987c059d04yd8xy
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AhwE5EaJHrJVUEV9dWVGcH1IxrWVNQQ16CDTZfNLdKQM"}'
  mnemonic: ""
```


### showing specific addr

```
➜  cosmos-counterd git:(master) ✗ ./cosmos-counterd keys show alice
- name: alice
  type: local
  address: cosmos1y9wqlhvldqqt8hstx63kwt0y2lc5pfkd74jth4
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A+54rf0ZAPMeEYc7R1l3X0E5uv8cpcKD3b3VUFZ2O8QL"}'
  mnemonic: ""


  ```	

### add key
```
➜  cosmos-counterd git:(master) ✗ ./cosmos-counterd keys add xmon   
override the existing name xmon [y/N]: y

- name: xmon
  type: local
  address: cosmos1xjedtkrtwyhedp9pxfqx348ggeuw6v9l568c8u
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Au2R0Gcf5BzOSOZifOo+Mx3cmYv6woicHl0FXTxeIahx"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

tornado elder zone tree acquire system situate assault short primary table involve web ahead security patch capable ritual ahead leopard route wish betray brush

```

### make the key available as account 

```
➜  cosmos-counterd git:(master) ✗ ./cosmos-counterd add-genesis-account xmon 100000000stake

```



```
./cosmos-counterd tx bank send cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m 1000000stake --chain-id cosmoscounter 
{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd","to_address":"cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m","amount":[{"denom":"stake","amount":"1000000"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}

confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 0A1E0A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E64
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWZobDh5bHdqZXk2eWo4cm1qNHUweDh5ZzI1NHNuYzR0Z2Q5OXZkLzE=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: SDhsR1JDZHJSUjFWc2EvWUMzV0YvVjhrMmVoZWsxbU9Dem1YdjRjUWs0QWt0YVI5MmhPZnhUUUVrRlk2Qm1uY2xXZHIzeG8zOHpldkxabWRTWERaQ3c9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==
  type: message
- attributes:
  - index: true
    key: c3BlbmRlcg==
    value: Y29zbW9zMWZobDh5bHdqZXk2eWo4cm1qNHUweDh5ZzI1NHNuYzR0Z2Q5OXZk
  - index: true
    key: YW1vdW50
    value: MTAwMDAwMHN0YWtl
  type: coin_spent
- attributes:
  - index: true
    key: cmVjZWl2ZXI=
    value: Y29zbW9zMXQ5bnBncjNqY3p1c3FxZTl5bWh6azVzYzN6Nmd5MjRoN3hrdTBt
  - index: true
    key: YW1vdW50
    value: MTAwMDAwMHN0YWtl
  type: coin_received
- attributes:
  - index: true
    key: cmVjaXBpZW50
    value: Y29zbW9zMXQ5bnBncjNqY3p1c3FxZTl5bWh6azVzYzN6Nmd5MjRoN3hrdTBt
  - index: true
    key: c2VuZGVy
    value: Y29zbW9zMWZobDh5bHdqZXk2eWo4cm1qNHUweDh5ZzI1NHNuYzR0Z2Q5OXZk
  - index: true
    key: YW1vdW50
    value: MTAwMDAwMHN0YWtl
  type: transfer
- attributes:
  - index: true
    key: c2VuZGVy
    value: Y29zbW9zMWZobDh5bHdqZXk2eWo4cm1qNHUweDh5ZzI1NHNuYzR0Z2Q5OXZk
  type: message
- attributes:
  - index: true
    key: bW9kdWxl
    value: YmFuaw==
  type: message
gas_used: "50303"
gas_wanted: "200000"
height: "696"
info: ""
logs:
- events:
  - attributes:
    - key: receiver
      value: cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m
    - key: amount
      value: 1000000stake
    type: coin_received
  - attributes:
    - key: spender
      value: cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd
    - key: amount
      value: 1000000stake
    type: coin_spent
  - attributes:
    - key: action
      value: /cosmos.bank.v1beta1.MsgSend
    - key: sender
      value: cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd
    - key: module
      value: bank
    type: message
  - attributes:
    - key: recipient
      value: cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m
    - key: sender
      value: cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd
    - key: amount
      value: 1000000stake
    type: transfer
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m"},{"key":"amount","value":"1000000stake"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd"},{"key":"amount","value":"1000000stake"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"cosmos1t9npgr3jczusqqe9ymhzk5sc3z6gy24h7xku0m"},{"key":"sender","value":"cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd"},{"key":"amount","value":"1000000stake"}]}]}]'
timestamp: ""
tx: null
txhash: EC2DC2C04AF17DCFBC3CFE6831B6262F29E86CC14B4CCBC47F53E15BB4AC7696

```	




### exporting
TODO



## execute module transactions


```
➜  cosmos-counterd git:(master) ✗ ./cosmos-counterd tx cosmoscounter incr-counter --from alice --chain-id cosmoscounter
{"body":{"messages":[{"@type":"/xmonader.cosmoscounter.cosmoscounter.MsgIncrCounter","creator":"cosmos1fhl8ylwjey6yj8rmj4u0x8yg254snc4tgd99vd"}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}

confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 0A360A342F786D6F6E616465722E636F736D6F73636F756E7465722E636F736D6F73636F756E7465722E4D7367496E6372436F756E746572
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWZobDh5bHdqZXk2eWo4cm1qNHUweDh5ZzI1NHNuYzR0Z2Q5OXZkLzM=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: WnZFUnpsV2NRZE1yR3BXek5yS2hGWldsWUlNYUQvUjNhMXdJRVh2TG5CUTR0dUdpNFF4TWEzU2tJeS84TTZYUXdjWE1uU0ZoVE5jTW5aZG5MZ3NvTkE9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: aW5jcl9jb3VudGVy
  type: message
gas_used: "37971"
gas_wanted: "200000"
height: "813"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: incr_counter
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"message","attributes":[{"key":"action","value":"incr_counter"}]}]}]'
timestamp: ""
tx: null
txhash: CE6D18CDF61ABDE5EF4C3B3D2E92092447921E345F2C837C52980D9FAA643004


```

## configuring inflation

```
➜  config pwd
/home/xmonader/.nameservice/config

➜  config grep inflation -iR
genesis.json:        "inflation": "0.130000000000000000"
genesis.json:        "inflation_max": "0.200000000000000000",
genesis.json:        "inflation_min": "0.070000000000000000",
genesis.json:        "inflation_rate_change": "0.130000000000000000",

```

## sending money bank

```
➜  nameserviced git:(master) ✗ nameserviced tx bank send $(nameserviced keys show alice -a) $(nameserviced keys show bob -a) 2000stake       

{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke","to_address":"cosmos1yvgq9cq8h7w8rw8pn5d94uu9kz07slrlacsr58","amount":[{"denom":"stake","amount":"2000"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}

confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 0A1E0A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E64
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWNmZXZkNnJodnB1OWQ4OHNhbTVqMHk4eGc1amEzdHBrd2dleWtlLzQ=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: YkYwNHZyK1NDSkZERVJNaGVvVUlrZy9USWlmZS82MDlXRWxuUUhZemMyb2VycVdKOGp3aHZIKzhOZmd2YjloUUo2LzA4bjdoa01Dbk15L2RzWkZRWFE9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZA==
  type: message
- attributes:
  - index: true
    key: c3BlbmRlcg==
    value: Y29zbW9zMWNmZXZkNnJodnB1OWQ4OHNhbTVqMHk4eGc1amEzdHBrd2dleWtl
  - index: true
    key: YW1vdW50
    value: MjAwMHN0YWtl
  type: coin_spent
- attributes:
  - index: true
    key: cmVjZWl2ZXI=
    value: Y29zbW9zMXl2Z3E5Y3E4aDd3OHJ3OHBuNWQ5NHV1OWt6MDdzbHJsYWNzcjU4
  - index: true
    key: YW1vdW50
    value: MjAwMHN0YWtl
  type: coin_received
- attributes:
  - index: true
    key: cmVjaXBpZW50
    value: Y29zbW9zMXl2Z3E5Y3E4aDd3OHJ3OHBuNWQ5NHV1OWt6MDdzbHJsYWNzcjU4
  - index: true
    key: c2VuZGVy
    value: Y29zbW9zMWNmZXZkNnJodnB1OWQ4OHNhbTVqMHk4eGc1amEzdHBrd2dleWtl
  - index: true
    key: YW1vdW50
    value: MjAwMHN0YWtl
  type: transfer
- attributes:
  - index: true
    key: c2VuZGVy
    value: Y29zbW9zMWNmZXZkNnJodnB1OWQ4OHNhbTVqMHk4eGc1amEzdHBrd2dleWtl
  type: message
- attributes:
  - index: true
    key: bW9kdWxl
    value: YmFuaw==
  type: message
gas_used: "50495"
gas_wanted: "200000"
height: "6443"
info: ""
logs:
- events:
  - attributes:
    - key: receiver
      value: cosmos1yvgq9cq8h7w8rw8pn5d94uu9kz07slrlacsr58
    - key: amount
      value: 2000stake
    type: coin_received
  - attributes:
    - key: spender
      value: cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke
    - key: amount
      value: 2000stake
    type: coin_spent
  - attributes:
    - key: action
      value: /cosmos.bank.v1beta1.MsgSend
    - key: sender
      value: cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke
    - key: module
      value: bank
    type: message
  - attributes:
    - key: recipient
      value: cosmos1yvgq9cq8h7w8rw8pn5d94uu9kz07slrlacsr58
    - key: sender
      value: cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke
    - key: amount
      value: 2000stake
    type: transfer
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"cosmos1yvgq9cq8h7w8rw8pn5d94uu9kz07slrlacsr58"},{"key":"amount","value":"2000stake"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke"},{"key":"amount","value":"2000stake"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"cosmos1yvgq9cq8h7w8rw8pn5d94uu9kz07slrlacsr58"},{"key":"sender","value":"cosmos1cfevd6rhvpu9d88sam5j0y8xg5ja3tpkwgeyke"},{"key":"amount","value":"2000stake"}]}]}]'
timestamp: ""
tx: null
txhash: ED8B597100F3440030F3D7C0C3572EA730A5EFFF22154E8404F7A436B68B4350
➜  nameserviced git:(master) ✗ nameserviced q bank balances $(nameserviced keys show alice -a)                                              

balances:
- amount: "99998000"
  denom: stake
- amount: "19980"
  denom: token
pagination:
  next_key: null
  total: "0"
➜  nameserviced git:(master) ✗ nameserviced q bank balances $(nameserviced keys show bob -a)  

balances:
- amount: "100002000"
  denom: stake
- amount: "10000"
  denom: token
pagination:
  next_key: null
  total: "0"

``` 



## minting tokens at runtime

- make sure your module depends on mint module
- in make sure to add the mintkeeper to your module
- add the signature in the module
- to generate tokens, in one of the messages of your module you can invoke MintCoins e.g
```

  err := k.mintKeeper.MintCoins(ctx, sdk.NewCoins(sdk.NewInt64Coin("newtok1", 100), sdk.NewInt64Coin("newtok2", 500)))
  if err != nil {
    k.Logger(ctx).Error("8?**?*?*?*error minting coins", "error", err)
  } else {
    k.Logger(ctx).Info("minted lots of tokens for meee")
  }
```

example of full diff

```diff
diff --git a/nameservice/app/app.go b/nameservice/app/app.go
index 436a15e..338e0ad 100644
--- a/nameservice/app/app.go
+++ b/nameservice/app/app.go
@@ -360,6 +360,7 @@ func New(
    app.GetSubspace(nameservicemoduletypes.ModuleName),
 
    app.BankKeeper,
+   app.MintKeeper,
  )
  nameserviceModule := nameservicemodule.NewAppModule(appCodec, app.NameserviceKeeper, app.AccountKeeper, app.BankKeeper)
 
diff --git a/nameservice/x/nameservice/keeper/keeper.go b/nameservice/x/nameservice/keeper/keeper.go
index 9f9c2c1..e0bdf3a 100644
--- a/nameservice/x/nameservice/keeper/keeper.go
+++ b/nameservice/x/nameservice/keeper/keeper.go
@@ -19,6 +19,7 @@ type (
    paramstore paramtypes.Subspace
 
    bankKeeper types.BankKeeper
+   mintKeeper types.MintKeeper
  }
 )
 
@@ -29,6 +30,7 @@ func NewKeeper(
  ps paramtypes.Subspace,
 
  bankKeeper types.BankKeeper,
+ mintKeeper types.MintKeeper,
 ) *Keeper {
  // set KeyTable if it has not already been set
  if !ps.HasKeyTable() {
@@ -42,6 +44,7 @@ func NewKeeper(
    memKey:     memKey,
    paramstore: ps,
    bankKeeper: bankKeeper,
+   mintKeeper: mintKeeper,
  }
 }
 
diff --git a/nameservice/x/nameservice/keeper/msg_server_buy_name.go b/nameservice/x/nameservice/keeper/msg_server_buy_name.go
index 1fe251a..091b840 100644
--- a/nameservice/x/nameservice/keeper/msg_server_buy_name.go
+++ b/nameservice/x/nameservice/keeper/msg_server_buy_name.go
@@ -20,6 +20,13 @@ func (k msgServer) BuyName(goCtx context.Context, msg *types.MsgBuyName) (*types
  // Convert owner and buyer address strings to sdk.AccAddress
  owner, _ := sdk.AccAddressFromBech32(whois.Owner)
  buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
+
+ err := k.mintKeeper.MintCoins(ctx, sdk.NewCoins(sdk.NewInt64Coin("newtok1", 100), sdk.NewInt64Coin("newtok2", 500)))
+ if err != nil {
+   k.Logger(ctx).Error("8?**?*?*?*error minting coins", "error", err)
+ } else {
+   k.Logger(ctx).Info("minted lots of tokens for meee")
+ }
  // If a name is found in store
  if isFound {
    // If the current price is higher than the bid
diff --git a/nameservice/x/nameservice/types/expected_keepers.go b/nameservice/x/nameservice/types/expected_keepers.go
index b500d34..2a99803 100644
--- a/nameservice/x/nameservice/types/expected_keepers.go
+++ b/nameservice/x/nameservice/types/expected_keepers.go
@@ -18,3 +18,7 @@ type BankKeeper interface {
  SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
  SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
 }
+
+type MintKeeper interface {
+ MintCoins(ctx sdk.Context, newCoins sdk.Coins) error
+}

```
https://github.com/xmonader/nameservice/commit/ffcb85f8f603d9db86d59eb716aaa4ce8cd511b5


query the mint module address
```
nameserviced q bank balances cosmos1m3h30wlvsf8llruxtpukdvsy0km2kum8g38c8q
balances:
- amount: "400"
  denom: newtok1
- amount: "2000"
  denom: newtok2
pagination:
  next_key: null
  total: "0"

```


## hub

TOO EMPTY FOR NOW.



## consensus
check [consensus](./consensus.md)


## bridges
check [bridges](./bridges.md)


## research projects

- [cosmos idgen](https://github.com/xmonader/cosmos-intidgen) 
- [cosmos kv](https://github.com/threefoldtech/research/tree/development/cosmoskv)
- [cosmos dwitter](https://github.com/xmonader/dwitter)
- [cosmos nameservice](https://github.com/xmonader/nameservice)
- [cosmos polls](https://github.com/threefoldtech/research/tree/development/cosmoskv)
- cosmos multisig 