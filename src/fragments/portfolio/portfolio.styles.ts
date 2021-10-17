export const usePortfolioStyles = {
  root: {
    background: "none",
    backgroundColor: "#3f3f3f",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Work Sans",
  },
  portafolio: {
    padding: "1rem 10% 1rem 10%",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    padding: "2rem 0 1rem 0",
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
  proyectArea: {
    width: "80%",
    marginTop: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "",
  },
  proyectAreaBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};
