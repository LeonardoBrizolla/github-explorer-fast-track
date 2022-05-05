import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--background-dark);
  position: ${(props) => (props.isRepoOnPage ? 'relative' : 'fixed')};
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;

    span {
      color: var(--text-body);
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }

      strong {
        color: var(--green);
      }
    }

    img {
      width: 1.5rem;
      border-radius: 50%;
      margin-left: 0.5rem;
    }
  }
`;
