import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, } from '../../const';
import { useAppSelector } from '../../hooks';

import type { PrivateRouteProps } from '../../types/types';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
