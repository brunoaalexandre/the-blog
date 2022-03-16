import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8.125rem;
`;

export const LeftContent = styled.div`
  font-family: "Poppins", sans-serif;

  header {
    div {
      background: linear-gradient(
        104.9deg,
        rgba(239, 35, 243, 0.7) -2.03%,
        rgba(195, 38, 228, 0.7) 27.04%,
        rgba(139, 42, 209, 0.7) 67.97%,
        rgba(92, 44, 193, 0.7) 107.39%
      );
      border-radius: 0.5rem;
      max-width: 569px;
      height: 342.43px;
    }

    img {
      opacity: 0.7;
      border-radius: 0.5rem;
      height: 342.43px;
      max-width: 569px;
    }

    span {
      display: inline-block;
      padding-top: 0.625rem;
      font-family: "Roboto", sans-serif;
      color: var(--black);
      font-size: 1rem;
    }
  }

  h1 {
    color: var(--purple-30);
    margin-top: 0.9375rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: var(--black);
    margin-top: 0.9375rem;
  }
`;

export const RightContent = styled.div`
  article {
    font-family: "Poppins", sans-serif;
    padding-bottom: 1.4744rem;
    margin-bottom: 1.4975rem;

    &:nth-child(1) {
      border-bottom: 1px solid var(--purple-90);
    }

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--black);
    }

    h1 {
      font-size: 1.5rem;
      color: var(--purple-30);
      margin-top: 0.5rem;
      font-weight: 700;
      line-height: 36px;
    }

    p {
      margin-top: 0.5rem;
      color: var(--black);
      font-size: 1rem;
    }
  }
`;

export const PostContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  gap: 1.8125rem;
  padding-bottom: 2rem;
`;
