import { Add, Remove, ShoppingCartOutlined } from "@mui/icons-material";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: #F27919;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColorGroup = styled.div`
  display: flex;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px 0px 0px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-start;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid;
  background-color: #F27919;
  color: #FFF;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: -0.375px;

  &:hover{
    opacity: 0.9;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Pants</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            error commodi harum nisi explicabo corporis, placeat reprehenderit
            aliquam! Atque voluptatum dolorem odit alias porro maiores aliquam
            unde quisquam corporis consequuntur.
          </Desc>
          <Price>$30</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColorGroup>
                <FilterColor color="black"></FilterColor>
                <FilterColor color="darkblue"></FilterColor>
                <FilterColor color="gray"></FilterColor>
              </FilterColorGroup>
            </Filter>
            <Filter style={{ marginTop: "30px" }}>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button> 
                <ShoppingCartOutlined style={{ marginRight : '10px'}}/>
                Add to Cart </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
