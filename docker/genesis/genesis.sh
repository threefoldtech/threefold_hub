#!/bin/bash

set -ex
export PATH=$PATH:/root/go/bin/:/usr/local/go/bin/

GENESIS=/root/.threefold_hub/config/genesis.json
TENDERMIN_APP_CONFIG=/root/.threefold_hub/config/app.toml
COSMOS_CONFIG=/root/.threefold_hub/config/config.toml
GBT_CONFIG=/root/.gbt/config.toml

assign(){
    cat <<< $(jq ".$1 = $2" $GENESIS) > $GENESIS
}

threefold_hubd keys add devaccount --keyring-backend test
echo $THREEFOLD_ACCOUNT_MNEMONICS | threefold_hubd keys add threefold --keyring-backend test --recover
threefold_hubd keys list threefold --keyring-backend test
threefold_hubd init test-node --chain-id $CHAIN_ID
threefold_hubd add-genesis-account devaccount 0TFT --keyring-backend=test
threefold_hubd add-genesis-account threefold ${THREEFOLD_ACCOUNT_MONEY}TFT --keyring-backend=test
THREEFOLD_COSMOS_ADDRESS=$(threefold_hubd keys show threefold --keyring-backend test -a)
threefold_hubd gentx --moniker $MONIKER threefold ${THREEFOLD_ACCOUNT_STAKE}TFT $BSC_DELEGATOR_ADDRESS $THREEFOLD_COSMOS_ADDRESS --chain-id=$CHAIN_ID --keyring-backend=test
threefold_hubd collect-gentxs

assign app_state.gravity.params.gravity_id \"$GRAVITY_BRIDGE_ID\"
assign app_state.crisis.constant_fee.amount \"$CRISIS_FEE\"
assign app_state.crisis.constant_fee.denom \"TFT\"
assign app_state.gov.deposit_params.min_deposit[0].amount \"$GOV_MIN_DEPOSIT\"
assign app_state.gov.deposit_params.min_deposit[0].denom \"TFT\"
assign app_state.gov.voting_params.voting_period \"$VOTING_PERIOD\"
assign app_state.gravity.params.bridge_ethereum_address \"$BRIDGE_ETHEREUM_ADDRESS\"
assign app_state.gravity.params.bridge_chain_id \"$BSC_CHAIN_ID\"
assign app_state.gravity.eth_erc20_to_denoms '[{"erc20": "'$TFT_BSC_CONTRACT_ADDRESS'","denom": "TFT"}]'
assign app_state.gravity.params.average_ethereum_block_time \"3000\"
assign app_state.mint.params.mint_denom \"TFT\"
assign app_state.mint.minter.inflation \"0.000000000000000000\"
assign app_state.mint.params.inflation_rate_change \"0.000000000000000000\"
assign app_state.mint.params.inflation_max \"0.000000000000000000\"
assign app_state.mint.params.inflation_min \"0.000000000000000000\"
assign app_state.staking.params.bond_denom \"TFT\"


sed -i 's/0xDC5a9199e2604A6BF4A99A583034506AE53F4B34/'$TFT_BSC_CONTRACT_ADDRESS'/' $GBT_CONFIG
sed -i 's/amount = "100"/amount = "'$BRIDGE_FEES'"/' $GBT_CONFIG

sed -i 's/minimum-gas-prices = "0stake"/minimum-gas-prices = "'$MIN_GAS_PRICE'TFT"/' $TENDERMIN_APP_CONFIG
sed -i 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' $TENDERMIN_APP_CONFIG
sed -i 's/swagger = false/swagger = true/' $TENDERMIN_APP_CONFIG
sed -i 's/enable = false/enable = true/' $TENDERMIN_APP_CONFIG

sed -i 's/cors_allowed_origins = \[\]/cors_allowed_origins = \["*"\]/' $TENDERMIN_APP_CONFIG

echo 'gbt -a tf orchestrator --cosmos-phrase "'$THREEFOLD_ACCOUNT_MNEMONICS'" -e "'$DELEGATOR_ETH_PRIVATE_KEY'" --gravity-contract-address "'$BRIDGE_ETHEREUM_ADDRESS'" -f '$(( 250000 * $MIN_GAS_PRICE ))'TFT --ethereum-rpc "'$ETH_ENDPOINT'"' > ~/.gbt/gbt-cmd.sh