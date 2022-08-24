import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartEmptyIcon from '../assets/cart/cart-empty.gif'
import { deleteProduct, resetCartState } from "../redux/CartRedux";
import { useDispatch } from "react-redux";

import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ArrowForwardIos,
  Add,
  Remove,
  DeleteOutlined
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
  flex-direction: row;
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
  margin: 0 auto;
  color: #F27A1A;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Action = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`

const ActionIcon = styled.div`
  margin-bottom: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background: #f5f5f5;
    border-radius: 50%;
  }
`

const ActionsText = styled.span`
  font-size: 14px;
`

const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const CartEmptyText = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: -.03rem;
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
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Triggered when payment button is clicked
  const onToken = (token) => {
    setStripeToken(token);
  };


  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axiosClient.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });

        console.log("Payment Response Data : ", res.data);
        dispatch(resetCartState())
        // Succes payment send payment data
        navigate("/success-payment", { state: { data: res.data } });  
      } catch (error) {
        console.log(error);
      }
    };

    // Run if token exists and cart total amount is greater than 1
    if (stripeToken && cart.totalPrice >= 1) {
      makeRequest();
    }
  }, [stripeToken, cart.totalPrice, navigate]);

  const handleDeleteCartProduct = (product) => {
    dispatch(deleteProduct(product))
  }

  const handleAddWhishlistProduct = (product) => {
    alert('Coming soon.')
  }

  // Product ID'si aynı olup sepete eklenen bedenler aynı ise birleştirir.
  const combineCart = cart.products.reduce((r, { _id, quantity, size, ...item }) => {

    let temp = r.find(o => o._id === _id && o.size === size);

    if (!temp) {
      r.push({ _id ,quantity, size, ...item});
    } else {
      temp.size = size;
      temp.quantity += quantity;
    } 
    
    return r; 
  }, []);

console.log(combineCart)

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Top>
          <Link to="/" className="link">
            <TopButton>Continue Shopping</TopButton>
          </Link>
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
            {combineCart.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Link className="link" to={`/product/${product._id}`}>
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <Link className="link" to={`/product/${product._id}`}>
                        <ProductName>{product.title}</ProductName>
                      </Link>
                      <ProductId style={{ fontSize: "14px" }}>
                        {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize style={{ color: "#6c84fa" }}>
                        {typeof product.size == 'string' ? product.size : product.size[0]}
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
                  <Actions>
                  <Action onClick={() => handleAddWhishlistProduct(product)}>
                      <ActionIcon>
                        <FavoriteBorder />  
                      </ActionIcon>
                  <ActionsText>Add to Wishlist</ActionsText>
                  </Action>
                    <Action onClick={() => handleDeleteCartProduct(product)}>
                      <ActionIcon>
                        <svg width="24" height="24"><path fill="#F90000" d="M22.955 3.386a.75.75 0 010 1.5h-1.663l-1.39 16.692a2.32 2.32 0 01-2.31 2.127H6.363a2.318 2.318 0 01-2.31-2.127L2.66 4.886H1a.75.75 0 01-.743-.648L.25 4.136a.75.75 0 01.75-.75h6.306v-.818A2.32 2.32 0 019.466.255L9.625.25h4.705a2.318 2.318 0 012.318 2.318l-.001.818zm-3.168 1.5H4.167L5.55 21.454c.035.424.39.75.815.75h11.227c.426 0 .78-.326.816-.75l1.38-16.568zM9.625 8.875a.75.75 0 01.75.75v7.84a.75.75 0 11-1.5 0v-7.84a.75.75 0 01.75-.75zm4.705 0a.75.75 0 01.75.75v7.84a.75.75 0 11-1.5 0v-7.84a.75.75 0 01.75-.75zm0-7.125H9.625a.818.818 0 00-.818.818v.818h6.34v-.818a.817.817 0 00-.817-.818z" fillRule="evenodd"></path></svg>
                      </ActionIcon>
                  <ActionsText>Delete</ActionsText>
                  </Action>
                  </Actions>
                </Product>
                <Hr />
              </>
            ))}
            {!cart.products.length && 
            
            <CartEmpty>
               <img src={CartEmptyIcon} width='50px' height='50px'></img>
              <CartEmptyText>
              Your Cart is empty.
              </CartEmptyText>
            </CartEmpty>
            
            }
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
