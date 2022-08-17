import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axiosClient from "../axios";

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
  ${mobile({ marginTop: "10px", fontSize: "20px" })}
`;

const Products = ({ title, category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosClient.get(
          category ? `/products?category=${category}` : "/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();

  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

  }, [products, category, filters]);

  return (
    <>
      <Title>{title ? title : ""}</Title>
      <Container>
        {filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
        {!filteredProducts.length && 'Product not found.'}
      </Container>
    </>
  );
};

export default Products;
