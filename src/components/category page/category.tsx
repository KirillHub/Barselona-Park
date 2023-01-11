import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { categoryMeta } from '../meta/categoryMeta';
import { table } from '../../backend/withoutBalcony';
import './style.scss';

interface MyParams {
  id: string;
}

export const Category = () => {
  const { id } = useParams<keyof MyParams>() as MyParams;

  const titleId = id.split('-').join(' ');

  const meta = categoryMeta(id);

  console.log(meta)

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


      <div >
        
      </div>
    </>
  );
};
