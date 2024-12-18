import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../Context";
import Title from "./Title";
import Productsitem from "./Productsitem";

const Related = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related.map((item,index)=>(
            <Productsitem key={index} id ={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Related;
