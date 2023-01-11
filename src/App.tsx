import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/_layout';
import { MainPage } from './pages/mainPage';
import { CategoryPage } from './pages/categoryPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />,
        <Route path="/Category/:id" element={<CategoryPage />} />,
      </Route>
    </Routes>
  );
};
