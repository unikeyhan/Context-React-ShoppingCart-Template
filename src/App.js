import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Store from "./components/Store";
import ProductsDetails from "./components/ProductsDetails";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
