import { NavigationType } from "navigation/nav-component/interface";
import React, { useContext } from "react";

export interface SectionData {
  offsetTop: number;
}

// MOVER ACA TODO LO QUE SEA ANIMACIONES.
export interface NavigationContextInterface {
  isMobileNavigationOpen: boolean;
  navigationType?: NavigationType;
  setIsMobileNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNavigationType: React.Dispatch<
    React.SetStateAction<NavigationType | undefined>
  >;
}

export const NavigationContext =
  React.createContext<NavigationContextInterface>({
    isMobileNavigationOpen: false,
    setIsMobileNavigationOpen: () => {
      //
    },
    setNavigationType: () => {
      //
    },
  });

export const useNavigationContext = (): NavigationContextInterface => {
  const store = useContext(NavigationContext);
  return store;
};
