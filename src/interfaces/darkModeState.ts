export type DarkModeAction = {
  type: "TOGGLE";
};

export interface DarkModeState {
  darkMode: boolean;
  dispatch: (action: DarkModeAction) => void;
}

export interface DarkModeReducer {
  darkMode: boolean;
}
