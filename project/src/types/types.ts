import { AuthorizationStatus } from '../const';

export type Film = {
  backgroundColor: string,
  backgroundImage: string,
  previewImage: string,
  previewVideoLink: string,
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

export type InitialState = {
  genre: string,
  films: Film[],
  isLoading: boolean,
}

export type GenreProps = {
  genre: string,
  activeGenre: string,
  onGenreClick: (genre: string) => void;
}
