import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  BLACK,
  PRIMARY_COLOR_DARK,
  SECONDARY_COLOR_DARK,
  WHITE,
} from "theming/pallete";

function LightenDarkenColor(col: string, amt: number) {
  let usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export const SecondaryTextField = styled(TextField)({
  "& label": {
    color: LightenDarkenColor(WHITE, -100),
  },
  "& label.Mui-focused": {
    color: SECONDARY_COLOR_DARK,
  },

  "& .MuiFilledInput-root": {
    borderRadius: 0,
    backgroundColor: LightenDarkenColor(BLACK, 45),
  },
});

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
  buttonOutlinedSecondary: {
    border: "2px solid #03c2c9",
    transition: "0.6s",
    borderRadius: "0%",
    fontWeight: 600,
    color: "#03c2c9", //"#ff9100",
    width: "100%",
    "&:hover": {
      backgroundColor: "#03c2c9",
      color: "#fff",
    },
  },
};
