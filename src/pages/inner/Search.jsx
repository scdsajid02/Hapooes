import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../Context'
import { assets } from '../frontend_assets/assets';
import { Navigate, useLocation } from 'react-router-dom';

const Search = () => {
    const{search,setSearch,showSearch,setShowSearch} = useContext(shopContext);
    const location = useLocation();
    const [loc,setLoc] = useState(false)
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setLoc(true)
        }
        else{
            setLoc(false)
        }
    },[location])
  return showSearch && loc ? (
    <div className='flex bg-gray-50 border-t border-b items-center justify-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 rounded-full px-5 py-2 mx-2 my-5 w-3/4 md:w-1/2'>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
            <img src={assets.search_icon} alt="" className='w-4 inline cursor-pointer' />
        </div>
        <img src={assets.cross_icon} alt="" className='inline w-3 cursor-pointer'  onClick={()=>setShowSearch(false)}/>
    </div>
  ) : null
}

export default Search