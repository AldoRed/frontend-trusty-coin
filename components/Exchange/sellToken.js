import React, { useState } from 'react';

const SellToken = () => {
  const [tokenAmount, setTokenAmount] = useState('');
  const [ethAmount, setEthAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const exchangeRate = 0.01; // 1 Token = 0.01 ETH

  const handleTokenChange = (e) => {
    const tokens = e.target.value;
    setTokenAmount(tokens);
    setEthAmount(tokens * exchangeRate);
  };

  const handleSellTokens = () => {
    // Logic to handle selling tokens
    alert(`You have sold ${tokenAmount} tokens from wallet address ${walletAddress} for ${ethAmount} ETH`);
  };

  const boxStyle = {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '50%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };

  const formGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  const buttonStyle = {
    marginTop: '10px'
  };

  return (
    <div style={boxStyle}>
      <h1>Sell Tokens</h1>
      <form>
        <div className="form-group row" style={formGroupStyle}>
          <label htmlFor="walletAddress" className="col-sm-2 col-form-label" style={labelStyle}>Wallet Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter wallet address"
            />
          </div>
        </div>
        <div className="form-group row" style={formGroupStyle}>
          <label htmlFor="tokenAmount" className="col-sm-2 col-form-label" style={labelStyle}>Token Amount</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="tokenAmount"
              value={tokenAmount}
              onChange={handleTokenChange}
              placeholder="Enter token amount"
            />
          </div>
        </div>
        <div className="form-group row" style={formGroupStyle}>
          <label htmlFor="ethAmount" className="col-sm-2 col-form-label" style={labelStyle}>ETH Amount</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="ethAmount"
              value={ethAmount}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row" style={formGroupStyle}>
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleSellTokens}>
              Sell
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellToken;
