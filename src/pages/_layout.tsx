import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

// I plan to move to the next js

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};
