import React from "react";

import { NavLink } from "react-router-dom";

import "./sideNav.styles.scss";

const SideNav = (props) => {
  return (
    <div className='side-nav'>
      <NavLink className='item' exact={true} to='/'>
        Home
      </NavLink>

      <NavLink className='item' to='/products'>
        Products
      </NavLink>

      <NavLink className='item' to='/orders'>
        Orders
      </NavLink>

      <NavLink className='item' to='/categories'>
        Categories
      </NavLink>
    </div>
  );
};

export default SideNav;
