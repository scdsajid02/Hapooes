import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex gap-2 items-center justify-center my-4'>
      <p className='font-black md:text-xl'>{text1} <span className='font-medium'>{text2}</span></p>
      <p className='w-8 md:w-12 h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title