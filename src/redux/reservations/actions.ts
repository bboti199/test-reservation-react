import { Reservation, ReservationActionTypes } from './types';

export const createReservation = (reservation: Reservation): ReservationActionTypes => ({
  type: 'CREATE_RESERVATION',
  payload: reservation,
});

export const deleteReservation = (reservationId: string): ReservationActionTypes => ({
  type: 'DELETE_RESERVATION',
  payload: reservationId,
});

export const editReservation = (reservation: Reservation): ReservationActionTypes => ({
  type: 'EDIT_RESERVATION',
  payload: reservation,
});
