import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRepoName, clearOrgs } from '../../../redux/orgsSlice';

import { FormControl, Button } from 'react-bootstrap';
import { Container, Content } from './styles';

export function RepoForm() {
  const [repoName, setRepoName] = useState('');
  const dispatch = useDispatch();

  function handleSearchRepoOrgs(event) {
    event.preventDefault();

    if (repoName === '') {
      return;
    }

    dispatch(changeRepoName(repoName));
  }

  function handleClear() {
    dispatch(clearOrgs());
    setRepoName('');
  }

  return (
    <Container>
      <h2>Empresa:</h2>
      <Content>
        <FormControl
          type='text'
          placeholder='Facebook ...'
          value={repoName}
          onChange={(event) => setRepoName(event.target.value)}
        />

        <Button type='submit' onClick={handleSearchRepoOrgs}>
          Buscar
        </Button>

        <Button variant='secondary' onClick={handleClear}>
          Limpar
        </Button>
      </Content>
    </Container>
  );
}
