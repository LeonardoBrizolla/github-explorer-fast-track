import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOrgs } from '../../redux/orgsSlice';
import { RepoItem } from '../RepoItem';
import api from '../../services/api.js';

import { Container } from './styles';

export function RepoList() {
  const [repos, setRepos] = useState([]);
  const { name } = useSelector(selectOrgs);

  useEffect(() => {
    if (name) {
      api.get(`orgs/${name}/repos`).then((response) => setRepos(response.data));
    }
  }, [name]);

  return (
    <Container>
      {name && <h2>Repositórios encontrados de {name}</h2>}

      {name && (
        <ul>
          {repos.map((repo) => (
            <RepoItem key={repo.name} repo={repo} />
          ))}
        </ul>
      )}
    </Container>
  );
}
