import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #df960f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 7px 0 7px 0;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
