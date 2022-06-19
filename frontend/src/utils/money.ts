import { BigNumber, BigNumberish } from "ethers/lib/ethers";
import { parseUnits as internalParse } from "ethers/lib/utils";

export function parseUnits(value: string, unitName?: BigNumberish): BigNumber {
    try {
        return internalParse(value, unitName);
    } catch (_) {
        throw new Error("Invalid number")
    }
}