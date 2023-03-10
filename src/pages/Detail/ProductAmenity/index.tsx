import styled from 'styled-components';
import AmenityContent from './AmenityContent';

interface AmenityProps {
  amenity: AmenityType;
}
const ProductAmenity = (data: any) => {
  const { room_amenities } = data;

  return (
    <AmenityContainer>
      <AmenityTitle>숙소 편의시설</AmenityTitle>
      {room_amenities.map((data: AmenityProps, i: number) => (
        <AmenityContent key={i} data={data}></AmenityContent>
      ))}
    </AmenityContainer>
  );
};

const AmenityTitle = styled.div``;

const AmenityContainer = styled.div``;

export default ProductAmenity;
