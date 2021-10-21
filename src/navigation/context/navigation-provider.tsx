import { NavigationContext } from "navigation/context/navigation.context";
import { NavigationType } from "navigation/nav-component/interface";
import React, { useState } from "react";

const NavigationProvider: React.FC = (props) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);
  const [navigationType, setNavigationType] = useState<NavigationType>();

  return (
    <NavigationContext.Provider
      value={{
        isMobileNavigationOpen,
        navigationType,
        setIsMobileNavigationOpen,
        setNavigationType,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
