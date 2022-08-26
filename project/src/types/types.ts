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
  children: JSX.Element;
}

export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
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
  id: number,
}

export type InitialState = {
  genre: string,
  films: Film[],
  filteredFilms: Film[],
  isLoading: boolean,
  promo: (PromoFilm | null),
  shownFilms: number,
  authorizationStatus:string,
  user: UserData | null,
  error: string | null,
  openedFilm: Film | null,
  favoriteFilms: Film[]
}

export type GenreProps = {
  genre: string,
  activeGenre: string,
  onGenreClick: (genre: string) => void;
}

export type AuthorizationData = {
  email: string,
  password: string,
}

export type UserData = {
  email: string,
  token: string,
  avatarUrl?: string,
}
