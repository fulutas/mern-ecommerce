import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-left: 1.32rem;
  margin-bottom: -10px;
  margin-top: 20px;
`;

const Categories = () => {
  return (
    <>
      <Title>Featured Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
