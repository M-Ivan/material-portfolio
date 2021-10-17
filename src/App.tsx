import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import AnimationProvider from "context/animations-provider";
import { AboutMeFragment } from "fragments/about-me/about-me.fragment";
import { ContactFragment } from "fragments/contact/contact.fragment";
import { HeaderFragment } from "fragments/header/header.fragment";
import { MainFragment } from "fragments/main/main.fragment";
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
      <AnimationProvider>
        <MainFragment />
        <CssBaseline />
      </AnimationProvider>
    </ThemeProvider>
  );
};

export default App;
