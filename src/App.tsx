import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import { AboutMeFragment } from "fragments/about-me/about-me.fragment";
import { ContactFragment } from "fragments/contact/contact.fragment";
import { NavBarFragment } from "fragments/nav-bar/nav-bar.fragment";
import { PortfolioFragment } from "fragments/portfolio/portfolio.fragment";

const App = (props: any) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBarFragment />
        <AboutMeFragment />
        <PortfolioFragment />
        <ContactFragment />
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
};

export default App;
