import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Banner />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
