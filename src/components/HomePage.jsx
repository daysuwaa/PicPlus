import React from 'react';
import Pic from '../assets/picturee2.png';

const HomePage = () => {
  return (
    <div class="md:flex">
  
      <div class="md:w-1/4">
        dakmmlsdm'l
      </div>

      <div class="w-3/4 pt-[3rem]"> {/* Change the width to 3/4 */}
        <img src={Pic} alt='pix' className='w-full lg:ml-[0rem] ' /> {/* Change width to w-full */}
      </div>
    </div>
  );
}

export default HomePage;
