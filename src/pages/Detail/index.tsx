import styled from 'styled-components';
import Header from './Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetail {
  productDetail?: ProductDetailType;
}

const Detail = ({ productDetail }: ProductDetail) => {
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

  // useEffect(() => {
  //   console.log(room_images_url);
  // }, [detailList]);

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
        <Header />
        <ProductImageList>
          <ProductLeftImg alt="room-left-image" src={room_images_url[0]} />
          <ProductRightImg alt="room-left-image" src={room_images_url[1]} />
          <ProductRightImg alt="room-left-image" src={room_images_url[2]} />
          <ProductRightImg alt="room-left-image" src={room_images_url[3]} />
          <ProductRightImg alt="room-left-image" src={room_images_url[4]} />
        </ProductImageList>
      </DetailWrapper>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  background-color: green;
  width: 100%;
`;

const DetailWrapper = styled.div`
  margin: 0px 20px;
`;

const ProductImageList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;
  width: 100%;
`;

const ProductLeftImg = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: cover;
  padding: 10px 10px 10px 0px;
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const ProductRightImg = styled.img`
  padding: 10px;
  width: 100%;
  height: 300px;

  :nth-child(3) {
    padding-right: 0;
  }
  :last-child {
    padding-right: 0;
  }
`;

export default Detail;
