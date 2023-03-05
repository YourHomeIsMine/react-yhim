import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Card from './Card';
import { flex } from '../../styles';

const Main = () => {
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ADDRESS}/rooms?page=0&limit=8`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.results);
      });
  }, []);

  console.log('productList : ' + productList);

  useEffect(() => {}, [productList]);
  return (
    <ListContainer>
      <CategoryList></CategoryList>
      <ContentList>
        {productList.map((product) => (
          <Card
            key={product.room_id}
            id={product.room_id}
            room_name={product.room_name}
            images={product.images[0]}
            price={product.price}
            address={product.room_address}
            category={product.category_name}
            guest={product.guest}
            schedule={product.schedule}
            // handleClick={handleClick}
          />
        ))}
      </ContentList>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  ${flex('center', 'center', 'column')};
  padding: 80px 0px;
`;
const CategoryList = styled.div``;
const ContentList = styled.div`
  ${flex('center', 'center')};
  flex-wrap: wrap;
`;

export default Main;
