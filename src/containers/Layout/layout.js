import React from "react";

import Header from "../../components/Header/header.component";
import SideNav from "../../components/SideNav/SideNav.component";

import "./layout.styles.scss";

const Layout = (props) => (
  <>
    <Header />
    <div className={`${props.sideNav ? "children" : ""}`}>
      {props.sideNav ? <SideNav /> : null}
      {props.children}
    </div>
  </>
);

export default Layout;
