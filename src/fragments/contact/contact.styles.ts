export const contactStyles = {
  root: {
    backgroundColor: "#1b1b1b",
    color: "#fff",
    minHeight: "100vh",
  },
  contact: {
    height: "60vh",
    backgroundColor: "#1a1a1a",
    display: "flex",
    // textAlign: "center",
    justifyContent: "center",
    padding: "0 2rem",
  },
  title: {
    fontWeight: "600",
    zIndex: 1,
    padding: "1rem",
    // textAlign: "center",
    // textTransform: "uppercase",
    display: "inline-block",
    textDecoration: "none",
    backgroundImage: "radial-gradient(circle, #ff9100, #d31ec0)",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "35% 3px",
    transition: "background-size .5s ease",
    "&:hover": {
      backgroundSize: "80% 3px",
    },
  },
  subtitle: {
    color: "#00d4db",
    fontWeight: 600,
    fontSize: { xs: "12pt", md: "24pt" },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "12pt",
    // },
  },

  button: {
    width: { xs: "100%", md: "50%" },
    border: "2px solid #03c2c9",
    borderRadius: "0%",
    color: "#fff",
    padding: "1rem",
    fontSize: { xs: "10pt", md: "12pt" },
    transition: "0.6s",
    "&:hover": {
      backgroundColor: "#03c2c9",
      color: "#1b1b1b",
      fontWeight: 600,
    },
  },
  contactLink: {
    color: "#fff",
    fontSize: "12pt",
    transition: "0.6s",
    "&:hover": {
      color: "#ff9100",
    },
  },
  typeIcon: {
    color: "#808080",
  },
  footer: {
    height: "15vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19171d",
  },
  mediaButton: {
    width: "40px",
    height: "40px",
    backgroundColor: "#272727",
    color: "#fff",
    margin: "0 1vw 0 1vw ",
    borderRadius: "0%",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#03c2c9",
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "40px",
    //   height: "40px",
    // },
  },
  icon: {
    width: "30px",
    height: "30px",
    transition: "1s",
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    color: "#acacac",
    fontSize: { xs: "8pt", md: "12pt" },
  },
  watermarkColor: {
    color: "#d300c1",
  },
  card: {
    borderRadius: "0%",
    height: "12vh",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100%", md: "50%" },
    backgroundColor: "#1e242c",
    color: "#fff",
  },
  available: {
    fontSize: { xs: "10pt", md: "15pt" },
    letterSpacing: "2px",
    fontWeight: 600,
  },
  cardText: {
    fontSize: { xs: "11pt", md: "14pt" },
  },
};
