import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Fade,
  Grid,
  Grow,
  IconButton,
  Modal,
  Slide,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  GitHub,
  Launch,
  Subject,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { projectStyles as classes } from "components/project/project.styles";
import { RalewayTypography } from "global.styles";

export interface ProjectProps {
  title: string;
  stack: string;
  description: string;
  images: string[];
  type: string;
  repoUrl: string;
  demoUrl: string;
  animation: boolean;
}

const Project: React.FC<ProjectProps> = (props) => {
  // State
  const {
    title,
    stack,
    description,
    images,
    type,
    repoUrl,
    demoUrl,
    animation,
  } = props;

  const [showBox, setShowBox] = useState<boolean>(false);
  const [isDetailsModalVisible, setIsDetailsModalVisible] =
    useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  // TODO: Copiar el modal del otro proyecto

  const handleForward = () => {
    setCurrent(current + 1);
    if (current >= images.length - 1) {
      setCurrent(0);
    }
  };
  const handleBack = () => {
    setCurrent(current - 1);
    if (current <= 0) {
      setCurrent(images.length - 1);
    }
  };

  console.log("current", current);

  const body = (
    <Grow in={isDetailsModalVisible} {...{ timeout: 400 }}>
      <Grid
        container
        justifyContent="center"
        component="div"
        sx={{
          ...classes.modal,
          // position: "absolute",
        }}
      >
        <IconButton
          sx={{ ...classes.close, position: "absolute" }}
          onClick={() => setIsDetailsModalVisible(!isDetailsModalVisible)}
        >
          <Close />
        </IconButton>
        <Grid item xs={12} md={9}>
          <CardMedia
            component="div"
            image={images[current]}
            title="Project 2"
            sx={{ ...classes.img }}
          >
            <Grid container style={{ height: "100%" }}>
              {images.length > 1 && (
                <Grid
                  container
                  component="div"
                  justifyContent="space-between"
                  style={{ height: "90%" }}
                >
                  <IconButton onClick={handleBack} sx={{ ...classes.back }}>
                    <ArrowBackIos />
                  </IconButton>
                  <IconButton
                    onClick={handleForward}
                    sx={{ ...classes.forward }}
                  >
                    <ArrowForwardIos />
                  </IconButton>
                </Grid>
              )}
              <Grid
                container
                component={"div"}
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Button
                  href={demoUrl}
                  sx={{ ...classes.modalBtn, position: "relative" }}
                >
                  Demo
                  <Launch />
                </Button>
                <Button
                  href={repoUrl}
                  sx={{ ...classes.modalBtn, position: "relative" }}
                >
                  Repo
                  <GitHub />
                </Button>
              </Grid>
            </Grid>
          </CardMedia>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{
            padding: "2rem",
          }}
        >
          <RalewayTypography
            variant="h4"
            gutterBottom
            sx={{ ...classes.nombre }}
          >
            {title}
          </RalewayTypography>
          <RalewayTypography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{
              fontWeight: 600,
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            {type}
          </RalewayTypography>
          <Divider />

          <RalewayTypography variant="body1">{description}</RalewayTypography>
        </Grid>
      </Grid>
    </Grow>
  );

  return (
    <Grow in={animation}>
      <Grid container>
        <Card
          elevation={0}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
          sx={{ ...classes.root }}
        >
          {!showBox ? (
            <Slide direction="up" in={!showBox} {...{ timeout: 500 }}>
              <CardActionArea onClick={() => setShowBox(true)}>
                <CardMedia
                  // Poner una imagen que respete las dimensiones siempre
                  component="img"
                  alt={title}
                  height="300"
                  width="400"
                  image={images ? images[0] : undefined}
                  title={title}
                />
              </CardActionArea>
            </Slide>
          ) : (
            <Fade in={showBox} {...{ timeout: 800 }}>
              <Grid container sx={{ ...classes.detailsBox }}>
                <Grid item xs={12}>
                  <Box sx={{ ...classes.nameBox, textAlign: "center" }}>
                    <span style={{ ...classes.nombre }}>{title}</span> <br />
                    <span style={{ ...classes.tecnologias }}>{stack}</span>
                  </Box>
                  <Grid component="div" container justifyContent="center">
                    <Button
                      onClick={() => setIsDetailsModalVisible(true)}
                      sx={{ ...classes.button }}
                    >
                      Más Info <Subject />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Fade>
          )}
        </Card>
        <Modal
          open={isDetailsModalVisible}
          onClose={() => setIsDetailsModalVisible(false)}
        >
          {body}
        </Modal>
      </Grid>
    </Grow>
  );
};

export default Project;
