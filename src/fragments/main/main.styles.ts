import { Theme } from "@mui/material";
import { keyframes } from "@mui/system";
export const scrollTop = keyframes`
    0%: {
      transform: "translateY(4px)",
    },
    100%: {
      transform: "translateY(-1px)",
    },`;

export const MainStyles = {
  root: {
    fontFamily: "Raleway",
    overflow: "hidden",
    minHeight: "100vh",
    padding: "0rem",
    margin: 0,
  },
  scrollTop: {
    boxShadow: "0 0 10px #00000030",
    bottom: "30px",
    right: "5%",
    backgroundColor: "#fff",
    transition: "1s",
    color: "#d300c1",
    "&:hover": {
      backgroundColor: "#b400cc",
      color: "#fff",
    },
  },
  scrollTopIcon: {
    animation: `${scrollTop} 0.5s alternate ease-in-out infinite`,
    width: "40px",
    height: "40px",
  },
};
