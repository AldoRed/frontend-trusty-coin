import Link from "next/link";

const supportedChains = ["31337", "11155111"]

export default function Home() {

    return (
        <div className="container">
            <div className="half">
                <p><Link href="/people">People</Link></p>
            </div>
            <div className="half">
                <p><Link href="/partner">Partner</Link></p>
            </div>
        </div>
    )
}
