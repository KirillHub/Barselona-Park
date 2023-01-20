import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

export const Header = () => {
  const navigate = useNavigate();

  const onContactClick = () => {
    navigate(`/`);
  };

  return (
    <header className="header">
      <nav className="header-container">
        <ul className="header-container__ul">
          <li>
            <Link to="">Главная</Link>
          </li>
          <li>
            <Link to={`/Category/Select-category`}>Категории</Link>
          </li>
          <li>
            <Link to="" onClick={() => onContactClick()}>
              Контакты
            </Link>
          </li>
          <li>
            <Link to="">Отзывы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
