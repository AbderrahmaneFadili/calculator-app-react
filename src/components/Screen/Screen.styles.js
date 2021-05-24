import styled from "styled-components";

export const ScreenWrapper = styled.div`
  margin: 1.5rem 0 2.5rem;
  background-color: var(--screen-background);
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
`;

export const ScreenInput = styled.input`
  width: 100%;
  padding: 0;
  font-family: var(--main-font);
  font-size: 3rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) =>
    theme.theme === "theme3"
      ? "var(--text-yellow)"
      : theme.theme === "theme1"
      ? "var(--text-light)"
      : "var(--text-dark)"};
  background-color: var(--screen-background);
  direction: rtl;
`;
