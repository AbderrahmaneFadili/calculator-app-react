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
import { useDispatch } from "react-redux";
import {
  setTheme1Action,
  setTheme2Action,
  setTheme3Action,
} from "../../store/actions/themeActions";

function Toggle() {
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();

  const goToTheme1 = () => {
    setPosition(3);
    dispatch(setTheme1Action());
  };

  const goToTheme2 = () => {
    setPosition(40);
    dispatch(setTheme2Action());
  };

  const goToTheme3 = () => {
    setPosition(78);
    dispatch(setTheme3Action());
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
