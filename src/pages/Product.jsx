import { Add, Remove, ShoppingCartOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import axiosClient from "../axios";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/CartRedux";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column", marginTop: "5rem" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  ${mobile({ fontSize: "28px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
  ${mobile({ fontSize: "15px" })}
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: #f27919;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  flex-direction: column;
  ${mobile({ width: "100%" })}
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
  box-shadow: 1px 1px 5px 1px rgb(0 0 0 / 20%);
  -webkit-box-shadow: 1px 1px 5px 1px rgb(0 0 0 / 20%);
`;

const FilterSize = styled.select`
  padding: 10px;
  text-transform: uppercase;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-start;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bfbfbf;
  border-radius: 50%;

  &:hover {
    background-color: #e5e5e5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > svg {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid;
  background-color: #f27919;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: -0.375px;

  &:hover {
    opacity: 0.9;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosClient.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {

    dispatch(addProduct({ ...product, quantity, color, size }));

  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColorGroup>
                {product?.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </FilterColorGroup>
            </Filter>
            <Filter style={{ marginTop: "30px" }}>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((s) => (
                  <FilterSizeOption value={s} key={s}>
                    {s}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Icon>
                <Remove onClick={() => handleQuantity("dec")} />
              </Icon>
              <Amount>{quantity}</Amount>
              <Icon>
                <Add onClick={() => handleQuantity("inc")} />
              </Icon>
            </AmountContainer>
            <Button onClick={addToCart}>
              <ShoppingCartOutlined style={{ marginRight: "10px" }} />
              Add to Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
