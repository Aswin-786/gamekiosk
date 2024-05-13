import React from "react";
import { Outlet } from "react-router-dom";
import bgImage1 from '../assets/group_103_x2.svg';
import bgImage2 from '../assets/image_1.png';

const Layout = () => {
  return (
    <main className="card h-screen w-full  wrapper" style={{ backgroundImage: `url(${bgImage1}), url(${bgImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Outlet />
    </main>
  );
};

export default Layout;
