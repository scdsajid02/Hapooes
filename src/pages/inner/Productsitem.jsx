import React, { useContext } from 'react'
import { shopContext } from '../../Context'
import { Link } from 'react-router-dom'

const Productsitem = ({id,image,name,price}) => {
    const {currency} = useContext(shopContext)
  return (
   < Link className='text-gray-500 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden'>
       <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'>{currency}{price}</p>
   </Link>
  )
}

export default Productsitem