import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

interface MyParams {
  category: string;
}

export const Apartment = () => {
  const { category } = useParams<keyof MyParams>() as MyParams;

  return <div>{category}</div>;
};
