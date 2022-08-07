import React, { useContext } from "react";

//Context
import { cartContext } from "../../context/CartContextProvider";

const Cart = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;
  return <div>Cart</div>;
};

export default Cart;
