import React from "react";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import AnimationProvider from "context/animations-provider";
import { MainFragment } from "fragments/main/main.fragment";

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
