import { useSelector } from 'react-redux';
import { selectOrgs } from '../../../redux/orgsSlice';
import { RepoItem } from '../RepoItem';

import { Container, Waiting } from './styles';

export function RepoList() {
  const { repoName, isRepoFounded, repos } = useSelector(selectOrgs);

  return (
    <Container>
      {isRepoFounded && <h2>Repositórios encontrados de {repoName}</h2>}

      {isRepoFounded && (
        <ul>
          {repos.map((repo) => (
            <RepoItem key={repo.name} repo={repo} />
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
