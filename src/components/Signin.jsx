import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import Picture2 from '../assets/pic2.jpg'; // Import the image


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    <div className="md:flex">
    <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
      <div className="w-full md:w-1/2 pt-[5rem]">
        <img src={Picture2} alt="pix" className="w-full rounded " />
      </div>

      <div className=" w-full max-w-sm mx-auto  h-2">
           <form className="lg:bg-gray-100 lg:shadow-md rounded px-8 pt-7 pb-8 mb-4">
        
           <div className="mb-4 text-black">
  <div className="relative">
    <label className='pb-2'>Email:
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-6">
      <FiMail className="text-black font-bold" /> {/* Email icon */}
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

<div className="relative">
<label className='pb-2 '>Password:
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-7 ">
    <FiLock className="text-black font-extrabold" /> {/* Password icon */}
  </span>
  <input
    className="shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
    type={showPassword ? 'text' : 'password'}
   
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  </label>
  <span
    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer pt-6"
    onClick={handlePasswordToggle}
  >
    {showPassword ? <FiEyeOff /> : <FiEye />}
  </span>
</div>

          
<div className="flex items-center justify-center mt-6">
  <button
    className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-[400px] rounded h-11"
    type="button"
  >
    <p className='text-sm'>Sign In</p>
  </button>
</div>

      </form>
    </div>


    </div>
  );
};

export default SignIn;
