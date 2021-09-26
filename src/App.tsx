import { AboutMeFragment } from "fragments/about-me/about-me.fragment";
import { ContactFragment } from "fragments/contact/contact.fragment";
import { NavBarFragment } from "fragments/nav-bar/nav-bar.fragment";
import { PortfolioFragment } from "fragments/portfolio/portfolio.fragment";

function App() {
  return (
    <div className="App">
      <NavBarFragment />
      <AboutMeFragment />
      <PortfolioFragment />
      <ContactFragment />
    </div>
  );
}

export default App;
