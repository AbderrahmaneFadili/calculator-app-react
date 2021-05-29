import { SET_THEME1, SET_THEME2, SET_THEME3 } from "../types/themeTypes";

export function setTheme1Action() {
  return {
    type: SET_THEME1,
  };
}

export function setTheme2Action() {
  return {
    type: SET_THEME2,
  };
}

export function setTheme3Action() {
  return {
    type: SET_THEME3,
  };
}
