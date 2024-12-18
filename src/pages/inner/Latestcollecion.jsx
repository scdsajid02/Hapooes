import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../Context";
import Title from "./Title";
import Productsitem from "./Productsitem";

const Latestcollecion = () => {
  const { products } = useContext(shopContext);
  const [latestproducts, setlatestproducts] = useState([]);

  useEffect(() => {
    setlatestproducts(products.slice(6, 16));
  }, []);
  return (
    <div>
      <div>
        <Title text1={"LATEST"} text2={"COLLECTION"}></Title>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestproducts.map((item, index) => (
          <Productsitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Latestcollecion;
