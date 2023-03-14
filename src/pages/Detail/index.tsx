import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from './Calendar';
import Header from './Header';
import HostDetailInfo from './HostDetailInfo';
import Map from './Map';
import Notice from './Notice';
import ProductAmenity from './ProductAmenity';
import ProductInfo from './ProductDetailInfo';
import ProductImage from './ProductImage';
import { colors, flex, font } from 'styles';

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
      <DivideContainer>
        <ProductContainer>
          <ProductInfo detailList={detailList} />
          <ProductDescription>{description}</ProductDescription>
          <ProductAmenity room_amenities={room_amenities} />
        </ProductContainer>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </DivideContainer>
      <Map detailList={detailList} />
      <HostDetailInfo detailList={detailList} />
      <Notice noticeList={house_rules} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div``;

const ProductDescription = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(18, 500, 25)};
  color: ${colors.BLACK};
`;

const DivideContainer = styled.div`
  ${flex('', '')};
`;

const ProductContainer = styled.div`
  margin-right: 20px;
  width: 65%;
`;

const CalendarContainer = styled.div`
  margin-left: 20px;
  position: sticky;
  width: 35%;
`;

export default Detail;
