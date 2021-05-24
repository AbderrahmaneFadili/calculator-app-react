import styled from "styled-components";

export const KeyButton = styled.button`
  width: ${(p) => p.width};
  font-family: var(--main-font);
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  padding: 1.2rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) =>
    theme.theme === "theme3" ? "var(--text-yellow)" : "var(--text-dark)"};
  background-color: var(--key-number);
  box-shadow: 0px 6px 0px var(--Key-number-shadow);
  margin-bottom: 1.5rem;

  &:active {
    box-shadow: 0px 6px 0px var(--key-number);
    transform: scale(0.9);
  }

  &:nth-child(4),
  &:nth-child(17) {
    background-color: var(--key-del-reset);
    color: white;
    font-size: 1.5rem;
    box-shadow: 0px 6px 0px var(--key-del-reset-shadow);
  }

  &:nth-child(18) {
    background-color: var(--key-equal);
    color: ${({ theme }) =>
      theme.theme === "theme3"
        ? "var(--text-dark)"
        : theme.theme === "theme2" || theme.theme === "theme1"
        ? "var(--text-light)"
        : "none"};
    font-size: 1.5rem;
    box-shadow: 0px 6px 0px var(--key-equal-shadow);
  }
`;
