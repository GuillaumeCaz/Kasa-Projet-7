import React from "react";
import "../styles/home.css";
import Layout from "../components/Layout";
import WallPaper from "../components/WallPaper";
import LocationList from "../components/LocationList";

const Home = () => {
  return (
    <Layout>
      <WallPaper />
      <LocationList />
    </Layout>
  );
};

export default Home;
