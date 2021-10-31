import React from "react";
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
import { useDesktopNavBarController } from "navigation/desktop/desktop-nav-bar.controller";
import { DesktopNavBarFragmentProps } from "navigation/desktop/interfaces";
import { navBarStyles as classes } from "navigation/desktop/desktop-nav-bar.styles";
import { ArrowBack, ArrowBackSharp, ArrowForward } from "@mui/icons-material";
import { useNavigationContext } from "navigation/context/navigation.context";
import { NavigationType } from "navigation/nav-component/interface";
import { Box } from "@mui/system";
import { globalStyles } from "theming/global.styles";

export const DesktopNavBarFragment: React.FC<DesktopNavBarFragmentProps> = (
  props
) => {
  const { useController = useDesktopNavBarController } = props;
  const controller = useController();

  const { navigationType } = useNavigationContext();

  // Render
  return (
    <Grid container component={"div"} sx={classes.root}>
      {controller.isNavBarVisible ? (
        <Slide
          direction="down"
          {...{ timeout: 700 }}
          in={controller.isNavBarVisible}
        >
          <AppBar
            elevation={0}
            sx={{
              ...classes.activeAppBar,
              alignItems: {
                xs: "flex-start",
                md:
                  navigationType === NavigationType.Desktop || !navigationType
                    ? "center"
                    : "flex-start",
              },
              position: "fixed",
            }}
          >
            <Toolbar>
              <IconButton
                onClick={controller.onMobileNavigationOpen}
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  display: {
                    xs: "inline",
                    md:
                      navigationType === NavigationType.Desktop ||
                      !navigationType
                        ? "none"
                        : "inline",
                  },
                }}
              >
                <SortIcon
                  sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                />
              </IconButton>{" "}
              <Hidden smDown>
                {navigationType === NavigationType.Desktop ||
                navigationType === undefined ? (
                  <IconButton
                    onClick={controller.onNavigationShrink}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <ArrowBack
                      sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={controller.onNavigationExpand}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <ArrowForward
                      sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                    />
                  </IconButton>
                )}
                {(navigationType === NavigationType.Desktop ||
                  !navigationType) && (
                  <Box>
                    {" "}
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
                    </Button>
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
                    </Button>
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
                    </Button>
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
                  </Box>
                )}
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
            justifyContent: "center",
            top: "100vh",
            bottom: 0,
            borderBottom: "3px solid #d300c1",
            backgroundColor: "#19171d",
            height: "60px",
            zIndex: 1,
            alignItems: {
              xs: "flex-start",
              md:
                navigationType === NavigationType.Desktop || !navigationType
                  ? "center"
                  : "flex-start",
            },
          }}
          elevation={0}
        >
          <Toolbar>
            <IconButton
              onClick={controller.onMobileNavigationOpen}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: {
                  xs: "inline",
                  md:
                    navigationType === NavigationType.Desktop || !navigationType
                      ? "none"
                      : "inline",
                },
              }}
            >
              <SortIcon
                sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
              />
            </IconButton>{" "}
            <Hidden smDown>
              {navigationType === NavigationType.Desktop ||
              navigationType === undefined ? (
                <IconButton
                  onClick={controller.onNavigationShrink}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <ArrowBack
                    sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                  />
                </IconButton>
              ) : (
                <IconButton
                  onClick={controller.onNavigationExpand}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <ArrowForward
                    sx={{ color: "#ff9100", width: "2rem", height: "2rem" }}
                  />
                </IconButton>
              )}
              {(navigationType === NavigationType.Desktop ||
                !navigationType) && (
                <Box>
                  {" "}
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
                  </Button>
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
                  </Button>
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
                  </Button>
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
                </Box>
              )}
            </Hidden>
          </Toolbar>
        </AppBar>
      )}{" "}
    </Grid>
  );
};
