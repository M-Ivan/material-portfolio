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
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "center",
    display: "flex",
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
    zIndex: 10,
  },
};

export const useNavBarStyles = makeStyles((theme: Theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  appbar: {
    margin: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "100vh",
    bottom: 0,
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
    zIndex: 1,
    [theme.breakpoints?.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  appbarActive: {
    flexGrow: 1,
    margin: 0,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
    zIndex: 10,
    [theme.breakpoints?.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  button: {
    color: "#fff",
    position: "relative",
    transition: "0.5s",
    "&: hover": {
      color: "#d300c1",
    },
  },
  menu: {
    color: "#ff9100",
    width: "2rem",
    height: "2rem",
  },
}));
