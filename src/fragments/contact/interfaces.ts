export interface ContactController {
    /* State */
    example: string;
    /* Events */
    onButtonPressed: () => void;
}

export interface ContactFragmentProps {
    useController?: () => ContactController;
}
