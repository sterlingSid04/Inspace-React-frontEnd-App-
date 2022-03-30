
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact  path="/" element = {<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route exact  path="/products" element = {<Product/>} />
        <Route exact  path="/productsList" element = {<ProductList/>} />
        <Route exact  path="/register" element = {<Register/>} />
        <Route exact  path="/cart" element = {<Cart/>} />

      </Routes>
    </>
  )
};

export default App;