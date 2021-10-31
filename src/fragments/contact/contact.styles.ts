export const contactStyles = {
  root: {
    backgroundColor: "#1b1b1b",
    color: "#fff",
    minHeight: "100vh",
    alignItems: "flex-end",
    padding: { xs: "2rem 0 0 0", lg: "0" },
  },
  contact: {
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
    fontSize: { xs: "12pt", md: "16pt" },
  },

  footer: {
    height: "15vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19171d",
    marginTop: "auto",
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
};
