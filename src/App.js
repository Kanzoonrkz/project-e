import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
