import React, { useContext } from "react";
import { shopContext } from "../../Context";
import Title from "./Title";

const Carttotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p>Shipping</p>
            <p>{currency} {delivery_fee}.00</p>
        </div>
        <div className="flex justify-between">
          <b>Total</b>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Carttotal;
