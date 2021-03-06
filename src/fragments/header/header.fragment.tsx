import React from "react";
import { HeaderStyles as classes } from "fragments/header/header.styles";
import { HeaderFragmentProps } from "fragments/header/interfaces";
import { useHeaderController } from "fragments/header/header.controller";
import { Box } from "@mui/system";
import { Button, Grid, Slide } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "fragments/header/header.scss";
import { useAnimationContext } from "context/animations.context";
import { useTranslator } from "tools/view-hooks/translator-hook";

export const HeaderFragment: React.FC<HeaderFragmentProps> = (props) => {
  const { useController = useHeaderController } = props;
  const controller = useController();

  const { header, headerAnimation } = useAnimationContext();
  const headerSection: any = header;
  const { translate } = useTranslator();

  // Render
  return (
    <Grid
      container
      sx={{ ...classes.root }}
      component={"div"}
      ref={headerSection}
    >
      <Grid container sx={{ ...classes.welcomeText }}>
        <Grid item xs={12}>
          <Slide direction="left" in={headerAnimation} {...{ timeout: 2000 }}>
            <Box>
              <h1 className="header accerleration">
                {translate({ key: "header.title" })}
              </h1>
            </Box>
          </Slide>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ transform: "skewY(4.5deg)", marginLeft: "5%" }}
        >
          <Slide direction="right" in={headerAnimation} {...{ timeout: 2000 }}>
            <Box>
              <h2 className="sub-header accerleration">
                {translate({ key: "header.subtitle" })}
              </h2>
            </Box>
          </Slide>{" "}
        </Grid>

        <Slide direction="right" in={headerAnimation} {...{ timeout: 2000 }}>
          <Box
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              onMouseEnter={controller.onMouseHoverAboutButton}
              onMouseLeave={controller.onMouseExitAboutButton}
              size="large"
              href="#about"
              variant="outlined"
              onClick={controller.onNavigateToAboutButtonPressed}
              sx={{ ...classes.button }}
            >
              {translate({ key: "header.button-about" })}
              <ArrowForwardIcon
                sx={
                  controller.rotate
                    ? { ...classes.iconAnim }
                    : { ...classes.icon }
                }
              />
            </Button>{" "}
          </Box>
        </Slide>
      </Grid>
    </Grid>
  );
};
