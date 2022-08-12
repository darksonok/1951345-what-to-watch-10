import { AuthorizationStatus } from '../const';

export type Film = {
  src: string,
  title: string,
  id: number,
  isFavourite: boolean,
  date: number,
  genre: string,
  description: string,
  director: string,
  staring: string,
  url: string,
  runTime: number,
  reviews: Review[]
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

export type Review = {
  id: number,
  author: string,
  text: string,
  date: string,
  rating: number
}

export type AppScreenProps = {
  promoFilm: PromoFilmProps,
  films: Film[]
}

export type FilmProps = {
  films: Film[]
}

export type FilmCardProps = {
  film: Film,
}

export type VideoPlayerProps = {
  film: Film,
}

export type TabsProps = {
  [openedFilm: string]: Film,
}

export type OverviewProps = {
  openedFilm: Film,
  totalRating: string
}

export type ReviewsProps = {
  reviews: Review[]
}
