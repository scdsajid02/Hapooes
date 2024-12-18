import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { shopContext } from "../Context";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const { setShowSearch,getCartCount } = useContext(shopContext);
  const location = useLocation();
  const[visible,setVisible] = useState(false)
  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  },[location]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="https://api.logo.com/api/v2/images?logo=lg_lb3ZotRQLdHlczI1Lx&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-11-21T20%3A23%3A52.888Z"
            alt=""
            srcset=""
            className="w-28"
          />
        </Link>
        <div className="md:flex items-center justify-center gap-4 hidden">
          <div>
            <NavLink to="/" className="hover:font-black">
              HOME
              <hr className="w-2/4 mx-auto border-2 border-black hidden" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/collection" className="hover:font-black">
              COLLECTIONS
              <hr className="w-2/4 mx-auto border-2 border-black hidden" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/about" className="hover:font-black">
              ABOUT
              <hr className="w-2/4 mx-auto border-2 border-black hidden" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className="hover:font-black">
              CONTACT
              <hr className="w-2/4 mx-auto border-2 border-black hidden" />
            </NavLink>
          </div>
        </div>
        <div className="flex gap-6">
          {visible ?  <img
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt=""
            srcset=""
            className="w-5 hover:cursor-pointer"
            onClick={() => setShowSearch(true)}
          /> : null}
         
          <div className=" group relative">
           <Link to={'/sign'}> <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
              alt=""
              srcset=""
              className="w-5 hover:cursor-pointer"
            /></Link>
            {/*<div className="group-hover:block hidden absolute right-0  py-4 bg-slate-200">
              <div className="flex flex-col w-52 items-center justify-center gap-1">
                <p className="hover:font-bold ">My profile</p>
                <p className="hover:font-bold ">Orders</p>
                <p className="hover:font-bold ">Log Out</p>
              </div>
            </div>*/}
            
          </div>

          <div className="relative">
            <Link to="/cart">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                alt=""
                srcset=""
                className="w-5"
              />
              <p className="absolute bottom-[-7px] right-[-1px] leading-4 text-center bg-white text-orange-600">
                {getCartCount()}
              </p>
            </Link>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8369/8369198.png"
              alt=""
              srcset=""
              className="w-6 md:hidden "
              onClick={() => setmenu(true)}
            />
          </div>
        </div>
      </div>
      {/* mobile menu*/}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden ${
          menu ? ` w-full` : `w-0`
        } flex items-center justify-center `}
      >
        <div className="flex flex-col gap-6">
          <Link to="/" onClick={() => setmenu(false)}>
            HOME
          </Link>
          <Link to="/collection" onClick={() => setmenu(false)}>
            COLLECTIONS
          </Link>
          <Link to="/about" onClick={() => setmenu(false)}>
            ABOUT
          </Link>
          <Link to="/contact" onClick={() => setmenu(false)}>
            CONTACT
          </Link>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default Navbar;
