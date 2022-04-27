function epoch() {
    return (new Date() as any) / 1000;
}

function waitBscTransaction(provider: any, txHash: string, timeout?: number): Promise<any> {
    if (timeout == undefined)
        timeout = 15;
    const startTime = epoch();
    return new Promise((res, rej) => {
        async function _checkTx() {
            const result = await provider.getTransactionReceipt(txHash);
            if (result) res(result);
            else if (epoch() - startTime > (timeout as number)) {
                rej("Transaction took longer than " + timeout + " seconds");
            } else {
                setTimeout(_checkTx, 500);
            }
        }
        _checkTx();
    });
}

export {
    waitBscTransaction
}