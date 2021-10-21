import { useState } from "react";
import { HeaderController } from "fragments/header/interfaces";
import { useAnimationContext } from "context/animations.context";

export const useHeaderController = (): HeaderController => {
  /* State */
  // Ex. const [count, setCount] = useState(0);
  const [rotate, setRotate] = useState(false);
  const { about } = useAnimationContext();

  console.log("rotate", rotate);

  /* Listeners */
  // Ex. useEffect(() => { onSessionUpdate(); }, [session]);

  /* View Events */
  //Ex. const onIncreaseButtonPressed = () => {}
  const onNavigateToAboutButtonPressed = () => {
    if (!about.current) return;
    window.scrollTo({
      top: about.current.offsetTop * 0.95,
      behavior: "smooth",
    });
  };

  const onMouseHoverAboutButton = () => {
    setRotate(true);
  };

  const onMouseExitAboutButton = () => {
    setRotate(false);
  };

  /* Private Methods */
  //Ex. const increaseCount = () => {}

  // Return state and events
  return {
    rotate,
    onNavigateToAboutButtonPressed,
    onMouseHoverAboutButton,
    onMouseExitAboutButton,
  };
};
