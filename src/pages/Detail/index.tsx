import styled from 'styled-components';
import Header from './Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductDetailInfo';
import { colors, font } from 'styles';
import ProductAmenity from './ProductAmenity';
import HostDetailInfo from './HostDetailInfo';

const Detail = () => {
  const [detailList, setDetailList] = useState<ProductDetailType>({
    name: '',
    description: '',
    district: '',
    neighberhood: '',
    price: 0,
    address: '',
    guests: 0,
    beds: 0,
    bedrooms: 0,
    baths: 0,
    latitute: 0.0,
    longitute: 0.0,
    host: '',
    host_image: '',
    host_created: '',
    room_images_url: [],
    check_in: [],
    room_amenities: [],
    check_in_time: '',
    check_out_time: '',
    house_rules: [],
    category: '',
  });
  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ADDRESS}/rooms/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailList(data.message);
      });
  }, [params.id]);

  const {
    name,
    description,
    district,
    neighberhood,
    price,
    address,
    guests,
    beds,
    bedrooms,
    baths,
    latitute,
    longitute,
    host,
    host_image,
    host_created,
    room_images_url,
    check_in,
    room_amenities,
    check_in_time,
    check_out_time,
    house_rules,
    category,
  } = detailList;

  return (
    <DetailContainer>
      <Header detailList={detailList} />
      <ProductImage room_images_url={room_images_url} />
      <ProductInfo detailList={detailList} />
      <ProductDescription>{description}</ProductDescription>
      <ProductAmenity room_amenities={room_amenities} />
      <HostDetailInfo detailList={detailList} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

const ProductDescription = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(18, 500, 22)};
  color: ${colors.BLACK};
`;

export default Detail;
