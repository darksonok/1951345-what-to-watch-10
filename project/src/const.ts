export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not_found',
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

export enum MathActions {
  DIVIDE = '/',
  MINUS = '-',
}

export enum VideoParams {
  ESTIMATE_TIME = 'estimateTime',
  VIDEO_PROGRESS = 'videoProgress',
  VIDEO_PROCESS_POSITION = 'videoProcessPosition',
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
  VERY_BAD: 0,
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10
};

const DEFAULT_GENRE = 'All genres';

export enum ConnectionParams{
  baseUrl = 'https://10.react.pages.academy/wtw',
  ConnectionTimeOut = 5000,
}

export enum ReviewLengthThresholds {
  MaxLength = 400,
  MinLength = 50,
}

const NUMBER_FILMS_TO_SHOW = 8;

const TIMEOUT_SHOW_ERROR = 2000;

const RegularExpressionsForSignInForm = {
  EmailRegularExpression: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PasswordRegularExpression: /(?=.*[0-9])(?=.*[a-z]|[A-Z])/
};

const SECONDS_IN_HOUR = 3600;

const SECONDS_IN_MINNUTE = 60;

const NUMBER_OF_PERCENTS_IN_WHOLE = 100;

const DEFAULT_VIDEO_PARAM_VALUE = 0;

const MAX_GENRES_TO_SHOW = 9;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const SERVER_BROKEN_STATUS_ERROR_LOWER_THRESHOLD = 500;

export {
  RATING_VALUES,
  PromoFilm,
  VIDEO_PREVIEW_DELAY,
  TABS,
  NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE,
  HUMANIZE_RATION_OPTIONS,
  DEFAULT_GENRE,
  NUMBER_FILMS_TO_SHOW,
  RegularExpressionsForSignInForm,
  TIMEOUT_SHOW_ERROR,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINNUTE,
  NUMBER_OF_PERCENTS_IN_WHOLE,
  DEFAULT_VIDEO_PARAM_VALUE,
  MAX_GENRES_TO_SHOW,
  monthNames,
  SERVER_BROKEN_STATUS_ERROR_LOWER_THRESHOLD
};
