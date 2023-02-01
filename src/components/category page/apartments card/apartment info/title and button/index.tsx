// import { useParams, useNavigate } from 'react-router-dom';
import { Apartment } from '../../../../types/type';

interface MyParams {
  id: string;
}

interface MyProps {
  apartment: Apartment;
}

export const TitleAndButton = ({ apartment }: MyProps) => {
  // const { id } = useParams<keyof MyParams>() as MyParams;
  // const navigate = useNavigate();

  // const handleClick = (id: string) => navigate(`/Apartment/${id}`);
  // const handleClickBack = () => navigate(-1);

  return (
    <div className="category-page-container__apartments-card__info__apartment">
      <div>
        <p>
          Апартамент <span>{apartment.name}</span>
        </p>
      </div>
    </div>
  );
};

//  {
//    id !== undefined ? (
//      <button onClick={() => handleClickBack()}>Вернуться назад</button>
//    ) : (
//      <button onClick={() => handleClick(apartment.name)}>Перейти к апартаменту</button>
//    );
//  }
