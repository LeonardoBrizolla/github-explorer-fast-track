import { useState } from 'react';
import { useReposUsers } from '../../../hooks/useReposUsers';

import { FormControl, Button } from 'react-bootstrap';

import { Container, Content } from './styles';

export function RepoFormUsers() {
  const { searchReposUser, clearReposUser } = useReposUsers();

  const [repoUserName, setRepoUserName] = useState('');

  function handleSearchReposUser(event) {
    event.preventDefault();

    searchReposUser(repoUserName.trim());

    setRepoUserName('');
  }

  function handleClear() {
    clearReposUser();
  }

  return (
    <Container>
      <h2>Usuário:</h2>

      <Content>
        <FormControl
          type='text'
          placeholder='LeonardoBrizolla ...'
          value={repoUserName}
          onChange={(event) => setRepoUserName(event.target.value)}
        />

        <Button type='submit' onClick={handleSearchReposUser}>
          Buscar
        </Button>

        <Button variant='secondary' onClick={handleClear}>
          Limpar
        </Button>
      </Content>
    </Container>
  );
}
