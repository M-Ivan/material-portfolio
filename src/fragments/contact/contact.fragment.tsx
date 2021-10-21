import React from "react";
import { contactStyles as classes } from "fragments/contact/contact.styles";
import {
  AvailabilityType,
  ContactFragmentProps,
} from "fragments/contact/interfaces";
import { useContactController } from "fragments/contact/contact.controller";
import {
  Button,
  Collapse,
  Grid,
  Grow,
  IconButton,
  Link,
  Slide,
  Typography,
} from "@mui/material";
import { useAnimationContext } from "context/animations.context";
import { RalewayTypography } from "global.styles";
import {
  Call,
  Email,
  GitHub,
  LaunchOutlined,
  LinkedIn,
} from "@mui/icons-material";
import { Box } from "@mui/system";

export const ContactFragment: React.FC<ContactFragmentProps> = (props) => {
  const { useController = useContactController } = props;
  const controller = useController();

  const { contact, contactAnimation } = useAnimationContext();
  const contactSection: any = contact;

  // Render
  return (
    <Grid
      container
      alignItems="flex-end"
      sx={{ ...classes.root }}
      ref={contactSection}
    >
      <Grow
        in={contactAnimation}
        {...(contactAnimation ? { timeout: 1000 } : {})}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              ...classes.title,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contacto
          </Typography>
        </Grid>
      </Grow>
      <Grid container sx={{ ...classes.contact, textAlign: "center" }}>
        <Grow
          in={contactAnimation}
          {...(contactAnimation ? { timeout: 1000 } : {})}
        >
          <Grid container sx={classes.card}>
            <Grid item xs={12}>
              <RalewayTypography variant="h6" sx={classes.cardText}>
                {" "}
                En este momento me encuentro:
              </RalewayTypography>
            </Grid>
            <Grid item xs={12}>
              <RalewayTypography
                variant="subtitle1"
                sx={{
                  ...classes.available,
                  color:
                    controller.availability === AvailabilityType.FullTime
                      ? "#00b62e"
                      : controller.availability === AvailabilityType.PartTime
                      ? "#ffbb00"
                      : "#ff0000",
                  textTransform: "uppercase",
                }}
              >
                {controller.availability}
              </RalewayTypography>{" "}
            </Grid>
          </Grid>
        </Grow>
        <Slide
          direction="left"
          in={contactAnimation}
          {...(contactAnimation ? { timeout: 1000 } : {})}
        >
          <Grid item xs={12}>
            <RalewayTypography variant="h4" sx={classes.subtitle}>
              Tenés una consulta o querés que trabajemos juntos?
            </RalewayTypography>
          </Grid>
        </Slide>

        <Grid item xs={12} lg={3}>
          <Collapse
            in={contactAnimation}
            {...(contactAnimation ? { timeout: 1000 } : {})}
          >
            <Email sx={classes.typeIcon} />{" "}
            <RalewayTypography variant="subtitle1">
              <Link
                id="mail"
                sx={classes.contactLink}
                underline="none"
                href="mailto:MiragayaIvan@hotmail.com"
              >
                <strong>MiragayaIvan@hotmail.com</strong>
              </Link>
            </RalewayTypography>
          </Collapse>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Collapse
            in={contactAnimation}
            {...(contactAnimation ? { timeout: 1000 } : {})}
          >
            <Call sx={classes.typeIcon} />
            <Typography variant="subtitle1" component="h3">
              <Link
                sx={classes.contactLink}
                underline="none"
                href="tel:+541127677832"
              >
                <strong>11-2767-7832</strong>{" "}
              </Link>{" "}
            </Typography>{" "}
          </Collapse>
        </Grid>
        <Slide
          direction="right"
          in={contactAnimation}
          {...(contactAnimation ? { timeout: 1000 } : {})}
        >
          <Grid item xs={12}>
            <Button href="mailto:MiragayaIvan@hotmail.com" sx={classes.button}>
              Creemos algo increible{" "}
              <LaunchOutlined style={{ marginLeft: "1vw" }} />
            </Button>
          </Grid>
        </Slide>
      </Grid>
      <Grid container sx={{ ...classes.footer }}>
        <IconButton
          href="https://www.linkedin.com/in/miragaya-ivan/"
          sx={classes.mediaButton}
        >
          {" "}
          <LinkedIn sx={classes.icon} />
        </IconButton>{" "}
        <IconButton href="https://github.com/m-ivan" sx={classes.mediaButton}>
          <GitHub sx={classes.icon} />
        </IconButton>{" "}
        <Grid item xs={12}>
          <Box>
            <RalewayTypography
              variant="subtitle1"
              sx={{
                ...classes.watermark,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Iván Miragaya
              <span style={classes.watermarkColor}>©2021</span>
            </RalewayTypography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
