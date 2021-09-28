/* eslint-disable */
// @ts-nocheck
import React from "react";
import { __FragmentName__Styles as classes } from "fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).styles";
import { __FragmentName__FragmentProps } from "fragments/__FragmentName__(kebabCase)/interfaces";
import { use__FragmentName__Controller } from "fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).controller";
import { Box } from "@mui/system";

export const __FragmentName__Fragment: React.FC<__FragmentName__FragmentProps> =
  (props) => {
    const { useController = use__FragmentName__Controller } = props;
    const controller = useController();

    // Render
    return <Box sx={{ ...classes.root }}>__FragmentName__</Box>;
  };
