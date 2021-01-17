import React from "react";

import Header from "../../components/Header/header.component";
import SideNav from "../../components/SideNav/SideNav.component";

import Layout from "../../containers/Layout/layout";

import "./home.styles.scss";

const Home = (props) => {
  return (
    <>
      <Layout sideNav>
        <p>Container</p>
      </Layout>
    </>
  );
};

export default Home;
