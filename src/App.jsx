import { Dashboard } from './components/Dashboard';
import { GlobalStyles } from './styles/global';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />

      <GlobalStyles />
    </>
  );
}
