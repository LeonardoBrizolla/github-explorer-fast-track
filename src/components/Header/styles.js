import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--background-dark);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--shape);
  }

  button {
    font-size: 1rem;
    color: var(--text-title);
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      background: var(--green);
      color: var(--background-dark);
      filter: brightness(0.8);
    }
  }
`;
