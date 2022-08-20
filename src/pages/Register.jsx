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
  ${mobile({ width : '75%'})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  ${mobile({ fontSize : '17px'})}

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${mobile({ flexDirection : 'column'})}
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
  ${mobile({ width : '100%', fontSize : '14px'})}
`;

const Register = () => {
  return (
    <>
      <Navbar/>
      <LogoWrapper>
        {/* <Logo /> */}
      </LogoWrapper>
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              nulla.
              <br />
              <b>PRIVACY POLICY</b>
            </Agreement>
            <Link className="link" to='/login'> 
              <Text>Already have an account?</Text>
            </Link>
            <Button>REGISTER</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
