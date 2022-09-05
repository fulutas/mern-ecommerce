import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./css/app.css";
import "./css/variables.css";

import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import { User } from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Error404 from "./pages/Error404/Error404";

function App() {
  
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="*" exact element={<Error404 />} /> 
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newuser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
