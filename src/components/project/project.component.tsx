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
import { RalewayTypography } from "theming/global.styles";
import { globalStyles as globalClasses } from "theming/global.styles";
import { useTranslator } from "tools/view-hooks/translator-hook";

export interface ProjectProps {
  title: string;
  stack: string;
  description: string;
  images: string[];
  type: string;
  repoUrl?: string;
  demoUrl?: string;
  animation: boolean;
}

const Project: React.FC<ProjectProps> = (props) => {
  // State
  const { title, stack, description, images, type, repoUrl, demoUrl } = props;

  const { translate } = useTranslator();

  const [showBox, setShowBox] = useState<boolean>(false);
  const [isDetailsModalVisible, setIsDetailsModalVisible] =
    useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

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

  const body = (
    <Grow in={isDetailsModalVisible} {...{ timeout: 400 }}>
      <Grid
        container
        component="div"
        sx={{
          ...classes.modal,
          position: "relative",
        }}
      >
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
                  style={{ height: "100%" }}
                >
                  <IconButton
                    onClick={handleBack}
                    sx={{ ...classes.directionButton, left: "0%" }}
                  >
                    <ArrowBackIos />
                  </IconButton>
                  <IconButton
                    onClick={handleForward}
                    sx={{ ...classes.directionButton, right: "0%" }}
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
                {demoUrl && (
                  <Button
                    href={demoUrl}
                    sx={{ ...classes.modalBtn, position: "relative" }}
                  >
                    {translate({ key: "general.demo" })}
                    <Launch />
                  </Button>
                )}
                {repoUrl && (
                  <Button
                    href={repoUrl}
                    sx={{ ...classes.modalBtn, position: "relative" }}
                  >
                    {translate({ key: "general.repo" })}
                    <GitHub />
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardMedia>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{
            display: "grid",
          }}
        >
          <Grid container direction="column" sx={{ padding: "2rem" }}>
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
          <IconButton
            sx={{
              ...classes.close,
              ...globalClasses.onlyMobile,
            }}
            onClick={() => setIsDetailsModalVisible(!isDetailsModalVisible)}
          >
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </Grow>
  );

  return (
    <Grid container sx={{ height: "100%" }}>
      <Card
        elevation={0}
        onMouseEnter={() => setShowBox(true)}
        onMouseLeave={() => setShowBox(false)}
        sx={classes.root}
      >
        {!showBox ? (
          <Slide direction="up" in={!showBox} {...{ timeout: 500 }}>
            <CardActionArea onClick={() => setShowBox(true)}>
              <CardMedia
                component="img"
                alt={title}
                sx={{ height: "100%" }}
                image={images ? images[0] : undefined}
                title={title}
              />
            </CardActionArea>
          </Slide>
        ) : (
          <Grid container sx={{ ...classes.detailsBox, position: "relative" }}>
            <Fade in={showBox} {...{ timeout: 800 }}>
              <Grid
                item
                xs={12}
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  ...classes.detailsContainer,
                }}
              >
                <Box>
                  <RalewayTypography sx={{ ...classes.nombre }}>
                    {title}
                  </RalewayTypography>
                  <RalewayTypography sx={{ ...classes.tecnologias }}>
                    {stack}
                  </RalewayTypography>
                  <Button
                    onClick={() => setIsDetailsModalVisible(true)}
                    sx={{ ...classes.button }}
                  >
                    {translate({ key: "general.more-info" })} <Subject />
                  </Button>
                </Box>
              </Grid>
            </Fade>
          </Grid>
        )}
      </Card>
      <Modal
        open={isDetailsModalVisible}
        onClose={() => setIsDetailsModalVisible(false)}
      >
        {body}
      </Modal>
    </Grid>
  );
};

export default Project;
