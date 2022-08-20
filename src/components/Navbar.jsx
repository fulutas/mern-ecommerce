import React from "react";
import styled from "styled-components";
import {
  Search as SearchIcon,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../redux/store";
import { logout, logoutFailure } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid #e5e5e5;
  ${mobile({ height: "50px", width: "90%" })}
`;

const Wrapper = styled.div`
  /* padding: 0px 20px; */
  margin: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    margin: "20px 0px 20px",
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 2px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background: #f3f3f3;
  ${mobile({ marginTop: "10px", marginLeft: "0px" })}
`;

const Input = styled.input`
  border: none;
  background: #f3f3f3;
  ${mobile({ width: "89vw" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginTop: "10px", marginBottom: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "13px", marginleft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const userData = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log(userData);

  const handleLogout = async () => {
    try {
      await persistor.purge() // State clear
      dispatch(logout())
      return navigate('/')
    } catch (error) {
      dispatch(logoutFailure())
      console.log(error)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "#F27A1A", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" className="link" style={{ color: "black" }}>
            <Logo>BRAND</Logo>
          </Link>
        </Center>
        <Right>
          {!userData && (
            <>
              <Link to='/register' className='link'>
              <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to='/login' className='link'> 
              <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          {userData && <MenuItem>My Account
          </MenuItem>}
          {userData &&<MenuItem onClick={handleLogout}>Logout</MenuItem>}
          <Link to="/cart" className="link">
            <MenuItem type="cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
                Cart
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
