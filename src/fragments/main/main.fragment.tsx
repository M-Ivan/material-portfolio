import React from "react";
import { MainStyles as classes, scrollTop } from "fragments/main/main.styles";
import { MainFragmentProps } from "fragments/main/interfaces";
import { useMainController } from "fragments/main/main.controller";
import { Box } from "@mui/system";
import { HeaderFragment } from "fragments/header/header.fragment";
import { AboutMeFragment } from "fragments/about-me/about-me.fragment";
import { PortfolioFragment } from "fragments/portfolio/portfolio.fragment";
import { ContactFragment } from "fragments/contact/contact.fragment";
import { IconButton, useTheme, Zoom } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { css } from "@emotion/react";
import { NavigationComponent } from "navigation/nav-component/navigation.component";
import NavigationProvider from "navigation/context/navigation-provider";

export const MainFragment: React.FC<MainFragmentProps> = (props) => {
  const { useController = useMainController } = props;
  const controller = useController();
  const theme = useTheme();

  const scrollTopButtonAnimation = css`
    ${scrollTop} 0.5s alternate ${theme.transitions.easing.easeInOut} infinite
  `;

  // Render
  return (
    <Box sx={{ ...classes.root }}>
      <NavigationProvider>
        <NavigationComponent />
      </NavigationProvider>
      <HeaderFragment />
      <AboutMeFragment />
      <PortfolioFragment />
      <ContactFragment />
      {controller.isScrollTopButtonVisible && (
        <Zoom in {...{ timeout: 1000 }}>
          <IconButton
            onClick={controller.onScrollTopButtonPressed}
            sx={{
              ...classes.scrollTop,
              position: "fixed",
            }}
          >
            <ExpandLess sx={classes.scrollTopIcon} />
          </IconButton>
        </Zoom>
      )}
    </Box>
  );
};
