export interface AboutMeController {
    /* State */
    example: string;
    /* Events */
    onButtonPressed: () => void;
}

export interface AboutMeFragmentProps {
    useController?: () => AboutMeController;
}
