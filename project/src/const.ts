export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
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
  src: 'img/bg-the-grand-budapest-hotel.jpg'
};

const VIDEO_PREVIEW_DELAY = 1000;

const TABS = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews'
};

const NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE = 4;

export {
  RATING_VALUES,
  PromoFilm,
  VIDEO_PREVIEW_DELAY,
  TABS,
  NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE
};
