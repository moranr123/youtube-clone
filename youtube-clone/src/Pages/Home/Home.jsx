import React from "react";
import "./Home.css"; // Assuming you have a CSS file for styling
import Sidebar from "../../Components/Sidebar/Sidebar";



const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}  />
    </>
  );
}

export default Home;