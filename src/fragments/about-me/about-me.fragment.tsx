import React from "react";
import {
  SkillsLinearProgress,
  useAboutMeStyles,
} from "fragments/about-me/about-me.styles";
import { AboutMeFragmentProps } from "fragments/about-me/interfaces";
import { useAboutMeController } from "fragments/about-me/about-me.controller";
import { useAnimationContext } from "context/animations.context";
import { Box } from "@mui/system";
import { Button, Grid, Hidden, Slide } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import CodeIcon from "@mui/icons-material/Code";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import GetAppIcon from "@mui/icons-material/GetApp";

export const AboutMeFragment: React.FC<AboutMeFragmentProps> = (props) => {
  const { useController = useAboutMeController } = props;
  const controller = useController();

  const { about, aboutAnimation } = useAnimationContext();

  const aboutSection: any = about;

  const classes = useAboutMeStyles();

  function ProgressBar(props: any) {
    const { progress } = props;
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <SkillsLinearProgress value={progress} />
        </Box>
        <Box minWidth={35}>
          <h3 style={{ fontFamily: "Work Sans" }}>{progress}%</h3>
        </Box>
      </Box>
    );
  }

  // Render
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      component={"div"}
      ref={aboutSection}
    >
      <Grid container className={classes.aboutme}>
        <Grid item xs={12}>
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
              <h1 className={classes.title}>Sobre mí</h1>
            </Grid>
          </Slide>
          <Grid item xs={12}>
            <Grid container className={classes.skillArea}>
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
                        <CodeIcon className={classes.skillIcon} />
                      </Grid>
                    </Grid>
                    <h2>Clean Coder</h2>
                    <p className={classes.skillText}>
                      Fiel a las revisiones de código. <br />
                      Es escencial dejar todo lo mas facil de entender posible.
                    </p>
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
                        <VerifiedUserIcon className={classes.skillIcon} />
                      </Grid>
                    </Grid>
                    <h2 style={{ textAlign: "center" }}>Mentalidad Win/Win</h2>
                    <p className={classes.skillText}>
                      Se profundiza lo que se sabe.
                      <br />Y lo que no, se aprende.
                    </p>
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
                        <EmojiObjectsOutlinedIcon
                          className={classes.skillIcon}
                        />
                      </Grid>
                    </Grid>
                    <h2>Intuición</h2>
                    <p className={classes.skillText}>
                      Partidario de la filosofía UX: <br />
                      cuanto mas facil de usar, mejor.
                    </p>
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
                        <BuildIcon className={classes.skillIcon} />
                      </Grid>
                    </Grid>
                    <h2>Dedicación</h2>
                    <p className={classes.skillText}>
                      En constante aprendizaje para mejorarme a mi mismo cada
                      dia.
                    </p>
                  </Grid>
                </Slide>
              </Grid>
              <Grid item xs={12} lg={6}>
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
                    {
                      //   <Avatar
                      //   src="/assets/profile.jpg"
                      //   className={classes.avatar}
                      // />
                    }
                    <Grid
                      item
                      xs={12}
                      lg={9}
                      className={classes.descriptionText}
                    >
                      <h3>¿Quién soy?</h3>
                      <p className={classes.skillText}>
                        Soy un web developer de 21 años con gran pasión por la
                        creación de aplicaciones funcionales y dinámicas. Me
                        gustan los desafios por lo que busco siempre superarme
                        dando lo mejor de mí en cada situación.
                      </p>{" "}
                      <Button
                        href="/cv/CV2.pdf"
                        className={classes.button}
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
                <Grid item xs={12} lg={6} style={{ alignSelf: "center" }}>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      HTML
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      CSS
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>JavaScript</Hidden>
                      <Hidden mdUp>JS</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      React
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={90} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      NodeJS
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={50} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>Diseño UI</Hidden>
                      <Hidden mdUp>UI</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={70} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>PhotoShop</Hidden>
                      <Hidden mdUp>Ps</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={60} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>Deployment</Hidden>
                      <Hidden mdUp>Deploy</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={40} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      DevOps
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={30} />
                    </Grid>
                  </Grid>
                </Grid>
              </Slide>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
