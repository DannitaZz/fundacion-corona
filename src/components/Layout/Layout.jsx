import React from 'react';
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom';

export const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;