import {
  ReservationsState,
  ReservationActionTypes,
  CREATE_RESERVATION,
  DELETE_RESERVATION,
  EDIT_RESERVATION,
} from './types';
import { v4 } from 'uuid';

const initialState: ReservationsState = {
  reservations: [
    {
      id: v4(),
      name: 'John Doe',
      date: new Date('2020-08-07'),
      guests: 4,
      email: 'test@test.com',
    },
    {
      id: v4(),
      name: 'Jane Doe',
      date: new Date('2020-08-08'),
      guests: 3,
      email: 'test@test.com',
    },
  ],
  creationDialogOpen: false,
};

export const reservationsReducer = (state = initialState, action: ReservationActionTypes): ReservationsState => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case DELETE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter((r) => r.id !== action.payload),
      };
    case EDIT_RESERVATION:
      const reservation = state.reservations.find((r) => r.id === action.payload.id);

      if (!reservation) {
        return state;
      }

      const newState = state.reservations.filter((r) => r.id !== action.payload.id);
      return {
        ...state,
        reservations: [...newState, action.payload],
      };

    default:
      return state;
  }
};
