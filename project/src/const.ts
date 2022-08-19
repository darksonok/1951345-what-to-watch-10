export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

};
