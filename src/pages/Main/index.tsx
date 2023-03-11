import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import ProductInfo from './ProductInfo';
import { flex } from 'styles';

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
        <ContentListWrap>
          {productList.map((product, i) => (
            <ProductInfo key={`product-${i}`} product={product} />
          ))}
        </ContentListWrap>
      </ContentList>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  margin-top: 70px;
  padding: 25px 0px;
`;

const CategoryList = styled.div`
  position: fixed;
  top: 81px;
  width: 85%;
  z-index: 10;
`;

const ContentList = styled.div`
  width: 100%;
  padding: 100px 0;
`;

const ContentListWrap = styled.div`
  ${flex('', '')};
  max-width: 1440px;
  flex-wrap: wrap;
`;

export default Main;
