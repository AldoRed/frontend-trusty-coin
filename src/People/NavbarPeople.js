import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function NavbarPeople() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Check if there's an account saved in local storage
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        console.log(signer);

        const address = await signer.getAddress();
        setAccount(address);
        // Save the account to local storage
        localStorage.setItem('account', address);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          Trusty
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Buy/Send TCN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">My Badges</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">New Request</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {account ? (
              <span className="nav-link">{account}</span>
            ) : (
              <a className="nav-link" onClick={connectWallet}>Connect to Metamask</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarPeople;
