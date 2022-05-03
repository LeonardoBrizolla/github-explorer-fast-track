import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HeaderContainer, Content } from './styles';

export function Header({ link, buttonName }) {
  return (
    <HeaderContainer>
      <Content>
        <h1>GitHub Explorer</h1>
        <Link to={link}>
          <Button>Pesquisar repositórios de {buttonName}</Button>
        </Link>
      </Content>
    </HeaderContainer>
  );
}
