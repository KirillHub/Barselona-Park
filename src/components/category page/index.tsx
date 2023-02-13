'use client';

import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import './style.scss';

export const Category = () => {
  return (
    <>
      <h1 className="category-page-container__name">{123123}</h1>
      <div className="category-page-container">
        <CategoryInteraction />

        <ApartmentCard />
      </div>
    </>
  );
};

export default Category;
