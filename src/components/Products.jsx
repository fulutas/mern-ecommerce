import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-left: 1.32rem;
  margin-bottom: -10px;
  ${mobile({ marginTop : '10px', fontSize : '20px'})}
`;

const Products = ({ title }) => {
  return (
    <>  
      <Title>{title ? title : ''}</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
