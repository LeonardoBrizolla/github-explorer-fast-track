import { RepoFormUsers } from './RepoFormUsers';
import { RepoListUsers } from './RepoListUsers';

import { Container } from './styles';

export function DashboardUsers() {
  return (
    <Container>
      <RepoFormUsers />
      <RepoListUsers />
    </Container>
  );
}
