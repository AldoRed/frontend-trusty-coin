import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import BuyTokens from "../components/BuyTokens"
import Link from "next/link";

const supportedChains = ["31337", "11155111"]

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>TRUSTY</title>
                <meta name="description" content="TRUSTY" />
                <link rel="icon" href="eth.png" />
            </Head>
            <Header />
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row">
                            <BuyTokens />
                        </div>
                    ) : (
                        <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div>Please connect to a Wallet</div>
            )}
            <div className="container">
                <div className="half">
                    <p>
                        <Link href="/people">People</Link>
                    </p>
                </div>
                <div className="half">
                    <p>
                        <Link href="/partner">Partner</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
