export interface HeaderController {
  /* State */
  rotate: boolean;
  /* Events */
  onNavigateToAboutButtonPressed: () => void;
  onMouseHoverAboutButton: () => void;
  onMouseExitAboutButton: () => void;
}

export interface HeaderFragmentProps {
  useController?: () => HeaderController;
}
