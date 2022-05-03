import { HeaderContainer, Content } from './styles';
import { Button } from 'react-bootstrap';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <h1>Github Explorer - Orgs</h1>
        <Button>Pesquisar repositórios de usuários</Button>
      </Content>
    </HeaderContainer>
  );
}
