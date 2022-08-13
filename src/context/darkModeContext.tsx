import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
import { DarkModeState } from "../interfaces/darkModeState";
import { ReactProps } from "../interfaces/reactProps";

const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || "null"),
};

export const DarkModeContext = createContext<DarkModeState>(
  INITIAL_STATE as DarkModeState
);

export const DarkModeContextProvider = ({ children }: ReactProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
