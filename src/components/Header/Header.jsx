import React from "react";
import Toggle from "../Toggle/Toggle";
import { HeaderContainer, HeaderTitle } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>calc</HeaderTitle>
      <Toggle />
    </HeaderContainer>
  );
}

export default Header;
