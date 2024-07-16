import NavbarPeople from "../components/Navbar/navbarPeople";
import Badges from "../components/BadgeCard/badges";
import Partners from "../components/PatnerCard/partners";

function PeoplePage() {
  return (
    <div className="content">
      <NavbarPeople />
      <Partners />
    </div>
  );
}

export default PeoplePage;