import { contractAddresses, abi } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"

export default function BuyTokens() {
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    console.log(`ChainId is ${chainId}`)

    const trustyCoinSaleAddress = chainId in contractAddresses ? contractAddresses[chainId][1] : null
    console.log(`trustyCoinSaleAddress is ${trustyCoinSaleAddress}`)

    // State hooks
    const [rate, setRate] = useState("0")

    const abiTrustyCoinSale = JSON.parse(abi.TrustyCoinSale)

    /* View Functions */

    const { runContractFunction: getRate } = useWeb3Contract({
        abi: abiTrustyCoinSale,
        contractAddress: trustyCoinSaleAddress,
        functionName: "getRate",
        params: {},
    })

    async function updateUIValues() {
        console.log(await getRate())
        const rateFromCall = (await getRate()).toString()

        console.log("Rate is", rateFromCall)
        setRate(rateFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            <h1>Buy Tokens</h1>
            <p>Rate: {rate}</p>
        </div>
    )
}
