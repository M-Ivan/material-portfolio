import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavBarController, SectionData } from "fragments/nav-bar/interfaces";
import { useWindowScroll } from "react-use";

export const useNavBarController = (): NavBarController => {
  /* State */

  const { y: pageYOffset } = useWindowScroll();
  const [isNavBarVisible, setIsNavBarVisible] = useState<boolean>(false);

  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState(false);
  const [portfolioAnimation, setPortfolioAnimation] = useState(false);
  const [contactAnimation, setContactAnimation] = useState(false);

  const handleParentCallback = () => {
    // setOpen((prev) => !prev);
  };

  /* Listeners */
  useLayoutEffect(() => {
    function updatePosition() {
      if (header.current && about.current && folio.current && contact.current) {
        if (window.pageYOffset === 0) {
          setAboutAnimation(false);
          setPortfolioAnimation(false);
          setContactAnimation(false);
        }
        if (about && window.pageYOffset < about.current.offsetTop) {
          setHeaderAnimation(true);
        }
        if (
          window.pageYOffset < folio.current.offsetTop &&
          window.pageYOffset >= about.current.offsetTop * 0.9
        ) {
          setAboutAnimation(true);
        }
        if (
          window.pageYOffset < contact.current.offsetTop &&
          window.pageYOffset >= folio.current.offsetTop * 0.9
        ) {
          setPortfolioAnimation(true);
          setHeaderAnimation(false);
        }
        if (contact && window.pageYOffset > contact.current.offsetTop * 0.9) {
          setContactAnimation(true);
          setAboutAnimation(false);
          setPortfolioAnimation(false);
        }
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, [about, header, folio, contact]);

  useEffect(() => {
    if (about.current && pageYOffset >= about.current.offsetTop) {
      setIsNavBarVisible(true);
    } else {
      setIsNavBarVisible(false);
    }
  }, [pageYOffset]);

  /* View Events */
  const gotoHeader = () => {
    window.scrollTo({ top: header.current?.offsetTop, behavior: "smooth" });
  };
  const gotoAbout = () => {
    if (!about.current) return;

    window.scrollTo({
      top: about.current?.offsetTop * 0.95,
      behavior: "smooth",
    });
  };
  const gotoFolio = () => {
    if (!folio.current) return;

    window.scrollTo({
      top: folio.current?.offsetTop * 0.99,
      behavior: "smooth",
    });
  };
  const gotoContact = () => {
    window.scrollTo({
      top: contact.current?.offsetTop,
      behavior: "smooth",
    });
  };

  /* Private Methods */

  // Return state and events
  return {
    header,
    about,
    folio,
    contact,
    isNavBarVisible,
    gotoHeader,
    gotoAbout,
    gotoFolio,
    gotoContact,
  };
};
