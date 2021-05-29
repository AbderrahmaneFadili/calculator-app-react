import { SET_DELE, SET_KEY_VALUE, SET_RESET } from "../types/calculatorTypes";
import { SET_THEME1 } from "../types/themeTypes";

export const setKeyValue = (payload) => {
  return {
    type: SET_KEY_VALUE,
    payload,
  };
};

export const setReset = () => {
  return {
    type: SET_RESET,
  };
};

export const setDele = () => {
  return {
    type: SET_DELE,
  };
};
