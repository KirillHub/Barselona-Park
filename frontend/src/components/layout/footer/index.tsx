"use client";

import { Telegram, Whatsapp } from "../../../svg";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div
          className={
            styles.footer__column_first_child + " " + styles.footer__column
          }
        >
          <Link href="/" className={styles.footer__column_image}>
            <img src="/BarselonaParkLogo.png" alt="Логотип"></img>
          </Link>

          <p>
            Мы, стремимся обеспечить нашим гостям незабываемый и комфортный
            отдых во время их пребывания в наших апартаментах.
          </p>
          <Link href="/" className={styles.footer__column_more}>
            Читать ещё ➜
          </Link>
        </div>

        <div className={styles.footer__column}>
          <h4>Контактная информация</h4>
          <p>Курортный пр., 59, Сочи, Краснодарский край, 354000</p>
          <p>+7 (988) 130-62-17</p>
          <Link href="/">barselona_park@mail.ru</Link>
          <Link href="/">www.barselona-park.vercel.app/</Link>
        </div>

        <div className={styles.footer__column}>
          <h4>Ссылки</h4>
          <div className={styles.footer__column_links}>
            <div>
              <Link href="/">О нас</Link>
              <br />
              <Link href="/">Команда</Link>
              <br />
              <Link href="/">Новости</Link>
              <br />
              <Link href="/">Галерея</Link>
              <br />
              <Link href="/">Контакты</Link>
              <br />
            </div>

            <div>
              <Link href="/">Категории</Link>
              <br />
              <Link href="/">Массаж</Link>
              <br />
              <Link href="/">Поблизости</Link>
              <br />
              <Link href="/">Услуги</Link>
              <br />
              <Link href="/">Парковка</Link>
            </div>
          </div>{" "}
        </div>

        <div className={styles.footer__column}>
          <h4>Наши соцсети</h4>

          <div className={styles.footer__column_social}>
            <p>Социальные сети</p>
            <a
              className={styles.footer__column_social_icon}
              href="https://wa.me/+79881306217"
            >
              <Whatsapp />
            </a>
            <a
              className={styles.footer__column_social_icon}
              href="https://t.me/+79881306217"
            >
              <Telegram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p>© 2023 Барселона парк. Все права защищены.</p>

        <div>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
