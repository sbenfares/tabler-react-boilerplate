import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { headerItems } from "../../../data/layout/header";
import { menuItems } from "../../../data/layout/menu";
import { footerItems } from "../../../data/layout/footer";

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
