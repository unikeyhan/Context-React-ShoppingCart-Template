import React, { useContext } from "react";

//Components
import Products from "./shared/Products";

//Context
import { productsContext } from "../context/ProductsContextProvider";

const Store = () => {
  const products = useContext(productsContext);
  return (
    <div className="store-container container">
      <div className="row">
        {products.map((product) => (
          <Products key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
