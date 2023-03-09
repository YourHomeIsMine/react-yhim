import styled from 'styled-components';
import { colors, flex, font } from 'styles';

const Header = ({ detailList }: any) => {
  const { name, district, neighberhood } = detailList;

  return (
    <ProductHeader>
      <ProductTitle>{name}</ProductTitle>
      <ProductInfo>
        <InfoDetailList>
          <InfoDetail>4.93 · 후기 210개</InfoDetail>
          <InfoDetail>|</InfoDetail>
          <InfoDetail>
            {neighberhood} {district}
          </InfoDetail>
        </InfoDetailList>
        <InfoImageIcon>
          <InfoIconList>
            <InfoIcon
              alt="share"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828954.png"
            ></InfoIcon>
            공유하기
          </InfoIconList>
          <InfoIconList>
            <InfoIcon
              alt="favorate"
              src="https://cdn-icons-png.flaticon.com/512/2077/2077502.png"
            ></InfoIcon>
            저장
          </InfoIconList>
        </InfoImageIcon>
      </ProductInfo>
    </ProductHeader>
  );
};

const ProductTitle = styled.div`
  padding: 20px 0px;
  ${font(30, 500)};
  color: ${colors.BLACK};
`;

const ProductHeader = styled.div``;
const ProductInfo = styled.div`
  ${flex('space-between', 'center')};
  padding: 10px 0px;
  ${font(17, 500)};
  color: ${colors.BLACK};
`;

const InfoDetailList = styled.div``;

const InfoDetail = styled.span`
  margin-right: 15px;

  :last-child {
    margin-right: 0;
  }
`;

const InfoImageIcon = styled.div`
  ${flex('', 'center')};
`;

const InfoIconList = styled.div`
  ${flex('', 'center')};
  margin-right: 15px;

  :last-child {
    margin-right: 0;
  }
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export default Header;
