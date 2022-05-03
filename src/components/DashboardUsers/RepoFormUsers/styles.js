import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  background: var(--header);
  margin-top: -10rem;
  padding: 2rem;
  border-radius: 0.5rem;

  h2 {
    margin-bottom: 1rem;
    color: var(--text-body);
  }
`;

export const Content = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    max-width: 80%;
    height: 3rem;
  }

  button {
    max-width: 6rem;
    height: 3rem;
    width: 100%;
  }
`;
