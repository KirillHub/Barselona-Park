import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/_layout';
import { MainPage } from './pages/mainPage';
import { CategoryPage } from './pages/categoryPage';
import { ApartmentPage } from './pages/apartmentPage';
import { NotFoundPage } from './pages/notFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />,
        <Route path="/Category/:category/:sort?/:options?" element={<CategoryPage />} />,
        <Route path="/Apartment/:id" element={<ApartmentPage />} />,
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
