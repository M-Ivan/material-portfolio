import React from "react";
import { portfolioStyles as classes } from "fragments/portfolio/portfolio.styles";
import { PortfolioFragmentProps } from "fragments/portfolio/interfaces";
import { usePortfolioController } from "fragments/portfolio/portfolio.controller";
import { Grid, Grow, Slide, Typography } from "@mui/material";
import Project from "components/project/project.component";
import { projects } from "data/projects";
import { useAnimationContext } from "context/animations.context";
import { useTranslator } from "tools/view-hooks/translator-hook";

export const PortfolioFragment: React.FC<PortfolioFragmentProps> = (props) => {
  const { useController = usePortfolioController } = props;
  const controller = useController();
  const { translate } = useTranslator();
  const { portfolioAnimation, folio } = useAnimationContext();
  const folioSection: any = folio;

  // Render
  return (
    <Grid
      container
      sx={{ ...classes.root }}
      justifyContent="center"
      ref={folioSection}
    >
      <Grid container sx={{ ...classes.portafolio }}>
        {/* <Hidden mdUp>
          <DetailsMobile />
        </Hidden> */}
        <Grid item xs={12}>
          <Slide
            direction="left"
            in={portfolioAnimation}
            {...(portfolioAnimation ? { timeout: 1000 } : {})}
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
                {translate({ key: "portfolio.title" })}
              </Typography>
            </Grid>
          </Slide>
        </Grid>
        <Grid item xs={12} id="portfolioArea" sx={classes.proyectAreaBox}>
          <Grid container sx={classes.proyectArea}>
            {projects.map((project) => (
              <Grid key={project.title} item xs={12} md={6}>
                <Project
                  animation={portfolioAnimation}
                  title={project.title}
                  images={project.images}
                  stack={project.stack}
                  description={project.description}
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                  type={project.type}
                />
              </Grid>
            ))}
          </Grid>{" "}
        </Grid>{" "}
      </Grid>
    </Grid>
  );
};
