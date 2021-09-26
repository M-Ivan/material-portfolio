export interface NavBarController {
    /* State */
    example: string;
    /* Events */
    onButtonPressed: () => void;
}

export interface NavBarFragmentProps {
    useController?: () => NavBarController;
}
