import React from "react";
import { CalculatorContainer } from "./Calculator.styles";
import Header from "../Header/Header";
import Screen from "../Screen/Screen";
const Calculator = () => {
  return (
    <CalculatorContainer>
      <Header />
      <Screen />
    </CalculatorContainer>
  );
};

export default Calculator;
