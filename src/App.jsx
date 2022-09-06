import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./css/app.css";
import "./css/variables.css";

import Home from "./pages/Home/Home";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import { User } from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
        {admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newuser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        ) : (
          <Login />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
