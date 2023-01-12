import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Helmet } from 'react-helmet';
import { categoryMeta } from '../meta/categoryMeta';
import { SelectCategory } from '../main page/category';

import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { table } from '../../backend/withoutBalcony';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import { setSelectedPageId } from '../../store/category/slice';

interface MyParams {
  id: string;
}

export const Category = () => {
  const dispatch = useAppDispatch();
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const { id } = useParams<keyof MyParams>() as MyParams;

  const titleId = id.split('-').join(' ');

  const navigate = useNavigate();
  const handleClick = (id: string) => navigate(`/Apartment/${id}`);

  const arr = table;

  const meta = categoryMeta(categoryPage.selectedPageId);

  const checkCategory =
    categoryPage?.selectedPageId === 'Select-category' && id === 'Select-category'
      ? 'Select-category'
      : id === 'Select-category'
      ? categoryPage.selectedPageId
      : id;

  const settings = {
    className: 'center',
    centerPadding: '0px',
    centerMode: false,
    infinite: true,
    draggable: false,
    autoplaySpeed: 0,
    autoplay: false,
    slidesToShow: 2,
    speed: 500,
    rows: 1,
  };

  useEffect(() => {
    dispatch(setSelectedPageId(checkCategory));
  }, [id]);

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
        {checkCategory !== 'Select-category' ? (
          <div className="category-page-container">
            <div className="category-page-container__sorting"></div>

            <div className="category-page-container__apartments">
              {arr.map((apartment) => (
                <div className="category-page-container__apartments-card" key={apartment.name}>
                  <div className="category-page-container__apartments-card__images">
                    <Slider {...settings}>
                      {apartment.pictures.map((picture, index) => (
                        <img className="picture" src={picture} alt="1" key={index} />
                      ))}
                    </Slider>
                  </div>

                  <div className="category-page-container__apartments-card__info">
                    <div className="category-page-container__apartments-card__info__apartment">
                      <div>
                        <p>
                          Апартамент <span>{apartment.name}</span>
                        </p>
                      </div>
                      <button onClick={() => handleClick(apartment.name)}>Перейти к апартаменту</button>
                    </div>

                    <div className="category-page-container__apartments-card__info__price">
                      <div>
                        <p>{apartment.summerPrice} ₽</p>
                        <span>Летний сезон (с 1 июня по 1 октября)</span>
                      </div>
                      <div>
                        <p>{apartment.winterPrice} ₽</p>
                        <span>Зимний сезон (с 1 октября по 1 июня)</span>
                      </div>
                    </div>

                    <div className="category-page-container__apartments-card__info__row">
                      <span>Комнат - {apartment.rooms}</span>
                      <span>Спальных мест - {apartment.sleepingPlaces}</span>
                      <span>кв. м - {apartment.squareMeters}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <SelectCategory />
        )}
      </div>
    </>
  );
};
