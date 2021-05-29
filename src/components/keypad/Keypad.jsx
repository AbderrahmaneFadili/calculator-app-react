import React from "react";
import { useDispatch } from "react-redux";
import Key from "../Key/Key";
import { KeypadContainer } from "./Keypad.styles";
import {
  setKeyValue,
  setReset,
  setDele,
} from "../../store/actions/calculatorActions";
const Keypad = () => {
  const dispatch = useDispatch();
  return (
    <KeypadContainer>
      <Key onClick={() => dispatch(setKeyValue("7"))} label="7" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("8"))} label="8" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("9"))} label="9" width="22%" />
      <Key onClick={() => dispatch(setDele())} label="DEL" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("4"))} label="4" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("5"))} label="5" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("6"))} label="6" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("+"))} label="+" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("1"))} label="1" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("2"))} label="2" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("3"))} label="3" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("-"))} label="-" width="22%" />
      <Key onClick={() => dispatch(setKeyValue(","))} label="." width="22%" />
      <Key onClick={() => dispatch(setKeyValue("0"))} label="0" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("/"))} label="/" width="22%" />
      <Key onClick={() => dispatch(setKeyValue("x"))} label="x" width="22%" />
      <Key onClick={() => dispatch(setReset())} label="RESET" width="48%" />
      <Key label="=" width="48%" />
    </KeypadContainer>
  );
};

export default Keypad;
