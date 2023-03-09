import styled from 'styled-components';
import Header from './Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';

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
    room_images_url: [],
    check_in: [],
    room_amenities: [],
    check_in_time: '',
    check_out_time: '',
    house_rules: [],
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
    room_images_url,
    check_in,
    room_amenities,
    check_in_time,
    check_out_time,
    house_rules,
  } = detailList;

  return (
    <DetailContainer>
      <DetailWrapper>
        <Header detailList={detailList} />
        <ProductImage image={room_images_url}></ProductImage>
      </DetailWrapper>
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

const DetailWrapper = styled.div`
  margin: 0px 20px;
`;
export default Detail;
