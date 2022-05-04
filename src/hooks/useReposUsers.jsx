import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const ReposUserContext = createContext([]);

export function RepoUsersProvider({ children }) {
  const [reposUser, setReposUser] = useState([]);
  const [nameRepo, setNameRepo] = useState('');
  const [isRepoFounded, setIsRepoFounded] = useState(false);

  function searchReposUser(nameRepo) {
    setNameRepo(nameRepo);
  }

  function clearReposUser() {
    setNameRepo('');
    setReposUser([]);
    setIsRepoFounded(false);
  }

  useEffect(() => {
    if (nameRepo) {
      api
        .get(`users/${nameRepo}/repos`)
        .then((response) => {
          if (response.statusCode !== 404) {
            setReposUser(response.data);
            setIsRepoFounded(true);
          }
        })
        .catch((res) => {
          if (res.stratusCode === 404) {
            setIsRepoFounded(false);
          }
        });
    }
  }, [nameRepo]);

  return (
    <ReposUserContext.Provider
      value={{
        reposUser,
        nameRepo,
        isRepoFounded,
        searchReposUser,
        clearReposUser,
      }}
    >
      {children}
    </ReposUserContext.Provider>
  );
}

export function useReposUsers() {
  const context = useContext(ReposUserContext);

  return context;
}
