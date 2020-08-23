import { ThemeState, ThemeActionTypes, TOGGLE_DARK_MODE } from './types';

const initialState: ThemeState = {
  isDarkMode: true,
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};
