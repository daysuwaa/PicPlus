import React from 'react';
import Pic from '../assets/picturee2.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="md:flex">
      <div className="md:w-1/4 pt-16 mx-10">
        <h1 className="text-4xl text-indigo-900 font-extrabold pb-4 border-b-4  ">
          Explore the World of Photography
        </h1>
        <p className="text-indigo-800 font-semibold mt-8">
          Discover the beauty of moments captured in time. Share your memories with the world.<br></br>
          <div className="relative">
          <p className="text-indigo-800 font-semibold mt-5 pb-3 relative cursor-pointer group w-1/2 lg:w-1/2 ">
          Let's get started
       <span className="absolute inset-x-0 h-1 bg-indigo-700 bottom-0 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
       </p>
    </div>

        </p>
        <div className="flex mt-9">
          <Link
            to="/PicPlus/signin"
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm py-3 px-6 rounded-3xl mr-4 transition duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            to="/PicPlus/signup"
            className="bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold py-3 px-6 rounded-3xl transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="w-full md:w-3/4 pt-4">
        <img src={Pic} alt="pix" className="w-full rounded " />
      </div>
    </div>
  );
};

export default HomePage;
