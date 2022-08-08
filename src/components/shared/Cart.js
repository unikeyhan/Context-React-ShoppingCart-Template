import React, { useContext } from "react";

//Context
import { cartContext } from "../../context/CartContextProvider";

// Functions
import { shorten } from "../../helpers/function";

const Cart = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button className="REMOVE_ITEM"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
