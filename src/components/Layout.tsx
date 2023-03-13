import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
const Layout: FC<LayoutProps> = ({ children }) => {
    <div className="w-full h-screen bg-white overflow-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
