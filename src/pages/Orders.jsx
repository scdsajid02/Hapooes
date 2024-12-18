import React, { useContext, useEffect , useState } from "react";
import { shopContext } from "../Context";
import Title from "./inner/Title";


const Orders = () => {
  const { products, currency, cartData } = useContext(shopContext);
  const [todayDate, setTodayDate] = useState('')
  useEffect(()=>{
        const today = new Date();
        const options = {month : 'long', day :'numeric', year :'numeric'}
        const formattedDate = today.toLocaleDateString('en-In',options);
        setTodayDate(formattedDate)
  },[])
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

           return (<div
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            key={index}
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
              <div>
                <p className="text-base font-medium">{productData.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {productData.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2">
                  Date <span className="text-gray-400">{todayDate}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready To Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>)

          
        })}
      </div>
    </div>
  );
};

export default Orders;
