import { SET_THEME1, SET_THEME2, SET_THEME3 } from "../types/themeTypes";

const themeReducer = (
  state = {
    theme: "theme1",
  },
  { type },
) => {
  switch (type) {
    case SET_THEME1:
      return {
        ...state,
        theme: "theme1",
      };
    case SET_THEME2:
      return {
        ...state,
        theme: "theme2",
      };
    case SET_THEME3:
      return {
        ...state,
        theme: "theme3",
      };

    default:
      return state;
  }
};

export default themeReducer;
