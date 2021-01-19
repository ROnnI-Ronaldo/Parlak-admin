import React from "react";

import { Section, GlassyEffect2, MenuIcon } from "./sideNav.styles";

import { NavLink } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import {
  FcHome,
  FcViewDetails,
  FcInTransit,
  FcStumbleupon,
} from "react-icons/fc";

import "./sideNav.styles.scss";

const SideNav = (props) => {
  return (
    <div className='side-nav'>
      <Section>
        <AiOutlineDashboard style={{ height: "2.5rem", width: "2.5rem" }} />
        <h1>Admin Dashboard</h1>
        <button className='menu-icon'>
          <MenuIcon />
          <MenuIcon />
          <MenuIcon />
        </button>
      </Section>
      <NavLink className='item' exact={true} to='/'>
        <FcHome className='item-icon' />
        Home
      </NavLink>
      <NavLink className='item' to='/products'>
        <FcViewDetails className='item-icon' />
        Products
      </NavLink>
      <NavLink className='item' to='/orders'>
        <FcInTransit className='item-icon' />
        Orders
      </NavLink>
      <NavLink className='item' to='/categories'>
        <FcStumbleupon className='item-icon' />
        Categories
      </NavLink>
    </div>
  );
};

export default SideNav;
