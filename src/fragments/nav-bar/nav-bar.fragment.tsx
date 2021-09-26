import React from "react";
import { useNavBarStyles } from "fragments/nav-bar/nav-bar.styles";
import { NavBarFragmentProps } from "fragments/nav-bar/interfaces";
import { useNavBarController } from "fragments/nav-bar/nav-bar.controller";
import SortIcon from "@material-ui/icons/Sort";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
} from "@material-ui/core";

export const NavBarFragment: React.FC<NavBarFragmentProps> = (props) => {
  const { useController = useNavBarController } = props;
  const controller = useController();

  const classes = useNavBarStyles();

  // Render
  return (
    <Grid
      container
      component={"div"}
      className={classes.root}
      justifyContent="center"
    >
      {controller.isNavBarVisible ? (
        <Slide
          direction="down"
          {...{ timeout: 700 }}
          in={controller.isNavBarVisible}
        >
          <AppBar className={classes.appbarActive} elevation={0}>
            <Toolbar>
              <Hidden mdUp>
                <IconButton
                  //    onClick={() => handleCallback()}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <SortIcon className={classes.menu} />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                <Button
                  href="#header"
                  onClick={controller.gotoHeader}
                  className={classes.button}
                >
                  {
                    // <HomeOutlinedIcon className={classes.icon} />
                  }
                  Inicio
                </Button>{" "}
                <Button
                  href="#aboutme"
                  onClick={controller.gotoAbout}
                  className={classes.button}
                >
                  {
                    // <FingerprintIcon className={classes.icon} />
                  }
                  Sobre mí
                </Button>{" "}
                <Button
                  href="#portafolio"
                  onClick={controller.gotoFolio}
                  className={classes.button}
                >
                  {
                    //  <WorkOutlineOutlinedIcon className={classes.icon} />
                  }{" "}
                  Portafolio
                </Button>{" "}
                <Button
                  href="#contacto"
                  onClick={controller.gotoContact}
                  className={classes.button}
                >
                  {
                    //<EmailOutlinedIcon className={classes.icon} />
                  }{" "}
                  Contacto
                </Button>
              </Hidden>
            </Toolbar>
          </AppBar>
        </Slide>
      ) : (
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                //      onClick={() => handleCallback()}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SortIcon className={classes.menu} />
              </IconButton>{" "}
            </Hidden>
            <Hidden smDown>
              <Button
                href="#header"
                onClick={controller.gotoHeader}
                className={classes.button}
              >
                {
                  // <HomeOutlinedIcon className={classes.icon} />
                }{" "}
                Inicio
              </Button>{" "}
              <Button
                href="#aboutme"
                onClick={controller.gotoAbout}
                className={classes.button}
              >
                {
                  // <FingerprintIcon className={classes.icon} />
                }{" "}
                Sobre mí
              </Button>{" "}
              <Button
                href="#portafolio"
                onClick={controller.gotoFolio}
                className={classes.button}
              >
                {
                  //  <WorkOutlineOutlinedIcon className={classes.icon} />
                }{" "}
                Portafolio
              </Button>{" "}
              <Button
                href="#contacto"
                onClick={controller.gotoContact}
                className={classes.button}
              >
                {
                  //<EmailOutlinedIcon className={classes.icon} />
                }{" "}
                Contacto
              </Button>{" "}
            </Hidden>
          </Toolbar>
        </AppBar>
      )}{" "}
    </Grid>
  );
};
