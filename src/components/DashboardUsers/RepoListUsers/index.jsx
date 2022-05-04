import { useReposUsers } from '../../../hooks/useReposUsers';
import { RepoItemUsers } from '../RepoItemUsers';

import { Container, Waiting } from './styles';

export function RepoListUsers() {
  const { nameRepo, reposUser, isRepoFounded } = useReposUsers();

  return (
    <Container>
      {isRepoFounded && <h2>Repositórios encontrados de {nameRepo}</h2>}

      {isRepoFounded && (
        <ul>
          {reposUser.map((reposUser) => (
            <RepoItemUsers key={reposUser.name} repo={reposUser} />
          ))}
        </ul>
      )}

      {!isRepoFounded && (
        <Waiting>
          <h3>Aguardando pesquisa</h3>
        </Waiting>
      )}
    </Container>
  );
}
