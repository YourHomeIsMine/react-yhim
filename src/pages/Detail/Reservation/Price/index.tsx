import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface PriceProps {
  data: number;
}

const Price = ({ data }: PriceProps) => {
  const charge = data * 0.22;
  const totalPrice = data + charge;

  return (
    <PriceContainer>
      <ReservationBtn>예약하기</ReservationBtn>
      <ReservationNotice>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </ReservationNotice>
      <DayPrice>
        <div>₩{data.toLocaleString()} X 5박</div>
        <div>₩{data.toLocaleString()}원</div>
      </DayPrice>
      <DayPrice>
        <div>네집내집 서비스 수수료</div>
        <div>₩{charge.toLocaleString()}원</div>
      </DayPrice>
      <TotalPrice>
        <div>총 합계</div>
        <div>₩{totalPrice.toLocaleString()}원</div>
      </TotalPrice>
    </PriceContainer>
  );
};

const ReservationBtn = styled.div`
  width: 100%;
  margin: 20px 10px 20px 0px;
  padding: 30px 15px;
  border-radius: 10px;
  background-color: ${colors.PINK};
  color: ${colors.WHITE};
  ${font(18, 400)};
  text-align: center;
`;

const ReservationNotice = styled.div`
  padding: 10px 0px 10px 0px;
  margin-bottom: 30px;
  ${font(18, 400)};
  color: ${colors.BLACK};
  text-align: center;
`;

const PriceContainer = styled.div``;

const DayPrice = styled.div`
  ${flex('space-between', 'center')};
  padding: 20px 0px 10px 0px;
  ${font(18, 400)};
  text-decoration: underline;
`;

const TotalPrice = styled.div`
  ${flex('space-between', 'center')};
  margin-top: 20px;
  padding: 30px 0px 10px 0px;
  border-top: 1px solid ${colors.MEDIUMGRAY};
  ${font(18, 600)};
`;

export default Price;
