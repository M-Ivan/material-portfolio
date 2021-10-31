import { useState } from "react";
import {
  AvailabilityType,
  ContactController,
  SendMailFormInterface,
} from "fragments/contact/interfaces";
import emailjs, { init } from "emailjs-com";
import { useForm } from "react-hook-form";
init(process.env.REACT_APP_EMAILJS_API_USER_ID!);

export const useContactController = (form = useForm()): ContactController => {
  /* State */

  const [availability, setAvailability] = useState<AvailabilityType>(
    AvailabilityType.PartTime
  );
  const [isSuccessNotificacionVisible, setIsSuccessNotificacionVisible] =
    useState(false);
  const [isErrorNotificacionVisible, setIsErrorNotificacionVisible] =
    useState(false);

  /* Listeners */

  /* View Events */
  const onSendContactForm = (data: unknown, e) => {
    e.preventDefault();
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    ) {
      return;
    }
    const input = data as SendMailFormInterface;

    const templateParams = {
      form_name: input.name,
      form_email: input.email,
      form_subject: input.subject,
      form_message: input.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          e.target.reset();
          setIsSuccessNotificacionVisible(true);
        },
        function (err) {
          console.log("FAILED...", err);
          setIsErrorNotificacionVisible(true);
        }
      );
  };

  const onCloseNotification = () => {
    setIsSuccessNotificacionVisible(false);
    setIsErrorNotificacionVisible(false);
  };

  /* Private Methods */
  //Ex. const increaseCount = () => {}

  // Return state and events
  return {
    availability,
    isSuccessNotificacionVisible,
    isErrorNotificacionVisible,
    onSendContactForm,
    onCloseNotification,
  };
};
