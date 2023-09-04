import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { BsFillPersonFill} from 'react-icons/bs'
import Picture2 from '../assets/pic2.jpg'; // Import the image
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
    <h2 className='text-2xl  lg:text-3xl text-center mb-4 pt-5 font-fontt2'>Sign In</h2>
    <div className="md:flex">
      {/* Image section */}
     
      <div className="w-full md:w-1/2">
        <img src={Picture2} alt="pix" className="w-full rounded md:py-[5rem] lg:py-[0rem]" />
      </div>

      {/* Form section */}
      <div className="w-full lg:w-[38rem] md:w-1/2 px-[2rem] md:py-[9rem] lg:py-[11rem] h-2 ">
        <form className="  rounded px-8 pt-7 pb-8 mb-4 bg-gray-100">

{/* username */}
        <div className="mb-4 text-black">
            <div className="relative">
              <label className='pb-2'>Username:
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-7">
                  <BsFillPersonFill className="text-black font-bold" />
                </span>
                <input
                  className="shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            </div>

          {/* Email section */}
          <div className="mb-4 text-black">
            <div className="relative">
              <label className='pb-2'>Email:
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-7">
                  <FiMail className="text-black font-bold" />
                </span>
                <input
                  className="shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          </div>

          

          {/* Password section */}
          <div className="relative">
            <label className='pb-2'>Password:
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-7">
                <FiLock className="text-black font-extrabold" />
              </span>
              <input
                className="shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer pt-7"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </label>
           
          </div>
          <Link
              to="/PicPlus/forgot"
              className="text-blue-700 border-b underline mt-3"
            >
             Forgot password?
            </Link>

          {/* Sign-in button */}
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-[400px] rounded h-11"
              type="button"
            >
              <p className='text-sm'>Sign In</p>
            </button>
          </div>

          {/* Text */}
          <p className='pt-4 text-center'>Don't have an account?
            <Link
              to="/PicPlus/signup"
              className="text-blue-700 border-b underline pl-2"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
