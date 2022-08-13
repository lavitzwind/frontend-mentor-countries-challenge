import { DarkModeReducer, DarkModeAction } from "../interfaces/darkModeState";

const DarkModeReducer = (state: DarkModeReducer, action: DarkModeAction) => {
  switch (action.type) {
    case "TOGGLE": {
      console.log(action);
      return {
        darkMode: JSON.parse(localStorage.getItem("darkMode") || "true"),
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
