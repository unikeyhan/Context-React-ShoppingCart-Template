import "./App.css";

//context
import ProductsContextProvider from "./context/ProductsContextProvider";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider></ProductsContextProvider>
    </div>
  );
}

export default App;
