'use client';


import { ApartmentCard } from '../../../components/category page/apartments card';
import { CategoryInteraction } from '../../../components/category page/category interaction';

export const Page = () => {

  return (
    <div className="category-page-container">
      <CategoryInteraction />

      <h1 className="category-page-container__name">{}</h1>

      <ApartmentCard />
    </div>
  );
};

export default Page;
