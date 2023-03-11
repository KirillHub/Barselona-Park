import Image from 'next/image';
import Link from 'next/link';
import { categories } from './categories';
import styles from './style.module.scss';

export default function SelectCategory() {
  return (
    <div className={styles.selectCategory}>
      {categories.map((category) => (
        <Link href={category.link} key={category.name}>
          <span>{category.name}</span>
          <div className={styles.selectCategoryImage}>
            <Image
              fill
              quality={75}
              sizes="calc(120px + 160 * (100vw / 1920))"
              src={category.src}
              alt={category.alt}
              style={{ borderRadius: 'calc(8px + 8 * (100vw / 1920))', objectFit: 'contain' }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
