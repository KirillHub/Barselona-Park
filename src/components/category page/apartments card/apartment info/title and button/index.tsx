// import { useParams, useNavigate } from 'react-router-dom';
import { usePathname, useRouter } from 'next/navigation';
import { Apartment } from '../../../../types/type';

interface MyParams {
  id: string;
}

interface MyProps {
  apartment: Apartment;
}

export const TitleAndButton = ({ apartment }: MyProps) => {

    const pathname = usePathname();

    const link = pathname?.split('/')[1] === 'Apartment' ? true : false;

    const router = useRouter();


  const handleClick = (id: string) => router.push(`/Apartment/${id}`);
  const handleClickBack = () => router.back();

  return (
    <div className="category-page-container__apartments-card__info__apartment">
      <div>
        <p>
          Апартамент <span>{apartment.name}</span>
        </p>
      </div>
      {link ? (
        <button onClick={() => handleClickBack()}>Вернуться назад</button>
      ) : (
        <button onClick={() => handleClick(apartment.name)}>Перейти к апартаменту</button>
      )}
    </div>
  );
};


