import { AuthorizationStatus } from '../const';

export type Film = {
  src: string,
  title: string
}

export type PromoFilmProps = {
  title: string,
  genre: string,
  date: number,
  src: string
}

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}
