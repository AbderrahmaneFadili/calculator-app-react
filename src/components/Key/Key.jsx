import React from "react";
import { KeyButton } from "./Key.styles";
const Key = ({ label, width, onClick }) => {
  return (
    <KeyButton onClick={onClick} width={width}>
      {label}
    </KeyButton>
  );
};

export default Key;
