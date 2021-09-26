import { useState } from "react";
import { NavBarController } from "fragments/nav-bar/interfaces";

export const useNavBarController =
  (): /* <--Dependency Injections  like services hooks */ NavBarController => {
    /* State */
    // Ex. const [count, setCount] = useState(0);
    const [example, setExample] = useState("example");

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
