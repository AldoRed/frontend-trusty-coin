import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"
import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
