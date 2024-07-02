import { contractAddresses, abi } from "../constants"
// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

export default function Verifier() {
    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    // These get re-rendered every time due to our connect button!
    const chainId = parseInt(chainIdHex)
    // console.log(`ChainId is ${chainId}`)
    const verifierAddress = chainId in contractAddresses ? contractAddresses[chainId][2] : null
    const trustyCoinAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const trustyCoinSaleAddress = chainId in contractAddresses ? contractAddresses[chainId][1] : null

    return (
        <div>
            <div className="flex flex-row">
                <div className="p-5 border-b-2 flex flex-row">
                    <img src="logo.png" alt="ethereum logo" className="py-0 px-3 text-3xl" />
                    <div className="ml-auto py-2 px-4">
                        <ConnectButton moralisAuth={false} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="p-5 border-b-2 flex flex-row">
                    <div className="ml-auto py-2 px-4">
                        <ConnectButton moralisAuth={false} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="p-5 border-b-2 flex flex-row">
                    <div className="ml-auto py-2 px-4">
                        <ConnectButton moralisAuth={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}
