import React from "react";
import {
  SkillsLinearProgress,
  aboutMeStyles as classes,
} from "fragments/about-me/about-me.styles";
import { AboutMeFragmentProps } from "fragments/about-me/interfaces";
import { useAboutMeController } from "fragments/about-me/about-me.controller";
import { useAnimationContext } from "context/animations.context";
import { Box } from "@mui/system";
import { Button, Grid, Hidden, Slide, Typography } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import CodeIcon from "@mui/icons-material/Code";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import GetAppIcon from "@mui/icons-material/GetApp";
import "fragments/about-me/about-me.scss";
import { skillsWithProgress } from "data/skills";

export const AboutMeFragment: React.FC<AboutMeFragmentProps> = (props) => {
  const { useController = useAboutMeController } = props;
  const controller = useController();

  const { about, aboutAnimation } = useAnimationContext();

  const aboutSection: any = about;

  function ProgressBar(props: any) {
    const { progress } = props;
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <SkillsLinearProgress variant="determinate" value={progress} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" style={{ fontFamily: "Work Sans" }}>
            {progress}%
          </Typography>
        </Box>
      </Box>
    );
  }

  // Render
  return (
    <Grid
      container
      justifyContent="center"
      component={"div"}
      ref={aboutSection}
      sx={{
        ...classes.root,
      }}
    >
      <Grid
        container
        sx={{
          ...classes.aboutme,
          padding: { md: "1rem 10% 3rem 10%" },
        }}
      >
        <Slide
          direction="left"
          in={aboutAnimation}
          {...(aboutAnimation ? { timeout: 1000 } : {})}
        >
          <Grid
            container
            component={"div"}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              component={"div"}
              sx={{
                ...classes.title,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Sobre mí
            </Typography>
          </Grid>
        </Slide>
        <Grid container sx={{ ...classes.skillArea }}>
          <Grid item xs={6} lg={3}>
            <Slide
              direction="right"
              in={aboutAnimation}
              {...(aboutAnimation ? { timeout: 1000 } : {})}
            >
              <Grid container alignItems="center" direction="column">
                <Grid className="hexagon-skill">
                  <Grid
                    container
                    component={"div"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CodeIcon sx={{ ...classes.skillIcon }} />
                  </Grid>
                </Grid>
                <h2>Clean Coder</h2>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", fontSize: "1.1rem" }}
                >
                  Fiel a las revisiones de código. <br />
                  Es escencial dejar todo lo mas facil de entender posible.
                </Typography>
              </Grid>
            </Slide>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Slide
              direction="right"
              in={aboutAnimation}
              {...(aboutAnimation ? { timeout: 1000 } : {})}
            >
              <Grid container alignItems="center" direction="column">
                <Grid className="hexagon-skill">
                  <Grid
                    container
                    component={"div"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <VerifiedUserIcon sx={{ ...classes.skillIcon }} />
                  </Grid>
                </Grid>
                <h2 style={{ textAlign: "center" }}>Mentalidad Win/Win</h2>
                <Typography
                  variant="body2"
                  sx={{ ...classes.skillText, textAlign: "center" }}
                >
                  Se profundiza lo que se sabe.
                  <br />Y lo que no, se aprende.
                </Typography>
              </Grid>
            </Slide>
          </Grid>{" "}
          <Grid item xs={6} lg={3}>
            <Slide
              direction="right"
              in={aboutAnimation}
              {...(aboutAnimation ? { timeout: 1000 } : {})}
            >
              <Grid container alignItems="center" direction="column">
                <Grid className="hexagon-skill">
                  <Grid
                    container
                    component={"div"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <EmojiObjectsOutlinedIcon sx={{ ...classes.skillIcon }} />
                  </Grid>
                </Grid>
                <h2>Intuición</h2>
                <Typography
                  variant="body2"
                  sx={{ ...classes.skillText, textAlign: "center" }}
                >
                  Partidario de la filosofía UX: <br />
                  cuanto mas facil de usar, mejor.
                </Typography>
              </Grid>
            </Slide>
          </Grid>{" "}
          <Grid item xs={6} lg={3}>
            <Slide
              direction="right"
              in={aboutAnimation}
              {...(aboutAnimation ? { timeout: 1000 } : {})}
            >
              <Grid container alignItems="center" direction="column">
                <Grid className="hexagon-skill">
                  <Grid
                    container
                    component={"div"}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BuildIcon sx={{ ...classes.skillIcon }} />
                  </Grid>
                </Grid>
                <h2>Dedicación</h2>
                <Typography
                  variant="body2"
                  sx={{ ...classes.skillText, textAlign: "center" }}
                >
                  En constante aprendizaje para mejorarme a mi mismo cada dia.
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ padding: "3rem 1rem" }}>
            <Slide
              direction="right"
              in={aboutAnimation}
              {...(aboutAnimation ? { timeout: 1000 } : {})}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <div className={`hexagon`}>
                  <div className="hexTop"></div>
                  <div className="hexBottom"></div>
                </div>

                <Grid
                  item
                  xs={12}
                  lg={9}
                  sx={{ ...classes.descriptionText, textAlign: "center" }}
                >
                  <h3>¿Quién soy?</h3>
                  <Typography
                    variant="body2"
                    sx={{ ...classes.skillText, textAlign: "center" }}
                  >
                    Soy un web developer de 21 años con gran pasión por la
                    creación de aplicaciones funcionales y dinámicas. Me gustan
                    los desafios por lo que busco siempre superarme dando lo
                    mejor de mí en cada situación.
                  </Typography>
                  <Button
                    href="/cv/CV2.pdf"
                    sx={{ ...classes.button }}
                    download
                  >
                    <GetAppIcon />
                    <Hidden smDown>Descargar</Hidden> CV
                  </Button>
                </Grid>
              </Grid>
            </Slide>
          </Grid>
          <Slide
            direction="left"
            in={aboutAnimation}
            {...(aboutAnimation ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} lg={6} sx={{ padding: "3rem 1rem" }}>
              <Grid
                container
                alignItems="center"
                sx={{ height: { xs: "50vh", lg: "100%" } }}
              >
                {skillsWithProgress.map((skill) => (
                  <Grid key={skill.title} container alignItems="center">
                    <Grid
                      item
                      xs={3}
                      sx={{ ...classes.progressBox, fontSize: { xs: "9pt" } }}
                    >
                      {skill.title}
                    </Grid>
                    <Grid item xs={9}>
                      <ProgressBar progress={skill.progress} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};
