import { SET_DELE, SET_KEY_VALUE, SET_RESET } from "../types/calculatorTypes";

const calculatorReducer = (
  state = {
    value: "",
  },
  { type, payload },
) => {
  switch (type) {
    case SET_KEY_VALUE:
      return {
        ...state,
        value: state.value + payload,
      };
    case SET_RESET:
      return {
        ...state,
        value: "0",
      };
    case SET_DELE:
      return {
        ...state,
        value: state.value.slice(1),
      };
    default:
      return state;
  }
};

export default calculatorReducer;
