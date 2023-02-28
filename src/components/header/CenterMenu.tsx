import styled from 'styled-components';
import { flex, font, colors } from 'styles';

const CenterMenu = () => {
  return (
    <Container>
      <Menu>어디든지</Menu>
      <Menu>게스트 추가</Menu>
      <SearchBox>
        <Search alt="search" src="../images/search.png" />
      </SearchBox>
    </Container>
  );
};

const Container = styled.div`
  ${flex('center', 'center')};
  width: 30%;
  margin-left: 100px;
  ${font(16, 500)};
  color: ${colors.BLACK};
  height: 40px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);

  :hover {
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.12);
    transition-duration: 0.2s;
  }
`;

const Menu = styled.div`
  ${flex('center', 'center')};
  padding: 10px;

  :hover {
    cursor: pointer;
  }
  
  :first-child::before {
    content: none;
  }
  ::after {
    content: '';
    display: block;
    width: 1px;
    height: 20px;
    background-color: ${colors.GRAY};
    margin-left: 20px;
  }
}
`;

const SearchBox = styled.div`
  background: ${colors.PINK};
  width: 30px;
  height: 30px;
  border-radius: 20px;
  ${flex('center', 'center')};
  color: ${colors.LIGHTGRAY};

  :hover {
    cursor: pointer;
  }
`;

const Search = styled.img`
  width: 20px;
`;

export default CenterMenu;
