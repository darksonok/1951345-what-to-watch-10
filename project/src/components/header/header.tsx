import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserInfo } from '../../store/selectors';
import Logo from '../logo/logo';
import Guest from '../user-info/guest/guest';
import UserInfo from '../user-info/user-info';

type HeaderProps = {
  breadcrumbs?: JSX.Element,
  className?: string,
}

function Header ({breadcrumbs, className}: HeaderProps) {

  const authorizationsStatus = useAppSelector(getAuthorizationStatus);
  const userInfo = useAppSelector(getUserInfo);


  return (
    <header className={`page-header ${className}`}>
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
