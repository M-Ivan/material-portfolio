import React from "react";
import {
  SkillsLinearProgress,
  aboutMeStyles as classes,
} from "fragments/about-me/about-me.styles";
import { AboutMeFragmentProps } from "fragments/about-me/interfaces";
import { useAboutMeController } from "fragments/about-me/about-me.controller";
import { useAnimationContext } from "context/animations.context";
import { Box } from "@mui/system";
import { Button, Grid, Slide, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import "fragments/about-me/about-me.scss";
import { skillsWithProgress } from "data/skills";
import { useTranslator } from "tools/view-hooks/translator-hook";
import { mainSkills } from "data/main-skills";
import {
  Build,
  Code,
  EmojiObjectsOutlined,
  VerifiedUser,
} from "@mui/icons-material";
import { CURRENT_JOB_ES, CV_PATH } from "data/constants";

export const AboutMeFragment: React.FC<AboutMeFragmentProps> = (props) => {
  const { useController = useAboutMeController } = props;
  const controller = useController();
  const { translate } = useTranslator();

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
              {translate({ key: "aboutme.title" })}
            </Typography>
          </Grid>
        </Slide>
        <Grid container>
          {mainSkills.es.map((mainSkill, index) => (
            <Grid
              key={mainSkill.title}
              item
              xs={6}
              lg={3}
              sx={{ ...classes.mainSkillContainer }}
            >
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
                      {index == 0 && <Code sx={{ ...classes.skillIcon }} />}
                      {index == 1 && (
                        <VerifiedUser sx={{ ...classes.skillIcon }} />
                      )}
                      {index == 2 && (
                        <EmojiObjectsOutlined sx={{ ...classes.skillIcon }} />
                      )}
                      {index == 3 && <Build sx={{ ...classes.skillIcon }} />}
                    </Grid>
                  </Grid>
                  <h2 style={{ textAlign: "center" }}>{mainSkill.title}</h2>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "center", fontSize: "1.1rem" }}
                  >
                    {mainSkill.description}
                  </Typography>
                </Grid>
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6} sx={{ padding: "1rem" }}>
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
                  <h3>{translate({ key: "aboutme.profile-subtitle" })}</h3>
                  <Typography
                    variant="body2"
                    sx={{ ...classes.skillText, textAlign: "center" }}
                  >
                    {`${translate({
                      key: "aboutme.profile-description",
                    })} ${translate({
                      key: "aboutme.profile-description-extra",
                    })} ${CURRENT_JOB_ES}`}
                  </Typography>
                  <Button href={CV_PATH} sx={{ ...classes.button }} download>
                    <GetAppIcon />
                    {translate({ key: "aboutme.button-downloadCv" })}
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
            <Grid item xs={12} lg={6} sx={{ padding: "1rem" }}>
              <Grid
                container
                alignItems="center"
                sx={{ height: { xs: "70vh", lg: "100%" } }}
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
