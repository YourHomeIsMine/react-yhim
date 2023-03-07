import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { flex } from 'styles';
import Category from './Category';
import ProductInfo from './ProductInfo';

const Main = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [category, setCategory] = useState<number>();

  const uri =
    category !== undefined && !(category == 0)
      ? `${process.env.REACT_APP_API_ADDRESS}/rooms?category=${category}&page=0`
      : `${process.env.REACT_APP_API_ADDRESS}/rooms?page=0`;

  useEffect(() => {
    fetch(`${uri}&limit=${(offset + 1) * 8}`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.results);
      });
  }, [offset, category]);

  // 무한스크롤
  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

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
        <Category setCategory={setCategory} setOffset={setOffset} />
      </CategoryList>
      <ContentList>
        {productList.map((product) => (
          <ProductInfo
            key={product.room_id}
            id={product.room_id}
            room_name={product.room_name}
            images={product.images[0]}
            price={product.price}
            address={product.room_address}
            category={product.category_name}
            guest={product.guest}
            schedule={product.schedule}
            // onClick={handleClick}
          />
        ))}
      </ContentList>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  ${flex('center', 'center', 'column')};
  padding: 60px 0px;
  margin-top: 100px;
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
