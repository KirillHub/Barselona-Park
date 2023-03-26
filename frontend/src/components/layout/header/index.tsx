"use client";

import "./style.scss";

import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

export const Header = () => {

  const pathname = usePathname();
  const apartment = pathname?.split("/")[1].split("-")[0];
  const category = pathname?.split("/")[2];



  return (
    <header
      className='header'
    >
      <nav className='header-container'>
        <p className='header-p'>
          <Link href=''>Барселона парк</Link>
        </p>

        <ul className='header-container__ul'>
          <li>
            <Link href='/'>Главная</Link>
          </li>
          <li>
            <Link href={`/Category/Select-category`}>Категории</Link>
          </li>
          <li>
            <Link href="/">Отзывы</Link>
          </li>
          <li>
            <Link href="/">Новости</Link>
          </li>
          <li>
            <Link href="/">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
