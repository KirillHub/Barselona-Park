"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./style.scss";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const pathname = usePathname();
  const apartment = pathname?.split("/")[1].split("-")[0];
  const category = pathname?.split("/")[2];

  const checkHeader =
    category === "Select-category" || apartment === "Apartment";

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${
        scrollPosition >= 100 || checkHeader ? "headerBlack" : ""
      }`}
    >
      <nav className="header-container">
        <p className="header-p">
          <Link href="">Барселона парк</Link>
        </p>

        <ul className="header-container__ul">
          <li>
            <Link href="/">Главная</Link>
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
