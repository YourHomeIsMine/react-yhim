import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Card from './Card';
import { flex } from 'styles';
import Category from '../Category';

const Main = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_ADDRESS}/rooms?page=0&limit=${
        (offset + 1) * 8
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.results);
      });
  }, [offset]);

  // 무한스크롤
  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    // console.log('a : ' + Math.round(scrollTop + innerHeight));
    // console.log('b : ' + scrollHeight);

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setOffset((prevOffset: number) => prevOffset + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  useEffect(() => {}, [productList]);
  return (
    <ListContainer>
      <CategoryList>
        <Category />
      </CategoryList>
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
const CategoryList = styled.div`
  width: 100%;
`;
const ContentList = styled.div`
  ${flex('center', 'center')};
  flex-wrap: wrap;
  margin-top: 120px;
`;

export default Main;
