import React from "react";
import { useTheme } from "styled-components";
import { HeaderContainer, HeaderTitle } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>calc</HeaderTitle>
      <h2>Toggle</h2>
    </HeaderContainer>
  );
}

export default Header;
