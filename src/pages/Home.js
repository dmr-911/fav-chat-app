import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
