import MainPage from '../../pages/main/main';
type PromoFilmProps = {
  title: string,
  genre: string,
  date: number,
  src: string
}


function App({title, genre, date, src}: PromoFilmProps): JSX.Element {
  return (
    <MainPage
      title = {title}
      genre = {genre}
      date = {date}
      src = {src}
    />
  );
}

export default App;
