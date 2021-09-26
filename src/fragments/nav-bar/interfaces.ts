import { SectionData } from "context/animations.context";
import { MutableRefObject } from "react";

export interface NavBarController {
  /* State */
  header: MutableRefObject<SectionData | null>;
  about: MutableRefObject<SectionData | null>;
  folio: MutableRefObject<SectionData | null>;
  contact: MutableRefObject<SectionData | null>;
  isNavBarVisible: boolean;

  /* Events */
  gotoHeader: () => void;
  gotoAbout: () => void;
  gotoFolio: () => void;
  gotoContact: () => void;
}

export interface NavBarFragmentProps {
  useController?: () => NavBarController;
}
