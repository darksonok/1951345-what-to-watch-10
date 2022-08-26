import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import OpenedFilmInfo from '../../components/opened-film-info/opened-film-info';
import SimilarFilmsList from '../../components/similar-films-list/similar-films-list';

function MoviePage() {
  const { id } = useParams();

  return (
    <>
      <OpenedFilmInfo id={Number(id)} />
      <div className="page-content">
        <SimilarFilmsList id={Number(id)} />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
