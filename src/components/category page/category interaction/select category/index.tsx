import { Link } from 'react-router-dom';
import { meta } from '../../../meta/categoryMeta';

export const SelectCategory = () => {
  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">Сменить категорию</button>
      <div className="category-page-container__sorting__dropdown__content">

        <Link to="/Category/All-apartments">Все апартаменты</Link>
        <Link to="/Category/With-balcony">С балконом</Link>
        <Link to="/Category/Without-balcony">Без балкона</Link>
        <Link to="/Category/Studio">Студии</Link>
        <Link to="/Category/One-room">Однокомнатные</Link>
        <Link to="/Category/Two-room">Двухкомнатные</Link>
        <Link to="/Category/Three-room">Трехкомнатные</Link>
        <Link to="/Category/Sea-view">Вид на море</Link>
        <Link to="/Category/City-view">Вид на город</Link>
        <Link to="/Category/3-sleeping-places">3 cпальных места</Link>
        <Link to="/Category/4-sleeping-places">4 cпальных места</Link>
        <Link to="/Category/5-sleeping-places">5 cпальных мест</Link>
        <Link to="/Category/6-sleeping-places">6 cпальных мест</Link>
        <Link to="/Category/With-coffee-machine">С кофемашиной</Link>
        <Link to="/Category/With-oven">С духовкой</Link>
        <Link to="/Category/With-dishwasher">С посудомоечной машиной</Link>
        <Link to="/Category/With-oven-and-dishwasher">С духовкой и посудомоечной машиной</Link>
        <Link to="/Category/Select-category">Cброс</Link>
      </div>
    </div>
  );
};
