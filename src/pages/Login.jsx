import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "../components/Logo";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 95vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  background-color: black;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  ${mobile({ fontSize: "17px" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #f3f3f3;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f27919;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
  ${mobile({ width: "100%", fontSize: "14px" })}
`;

const Error = styled.div`
  color: #7f2424;
  font-weight: 500;
`

const Text = styled.span`
  margin: 5px 0px 0px 0px;
  font-size: 13px;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // Get User Redux State
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <>
      <Navbar/>
      <LogoWrapper>
        {/* <Logo /> */}
      </LogoWrapper>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} disabled={isFetching}>
              {isFetching &&
              <svg className="animate-spin" style={{ marginLeft : '-.25rem', marginRight : '.75rem', height : '1.25rem', width : '1.25rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              }
             SIGN IN
            </Button>
            {error && <Error>Somenthing went wrong...</Error>}
            <Text>Do not you remember the password?</Text>
            <Link className="link" to='/register'> 
              <Text>Create a new account</Text>
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
