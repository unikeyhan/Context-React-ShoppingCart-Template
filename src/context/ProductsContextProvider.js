import React, { useEffect, useState, createContext } from "react";
import { getProducts } from "../services/api";

const productsContext = createContext();

const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    fetchApi();
    console.log(products);
  }, []);

  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
