import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-container">
        <ul className="header-container__ul">
          <li>
            <Link to="">Апартаменты</Link>
          </li>
          <li>
            <Link to="/Category" >Категории</Link>
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
