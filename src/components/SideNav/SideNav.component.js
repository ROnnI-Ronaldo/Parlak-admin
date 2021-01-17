import React from "react";

import { NavLink } from "react-router-dom";

import "./sideNav.styles.scss";

const SideNav = (props) => {
  return (
    <div className='side-nav'>
      <ul className='items-list'>
        <li className='item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='item'>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li className='item'>
          <NavLink to='/orders'>Orders</NavLink>
        </li>
        <li className='item'>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
