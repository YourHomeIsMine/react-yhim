import styled from 'styled-components';
import AmenityContent from './AmenityContent';
import { colors, font } from 'styles';

interface ProductAmenityProps {
  room_amenities: AmenityType[];
}

const ProductAmenity = (data: ProductAmenityProps) => {
  const { room_amenities } = data;

  return (
    <AmenityContainer>
      <AmenityTitle>숙소 편의시설</AmenityTitle>
      {room_amenities.slice(0, 10).map((data, i) => (
        <AmenityContent key={`amenity-${i}}`} data={data} />
      ))}
      <TotalListBtn>편의시설 45개 모두 보기</TotalListBtn>
    </AmenityContainer>
  );
};

const AmenityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0px 25px 0px;
`;

const AmenityTitle = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0px 10px 0px;
  margin: 20px 0px 20px 0px;
  ${font(20, 500)};
`;

const TotalListBtn = styled.button`
  width: 70%;
  margin: 20px 0px 0px 0px;
  padding: 20px 0px;
  border: 1px solid ${colors.BLACK};
  border-radius: 10px;
  color: ${colors.BLACK};
  ${font(18, 400)}

  :hover {
    background-color: ${colors.LIGHTGRAY};
  }
`;

export default ProductAmenity;
