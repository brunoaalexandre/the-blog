import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple-30);
  border-bottom: 6px solid var(--green);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding-top: 4rem;
  padding-bottom: 4rem;

  article {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;

    div:nth-child(1) {
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.25rem;
        color: var(--purple-50);
        font-weight: 700;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: 1.125rem;
        color: var(--purple-100);
        font-weight: 400;
        margin-top: 15px;
      }

      span {
        font-family: "Roboto", sans-serif;
        font-size: 1.125rem;
        color: var(--purple-50);
        display: inline-block;
        margin-top: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
          margin-left: 0.3125rem;
        }
      }
    }

    div:nth-child(2) {
      width: 570px;
      height: 346px;
      background: linear-gradient(
        104.9deg,
        rgba(239, 35, 243, 0.7) -2.03%,
        rgba(195, 38, 228, 0.7) 27.04%,
        rgba(139, 42, 209, 0.7) 67.97%,
        rgba(92, 44, 193, 0.7) 107.39%
      );
      border-radius: 8px;
      img {
        opacity: 0.5;
      }
    }
  }
`;
