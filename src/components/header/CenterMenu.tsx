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
  min-width: 300px;
  height: 40px;
  margin-left: 100px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  ${font(16, 500)};
  color: ${colors.BLACK};

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
    margin-left: 20px;
    background-color: ${colors.GRAY};
  }
}
`;

const SearchBox = styled.div`
  ${flex('center', 'center')};
  width: 30px;
  height: 30px;
  background: ${colors.PINK};
  border-radius: 20px;
  color: ${colors.LIGHTGRAY};

  :hover {
    cursor: pointer;
  }
`;

const Search = styled.img`
  width: 20px;
`;

export default CenterMenu;
