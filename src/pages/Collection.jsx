import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context";
import { assets } from "./frontend_assets/assets";
import Title from "./inner/Title";
import Productsitem from "./inner/Productsitem";

const Collection = () => {
  const { products,search ,showSearch } = useContext(shopContext);
  
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setsortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };

 const sortproducts = ()=>{
  let srproducts = filteredProducts.slice()
  switch (sortType) {
    case 'low-high':
      setFilteredProducts(srproducts.sort((a,b) => (a.price - b.price)))
      break;
  
    case 'high-low' :
       setFilteredProducts(srproducts.sort((a, b) => b.price - a.price))
       break;

    default :
     applyFilter();
     break;
  }
 }
 useEffect(()=>{
  sortproducts();
 },[sortType])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory , search , showSearch]);

  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <div className="flex items-center gap-1">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 md:hidden ${showFilter ? `rotate-90` : ``}`}
          />
        </div>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? `` : `hidden`
          } md:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* Subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? `` : `hidden`
          } md:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubcategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleSubcategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubcategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base md:2xl mb-4">
          <Title text1="All" text2="COLLECTIONS" />
          {/* Sort */}
          <select onChange={(e)=>setsortType(e.target.value)} className="border border-gray-500 text-sm px-2 h-10 md:mr-6 mr-3 mt-2">
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <Productsitem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
