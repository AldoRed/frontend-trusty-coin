function NavbarPartner() {
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
              <a className="nav-link" href="#about">History</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Pending requests</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#page3">Metamask</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavbarPartner;
