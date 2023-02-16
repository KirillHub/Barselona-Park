import { useRouter } from 'next/navigation';
import { Options } from './options';
import { Service } from './service';
import { Price } from './price and button';
import { Apartment } from '../../../types/type';
import styles from './style.module.scss';

interface MyProps {
  apartment: Apartment;
}

export const ApartmentInfo = ({ apartment }: MyProps) => {
  const router = useRouter();
  const handleClick = () => router.push(`/Apartment/${apartment.name}`);

  return (
    <div className={styles.info}>
      <p className={styles.infoTitle} onClick={handleClick}>
        Апартамент {apartment.name}
      </p>

      <Options apartment={apartment} />

      <Service apartment={apartment} />

      <Price apartment={apartment} />
    </div>
  );
};
