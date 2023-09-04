import React, { useState } from 'react';
import { FiEye, FiEyeOff} from 'react-icons/fi';
import Picture2 from '../assets/pic2.jpg'; // Import the image
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    // Check if any required fields are empty
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with the sign-in logic
    // ...
  };

  return (
    <div>
      <h2 className='text-2xl lg:text-3xl text-center mb-4 pt-5 font-fontt2'>Log In</h2>
      <div className="md:flex">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img src={Picture2} alt="pix" className="w-full rounded md:py-[5rem] lg:py-[0rem]" />
        </div>

        {/* Form section */}
        <div className="w-full lg:w-[38rem] md:w-1/2 px-[2rem] md:py-[9rem] lg:py-[11rem] h-2 ">
          <form className="  rounded px-8 pt-7 pb-8 mb-4 bg-gray-100">

            {/* Username */}
            <div className="mb-4 text-black">
              <label className='pb-2'>Username:</label>
              <div className="relative">
                <div className="flex items-center">
                 
                  <input
                    className={`shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 ${errors.username && 'border-red-500'}`}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required // Required field
                  />
                </div>
              </div>
              {errors.username && <p className="text-red-500 text-sm mt-2">{errors.username}</p>}
            </div>

            {/* Password section */}
            <div className="mb-4 text-black">
              <label className='pb-2'>Password:</label>
              <div className="relative">
                <div className="flex items-center">
                  
                  <input
                    className={`shadow appearance-none border border-black rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 ${errors.password && 'border-red-500'}`}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required // Required field
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={handlePasswordToggle}
                  >
                    {showPassword ? <FiEyeOff className="text-black" /> : <FiEye className="text-black" />}
                  </span>
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>

            <Link
              to="/PicPlus/forgot"
              className="text-blue-700 border-b underline mt-3 block"
            >
              Forgot password?
            </Link>

            {/* Sign-in button */}
            <div className="flex items-center justify-center mt-6">
  <Link to="/PicPlus/post">
    <button
      className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded h-11 w-[320px]"
      type="button"
      onClick={handleSignIn}
     
    >
      <p className='text-sm'>Sign In</p>
    </button>
  </Link>
</div>


          <p className='py-3'>Don't have an account?
          <Link
              to="/PicPlus/signup"
              className=" text-blue-700  underline py-3 px-3 rounded-3xl transition duration-300 ease-in-out " >
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
