import { Box } from "@mui/system";
import NavigationProvider from "navigation/context/navigation-provider";
import { useNavigationContext } from "navigation/context/navigation.context";
import { DesktopNavBarFragment } from "navigation/desktop/desktop-nav-bar.fragment";
import { MobileNavigationFragment } from "navigation/mobile/mobile-navigation.fragment";
import React from "react";

export const NavigationComponent: React.FC = () => {
  const { isMobileNavigationOpen } = useNavigationContext();

  console.log("open", isMobileNavigationOpen);

  return (
    <Box>
      {isMobileNavigationOpen && <MobileNavigationFragment />}
      <DesktopNavBarFragment />
    </Box>
  );
};
