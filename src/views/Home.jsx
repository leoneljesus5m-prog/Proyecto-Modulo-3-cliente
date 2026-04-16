import React from "react";
import "../styles/Home.css";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <span className="homeTitle">HOME</span>
      </div>
    </>
  );
};

export default Home;
