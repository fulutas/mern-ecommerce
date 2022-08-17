import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ArrowForwardIos,
  Add,
  Remove,
} from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding : '10px'})}
`;

const TitleContainer = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: left;
  ${mobile({ fontSize : '24px'})}

`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 20px 20px;
  ${mobile({ marginTop : '6rem'})}
`;

const TopButton = styled.button`
  border-radius: 6px;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#F27A1A" : "transparent"};
  color: ${(props) => props.type === "filled" && "#FFF"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  ${mobile({ marginLeft : '10px', width : '150px', height : '50px', textAlign : 'center', fontSize : '14px'})}

  &:hover {
    opacity: 0.8;
  }
`;

const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display : 'none'})}
`;

const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  font-weight: 400;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 20px 20px 20px;
  ${mobile({ flexDirection : 'column'})}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  ${mobile({ flexDirection : 'column'})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  display: block;
  /* border-radius: 0.4rem; */
  object-fit: cover;
  /* border: 1px solid #eee; */
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginTop : '20px', marginBottom : '15px'})}

`;

const ProductAmount = styled.div`
  font-size: 22px;
  margin: 5px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    ${mobile({ margin : '5px 15px'})}

`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  ${mobile({ marginBottom : '20px'})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px;
  height: 420px;
  position: sticky;
  top: 10px;
  ${mobile({ marginTop : '20px'})}
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  letter-spacing: -1px;
  ${mobile({ fontSize : '24px'})}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
  color: ${(props) => props.type === "total" && "#F27A1A"};
  color: ${(props) => props.type === "discount" && "#439e4a"};
`;

const SummaryButton = styled.button`
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #f27a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>
              <ShoppingCartOutlined style={{ marginRight: "5px" }} /> Shopping
              Bag (2)
            </TopText>
            <TopText>
              <FavoriteBorder style={{ marginRight: "5px" }} /> Your Wishlist
              (0)
            </TopText>
          </TopTexts>
          <TopButton type="filled">
            Checkout Now
            <ArrowForwardIos style={{ fontSize: "14px", marginLeft: "7px" }} />
          </TopButton>
        </Top>
        <TitleContainer>
          <Title>Shopping Cart</Title>
        </TitleContainer>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ab6163fd-33c3-4658-b744-92c924d6135d/air-max-270-big-kids-shoes-HbtNX3.png" />
                <Details>
                  <ProductName>Nike Shoes</ProductName>
                  <ProductId style={{ fontSize: "14px " }}>
                    123123124124124
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize style={{ color: "#6c84fa" }}>42</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ fontSize: "16px", color: "#F27A1A" }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ fontSize: "16px", color: "#F27A1A" }} />
                </ProductAmountContainer>
                <ProductPrice>$50</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://media.boohooman.com/i/boohooman/mzz35697_navy_xl?$product_image_tile$" />
                <Details>
                  <ProductName>Man TShirt</ProductName>
                  <ProductId style={{ fontSize: "14px " }}>866937687</ProductId>
                  <ProductColor color="darkblue" />
                  <ProductSize style={{ color: "#6c84fa" }}>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ fontSize: "16px", color: "#F27A1A" }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ fontSize: "16px", color: "#F27A1A" }} />
                </ProductAmountContainer>
                <ProductPrice>$10</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>Zara Woman Pants</ProductName>
                  <ProductId style={{ fontSize: "14px " }}>
                    123123124124124
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize style={{ color: "#6c84fa" }}>32</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style={{ fontSize: "16px", color: "#F27A1A" }} />
                  <ProductAmount>1</ProductAmount>
                  <Remove style={{ fontSize: "16px", color: "#F27A1A" }} />
                </ProductAmountContainer>
                <ProductPrice>$22</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="discount">
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice type="discount">$ -2.90</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice type="total">$ 140.2</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>
              Checkout Now
              <ArrowForwardIos
                style={{ fontSize: "14px", marginLeft: "7px" }}
              />
            </SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
