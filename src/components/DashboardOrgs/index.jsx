import { RepoForm } from './RepoForm';
import { RepoList } from './RepoIList';

import { Container } from './styles';

export function DashboardOrgs() {
  return (
    <Container>
      <RepoForm />
      <RepoList />
    </Container>
  );
}
