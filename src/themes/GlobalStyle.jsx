import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');

  *,*::after,*::before{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
  }

  :root{
      --main-font:'Spartan', sans-serif;
      --number-font-size:32px;
      //backgrounds
      --main-background:${({ theme }) => theme.mainBackground};
      --toggle-background:${({ theme }) => theme.toggleBackground};
      --keypad-background:${({ theme }) => theme.keypadBackground};
      --screen-Background:${({ theme }) => theme.screenBackground};
      //keys
      --key-number:${({ theme }) => theme.keyNumber};
      --Key-number-shadow:${({ theme }) => theme.KeyNumberShadow};
      --key-del-reset:${({ theme }) => theme.keyDelReset};
      --key-del-resetShadow:${({ theme }) => theme.keyDelResetShadow};
      --key-equal:${({ theme }) => theme.keyEqual};
      --key-equal-shadow:${({ theme }) => theme.keyEqualShadow};
      //text
      --text-number-dark:${({ theme }) => theme.textNumberDark};
      --text-number-light:${({ theme }) => theme.textNumberLight};
      --light-yellow:${({ theme }) => theme.lightYellow};
  }

  html{
      font-family:var(--main-font);
  }

  body{
      transition: .4s;
      background-color: var(--main-background);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
`;

export default GlobalStyle;
