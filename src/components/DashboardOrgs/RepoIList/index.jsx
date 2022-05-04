import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrgs, clearOrgs } from '../../../redux/orgsSlice';
import { RepoItem } from '../RepoItem';
import api from '../../../services/api.js';

import { Container, Waiting } from './styles';

export function RepoList() {
  const [repos, setRepos] = useState([]);
  const { repoName, isRepoFounded } = useSelector(selectOrgs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (repoName) {
      api
        .get(`orgs/${repoName}/repos`)
        .then((response) => {
          if (response.status === 200) {
            setRepos(response.data);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            dispatch(clearOrgs());
          }
        });
    }
  }, [repoName]);

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
