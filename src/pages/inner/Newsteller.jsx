import React from 'react'

const Newsteller = () => {
    function onsubmit (event){
       event.preventDefault()
    }
  return (
    <div className="flex flex-col items-center w-full  justify-center gap-4">
      <p className='font-black text-2xl'>Subscribe now & get 20% off</p>
      <form onSubmit={onsubmit} className='flex w-full md:w-1/2 border border-black'>
        <input className='w-full p-3' type="email" placeholder='Enter your email' required/>
        <button className='bg-black text-white py-3 px-6 text-sm'>SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default Newsteller