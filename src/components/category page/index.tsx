

import './style.scss';
// import { setSelectedPageId } from '../../store/category/slice';

import { ApartmentCard } from './apartments card';
import { CategoryInteraction } from './category interaction';

interface MyParams {
  category: string;
}

export const Category = () => {

  return (
    <>

        {/* <div className="category-page-container">
          <CategoryInteraction />

          <h1 className="category-page-container__name">{1}</h1>

          <ApartmentCard />
        </div> */}

    </>
  );
};
export default Category;
