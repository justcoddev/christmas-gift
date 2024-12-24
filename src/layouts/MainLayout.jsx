import Footer from '@/assets/shared/Footer';
import Header from '@/assets/shared/Header';
import React from 'react';
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] ">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pb-20 pt-16 md:pt-24 md:pb-16 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-2">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;