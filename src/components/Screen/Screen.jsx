import React from "react";
import { useTheme } from "styled-components";
import { ScreenWrapper, ScreenInput } from "./Screen.styles";

const Screen = () => {
  const currentTheme = useTheme();
  return (
    <ScreenWrapper>
      <ScreenInput dir="rtl" currentTheme={currentTheme} />
    </ScreenWrapper>
  );
};

export default Screen;
