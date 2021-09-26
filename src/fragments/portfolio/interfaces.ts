export interface PortfolioController {
    /* State */
    example: string;
    /* Events */
    onButtonPressed: () => void;
}

export interface PortfolioFragmentProps {
    useController?: () => PortfolioController;
}
