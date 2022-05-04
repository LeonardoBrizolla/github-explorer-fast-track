import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrgRequest, fetchOrgFailure } from '../../../redux/orgsSlice';

import { FormControl, Button } from 'react-bootstrap';
import { Container, Content } from './styles';

export function RepoForm() {
  const textInput = useRef(null);
  const [repoName, setRepoName] = useState('');
  const dispatch = useDispatch();

  function handleSearchRepoOrgs(event) {
    event.preventDefault();

    if (repoName.trim() === '') {
      setRepoName('');
      return;
    }

    dispatch(fetchOrgRequest(repoName));
  }

  function handleClear() {
    dispatch(fetchOrgFailure());
    setRepoName('');
    textInput.current.focus();
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <Container>
      <h2>Empresa:</h2>
      <Content>
        <FormControl
          type='text'
          placeholder='Facebook ...'
          value={repoName}
          onChange={(event) => setRepoName(event.target.value)}
          ref={textInput}
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
