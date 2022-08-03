import axios from "axios";

const BASEURL = "https://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios.get(`${BASEURL}/products`);
  return response.data;
};

export { getProducts };
