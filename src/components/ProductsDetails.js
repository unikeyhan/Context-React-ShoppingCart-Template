import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { productsContext } from "../context/ProductsContextProvider";

const ProductsDetails = (props) => {
  const data = useContext(productsContext);
  const params = useParams();
  const product = data[params.id - 1];

  const { id, title, price, description, category, image, rating } = product;

  return (
    <div>
      <img src={image} />
      <p>{description}</p>
      <p>
        <span>category</span>
        {category}
      </p>
      <p>
        <span>{price}$</span>
        <Link to="/product">Back to Shop</Link>
      </p>
    </div>
  );
};

export default ProductsDetails;
