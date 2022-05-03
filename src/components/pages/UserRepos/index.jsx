import { Header } from '../../Header';
import { DashboardUsers } from '../../DashboardUsers';

export function UserRepos() {
  return (
    <>
      <Header link='/' buttonName='orgs' />
      <DashboardUsers />
    </>
  );
}
