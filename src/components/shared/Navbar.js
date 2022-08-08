import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { cartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(cartContext);
  const [stateItemsCounter, SetstateItemsCounter] = useState();
  useEffect(() => {
    SetstateItemsCounter(state.itemsCounter);
  }, [state]);
  return (
    <div className="navbar-container-fluid container-fluid bg-light">
      <div className="container">
        <div className="navbar-container">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-primary position-relative"
              >
                <i
                  style={{ color: "#fff" }}
                  className="fa-solid fa-cart-shopping"
                ></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {stateItemsCounter}
                </span>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
