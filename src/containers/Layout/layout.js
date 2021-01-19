import React from "react";

import Header from "../../components/Header/header.component";
import SideNav from "../../components/SideNav/SideNav.component";

import "./layout.styles.scss";

const Layout = (props) => (
  <div className={`${!props.sideNav ? "side" : ""}  layout`}>
    {props.sideNav ? <SideNav className='side-nav' /> : null}
    <Header className='header' />
    <div className='children'>{props.children}</div>
  </div>
);

export default Layout;
