"use client";

import "./style.scss";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const pathname = usePathname();
  const apartment = pathname?.split("/")[1].split("-")[0];
  const category = pathname?.split("/")[2];

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.pageYOffset > 0);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className='header'
      style={{ backgroundColor: isScrolling ? "rgba(211, 211, 211, 0.4)" : "transparent" }}
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
          {/* <li>
            <Link href="/">Отзывы</Link>
          </li>
          <li>
            <Link href="/">Новости</Link>
          </li>
          <li>
            <Link href="/">Контакты</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
