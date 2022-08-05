import React, { useContext } from "react";
import { Link } from "react-router-dom";

// function
import { shorten } from "../../helpers/function";
import { isInCart } from "../../helpers/function";

//Context
import CartContextProvider from "../../context/CartContextProvider";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CartContextProvider);
  return (
    <div className="col-3 border">
      <img src={productData.image} style={{ width: "100%" }} alt="image" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>

        <div>
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
