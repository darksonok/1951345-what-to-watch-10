import {
  DEFAULT_VIDEO_PARAM_VALUE,
  HUMANIZE_RATION_OPTIONS,
  MathActions, monthNames,
  NUMBER_OF_PERCENTS_IN_WHOLE,
  RegularExpressionsForSignInForm,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINNUTE } from './const';
import { Film } from './types/types';

const huminizaRAting = (rating: number) => {
  switch(true) {
    case (rating === HUMANIZE_RATION_OPTIONS.VERY_GOOD):
      return 'Awesome';
    case (rating > HUMANIZE_RATION_OPTIONS.GOOD && rating < HUMANIZE_RATION_OPTIONS.VERY_GOOD):
      return 'Very Good';
    case (rating > HUMANIZE_RATION_OPTIONS.NORMAL && rating <= HUMANIZE_RATION_OPTIONS.GOOD):
      return 'Good';
    case (rating > HUMANIZE_RATION_OPTIONS.BAD && rating <= HUMANIZE_RATION_OPTIONS.NORMAL):
      return 'Normal';
    case (rating > HUMANIZE_RATION_OPTIONS.VERY_BAD && rating <= HUMANIZE_RATION_OPTIONS.BAD):
      return 'Bad';
  }
};

const getFilmGenres = (filmList: Film[]) => ['All genres', ...new Set(filmList.map((film) => film.genre))];


const validateEmail = (email: string) => email
  .toLowerCase()
  .match(
    new RegExp(RegularExpressionsForSignInForm.EmailRegularExpression)
  );

const validatePassword = (password: string) => password
  .match(new RegExp(RegularExpressionsForSignInForm.PasswordRegularExpression));

const humanizeTime = (time: number) => (
  time > SECONDS_IN_HOUR
    ? (`-${Math.floor(time / SECONDS_IN_HOUR)}:${Math.floor((time / SECONDS_IN_HOUR - Math.floor(time / SECONDS_IN_HOUR)) * SECONDS_IN_MINNUTE)}:${Math.floor(((time / SECONDS_IN_HOUR - Math.floor(time / SECONDS_IN_HOUR)) * SECONDS_IN_MINNUTE - Math.floor((time / SECONDS_IN_HOUR - Math.floor(time / SECONDS_IN_HOUR)) * SECONDS_IN_MINNUTE)) * SECONDS_IN_MINNUTE)}`)
    : (`-${Math.floor(time / SECONDS_IN_MINNUTE)}:${Math.floor((time / SECONDS_IN_MINNUTE - Math.floor(time / SECONDS_IN_MINNUTE)) * SECONDS_IN_MINNUTE)}`)
);

const mesureVideoOptions = (
  firstVideoOption: number | undefined,
  SecondVideoOption: number | undefined,
  mathAction: string) => {
  switch(true) {
    case !firstVideoOption || !SecondVideoOption:
      return DEFAULT_VIDEO_PARAM_VALUE;
    case mathAction === MathActions.MINUS:
      return Math.floor(Number(firstVideoOption)) - Math.floor(Number(SecondVideoOption));
    case mathAction === MathActions.DIVIDE:
      return Number(firstVideoOption) / (Number(SecondVideoOption)) * NUMBER_OF_PERCENTS_IN_WHOLE;
    default:
      return DEFAULT_VIDEO_PARAM_VALUE;
  }
};

const humanizeDate = (date: string) => {
  const parsedDate = new Date(date);
  return `${monthNames[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
};

export {
  huminizaRAting,
  getFilmGenres,
  validateEmail,
  validatePassword,
  humanizeTime,
  mesureVideoOptions,
  humanizeDate
};
