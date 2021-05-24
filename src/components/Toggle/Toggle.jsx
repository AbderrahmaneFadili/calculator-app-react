import React, { useState } from "react";
import {
  Circle,
  ThemeNumber,
  ThemeNumberContainer,
  ToggleContainer,
  ToggleCirleContainer,
  ToggleLabel,
  ToggleWrapper,
} from "./Toggle.styles";
function Toggle() {
  const [position, setPosition] = useState(0);
  const goToTheme1 = () => {
    setPosition(0);
  };

  const goToTheme2 = () => {
    setPosition(40);
  };

  const goToTheme3 = () => {
    setPosition(78);
  };
  return (
    <ToggleContainer>
      <ToggleLabel>THEME</ToggleLabel>
      <ToggleWrapper>
        <ThemeNumberContainer>
          <ThemeNumber onClick={goToTheme1}>1</ThemeNumber>
          <ThemeNumber onClick={goToTheme2}>2</ThemeNumber>
          <ThemeNumber onClick={goToTheme3}>3</ThemeNumber>
        </ThemeNumberContainer>
        <ToggleCirleContainer>
          <Circle position={position}></Circle>
        </ToggleCirleContainer>
      </ToggleWrapper>
    </ToggleContainer>
  );
}

export default Toggle;
