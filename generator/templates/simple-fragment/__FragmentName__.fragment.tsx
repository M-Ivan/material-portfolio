/* eslint-disable */
// @ts-nocheck
import React from "react";
import { use__FragmentName__Styles } from "fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).styles";
import { __FragmentName__FragmentProps } from "fragments/__FragmentName__(kebabCase)/interfaces";
import { use__FragmentName__Controller } from "fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).controller";

export const __FragmentName__Fragment: React.FC<__FragmentName__FragmentProps> =
  (props) => {
    const { useController = use__FragmentName__Controller } = props;
    const controller = useController();

    const classes = use__FragmentName__Styles();

    // Render
    return <div className={classes.root}>__FragmentName__</div>;
  };
