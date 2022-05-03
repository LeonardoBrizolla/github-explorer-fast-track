import { RepoForm } from '../RepoForm';
import { RepoList } from '../RepoIList';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <RepoForm />
      <RepoList />
    </Container>
  );
}
