import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  product: ProductType;
}
const ProductInfo = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const { images, room_name, room_address, schedule, price, room_id } = product;

  const handleClick = (id: number) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <ContentContainer key={room_id} onClick={() => handleClick(room_id)}>
      <ProductLikeImg alt="heart" src="../images/heart.png"></ProductLikeImg>
      <ContentImage src={images[0]}></ContentImage>
      <ContentInfo>
        <ProductName>{room_name}</ProductName>
        <ProductDetail>{room_address}</ProductDetail>
        <ProductDetail>{schedule}</ProductDetail>
        <ProductPrice>
          ₩{Number(price).toLocaleString()} <span>/박</span>
        </ProductPrice>
      </ContentInfo>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  ${flex('center', '', 'column')};
  padding: 10px 15px 25px 15px;
`;

const ContentImage = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;
  border-radius: 20px;
`;

const ContentInfo = styled.div`
  margin-top: 10px;
`;

const ProductName = styled.div`
  margin-top: 10px;
  padding: 10px 0px 15px 0px;
  ${font(20, 500)}};
  color:${colors.BLACK};
`;

const ProductDetail = styled.div`
  padding: 10px 0px 10px 0px;
  ${font(18, 500, 5)}};
  color:${colors.GRAY};
`;

const ProductPrice = styled.div`
  margin-top: 10px;
  padding: 10px 0px 10px 0px;
  ${font(20, 500)}};
  color:${colors.BLACK};
`;

const ProductLikeImg = styled.img`
  position: relative;
  width: 25px;
  height: 25px;
  top: 50px;
  left: 85%;
`;
export default ProductInfo;
