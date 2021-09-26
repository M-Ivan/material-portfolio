

import React from "react";
import { useContactStyles } from "fragments/contact/contact.styles";
import { ContactFragmentProps } from "fragments/contact/interfaces";
import { useContactController } from "fragments/contact/contact.controller";

export const ContactFragment: React.FC<ContactFragmentProps> =
  (props) => {
    const { useController = useContactController } = props;
    const controller = useController();

    const classes = useContactStyles();

    // Render
    return <div className={classes.root}>Contact</div>;
  };
