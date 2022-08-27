import { DEFAULT_VIDEO_PARAM_VALUE, HUMANIZE_RATION_OPTIONS, MathActions, NUMBER_OF_PERCENTS_IN_WHOLE, REG_EXP_FOR_VALIDATE_EMAIL, REG_EXP_FOR_VALIDATE_PASSWORD, SECONDS_IN_HOUR, SECONDS_IN_MINNUTE } from './const';
import { Film } from './types/types';

const huminizaRAting = (rating: number) => {
  switch(true){
    case (rating === HUMANIZE_RATION_OPTIONS.BEST):
      return 'Best';
    case (rating > HUMANIZE_RATION_OPTIONS.GOOD && rating < HUMANIZE_RATION_OPTIONS.BEST):
      return 'Very Good';
    case (rating > HUMANIZE_RATION_OPTIONS.NOT_SO_BAD && rating <= HUMANIZE_RATION_OPTIONS.GOOD):
      return 'Good';
    case (rating > HUMANIZE_RATION_OPTIONS.BAD && rating <= HUMANIZE_RATION_OPTIONS.NOT_SO_BAD):
      return 'Not So Bad';
    case (rating > HUMANIZE_RATION_OPTIONS.VERY_BAD && rating <= HUMANIZE_RATION_OPTIONS.BAD):
      return 'Bad';
    case (rating > HUMANIZE_RATION_OPTIONS.BETTER_GO_HOME && rating <= HUMANIZE_RATION_OPTIONS.VERY_BAD):
      return 'Very Bad';
    case (rating === HUMANIZE_RATION_OPTIONS.BETTER_GO_HOME):
      return 'Better Go Home';
  }
};

const getFilmGenres = (filmList: Film[]) => ['All genres', ...new Set(filmList.map((film) => film.genre))];


const validateEmail = (email: string) => email
  .toLowerCase()
  .match(
    REG_EXP_FOR_VALIDATE_EMAIL
  );

const validatePassword = (password: string) => password
  .match(REG_EXP_FOR_VALIDATE_PASSWORD);

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

export {
  huminizaRAting,
  getFilmGenres,
  validateEmail,
  validatePassword,
  humanizeTime,
  mesureVideoOptions,
};
