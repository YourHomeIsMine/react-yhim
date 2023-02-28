import styled from 'styled-components';
import { flex } from '../styles';
import { font } from '../styles/font';
import Colors from '../styles/colors';
const search = require('../images/search.png');

const CenterMenu = () => {
  return (
    <FlexBox>
      <Menu>어디든지</Menu>
      <Menu>게스트 추가</Menu>
      <SearchBox>
        <Search></Search>
      </SearchBox>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  ${flex('center', 'center')};
  width: 30%;
  margin-left: 100px;
  font-family: 'Noto Sans KR';
  ${font(16, 500)};
  color: ${Colors.BLACK};
  height: 40px;
  border: 1px solid #717171;
  border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
`;

const Menu = styled.div`
  ${flex('center', 'center')};
  padding: 10px;

  &:first-child::before {
    content: none;
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 20px;
    background-color: ${Colors.GRAY};
    margin-left: 20px;
  }
}

`;

const SearchBox = styled.div`
  background: ${Colors.PINK};
  width: 30px;
  height: 30px;
  border-radius: 20px;
  ${flex('center', 'center')};
  color: ${Colors.LIGHTGRAY};
`;

const Search = styled.img.attrs({
  src: `${search}`,
})`
  width: 20px;
`;

export default CenterMenu;