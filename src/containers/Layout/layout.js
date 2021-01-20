import React from "react";

import Header from "../../components/Header/header.component";
import SideNav from "../../components/SideNav/SideNav.component";
import { useSelector } from "react-redux";

import "./layout.styles.scss";

const Layout = (props) => {
  const collapsed = useSelector((state) => state.sideNav.collapsed);
  return (
    <div
      className={`
        ${!props.sideNav ? "side" : ""} 
        ${collapsed ? "collapse" : ""} layout`}
    >
      {props.sideNav ? <SideNav className={`side-nav`} /> : null}
      <Header className='header' />
      <div className='children'>{props.children}</div>
    </div>
  );
};

export default Layout;
