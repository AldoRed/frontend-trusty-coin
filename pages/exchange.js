import NavbarPeople from "../components/Navbar/navbarPeople";
import BuyToken from "../components/Exchange/buyToken";
import SellToken from "../components/Exchange/sellToken";

function Exchange() {
  return (

    <div className="content">
        <NavbarPeople />
        <BuyToken />
        <SellToken />
    </div>
  );
}

export default Exchange;