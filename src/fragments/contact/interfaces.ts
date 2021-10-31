export enum AvailabilityType {
  FullTime = "Disponible, Full-Time",
  PartTime = "Disponible, Part-Time",
  Unavailable = "No disponible",
}

export interface SendMailFormInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactController {
  /* State */
  availability: AvailabilityType;
  isSuccessNotificacionVisible: boolean;
  isErrorNotificacionVisible: boolean;
  /* Events */
  onSendContactForm: (data: unknown, e) => void;
  onCloseNotification: () => void;
}

export interface ContactFragmentProps {
  useController?: () => ContactController;
}
