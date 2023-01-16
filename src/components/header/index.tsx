import React from 'react';
import { useAppSelector } from '../../store/store';
import { Link } from 'react-router-dom';
import './style.scss';


export const Header = () => {
  const categoryPage = useAppSelector((state) => state.categoryPage);

  return (
    <header className="header">
      <nav className="header-container">
        <ul className="header-container__ul">
          <li>
            <Link to="">Главная</Link>
          </li>
          <li>
            <Link to={`/Category/${categoryPage.selectedPageId}`}>
              Категории
            </Link>
          </li>
          <li>
            <Link to="">Контакты</Link>
          </li>
          <li>
            <Link to="">Отзывы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
