import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, SigningStargateClient, StdFee } from "@cosmjs/stargate";

function submitWithCheck(client: SigningStargateClient, signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | "auto" | number, memo?: string): Promise<DeliverTxResponse> {    
    return client
        .signAndBroadcast(signerAddress, messages, fee)
        .then(
            (res) => {
                if (res.code != 0) {
                    throw new Error("Failed with code " + res.code + ": " + res.rawLog);
                }
                return res;
            }
        )
}

export {
    submitWithCheck
}