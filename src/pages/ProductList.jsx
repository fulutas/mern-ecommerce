import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
  ${mobile({ marginTop: "5rem" })}
`;

const Desc = styled.p`
  margin: -15px 20px 20px 20px;
  max-width: 35%;
  ${mobile({ maxWidth: "100%" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 17px;
  font-weight: 400;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  text-transform : uppercase;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value; // Option value
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <Desc>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente
        temporibus soluta illum similique? Deleniti.
      </Desc>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" defaultValue={"default"} onChange={handleFilters}>
            <Option value={"default"} disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>beige</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>gray</Option>
          </Select>
          <Select name="size" defaultValue={"default"} onChange={handleFilters}>
            <Option value={"default"} disabled>Size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
            <Option>xxl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price Ascending</Option>
            <Option value="desc">Price Descending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
