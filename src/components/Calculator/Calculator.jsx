import React from "react";
import { CalculatorContainer } from "./Calculator.styles";
import Header from "../Header/Header";
import Screen from "../Screen/Screen";
import Keypad from "../keypad/Keypad";
const Calculator = () => {
  return (
    <CalculatorContainer>
      <Header />
      <Screen />
      <Keypad />
    </CalculatorContainer>
  );
};

export default Calculator;
