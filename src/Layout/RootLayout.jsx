import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const RootLayout = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/signIn', '/portal'];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div className="relative">
      <Header />
      {showNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
