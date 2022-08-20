import { AuthorizationStatus } from '../const';

export type Film = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: [string],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

export type PromoFilm = {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: [string]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean

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
  promo: (PromoFilm | null),
  shownFilms: number,
}

export type GenreProps = {
  genre: string,
  activeGenre: string,
  onGenreClick: (genre: string) => void;
}


