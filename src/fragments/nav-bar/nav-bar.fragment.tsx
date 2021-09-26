import React from "react";
import { useNavBarStyles } from "fragments/nav-bar/nav-bar.styles";
import { NavBarFragmentProps } from "fragments/nav-bar/interfaces";
import { useNavBarController } from "fragments/nav-bar/nav-bar.controller";

export const NavBarFragment: React.FC<NavBarFragmentProps> = (props) => {
  const { useController = useNavBarController } = props;
  const controller = useController();

  // Render
  return <div className={"nav-bar"}>NavBar</div>;
};
