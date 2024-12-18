import React from "react";
import { assets } from "../frontend_assets/assets";
const Policies = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-10 mt-28 mb-20 gap-8 items-center ">
      <div className=" flex flex-col items-center justify-center">
        <img src={assets.exchange_icon} alt="" />
        <p className="font-bold">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer hassle free exchange policy</p>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <img src={assets.quality_icon} alt="" srcset="" />
        <p className="font-bold">7 Days Return Policy</p>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <img src={assets.support_img} alt="" />
        <p className="font-bold">Best customer support</p>
        <p className="text-gray-500">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policies;
