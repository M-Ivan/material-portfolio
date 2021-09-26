

import { useState } from 'react';
import { PortfolioController } from 'fragments/portfolio/interfaces';

export const usePortfolioController = (): /* <--Dependency Injections  like services hooks */
PortfolioController => {
    /* State */
    // Ex. const [count, setCount] = useState(0);
    const [example, setExample] = useState('example');

    /* Listeners */
    // Ex. useEffect(() => { onSessionUpdate(); }, [session]);

    /* View Events */
    //Ex. const onIncreaseButtonPressed = () => {}
    const onButtonPressed = () => {
        // Example event
    };

    /* Private Methods */
    //Ex. const increaseCount = () => {}

    // Return state and events
    return { example, onButtonPressed };
};
