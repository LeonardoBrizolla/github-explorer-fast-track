import { useSelector } from 'react-redux';
import { selectOrgs } from '../../redux/orgsSlice.js';
import { Container } from './styles.js';
import { useReposUsers } from '../../hooks/useReposUsers';

import githubImg from '../../../public/favicon.png';

export function Footer() {
  const { repos } = useSelector(selectOrgs);
  const { reposUser } = useReposUsers();

  return (
    <Container isRepoOnPage={repos.length > 2 || reposUser.length > 2}>
      <a
        target='_blank'
        href='https://github.com/LeonardoBrizolla/github-explorer-fast-track'
      >
        <span>
          Made with ♥ by <strong>Leonardo Brizolla</strong>
        </span>
        <img src={githubImg} alt='' />
      </a>
    </Container>
  );
}
