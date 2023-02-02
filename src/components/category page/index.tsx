'use client';

import { ApartmentCard } from '../../components/category page/apartments card';
import { CategoryInteraction } from '../../components/category page/category interaction';
import './style.scss'

export const Category = () => {
  return (
    <div className="category-page-container">
      <CategoryInteraction />

      <h1 className="category-page-container__name">{}</h1>

      <ApartmentCard />
    </div>
  );
};

export default Category;
