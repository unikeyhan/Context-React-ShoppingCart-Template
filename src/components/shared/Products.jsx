import React, { useContext } from "react";
import { Link } from "react-router-dom";

// function
import { shorten, isInCart, quantityCount } from "../../helpers/function";

//Context
import { cartContext } from "../../context/CartContextProvider";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="product-box col-sm-6 col-md-4 col-lg-3">
      <div>
        <Link to={`/products/${productData.id}`}>
          <img src={productData.image} style={{ width: "100%" }} alt="image" />
        </Link>
        <div className="title-price">
          <h3 title={productData.title}>{shorten(productData.title)}</h3>
          <p>{productData.price} $</p>
        </div>
        <div className="details-buttons">
          <Link to={`/products/${productData.id}`}>Details</Link>
          <div className="buttons">
            {quantityCount(state, productData.id) === 1 && (
              <button
                className="REMOVE_ITEM"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <button
                className="DECREASE"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <span className="counter">{quantityCount(state, productData.id)}</span>
            )}
            {isInCart(state, productData.id) ? (
              <button
                className="INCREASE"
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button
                className="ADD_ITEM"
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
    </div>
  );
};

export default Products;
