import React, {
  useContext,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";

export interface SectionData {
  offsetTop: number;
}

// MOVER ACA TODO LO QUE SEA ANIMACIONES.
export interface AnimationContextInterface {
  header: MutableRefObject<SectionData | null>;
  about: MutableRefObject<SectionData | null>;
  folio: MutableRefObject<SectionData | null>;
  contact: MutableRefObject<SectionData | null>;
  headerAnimation: boolean;
  aboutAnimation: boolean;
  portfolioAnimation: boolean;
  contactAnimation: boolean;
  setHeaderAnimation: Dispatch<SetStateAction<boolean>>;
  setAboutAnimation: Dispatch<SetStateAction<boolean>>;
  setPortfolioAnimation: Dispatch<SetStateAction<boolean>>;
  setContactAnimation: Dispatch<SetStateAction<boolean>>;
}

export const AnimationContext = React.createContext<AnimationContextInterface>({
  header: { current: null },
  about: { current: null },
  folio: { current: null },
  contact: { current: null },
  headerAnimation: false,
  aboutAnimation: false,
  portfolioAnimation: false,
  contactAnimation: false,
  setHeaderAnimation: () => {
    //
  },
  setAboutAnimation: () => {
    //
  },
  setPortfolioAnimation: () => {
    //
  },
  setContactAnimation: () => {
    //
  },
});

export const useAnimationContext = (): AnimationContextInterface => {
  const store = useContext(AnimationContext);
  return store;
};
