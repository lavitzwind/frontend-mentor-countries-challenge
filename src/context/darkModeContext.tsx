import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || (null as any)),
};

export const DarkModeContext = createContext<any>(INITIAL_STATE as any);

export const DarkModeContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
