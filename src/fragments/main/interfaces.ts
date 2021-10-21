export interface MainController {
  /* State */
  isScrollTopButtonVisible: boolean;
  /* Events */
  onScrollTopButtonPressed: () => void;
}

export interface MainFragmentProps {
  useController?: () => MainController;
}
