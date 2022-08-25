import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFound () {
  return (
    <div className="page-content">
      <Header />
      <h1>Такой фильм еще не сняли</h1>
      <Link to='/'>
        Но вы можете вернуться назад и попробывать снять его
      </Link>
      <Footer />
    </div>
  );
}

export default NotFound;
