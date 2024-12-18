import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../Context";
import Title from "./Title";
import Productsitem from "./Productsitem";

const Bestseller = () => {
  const { products } = useContext(shopContext);
  const [ bestsellers, setbestsellers ] = useState([]);
  useEffect(() => {
    const bestproducts = products.filter((item) => item.bestseller);
    setbestsellers(bestproducts.slice(0, 5));
  }, []);
  return (
    <>
      <div>
        <Title text1={"BEST"} text2={"SELLER"}></Title>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestsellers.map((item, index) => (
          <Productsitem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Bestseller;
