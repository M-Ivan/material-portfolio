

import React from "react";
import { usePortfolioStyles } from "fragments/portfolio/portfolio.styles";
import { PortfolioFragmentProps } from "fragments/portfolio/interfaces";
import { usePortfolioController } from "fragments/portfolio/portfolio.controller";

export const PortfolioFragment: React.FC<PortfolioFragmentProps> =
  (props) => {
    const { useController = usePortfolioController } = props;
    const controller = useController();

    const classes = usePortfolioStyles();

    // Render
    return <div className={classes.root}>Portfolio</div>;
  };
