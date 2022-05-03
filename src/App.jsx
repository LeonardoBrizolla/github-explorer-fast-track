import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { UserRepos } from './components/pages/UserRepos';
import { RepoUsersProvider } from './hooks/useReposUsers';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <RepoUsersProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user-repos' element={<UserRepos />} />
      </Routes>

      <GlobalStyles />
    </RepoUsersProvider>
  );
}
