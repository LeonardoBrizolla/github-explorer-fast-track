import { useState, useEffect, useRef } from 'react';
import { useReposUsers } from '../../../hooks/useReposUsers';

import { FormControl, Button } from 'react-bootstrap';

import { Container, Content } from './styles';

export function RepoFormUsers() {
  const textInput = useRef(null);
  const { fetchRepoUserRequest, fetchRepoUserFailed } = useReposUsers();
  const [repoUserName, setRepoUserName] = useState('');

  function handleSearchReposUser(event) {
    event.preventDefault();

    if (repoUserName.trim() === '') {
      fetchRepoUserFailed();
      setRepoUserName('');
      textInput.current.focus();
      return;
    }

    fetchRepoUserRequest(repoUserName.trim());
  }

  function handleClear() {
    fetchRepoUserFailed();
    setRepoUserName('');
    textInput.current.focus();
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <Container>
      <h2>Usuário:</h2>

      <Content>
        <FormControl
          type='text'
          placeholder='LeonardoBrizolla ...'
          value={repoUserName}
          onChange={(event) => setRepoUserName(event.target.value)}
          ref={textInput}
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
