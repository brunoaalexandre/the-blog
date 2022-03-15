import styled from "styled-components";

interface LiActionProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  form {
    display: flex;
    flex-direction: row;

    input {
      width: 240px;
      height: 44px;
      background: var(--purple-10);
      color: var(--white);
      padding-left: 1.6031rem;
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;
      border: none;
    }

    button {
      width: 70px;
      height: 44px;
      background: var(--purple-50);
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0 4px 4px 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Li = styled.li<LiActionProps>`
  a {
    color: var(--white);
      font-size: 1.125rem;
      font-family: "Roboto", sans-serif;
      font-weight: ${(props) => props.isActive
      ? '700'
      : '400'};
  border-left: ${(props) => props.isActive
  ? '3px solid var(--green)'
  : 'none'};
  padding-left: ${(props) => props.isActive
    ? '0.1875rem'
    : '0'};
  }
`;
