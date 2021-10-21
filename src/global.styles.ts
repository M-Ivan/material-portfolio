import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const RalewayTypography = styled(Typography)({
  fontFamily: "Raleway",
});

export const globalStyles = {
  onlyMobile: {
    display: { xs: "inline", md: "none" },
  },
  onlyDesktop: {
    display: { xs: "none", md: "inline" },
  },
};
