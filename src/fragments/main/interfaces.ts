export interface MainController {
    /* State */
    example: string;
    /* Events */
    onButtonPressed: () => void;
}

export interface MainFragmentProps {
    useController?: () => MainController;
}
