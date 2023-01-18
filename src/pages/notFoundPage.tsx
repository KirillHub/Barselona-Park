import { Link } from 'react-router-dom';
import './style.scss';

export const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-page-container">
        <div>Страница не найдена</div>
        <Link to="/" className="not-found-page-container-redirect">
          Перейти на главную страницу
        </Link>
      </div>
    </>
  );
};
