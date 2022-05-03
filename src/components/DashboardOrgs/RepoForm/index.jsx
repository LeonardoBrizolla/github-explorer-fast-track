import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrgs, ClearOrgs, selectOrgs } from '../../../redux/orgsSlice';

import { FormControl, Button } from 'react-bootstrap';

import { Container, Content } from './styles';

export function RepoForm() {
  const [repoName, setRepoName] = useState('');

  const dispatch = useDispatch();
  const { name } = useSelector(selectOrgs);

  function handleSearchOrgs(event) {
    event.preventDefault();
    dispatch(changeOrgs(repoName));
    setRepoName('');
  }

  function handleClear() {
    dispatch(ClearOrgs());
  }

  return (
    <Container>
      <h2>Orgs</h2>
      <Content>
        <FormControl
          type='text'
          placeholder='Rocketseat...'
          value={repoName}
          onChange={(event) => setRepoName(event.target.value)}
        />

        <Button type='submit' onClick={handleSearchOrgs}>
          Buscar
        </Button>

        <Button variant='secondary' onClick={handleClear}>
          Limpar
        </Button>
      </Content>
    </Container>
  );
}
