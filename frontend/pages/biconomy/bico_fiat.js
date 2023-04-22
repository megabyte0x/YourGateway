import Transak from "@biconomy/transak";

import { smartAccount } from "./bico_smartAccount";

export async function buyThroughFiat(firstName, email) {
    const userAddress = await smartAccount.getAddress()
    const transak = new Transak('STAGING', {
        walletAddress: userAddress,
        userData: {
            firstName: userInfo?.name || '',
            email: userInfo?.email || '',
        },
    });
    transak.init();
}