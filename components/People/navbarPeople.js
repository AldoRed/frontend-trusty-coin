import { useMoralis } from "react-moralis"
import { ConnectButton } from "web3uikit"

const supportedChains = ["31337", "11155111"]

function NavbarPeople() {

    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Trusty
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Buy/Send TCN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Badges</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Request</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ConnectButton moralisAuth={false} />
              </li>
            </ul>
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row"></div>
                    ) : (
                        <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div>Please connect to a Wallet</div>
            )}
          </div>
      </nav>
    );
  }
  
  export default NavbarPeople;