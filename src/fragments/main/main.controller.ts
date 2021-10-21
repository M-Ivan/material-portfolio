import { useEffect, useLayoutEffect, useState } from "react";
import { MainController } from "fragments/main/interfaces";
import { useAnimationContext } from "context/animations.context";
import { useWindowScroll } from "react-use";

export const useMainController = (): MainController => {
  /* State */
  // Ex. const [count, setCount] = useState(0);
  const [isScrollTopButtonVisible, setIsScrollTopButtonVisible] =
    useState<boolean>(false);

  const {
    header,
    about,
    folio,
    contact,
    setContactAnimation,
    setAboutAnimation,
    setHeaderAnimation,
    setPortfolioAnimation,
  } = useAnimationContext();

  const { y: pageYOffset } = useWindowScroll();

  /* Listeners */
  useLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset === 0) {
        setAboutAnimation(false);
        setPortfolioAnimation(false);
        setContactAnimation(false);
      }
      if (about.current && window.pageYOffset < about.current.offsetTop) {
        setHeaderAnimation(true);
      }
      if (
        about.current &&
        window.pageYOffset >= about.current.offsetTop * 0.9
      ) {
        setAboutAnimation(true);
      }
      if (
        folio.current &&
        window.pageYOffset >= folio.current.offsetTop * 0.9
      ) {
        setPortfolioAnimation(true);
        setHeaderAnimation(false);
      }
      if (
        contact.current &&
        window.pageYOffset > contact.current.offsetTop * 0.9
      ) {
        setContactAnimation(true);
        setAboutAnimation(false);
        setPortfolioAnimation(false);
      }
    }
    updatePosition();

    window.addEventListener("scroll", updatePosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [about, header, folio, contact]);

  useEffect(() => {
    if (about.current && pageYOffset >= about.current.offsetTop) {
      setIsScrollTopButtonVisible(true);
    } else {
      setIsScrollTopButtonVisible(false);
    }
  }, [pageYOffset]);

  /* View Events */
  //Ex. const onIncreaseButtonPressed = () => {}
  const onScrollTopButtonPressed = () => {
    window.scrollTo({ top: header.current?.offsetTop, behavior: "smooth" });
  };

  /* Private Methods */
  //Ex. const increaseCount = () => {}

  // Return state and events
  return { isScrollTopButtonVisible, onScrollTopButtonPressed };
};
