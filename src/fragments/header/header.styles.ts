export const HeaderStyles = {
  root: {
    color: "#fff",
    padding: "0rem",
    backgroundColor: "#19171d",
    minHeight: "106vh",
  },

  welcomeText: {
    justifyContent: "center",
    alignSelf: "center",
    transform: "skewY(-3deg)",
  },
  button: {
    border: "2px solid #03c2c9",
    background: "transparent",
    width: "500px",
    borderRadius: "0%",
    transform: "skewY(3deg)",
    marginTop: "5vh",

    // [theme.breakpoints.down("xs")]: {
    //   width: "70%",
    //   fontSize: "10pt",
    // },

    transition: "0.5s",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00000000",
      color: "#fff",
      border: "2px solid #d300c1",
    },
  },
  iconAnim: {
    transition: "0.5s",
    width: "30px",
    height: "30px",
    marginLeft: "0.5rem",
    transform: "rotate(90deg)",
  },
  icon: {
    width: "30px",
    height: "30px",
    marginLeft: "0.5rem",
  },
};
