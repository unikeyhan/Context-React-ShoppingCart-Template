import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContextProvider";
import Products from "./shared/Products";

const Store = () => {
  const products = useContext(productsContext);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Products key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
