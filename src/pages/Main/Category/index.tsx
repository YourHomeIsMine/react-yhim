import styled from 'styled-components';
import { CATEGORY_LIST } from './constant';
import { colors, flex, font } from 'styles';

const Category = (props: any) => {
  function handleCheck(event: any) {
    const category = event.target.className.toString().slice(-1);
    props.setCategory(category);
    props.setOffset(0);
  }

  return (
    <CategoryList>
      {CATEGORY_LIST.map((category) => (
        <CategoryRoomFilter
          key={`${category.number}`}
          className={`${category.number}`}
          onClick={handleCheck}
        >
          <CategoryImage
            alt={category.name}
            src={category.imageUrl}
            className={`${category.number}`}
          />
          <CategoryName className={`${category.number}`}>
            {category.name}
          </CategoryName>
        </CategoryRoomFilter>
      ))}
      <CategoryFilter>
        <FilterImage
          alt="filter"
          src="https://cdn-icons-png.flaticon.com/512/8017/8017777.png"
        ></FilterImage>
        <span>필터</span>
      </CategoryFilter>
    </CategoryList>
  );
};

const CategoryList = styled.div`
  ${flex('center', 'center')};
  position: fixed;
  top: 70px;
  width: 100%;
  background-color: ${colors.WHITE};
  z-index: 90;
`;

const CategoryRoomFilter = styled.div`
  ${flex('', 'center', 'column')};
  margin: 10px 25px 0px 25px;
  padding: 15px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${colors.GRAY};
  }
`;
const CategoryImage = styled.img`
  width: 35px;
  height: 35px;
`;
const CategoryName = styled.div`
  margin-top: 20px;
  ${font(18, 500)};
  color: ${colors.GRAY};
  white-space: nowrap;
`;

const FilterImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CategoryFilter = styled.div`
  ${flex('center', 'center')};
  height: 50px;
  margin-left: 100px;
  padding: 0px 20px;
  border: 1px solid ${colors.GRAY};
  border-radius: 10px;
  ${font(20, 500)};
  color: ${colors.GRAY};
  cursor: pointer;
`;

export default Category;
