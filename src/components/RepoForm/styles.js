import styled from 'styled-components';

export const Container = styled.form`
  background: var(--header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  border-radius: 0.5rem;

  margin-top: -7rem;

  input {
    max-width: 80%;
    height: 3rem;
  }

  button {
    max-width: 6rem;
    height: 3rem;
    width: 100%;
    border: 0;

    .clear {
      background: var(--red);
    }
  }
`;
