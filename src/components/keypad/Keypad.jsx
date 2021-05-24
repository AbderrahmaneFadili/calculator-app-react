import React from "react";
import Key from "../Key/Key";
import { KeypadContainer } from "./Keypad.styles";

const Keypad = () => {
  return (
    <KeypadContainer>
      <Key label="7" width="22%" />
      <Key label="8" width="22%" />
      <Key label="9" width="22%" />
      <Key label="DEL" width="22%" />
      <Key label="4" width="22%" />
      <Key label="5" width="22%" />
      <Key label="6" width="22%" />
      <Key label="+" width="22%" />
      <Key label="1" width="22%" />
      <Key label="2" width="22%" />
      <Key label="3" width="22%" />
      <Key label="-" width="22%" />
      <Key label="." width="22%" />
      <Key label="0" width="22%" />
      <Key label="/" width="22%" />
      <Key label="x" width="22%" />
      <Key label="RESET" width="48%" />
      <Key label="=" width="48%" />
    </KeypadContainer>
  );
};

export default Keypad;
