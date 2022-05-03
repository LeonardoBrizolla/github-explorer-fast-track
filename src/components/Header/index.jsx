import { HeaderContainer, Content } from './styles';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <h1>Github Explorer - Orgs</h1>
        <Link to='/user-repos'>
          <Button>Pesquisar repositórios de usuários</Button>
        </Link>
      </Content>
    </HeaderContainer>
  );
}
