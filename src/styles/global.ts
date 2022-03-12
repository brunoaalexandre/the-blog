import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: "#000000";
    --gray: "#BBBBBB";
    --white: "#FFFFFF";

    --green: "#4FFF4B";

    --purple-100: "#FBF6FF";
    --purple-90: "#F2E7FA"
    --purple-50: "#9E6DC2";
    --purple-30: "#290742";
    --purple-10: "#170027";

    --purple-gradient: gradient(
        104.9deg,
        rgba(239, 35, 243, 0.7) -2.03%,
        rgba(195, 38, 228, 0.7) 27.04%,
        rgba(139, 42, 209, 0.7) 67.97%,
        rgba(92, 44, 193, 0.7) 107.39%
        );
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
