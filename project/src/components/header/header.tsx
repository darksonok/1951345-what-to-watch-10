import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Logo from '../logo/logo';
import Guest from '../user-info/guest/guest';
import UserInfo from '../user-info/user-info';

type HeaderProps = {
  breadcrumbs?: JSX.Element,
}

function Header ({breadcrumbs}: HeaderProps) {

  const authorizationsStatus = useAppSelector((state) => state.authorizationStatus);
  const userInfo = useAppSelector((state) => state.user);


  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Logo />
      </div>
      {
        authorizationsStatus === AuthorizationStatus.Auth ?
          breadcrumbs || <UserInfo userInfo={userInfo} /> :
          <Guest />
      }
    </header>
  );
}

export default Header;
