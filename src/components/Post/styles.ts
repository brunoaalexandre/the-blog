import styled from "styled-components";

export const Container = styled.div`
  max-width: 22.125rem;
  font-family: "Roboto", sans-serif;

  header {
    div {
      height: 16.25rem;
      background: linear-gradient(
        104.9deg,
        rgba(239, 35, 243, 0.7) -2.03%,
        rgba(195, 38, 228, 0.7) 27.04%,
        rgba(139, 42, 209, 0.7) 67.97%,
        rgba(92, 44, 193, 0.7) 107.39%
      );
      border-radius: 0.5rem;

      img {
        width: 100%;
        height: 16.25rem;
        opacity: 0.5;
      }
    }

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--black);
      margin-top: 1rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }
`;
