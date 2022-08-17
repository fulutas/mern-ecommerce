import styled from "styled-components";
import Logo from "../components/Logo";

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
    background-color: black ;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
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
`;

const Link = styled.a`
    margin : 5px 0px 0px 0px;
    font-size: 13px;
    cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>SIGN IN</Button>
            <Link>Do not you remember the password?</Link>
            <Link>Create a new account </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
