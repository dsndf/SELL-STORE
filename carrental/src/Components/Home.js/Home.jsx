import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[100vh]  flex  flex-col justify-center items-center">
        <h1 className="text-[40px]  m-10">Welocme</h1>
      <Link to={'/page/1'}>
        <button className="text-xl py-2 px-10 bg-[#e8e8e8] transition-all duration-[500] hover:bg-[#cccccc] ">Check cars</button>
      </Link>
    </section>
  );
};

export default Home;
