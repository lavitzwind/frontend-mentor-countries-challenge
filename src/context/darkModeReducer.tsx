const DarkModeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
