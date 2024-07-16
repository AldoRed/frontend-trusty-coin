import React from 'react';

const RequestForm = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    margin: '30px auto',
    maxWidth: '80%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };

  const sidebarStyle = {
    padding: '20px',
    marginRight: '30px',
    maxWidth: '100%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f1f1f1',
    textAlign: 'center'
  };

  const formContainerStyle = {
    flex: 1
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
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <img src="account.svg" alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
        <h3>Luigi Telesca</h3>
        <p><a href="luigi.telesca@trakti.com">info@trakti.com</a></p>
        <div>
          <h3>Balance</h3>
          <p>30.0 TCN</p>
        </div>
      </div>
      <div style={formContainerStyle}>
        <form>
          <div className="form-group row" style={formGroupStyle}>
            <h1>New Request</h1>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <label htmlFor="companyName" className="col-sm-2 col-form-label" style={labelStyle}>Company</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="companyName" placeholder="Company" />
            </div>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" style={labelStyle}>Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <label htmlFor="walletAddress" className="col-sm-2 col-form-label" style={labelStyle}>Wallet Address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="walletAddress" placeholder="Wallet Address" />
            </div>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <label htmlFor="verificationPlan" className="col-sm-2 col-form-label" style={labelStyle}>Verification Plan</label>
            <div className="col-sm-10">
              <select className="form-control" id="verificationPlan">
                <option>Premium Verification [10 TrustyCoin]</option>
                <option>Standard Verification [5 TrustyCoin]</option>
              </select>
            </div>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <label htmlFor="uploadDocuments" className="col-sm-2 col-form-label" style={labelStyle}>Upload Documents</label>
            <div className="col-sm-10">
              <input type="file" className="form-control-file" id="uploadDocuments" />
            </div>
          </div>
          <div className="form-group row" style={formGroupStyle}>
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary" style={buttonStyle}>Send</button>
              <button type="button" className="btn btn-secondary" style={{ ...buttonStyle, marginLeft: '10px' }}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
