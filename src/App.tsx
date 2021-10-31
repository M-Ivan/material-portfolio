import React from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import AnimationProvider from "context/animations-provider";
import { MainFragment } from "fragments/main/main.fragment";
import "tools/i18n/i18n";
import { PRIMARY_COLOR_DARK, SECONDARY_COLOR_DARK } from "theming/pallete";
import dotenv from "dotenv";
dotenv.config();

const App = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: PRIMARY_COLOR_DARK },
      secondary: { main: SECONDARY_COLOR_DARK },
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
