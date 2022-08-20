import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 95vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
  width: 40%;
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
  flex-wrap: wrap;
  flex-direction: column;
  ${mobile({ flexDirection: "column" })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #f3f3f3;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px 10px;
`;

const Text = styled.span`
  margin: 5px 0px 0px 0px;
  font-size: 13px;
  cursor: pointer;
`;

const Button = styled.button`
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
  ${mobile({ width: "100%", fontSize: "14px" })}
`;

const Error = styled.div`
  color: #7f2424;
  font-weight: 500;
`

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  // Get User Redux State
  const { isFetching, registerError } = useSelector((state) => state.user);

  const data = {
    name,
    lastname,
    username,
    email,
    password,
  };
  
  const dataNullCheck = Object.values(data).some(value => {
    if (value === '') {
      return true;
    }
    return false;
  });
  

  const handleRegister = (e) => {
    e.preventDefault();

    if(dataNullCheck){
      alert('You must enter all fields.')
    }

    register(dispatch, data);
  };

  return (
    <>
      <Navbar />
      <LogoWrapper>{/* <Logo /> */}</LogoWrapper>
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form>
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              type='text'
            />
            <Input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
              type='text'
            />
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              type='text'
            />
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
            />
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              required
            />
            <Input
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type='password'
              required
            />
            <Agreement>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              nulla.
              <br />
              <b>PRIVACY POLICY</b>
            </Agreement>
            <Link className="link" to="/login">
              <Text>Already have an account?</Text>
            </Link>
            <Button onClick={handleRegister} disabled={isFetching}>
            {isFetching &&
              <svg className="animate-spin" style={{ marginLeft : '-.25rem', marginRight : '.75rem', height : '1.25rem', width : '1.25rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              }
              REGISTER
            </Button>
            {registerError && <Error>Somenthing went wrong...</Error>}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
