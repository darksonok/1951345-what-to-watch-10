import { HUMANIZE_RATION_OPTIONS, REG_EXP_FOR_VALIDATE_EMAIL, REG_EXP_FOR_VALIDATE_PASSWORD } from './const';
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

export {
  huminizaRAting,
  getFilmGenres,
  validateEmail,
  validatePassword,
};
