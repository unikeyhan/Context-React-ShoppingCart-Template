import React, { Component, useContext } from "react";

// Components
import Cart from "./shared/Cart";

//Context
import { cartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return <div><div>
    {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
    </div></div>;
};

export default ShopCart;
