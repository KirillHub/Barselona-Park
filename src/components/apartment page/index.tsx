import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

interface MyParams {
  id: string;
}

export const Apartment = () => {
  const { id } = useParams<keyof MyParams>() as MyParams;

  return <div>{id}</div>;
};
