import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import calculatorReducer from "./reducers/calculatorReducers";

const rootReducer = combineReducers({ themeReducer, calculatorReducer });

const store = createStore(rootReducer);

export default store;
