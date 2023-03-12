import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface ProductProps {
  product: ProductType;
}
const ProductInfo = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const { images, room_name, room_address, schedule, price, room_id } = product;

  const goDetailPage = (id: number) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <Container onClick={() => goDetailPage(room_id)}>
      <ImageBox>
        <LikeImg alt="heart" src="../images/heart.png" />
        <ProductImg alt="product" src={images[0]} />
      </ImageBox>
      <InfoBox>
        <Name>{room_name}</Name>
        <Detail>{room_address}</Detail>
        <Detail>{schedule}</Detail>
        <Price>
          ₩{Number(price).toLocaleString()} <span>/박</span>
        </Price>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  ${flex('center', '', 'column')};
  padding: 10px 15px 25px 15px;
`;

const InfoBox = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 10px;
  padding: 10px 0px 15px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

const Detail = styled.div`
  padding: 10px 0px 10px 0px;
  ${font(18, 500, 5)};
  color: ${colors.GRAY};
`;

const Price = styled.div`
  margin-top: 10px;
  padding: 10px 0px 10px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

const ImageBox = styled.div`
  position: relative;
  width: 330px;
  height: 330px;
  border-radius: 20px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const LikeImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  z-index: 1;
`;

export default ProductInfo;
