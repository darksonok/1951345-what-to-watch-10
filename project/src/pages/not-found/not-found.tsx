import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFound () {
  return (
    <div className="page-content">
      <h1>Такой фильм еще не сняли</h1>
      <Link to='/'>
        Но вы можете вернуться назад и попробывать снять его
      </Link>

      <footer className="page-footer">
        <div className="logo">
          <Logo />
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
