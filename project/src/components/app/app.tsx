import MainPage from '../../pages/main/main';
import { PromoFilmProps } from '../../types/types';

function App({title, genre, date, src}: PromoFilmProps): JSX.Element {
  return (
    <MainPage
      title={title}
      genre={genre}
      date={date}
      src={src}
    />
  );
}

export default App;
