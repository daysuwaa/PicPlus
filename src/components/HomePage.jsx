import React from 'react';
import Pic from '../assets/picturee2.png';

const HomePage = () => {
  return (
    <div class="md:flex">
      <div class="md:w-1/4 pt-[3rem] px-9">
        <h1 className='text-3xl text-blue-800 font-bold pb-3 border-b border-blue-950'>Post your Pictures</h1>
        <p className='text-blue-500 font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa rem eligendi est aut a. Vel, hic qui dolor cumque nulla assumenda voluptas aliquam cum asperiores omnis quod libero cupiditate.</p>
      </div>

      <div class="w-full md:w-3/4 pt-[3rem]"> {/* Use w-full for xs and w-3/4 for md and larger screens */}
        <img src={Pic} alt='pix' className='w-full' /> {/* Use w-full to take up the full width */}
      </div>
    </div>
  );
}

export default HomePage;
