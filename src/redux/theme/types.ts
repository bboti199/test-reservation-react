export interface ThemeState {
  isDarkMode: boolean;
}

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE;
}

export type ThemeActionTypes = ToggleDarkModeAction;
