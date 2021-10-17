export const projectStyles = {
  root: {
    width: "100%",
    height: "100%",
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: "0",
  },
  nameBox: {
    // textAlign: "center",
    marginBottom: "2rem",
  },
  nombre: {
    fontSize: "2rem",
    fontWeight: 600,
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "15pt",
    // },
  },
  tecnologias: {
    fontSize: "1.2rem",
    color: "#ff0080",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "10pt",
    // },
  },
  detailsBox: {
    height: 300,
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "60%",
    marginTop: "3rem",
    border: "2px solid #ff0080",
    borderRadius: "0%",
    color: "#fff",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#ff0080",
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "0pt",
    // },
  },

  boxLeft: {
    position: "relative",
    height: "50%",
    width: "20%",
    right: "0%",
  },
  modal: {
    borderRadius: "1rem",
    position: "absolute",
    width: "90%",
    height: "67%",
    backgroundColor: "#fff",
    //   boxShadow: theme.shadows[24],
    top: "13%",
    left: "5%",
    transform: "translate(-50, -50%)",
    // [theme.breakpoints.down("md")]: {
    //   overflow: "scroll",
    //   width: "100%",
    //   height: "100%",
    //   top: "0%",
    //   left: "0%",
    // },
  },
  close: {
    position: "absolute",
    top: "5px",
    right: "1%",
    width: "50px",
    height: "50px",
    zIndex: 100,
    // [theme.breakpoints.down("sm")]: {
    //   color: "#000",
    //   backgroundColor: "#ffffff40",
    //   "&:hover": {
    //     backgroundColor: "#ffffff80",
    //   },
    // },
  },
  img: {
    height: "100%",
    display: "flex",
    padding: "1rem",
    transition: "1s",
    // [theme.breakpoints.down("sm")]: {
    //   alignItems: "flex-end",
    // },
  },
  modalBtn: {
    backgroundColor: "#ff9100",
    position: "relative",
    justifySelf: "center",
    bottom: "0px",
    borderRadius: "0%",
    color: "#fff",
    fontWeight: 600,
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3f3f3f",
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "0",
    //   padding: "0.4rem 1rem 0.4rem 1rem ",
    // },
    "&:not(:last-child)": {
      marginRight: "10px",
    },
  },
  back: {
    // boxShadow: theme.shadows[7],
    // [theme.breakpoints.down("md")]: {
    //   color: "#d300c1",
    //   top: "0%",
    //   height: "100%",
    //   borderRadius: "0%",
    //   marginLeft: "0rem",
    //   boxShadow: "0 0",
    //   backgroundColor: "transparent",
    //   "&:hover": {
    //     backgroundColor: "transparent",
    //   },

    marginLeft: "1rem",
    position: "relative",
    backgroundColor: "#fff",
    transition: "0.6s",
    width: "50px",
    height: "50px",
    top: "50%",
    left: "0%",
    color: "#d300c1",
    zIndex: 10,
    // [theme.breakpoints.up("lg")]: {
    //   "&:hover": {
    //     backgroundColor: "#d300c1",
    //     color: "#fff",
    //   },
    // },
  },
  forward: {
    // boxShadow: theme.shadows[7],
    // [theme.breakpoints.down("md")]: {
    //   color: "#d300c1",
    //   top: "0%",
    //   borderRadius: "0%",
    //   height: "100%",
    //   marginRight: "0rem",
    //   boxShadow: "0 0",
    //   backgroundColor: "transparent",
    //   "&:hover": {
    //     backgroundColor: "transparent",
    //   },

    marginRight: "1rem",
    position: "relative",
    backgroundColor: "#fff",
    transition: "0.6s",
    width: "50px",
    height: "50px",
    right: "0%",
    color: "#d300c1",
    zIndex: 10,
    top: "50%",
    // [theme.breakpoints.up("lg")]: {
    //   position: "relative",
    //   "&:hover": {
    //     backgroundColor: "#d300c1",
    //     color: "#fff",
    //   },
    // },
  },
};
