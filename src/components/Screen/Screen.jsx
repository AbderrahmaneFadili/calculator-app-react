import React from "react";
import { useSelector } from "react-redux";
import { ScreenWrapper, ScreenInput } from "./Screen.styles";

const Screen = () => {
  const value = useSelector((state) => state.calculatorReducer.value);
  return (
    <ScreenWrapper>
      <ScreenInput dir="rtl" onChange={() => null} value={value} />
    </ScreenWrapper>
  );
};

export default Screen;
