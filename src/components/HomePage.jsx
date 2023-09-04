import React from 'react';
import Pic from '../assets/picturee2.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className="bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 h-[4rem] pt-3 text-3xl font-customFont text-gray-200 text-center">
          PicPlus+
        </h1>
      </div>
      <div className="md:flex">
        <div className="md:w-1/4 pt-[10rem] mx-[3rem] lg:mx-[5rem]">
          <h1 className="text-4xl text-indigo-900 font-extrabold pb-4 border-b-4">
            Explore the World of Photography
          </h1>
          <p className="text-indigo-800 font-semibold mt-8 text-lg">
            Discover the beauty of moments captured in time. Share your memories with the world.<br />
            <div className="relative">
              <p className="text-indigo-800 font-semibold mt-5 pb-3 relative cursor-pointer group w-1/2 lg:w-1/2">
                Let's get started
                <span className="absolute inset-x-0 h-1 bg-indigo-700 bottom-0 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              </p>
            </div>
          </p>
          <div className="flex mt-9">
            <Link
              to="/PicPlus/signin"
              className="bg-purple-700 hover:bg-orange-600 text-white font-semibold text-sm py-3 px-6 rounded-3xl mr-4 transition duration-300 ease-in-out shadow-md shadow-black">
              Sign In
            </Link>
            <Link
              to="/PicPlus/signup"
              className="bg-purple-700 hover:bg-orange-600 text-white text-sm font-semibold py-3 px-6 rounded-3xl transition duration-300 ease-in-out shadow-md shadow-black" >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/4 pt-[5rem]">
          <img src={Pic} alt="pix" className="w-full rounded" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
