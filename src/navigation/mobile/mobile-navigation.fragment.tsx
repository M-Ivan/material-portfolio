import React from "react";
import { MobileNavigationStyles as classes } from "navigation/mobile/mobile-navigation.styles";
import { MobileNavigationFragmentProps } from "navigation/mobile/interfaces";
import { useMobileNavigationController } from "navigation/mobile/mobile-navigation.controller";
import { Box } from "@mui/system";
import { Grid, Slide } from "@mui/material";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useNavigationContext } from "navigation/context/navigation.context";
import "navigation/mobile/navigation.scss";

export const MobileNavigationFragment: React.FC<MobileNavigationFragmentProps> =
  (props) => {
    const { useController = useMobileNavigationController } = props;
    const controller = useController();
    const { isMobileNavigationOpen } = useNavigationContext();

    // Render
    return (
      <Slide direction={"right"} in={isMobileNavigationOpen}>
        <Grid
          container
          justifyContent="center"
          sx={{ ...classes.root, position: "fixed" }}
          component={"div"}
        >
          <Box>
            <Grid
              container
              style={{
                transform: "skewY(-3deg)",
              }}
            >
              <h2 className="sub-header">Iván Miragaya</h2>
            </Grid>

            <div className="navigation">
              <div>
                <li>
                  {" "}
                  <a
                    href="#header"
                    data-text="Inicio"
                    onClick={controller.gotoHeader}
                  >
                    Inicio
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#about"
                    data-text="Sobre Mí"
                    onClick={controller.gotoAbout}
                  >
                    Sobre Mí
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#folio"
                    data-text="Portafolio"
                    onClick={controller.gotoFolio}
                  >
                    Portafolio
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#contact"
                    data-text="Contacto"
                    onClick={controller.gotoContact}
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    data-text="volver"
                    onClick={controller.onCloseNavigationButtonPressed}
                  >
                    <ArrowBackOutlined
                      className="sub-header"
                      style={{ width: "3rem", height: "3rem" }}
                    />
                  </a>
                </li>
              </div>{" "}
            </div>
          </Box>
        </Grid>
      </Slide>
    );
  };
