import Link from 'next/link';
import './style.scss';

export const Header = () => {
  const onContactClick = () => {};

  return (
    <header className="header">
      <nav className="header-container">
        <ul className="header-container__ul">
          <li>
            <Link href="">Главная</Link>
          </li>
          <li>
            <Link href={`/Category/Select-category`}>Категории</Link>
          </li>
          <li></li>
          <li>
            <Link href="">Отзывы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
