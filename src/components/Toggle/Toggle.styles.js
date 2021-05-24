import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
`;

export const ToggleLabel = styled.span`
  margin-right: 1rem;
  color: ${({ theme }) =>
    theme.theme === "theme3"
      ? "var(--text-yellow)"
      : theme.theme === "theme1"
      ? "var(--text-light)"
      : "var(--text-dark)"};
`;

export const ThemeNumber = styled.span`
  color: ${({ theme }) =>
    theme.theme === "theme3"
      ? "var(--text-yellow)"
      : theme.theme === "theme1"
      ? "var(--text-light)"
      : "var(--text-dark)"};
`;

export const ToggleCirleContainer = styled.div`
  width: 115%;
  background-color: var(--toggle-background);
  height: 35px;
  border-radius: 30px;
  align-self: center;
  margin-top: 6px;
  padding: 0.22rem;
`;

export const Circle = styled.div`
  width: 30px;
  height: 100%;
  background-color: var(--key-equal);
  border-radius: 100%;
  transition: all 0.4s;
  transform: ${({ position }) => "translateX(" + position + "px)"};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
