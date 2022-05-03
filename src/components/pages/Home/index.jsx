import { DashboardOrgs } from '../../DashboardOrgs';
import { Header } from '../../Header';

export function Home() {
  return (
    <>
      <Header link='/user-repos' buttonName='users' />
      <DashboardOrgs />
    </>
  );
}
