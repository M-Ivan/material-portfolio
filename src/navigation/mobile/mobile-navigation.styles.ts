export const MobileNavigationStyles = {
  root: {
    backgroundColor: "#19171df9",
    margin: 0,
    padding: 0,
    display: "flex",
    border: "3px solid #d300c1",
    minHeight: "100vh",
    alignItems: "center",

    zIndex: 11,
  },

  closeIcon: {
    color: "#00d4db",
    width: "3rem",
    height: "3rem",
    // [theme.breakpoints.down("sm")]: {
    //   width: "2rem",
    //   height: "2rem",
    // },
    // animation: `$back 0.5s alternate ${theme.transitions.easing.easeInOut} infinite`,
  },
  "@keyframes back": {
    from: {
      transform: "translateX(2px)",
    },
    to: {
      transform: "translateX(-2px)",
    },
  },
};
