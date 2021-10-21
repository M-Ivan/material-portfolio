import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const navBarStyles = {
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeAppBar: {
    flexGrow: 1,
    margin: 0,
    //  position: "fixed",
    justifyContent: "center",
    display: "flex",
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
    zIndex: 10,
  },
};
