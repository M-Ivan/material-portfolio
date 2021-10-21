import { useAnimationContext } from "context/animations.context";
import { useNavigationContext } from "navigation/context/navigation.context";
import { MobileNavigationController } from "navigation/mobile/interfaces";

export const useMobileNavigationController =
  (): /* <--Dependency Injections  like services hooks */
  MobileNavigationController => {
    /* State */
    // Ex. const [count, setCount] = useState(0);

    const { about, header, folio, contact } = useAnimationContext();
    const { setIsMobileNavigationOpen } = useNavigationContext();

    /* Listeners */
    // Ex. useEffect(() => { onSessionUpdate(); }, [session]);

    /* View Events */

    const gotoHeader = () => {
      window.scrollTo({ top: header.current?.offsetTop, behavior: "smooth" });
      setIsMobileNavigationOpen(false);
    };
    const gotoAbout = () => {
      if (!about.current) return;

      window.scrollTo({
        top: about.current?.offsetTop * 0.95,
        behavior: "smooth",
      });
      setIsMobileNavigationOpen(false);
    };
    const gotoFolio = () => {
      if (!folio.current) return;

      window.scrollTo({
        top: folio.current?.offsetTop * 0.99,
        behavior: "smooth",
      });
      setIsMobileNavigationOpen(false);
    };
    const gotoContact = () => {
      window.scrollTo({
        top: contact.current?.offsetTop,
        behavior: "smooth",
      });
      setIsMobileNavigationOpen(false);
    };

    const onCloseNavigationButtonPressed = () => {
      setIsMobileNavigationOpen(false);
    };

    /* Private Methods */
    //Ex. const increaseCount = () => {}

    // Return state and events
    return {
      gotoHeader,
      gotoAbout,
      gotoFolio,
      gotoContact,
      onCloseNavigationButtonPressed,
    };
  };
