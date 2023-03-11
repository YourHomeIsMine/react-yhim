import styled from 'styled-components';
import AmenityContent from './AmenityContent';
import { font, colors } from 'styles';

interface AmenityProps {
  amenity: AmenityType;
}
const ProductAmenity = (data: any) => {
  const { room_amenities } = data;

  return (
    <AmenityContainer>
      <AmenityTitle>숙소 편의시설</AmenityTitle>
      {room_amenities.slice(0, 10).map((data: AmenityProps, i: number) => (
        <AmenityContent key={i} data={data}></AmenityContent>
      ))}
    </AmenityContainer>
  );
};

const AmenityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 25px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const AmenityTitle = styled.div`
  grid-column: 1 / 3;
  padding: 10px 0px 10px 0px;
  margin: 20px 0px 20px 0px;
  ${font(20, 500)};
`;

export default ProductAmenity;
