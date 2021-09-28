import { LinearProgress, Theme } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

export const SkillsLinearProgress = withStyles((theme: Theme) => ({
  root: {
    height: 25,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette?.grey[theme.palette.mode === "light" ? 400 : 700],
  },
  bar: {
    backgroundImage:
      "linear-gradient(to right, #a000c0, #a000c0, #a000c0, #ff9100)",
  },
}))(LinearProgress);

export const useAboutMeStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "none",
    backgroundColor: "#f3f3f3",
    color: "#2e2e2e",
    minHeight: "100vh",
  },
  aboutme: {
    padding: "1rem 20% 1rem 20%",
    justifyContent: "center",
    [theme.breakpoints?.down("md")]: {
      padding: "1rem 10% 1rem 10%",
    },
  },
  descriptionText: {
    fontSize: "1.2rem",
    color: "#3d3d3d",
    padding: "0 0rem 2rem 0",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    padding: "1rem 0 1rem 0",
    textAlign: "center",
    textTransform: "uppercase",
    display: "inline-block",
    textDecoration: "none",
    backgroundImage: "radial-gradient(circle, #ff9100, #d31ec0)",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "35% 3px",
    transition: "background-size .5s ease",
    "&:hover": {
      backgroundSize: "100% 3px",
    },
  },
  subtitleColor: {
    color: "#d300c1",
  },
  avatar: {
    width: "100%",
    height: "100%",
    maxWidth: "270px",
    maxHeight: "270px",
    marginTop: "2rem",
  },
  skillArea: {
    marginTop: "3rem",
  },
  // skill: {
  //   padding: 0,
  //   borderRadius: "50%",
  //   width: "100px",
  //   height: "100px",
  //   backgroundColor: "#ff9100",
  //   display: "flex",
  // },
  skillText: {
    textAlign: "center",
    fontSize: "1.1rem",
  },
  skillIcon: {
    paddingTop: "2.5px",
    color: "#fff",
    width: "50%",
    height: "50%",
  },
  progressBox: {
    display: "flex",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    height: 26,
    borderRadius: "0.15rem",
    backgroundColor: "#d300c1",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    border: "2px solid #d300c1",
    transition: "0.6s",
    borderRadius: "0%",
    fontWeight: 600,
    color: "#3c3c3c", //"#ff9100",
    width: "100%",
    "&:hover": {
      backgroundColor: "#d300c1",
      color: "#fff",
    },
  },
}));
