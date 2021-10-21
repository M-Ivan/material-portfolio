import { useState } from "react";
import {
  AvailabilityType,
  ContactController,
} from "fragments/contact/interfaces";

export const useContactController = (): ContactController => {
  /* State */

  const [availability, setAvailability] = useState<AvailabilityType>(
    AvailabilityType.PartTime
  );

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
  return { availability, onButtonPressed };
};
