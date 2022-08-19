import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ArrowForwardIos,
  Add,
  Remove,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axiosClient from "../axios";

const STRIPE_KEY = `${import.meta.env.VITE_API_STRIPE_KEY}`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const TitleContainer = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  text-align: left;
  ${mobile({ fontSize: "24px" })}
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 20px 20px;
  ${mobile({ marginTop: "6rem" })}
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
  ${mobile({
    marginLeft: "10px",
    width: "150px",
    height: "50px",
    textAlign: "center",
    fontSize: "14px",
  })}

  &:hover {
    opacity: 0.8;
  }
`;

const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none" })}
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
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  ${mobile({ flexDirection: "column" })}
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
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
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
  text-transform: uppercase;
`;

const ProductSize = styled.span`
  text-transform: uppercase;
`;

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
  ${mobile({ marginTop: "20px", marginBottom: "15px" })}
`;

const ProductAmount = styled.div`
  font-size: 22px;
  margin: 5px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  ${mobile({ marginBottom: "20px" })}
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
  ${mobile({ marginTop: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  letter-spacing: -1px;
  ${mobile({ fontSize: "24px" })}
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
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()

  // Triggered when payment button is clicked
  const onToken = (token) => {
    setStripeToken(token)
  };

  console.log('Stripe Token Data : ', stripeToken);

  useEffect(() => {
    const makeRequest = async () => {

      try { 
        const res = await axiosClient.post('/checkout/payment', {
          tokenId : stripeToken.id,
          amount : cart.totalPrice * 100
        });

        console.log('Payment Response Data : ', res.data)
        
        navigate('/success-payment', { data : res.data } )

      } catch (error) {
        console.log(error)
      }
    }

    // Run if token exists and cart total amount is greater than 1
    if(stripeToken && cart.totalPrice >= 1){
      makeRequest()
    }

  }, [stripeToken, cart.totalPrice, navigate])

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
              Bag ({cart.quantity})
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
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Link className="link" to={`/product/${product._id}`}>
                    <Image src={product.img} />
                  </Link>
                  <Details>
                    <Link className="link" to={`/product/${product._id}`}>
                      <ProductName>{product.title}</ProductName>
                    </Link>
                    <ProductId style={{ fontSize: "14px " }}>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize style={{ color: "#6c84fa" }}>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add style={{ fontSize: "16px", color: "#F27A1A" }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ fontSize: "16px", color: "#F27A1A" }} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="discount">
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice type="discount">$ 0</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice type="total">
                $ {cart.totalPrice}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Brand | E-commerce"
              image="https://static.vecteezy.com/system/resources/previews/006/547/168/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              token={onToken}
              stripeKey={STRIPE_KEY}
            >
              <SummaryButton>
                Checkout Now
                <ArrowForwardIos
                  style={{ fontSize: "14px", marginLeft: "7px" }}
                />
              </SummaryButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
