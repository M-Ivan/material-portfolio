import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { useAnimationContext } from "context/animations.context";
import { DesktopNavBarController } from "navigation/desktop/interfaces";
import { useNavigationContext } from "navigation/context/navigation.context";
import { NavigationType } from "navigation/nav-component/interface";

export const useDesktopNavBarController = (): DesktopNavBarController => {
  /* State */

  const { y: pageYOffset } = useWindowScroll();
  const [isNavBarVisible, setIsNavBarVisible] = useState<boolean>(false);

  const { header, about, folio, contact } = useAnimationContext();
  const { setIsMobileNavigationOpen, setNavigationType } =
    useNavigationContext();

  /* Listeners */
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

  const onMobileNavigationOpen = () => {
    setIsMobileNavigationOpen(true);
  };

  const onNavigationShrink = () => {
    setNavigationType(NavigationType.Mobile);
  };
  const onNavigationExpand = () => {
    setNavigationType(NavigationType.Desktop);
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
    onMobileNavigationOpen,
    onNavigationShrink,
    onNavigationExpand,
  };
};
