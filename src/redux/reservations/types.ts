export interface Reservation {
  id: string;
  name: string;
  date: Date;
  guests: number;
  email?: string;
}

export interface ReservationsState {
  reservations: Reservation[];
  creationDialogOpen: boolean;
}

export const CREATE_RESERVATION = 'CREATE_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const EDIT_RESERVATION = 'EDIT_RESERVATION';

interface CreateReservationAction {
  type: typeof CREATE_RESERVATION;
  payload: Reservation;
}

interface DeleteReservationAction {
  type: typeof DELETE_RESERVATION;
  payload: string;
}

interface EditReservationAction {
  type: typeof EDIT_RESERVATION;
  payload: Reservation;
}

export type ReservationActionTypes = CreateReservationAction | DeleteReservationAction | EditReservationAction;
