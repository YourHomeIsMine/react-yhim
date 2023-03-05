import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Card from './Card';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ADDRESS}`)
      .then((res) => res.json())
      .then((data) => setProductList(data.results));
  }, []);

  useEffect(() => {
    console.log(productList);
  });
  return (
    <ListContainer>
      <CategoryList></CategoryList>

      <ContentList>
        {productList.map((product) => (
          <Card
            key={product.id}
            id={product.room_id}
            room_name={product.room_name}
            images={product.images}
            price={product.price}
            address={product.address}
            category={product.category_name}
            guest={product.guest}
            schedule={product.schedule}
            // schedule_date={product.schedule_date}
            // handleClick={handleClick}
          />
        ))}
      </ContentList>
    </ListContainer>
  );
};

const ListContainer = styled.div``;
const CategoryList = styled.div``;
const ContentList = styled.div``;

export default Main;
