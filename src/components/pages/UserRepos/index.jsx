import { Header } from '../../Header';
import { DashboardUsers } from '../../DashboardUsers';
import { Footer } from '../../Footer';

export function UserRepos() {
  return (
    <>
      <Header link='/' buttonName='Repositórios de Empresas' />
      <DashboardUsers />
      <Footer />
    </>
  );
}
