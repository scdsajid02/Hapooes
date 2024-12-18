import React from 'react'
import Hero from '../frontend_assets/hero_img.png'

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  border border-slate-500 my-4">
        <div className="flex flex-col items-center w-1/2 py-10 text-center">
         
          <p className="font-black  banner text-4xl">BRAND OF QUALITY</p>
        </div>
        <hr className='md:hidden block'/>
        <div className="md:w-1/2 w-full">
          <img
            src={Hero}
            alt=""
            srcset=""
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Banner