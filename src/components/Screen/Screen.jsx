import React from "react";
import { useSelector } from "react-redux";
import { ScreenWrapper, ScreenValue } from "./Screen.styles";

const Screen = () => {
  const value = useSelector((state) => state.calculatorReducer.value);
  return (
    <ScreenWrapper>
      <ScreenValue>{value}</ScreenValue>
    </ScreenWrapper>
  );
};

export default Screen;
