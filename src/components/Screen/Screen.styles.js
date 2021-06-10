import styled from "styled-components";

export const ScreenWrapper = styled.div`
  margin: 1.5rem 0 2.5rem;
  background-color: var(--screen-background);
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

export const ScreenValue = styled.div`
  font-family: var(--main-font);
  font-size: 3rem;
  height: 60px;
  color: ${({ theme }) =>
    theme.theme === "theme3"
      ? "var(--text-yellow)"
      : theme.theme === "theme1"
      ? "var(--text-light)"
      : "var(--text-dark)"};
`;
