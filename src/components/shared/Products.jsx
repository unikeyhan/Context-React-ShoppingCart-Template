import React, { useContext } from "react";
import { Link } from "react-router-dom";

// function
import { shorten, isInCart, quantityCount } from "../../helpers/function";

//Context
import { cartContext } from "../../context/CartContextProvider";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="col-3 border">
      <img src={productData.image} style={{ width: "100%" }} alt="image" />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>

        <div>
          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}

          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
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
