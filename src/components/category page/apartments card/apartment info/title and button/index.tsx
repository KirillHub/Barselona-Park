import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Apartment } from '../../../../types/type';
import './style.scss';

interface MyProps {
  apartment: Apartment;
}

export const TitleAndButton = ({ apartment }: MyProps) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => navigate(`/Apartment/${id}`);

  return (
    <div className="category-page-container__apartments-card__info__apartment">
      <div>
        <p>
          Апартамент <span>{apartment.name}</span>
        </p>
      </div>
      <button onClick={() => handleClick(apartment.name)}>Перейти к апартаменту</button>
    </div>
  );
};
