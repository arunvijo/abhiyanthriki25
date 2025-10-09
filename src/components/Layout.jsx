import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Layout = () => {
  const location = useLocation();
  
  // Check if the current page is the homepage or the event details page.
  const isHomePage = location.pathname === '/';
  const isEventDetailPage = location.pathname === '/eventdetails';

  return (
    <>
      {/* ✅ Main content container.
        The bottom padding is now applied ONLY on the homepage to prevent 
        the footer from overlapping content on mobile.
      */}
      <main className={`min-h-screen overflow-x-hidden ${isHomePage ? 'pb-24 md:pb-0' : ''}`}>
        <Outlet />
      </main>

      {/* ✅ Navbar is hidden only on the event details page */}
      <Navbar />

      {/* ✅ Footer is now shown ONLY on the homepage */}
      {isHomePage && <FooterSection />}
    </>
  );
};

export default Layout;