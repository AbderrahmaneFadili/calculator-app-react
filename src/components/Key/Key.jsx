import React from "react";
import { KeyButton } from "./Key.styles";
const Key = ({ label, width }) => {
  return <KeyButton width={width}>{label}</KeyButton>;
};

export default Key;
