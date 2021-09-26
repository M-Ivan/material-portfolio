

import { useState } from 'react';
import { ContactController } from 'fragments/contact/interfaces';

export const useContactController = (): /* <--Dependency Injections  like services hooks */
ContactController => {
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
