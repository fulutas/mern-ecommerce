import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SuccessPayment from "./pages/SuccessPayment";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // Get Auth User Detail Redux State
  const user = useSelector(state => state.user.currentUser)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/success-payment" element={<SuccessPayment />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
