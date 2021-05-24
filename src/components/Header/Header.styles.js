import styled, { useTheme } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) =>
    theme.theme === "theme3"
      ? "var(--text-yellow)"
      : theme.theme === "theme1"
      ? "var(--text-light)"
      : "var(--text-dark)"};
  font-size: 2rem;
`;
