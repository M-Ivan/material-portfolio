import { Theme } from "@mui/material";

export const projectStyles = {
  root: {
    width: "100%",
    height: "100%",
    color: "#fff",
    background: "none",
    borderRadius: "0",
  },

  nombre: {
    fontSize: { xs: "14pt", md: "18pt" },
    fontWeight: 600,
  },
  tecnologias: {
    fontSize: { xs: "12pt", md: "16pt" },
    color: "#ff0080",
  },
  projectBox: { height: "100%" },

  detailsBox: {
    width: "100%",
    paddingBottom: "56.25%",
  },
  detailsContainer: {
    display: "grid",
    alignItems: "center",
    padding: { xs: "0", md: "1rem" },
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    width: "100%",
    marginTop: { xs: "0", md: "3rem" },
    border: "2px solid #ff0080",
    height: { xs: 30, md: 40 },
    borderRadius: "0%",
    color: "#fff",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#ff0080",
    },
  },

  modal: {
    borderRadius: "1rem",
    backgroundColor: "#fff",
    boxShadow: (theme: Theme) => theme.shadows[24],

    transform: "translate(-50, -50%)",
    top: { xs: "0%", md: "8%" },
    left: { xs: "0%", md: "2.5%" },
    width: { xs: "100%", md: "95%" },
    height: { xs: "100%", md: "82.5%" },
    overflow: { xs: "scroll", md: "hidden" },
    display: "flex",
  },
  close: {
    justifySelf: "center",
    height: "50px",
    zIndex: 100,
  },
  img: {
    height: { xs: "300px", md: "100%" },
    width: "100%",
    display: "flex",
    padding: "3rem 1rem",
    transition: "1s",
    alignItems: { xs: "flex-end", md: "flex-start" },
  },
  modalBtn: {
    backgroundColor: "#ff9100",
    bottom: "0px",
    borderRadius: "0%",
    color: "#fff",
    fontWeight: 600,
    padding: "0.4rem 1rem 0.4rem 1rem ",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3f3f3f",
    },

    "&:not(:last-child)": {
      marginRight: "10px",
    },
  },

  directionButton: {
    boxShadow: { xs: 0, md: 7 },

    color: "#d300c1",
    top: { xs: "0%", md: "50%" },
    height: { xs: "100%", md: "50px" },
    borderRadius: { xs: "0%", md: "50%" },
    backgroundColor: {
      xs: "transparent",
      md: "#fff",
    },
    transition: "0.6s",
    width: "50px",
    zIndex: 10,
    "&:hover": {
      backgroundColor: { xs: "transparent", md: "#d300c1" },
      color: { xs: "#d300c1", md: "#fff" },
    },
  },
};
