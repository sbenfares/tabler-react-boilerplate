import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { headerItems, menuItems, footerItems } from "../../../data/layoutData";

const Layout = (props) => {
  return (
    <>
      <Header headerItems={headerItems} />
      <Navbar menuItems={menuItems} />
      <div className="content">
        {props.children}
        <Footer footerItems={footerItems} />
      </div>
    </>
  );
};

export default Layout;
