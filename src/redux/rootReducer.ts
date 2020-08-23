import { combineReducers } from 'redux';
import { reservationsReducer } from './reservations';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  reservations: reservationsReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
