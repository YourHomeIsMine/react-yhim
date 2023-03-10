import styled from 'styled-components';
import { flex, font } from 'styles';

const AmenityContent = ({ data }: any) => {
  const { amenity_id, amenity_icon_url, amenity_name } = data;

  return (
    <AmenityItem key={amenity_id}>
      <AmenityIcon alt={amenity_name} src={amenity_icon_url} />
      <AmenityName>{amenity_name}</AmenityName>
    </AmenityItem>
  );
};

const AmenityItem = styled.div`
  ${flex('', 'center')}
  width: 100%;
  padding-bottom: 16px;
`;

const AmenityIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

const AmenityName = styled.p`
  margin-top: 4px;
  ${font(18, 500)};
`;

export default AmenityContent;
