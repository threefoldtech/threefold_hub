async function add_chain(chain_id, rpc_port, rest_port) {
    await window.keplr.experimentalSuggestChain({
        features: ["ibc-transfer", "ibc-go", "no-legacy-stdTx"],
        chainId: chain_id,
        chainName: chain_id,
        rpc: "http://127.0.0.1:" + rpc_port,
        rest: "http://127.0.0.1:" + rest_port,
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "cosmos",
            bech32PrefixAccPub: "cosmos" + "pub",
            bech32PrefixValAddr: "cosmos" + "valoper",
            bech32PrefixValPub: "cosmos" + "valoperpub",
            bech32PrefixConsAddr: "cosmos" + "valcons",
            bech32PrefixConsPub: "cosmos" + "valconspub",
        },
        currencies: [ 
            { 
                coinDenom: "token", 
                coinMinimalDenom: "token", 
                coinDecimals: 0,  
            }, 
            { 
                coinDenom: "stake", 
                coinMinimalDenom: "stake", 
                coinDecimals: 0,  
            }, 
        ],
        feeCurrencies: [
            {
                coinDenom: "token",
                coinMinimalDenom: "token",
                coinDecimals: 0,
            },
            {
                coinDenom: "stake",
                coinMinimalDenom: "stake",
                coinDecimals: 0,
            },
        ],
        stakeCurrency: {
            coinDenom: "stake",
            coinMinimalDenom: "stake",
            coinDecimals: 0,
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.000001,
            average: 0.000025,
            high: 0.000003,
        },
    });
}

await add_chain("venus", 26657, 1317)
await add_chain("earth", 26659, 1318)
await add_chain("mars", 26661, 1319)
await add_chain("hub", 26663, 1320)


