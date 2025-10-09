import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Layout = () => {
  const location = useLocation();
  const isEventDetailPage = location.pathname === '/eventdetails';
  const isPreEventPage = location.pathname === '/preevents';
  const isNonTechPage = location.pathname === '/nontech';
  const isTechPage = location.pathname === '/tech';

  return (
    <>
      {/* ✅ Main content container with bottom padding to prevent overlap */}
      <main className="min-h-screen pb-24 md:pb-0 overflow-x-hidden">
        <Outlet />
      </main>

      {/* ✅ Navbar is always visible */}
      {!isEventDetailPage && <Navbar />}

      {/* ✅ Footer is hidden only on event details page */}
      {!isEventDetailPage && !isPreEventPage && !isNonTechPage && !isTechPage && <FooterSection />}
    </>
  );
};

export default Layout;
