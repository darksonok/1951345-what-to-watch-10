export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not_found'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Authorization = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FavoriteStatus {
  INLIST = 1,
  NOTINLIST = 0
}

const RATING_VALUES: number[] = [1,2,3,4,5,6,7,8,9,10];

const PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014,
  src: 'img/bg-the-grand-budapest-hotel.jpg',
  id: 2
};

const VIDEO_PREVIEW_DELAY = 1000;

const TABS: {
  [key: string]: string
} = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews'
};

const NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE = 4;

const HUMANIZE_RATION_OPTIONS = {
  BETTER_GO_HOME: 0,
  VERY_BAD: 2,
  BAD: 4,
  NOT_SO_BAD: 6,
  GOOD: 8,
  BEST: 10
};

const DEFAULT_GENRE = 'All genres';


const BASE_URL = 'https://10.react.pages.academy/wtw';

const CONNECTION_TIMEOUT = 5000;

const NUMBER_FILMS_TO_SHOW = 8;

const TIMEOUT_SHOW_ERROR = 2000;

const REG_EXP_FOR_VALIDATE_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REG_EXP_FOR_VALIDATE_PASSWORD = /^\S*$/;

const REVIEW_MAX_LENGTH = 400;

const REVIEW_MIN_LENGTH = 50;

export {
  RATING_VALUES,
  PromoFilm,
  VIDEO_PREVIEW_DELAY,
  TABS,
  NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE,
  HUMANIZE_RATION_OPTIONS,
  DEFAULT_GENRE,
  BASE_URL,
  CONNECTION_TIMEOUT,
  NUMBER_FILMS_TO_SHOW,
  REG_EXP_FOR_VALIDATE_EMAIL,
  REG_EXP_FOR_VALIDATE_PASSWORD,
  TIMEOUT_SHOW_ERROR,
  REVIEW_MAX_LENGTH,
  REVIEW_MIN_LENGTH,
};
