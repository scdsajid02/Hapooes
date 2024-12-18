import React from "react";

const Footer = () => {
  return (
    <div className="">
      <hr className="mt-28  border border-gray-400 "/>
      <div className="flex flex-col md:items-center md:flex-row mx-10 justify-between py-4  gap-6  ">
        <div className="flex flex-col ">
          <img
            src="https://api.logo.com/api/v2/images?logo=lg_lb3ZotRQLdHlczI1Lx&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-11-21T20%3A23%3A52.888Z"
            alt=""
            className="w-28"
          />
          <p className="">
            <span className="font-black">HAPOOES</span> represents luxury and
            quality. Shop your favorite items now and experience exceptional
            customer service.
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-black text-xl">GET IN TOUCH</h1>
          <p>+91 9347324377</p>
          <p>sajidscd02@gmail.com</p>
          <a
            href="https://api.whatsapp.com/send?phone=919347324377"
            className=""
            target="_blank"
          >
            <img
              src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <hr className="border-2 my-4 border-gray-500" />
      <p className="text-center">
        Copyright &copy; 2024@ Sajid - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
