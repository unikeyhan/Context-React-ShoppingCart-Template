import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
