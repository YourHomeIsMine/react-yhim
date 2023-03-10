import styled from 'styled-components';
import { colors, flex, font } from 'styles';

const ProductDetailInfo = ({ detailList }: any) => {
  const {
    host,
    category,
    guests,
    bedrooms,
    beds,
    baths,
    host_image,
    check_in,
  } = detailList;

  return (
    <ProductInfo>
      <HostInfo>
        <div>
          <HostNameInfo>
            {host}님이 호스팅하는 {category} 전체
          </HostNameInfo>
          <HostAmenityInfo>
            최대 인원 {guests}명 · 침실 {bedrooms} · 침대 {beds}개 · 욕실{' '}
            {baths}개
          </HostAmenityInfo>
        </div>
        <HostImage src={host_image}></HostImage>
      </HostInfo>
      <ProductEtcInfo>
        <ProductDesignInfo>
          <ProductEtcImg
            alt="designer"
            src="https://cdn-icons-png.flaticon.com/512/751/751418.png"
          />
          <div>
            <EtcTitle>디자이너:</EtcTitle>
            <EtcContent>Ibuku Bamboo Architecture and Design</EtcContent>
          </div>
        </ProductDesignInfo>
        <ProductDesignInfo>
          <ProductEtcImg
            alt="press"
            src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
          />
          <div>
            <EtcTitle>언론소개:</EtcTitle>
            <EtcContent>Condé Nast Traveler, October 2019</EtcContent>
          </div>
        </ProductDesignInfo>
        <CancelInfo>
          {check_in[check_in.length - 1]?.split('-')[1]}월{' '}
          {parseInt(check_in[check_in.length - 1]?.split('-')[2]) - 1}일 전까지
          무료로 취소하실 수 있습니다.
        </CancelInfo>
      </ProductEtcInfo>
    </ProductInfo>
  );
};

const ProductInfo = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const HostInfo = styled.div`
  ${flex('space-between', 'center')};
  padding: 10px 0px;
  ${font(17, 500)};
  color: ${colors.BLACK};
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const HostNameInfo = styled.div`
  padding: 20px 0px;
  margin-top: 20px;
  ${font(25, 500)};
  color: ${colors.BLACK};
`;

const HostAmenityInfo = styled.div`
  padding: 10px 0px;
  margin-bottom: 15px;
`;

const ProductEtcInfo = styled.div`
  padding: 10px 0px;
`;

const HostImage = styled.img`
  width: 40px;
  height: 40px;
`;

const ProductDesignInfo = styled.div`
  ${flex('', 'center')};
  margin: 20px 0px 20px 0px;
`;

const ProductEtcImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const EtcTitle = styled.div`
  padding: 10px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

const EtcContent = styled.div`
  padding: 10px 0px;
  margin-top: 5px;
  ${font(17, 500)};
  color: ${colors.GRAY};
`;

const CancelInfo = styled.div`
  padding: 10px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

export default ProductDetailInfo;
