import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { cartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(cartContext);
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="py-5 d-flex justify-content-between align-items-center">
          <div>
            <Link to="/products">products</Link>
          </div>
          <div>
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-primary position-relative"
              >
                <i
                  style={{ color: "#fff" }}
                  className="fa-solid fa-basket-shopping"
                ></i>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.itemsCounter}
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
