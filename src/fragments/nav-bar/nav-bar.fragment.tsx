import React from "react";
import { NavBarFragmentProps } from "fragments/nav-bar/interfaces";
import { useNavBarController } from "fragments/nav-bar/nav-bar.controller";
import { navBarStyles as classes } from "fragments/nav-bar/nav-bar.styles";
import SortIcon from "@mui/icons-material/Sort";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
} from "@mui/material";

export const NavBarFragment: React.FC<NavBarFragmentProps> = (props) => {
  const { useController = useNavBarController } = props;
  const controller = useController();

  // Render
  return (
    <Grid
      container
      component={"div"}
      //  className={classes.root}
      sx={classes.root}
    >
      {controller.isNavBarVisible ? (
        <Slide
          direction="down"
          {...{ timeout: 700 }}
          in={controller.isNavBarVisible}
        >
          <AppBar
            elevation={0}
            sx={{ ...classes.activeAppBar, position: "fixed" }}
          >
            <Toolbar>
              <Hidden mdUp>
                <IconButton
                  //    onClick={() => handleCallback()}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <SortIcon
                    sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                  />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                <Button
                  href="#header"
                  onClick={controller.gotoHeader}
                  //  className={classes.button}
                  sx={{
                    color: "#fff",
                    position: "relative",
                    transition: "0.5s",
                    ":hover": {
                      color: "#d300c1",
                    },
                  }}
                >
                  Inicio
                </Button>{" "}
                <Button
                  href="#aboutme"
                  onClick={controller.gotoAbout}
                  sx={{
                    color: "#fff",
                    position: "relative",
                    transition: "0.5s",
                    ":hover": {
                      color: "#d300c1",
                    },
                  }}
                >
                  Sobre mí
                </Button>{" "}
                <Button
                  href="#portafolio"
                  onClick={controller.gotoFolio}
                  sx={{
                    color: "#fff",
                    position: "relative",
                    transition: "0.5s",
                    ":hover": {
                      color: "#d300c1",
                    },
                  }}
                >
                  Portafolio
                </Button>{" "}
                <Button
                  href="#contacto"
                  onClick={controller.gotoContact}
                  sx={{
                    color: "#fff",
                    position: "relative",
                    transition: "0.5s",
                    ":hover": {
                      color: "#d300c1",
                    },
                  }}
                >
                  Contacto
                </Button>
              </Hidden>
            </Toolbar>
          </AppBar>
        </Slide>
      ) : (
        <AppBar
          sx={{
            margin: 0,
            position: "absolute",
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "center",
            top: "100vh",
            bottom: 0,
            borderBottom: "3px solid #d300c1",
            backgroundColor: "#19171d",
            height: "60px",
            zIndex: 1,
          }}
          elevation={0}
        >
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                //      onClick={() => handleCallback()}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SortIcon
                  sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                />
              </IconButton>{" "}
            </Hidden>
            <Hidden smDown>
              <Button
                href="#header"
                onClick={controller.gotoHeader}
                sx={{
                  color: "#fff",
                  position: "relative",
                  transition: "0.5s",
                  ":hover": {
                    color: "#d300c1",
                  },
                }}
              >
                Inicio
              </Button>{" "}
              <Button
                href="#aboutme"
                onClick={controller.gotoAbout}
                sx={{
                  color: "#fff",
                  position: "relative",
                  transition: "0.5s",
                  ":hover": {
                    color: "#d300c1",
                  },
                }}
              >
                Sobre mí
              </Button>{" "}
              <Button
                href="#portafolio"
                onClick={controller.gotoFolio}
                sx={{
                  color: "#fff",
                  position: "relative",
                  transition: "0.5s",
                  ":hover": {
                    color: "#d300c1",
                  },
                }}
              >
                Portafolio
              </Button>{" "}
              <Button
                href="#contacto"
                onClick={controller.gotoContact}
                sx={{
                  color: "#fff",
                  position: "relative",
                  transition: "0.5s",
                  ":hover": {
                    color: "#d300c1",
                  },
                }}
              >
                Contacto
              </Button>{" "}
            </Hidden>
          </Toolbar>
        </AppBar>
      )}{" "}
    </Grid>
  );
};
