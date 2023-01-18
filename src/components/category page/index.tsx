import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Helmet } from 'react-helmet';
import { categoryMeta } from '../meta/categoryMeta';
import { SelectCategory } from '../main page/category';

import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';

import './style.scss';
import { setSelectedPageId } from '../../store/category/slice';

import { ApartmentCard } from './apartments card';
import { CategoryInteraction } from './category interaction';

interface MyParams {
  category: string;
}

export const Category = () => {
  const dispatch = useAppDispatch();
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const { category } = useParams<keyof MyParams>() as MyParams;

  const meta = categoryMeta(categoryPage.selectedPageId);

  useEffect(() => {
    dispatch(setSelectedPageId(category));
  }, [category]);

  return (
    <>
      <Helmet>
        <title>{`${meta?.title}`}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords} />
        <meta name="Document-state" content="Dynamic" />
        <meta name="Author" content="https://github.com/bi-zi" />
        <meta name="Copyright" content="bi_zi" />
      </Helmet>

      <div>
        {categoryPage.selectedPageId !== 'Select-category' ? (
          <div className="category-page-container">
            <CategoryInteraction />

            <h1 className="category-page-container__name">Категория - {meta?.title}</h1>

            <ApartmentCard />
          </div>
        ) : (
          <SelectCategory />
        )}
      </div>
    </>
  );
};
