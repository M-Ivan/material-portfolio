export interface MobileNavigationController {
  /* State */
  /* Events */
  gotoHeader: () => void;
  gotoAbout: () => void;
  gotoFolio: () => void;
  gotoContact: () => void;
  onCloseNavigationButtonPressed: () => void;
}

export interface MobileNavigationFragmentProps {
  useController?: () => MobileNavigationController;
}
