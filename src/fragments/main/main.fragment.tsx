import React from "react";
import { MainStyles as classes } from "fragments/main/main.styles";
import { MainFragmentProps } from "fragments/main/interfaces";
import { useMainController } from "fragments/main/main.controller";
import { Box } from "@mui/system";
import { NavBarFragment } from "fragments/nav-bar/nav-bar.fragment";
import { HeaderFragment } from "fragments/header/header.fragment";
import { AboutMeFragment } from "fragments/about-me/about-me.fragment";
import { PortfolioFragment } from "fragments/portfolio/portfolio.fragment";
import { ContactFragment } from "fragments/contact/contact.fragment";

export const MainFragment: React.FC<MainFragmentProps> = (props) => {
  const { useController = useMainController } = props;
  const controller = useController();

  // Render
  return (
    <Box sx={{ ...classes.root }}>
      <NavBarFragment />
      <HeaderFragment />
      <AboutMeFragment />
      <PortfolioFragment />
      <ContactFragment />
    </Box>
  );
};
