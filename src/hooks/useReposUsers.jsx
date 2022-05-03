import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const ReposUserContext = createContext([]);

export function RepoUsersProvider({ children }) {
  const [reposUser, setReposUser] = useState([]);
  const [nameRepo, setNameRepo] = useState('');

  function searchReposUser(nameRepo) {
    setNameRepo(nameRepo);
  }

  function clearReposUser() {
    setNameRepo('');
    setReposUser([]);
  }

  useEffect(() => {
    if (nameRepo) {
      api
        .get(`users/${nameRepo}/repos`)
        .then((response) => setReposUser(response.data));
    }
  }, [nameRepo]);

  return (
    <ReposUserContext.Provider
      value={{ reposUser, nameRepo, searchReposUser, clearReposUser }}
    >
      {children}
    </ReposUserContext.Provider>
  );
}

export function useReposUsers() {
  const context = useContext(ReposUserContext);

  return context;
}
