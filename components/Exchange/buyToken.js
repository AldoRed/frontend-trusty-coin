import React, { useState } from 'react';

const BuyToken = () => {
  const [ethAmount, setEthAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState(0);
  const exchangeRate = 100; // 1 ETH = 100 Tokens

  const handleEthChange = (e) => {
    const eth = e.target.value;
    setEthAmount(eth);
    setTokenAmount(eth * exchangeRate);
  };

  const handleBuyTokens = () => {
    // Logic to handle buying tokens
    alert(`You have bought ${tokenAmount} tokens with ${ethAmount} ETH`);
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
      <h1>Buy TCN</h1>
      <form>
        <div className="form-group row" style={formGroupStyle}>
          <label htmlFor="ethAmount" className="col-sm-2 col-form-label" style={labelStyle}>ETH Amount</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="ethAmount"
              value={ethAmount}
              onChange={handleEthChange}
              placeholder="Enter ETH amount"
            />
          </div>
        </div>
        <div className="form-group row" style={formGroupStyle}>
          <label htmlFor="tokenAmount" className="col-sm-2 col-form-label" style={labelStyle}>Tokens</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="tokenAmount"
              value={tokenAmount}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row" style={formGroupStyle}>
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleBuyTokens}>
              Buy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyToken;
