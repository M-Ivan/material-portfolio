export enum AvailabilityType {
  FullTime = "Disponible, Full-Time",
  PartTime = "Disponible, Part-Time",
  Unavailable = "No disponible",
}

export interface ContactController {
  /* State */
  availability: AvailabilityType;
  /* Events */
  onButtonPressed: () => void;
}

export interface ContactFragmentProps {
  useController?: () => ContactController;
}
