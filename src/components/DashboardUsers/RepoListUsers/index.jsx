import { useReposUsers } from '../../../hooks/useReposUsers';
import { RepoItemUsers } from '../RepoItemUsers';

import { Container } from './styles';

export function RepoListUsers() {
  const { nameRepo, reposUser } = useReposUsers();

  return (
    <Container>
      {nameRepo && <h2>Repositórios encontrados de {nameRepo}</h2>}

      {nameRepo && (
        <ul>
          {reposUser.map((reposUser) => (
            <RepoItemUsers key={reposUser.name} repo={reposUser} />
          ))}
        </ul>
      )}
    </Container>
  );
}
