import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar';
import PersonOption from './PersonOption';
import Price from './Price';
import { colors, flex, font } from 'styles';

interface PriceProps {
  data: number;
}

const Reservation = ({ data }: PriceProps) => {
  const [date, setDate] = useState<number>(1);

  return (
    <ReservationOption>
      <ReservationWrapper>
        <div>
          <ReservationOptionInfo>
            <PriceInfo>
              ₩{data.toLocaleString()} <span>/박</span>
            </PriceInfo>
            <Review>
              <ReviewIcon
                alt="star"
                src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png"
              ></ReviewIcon>
              4.93 · 후기 210개
            </Review>
          </ReservationOptionInfo>
        </div>
        <Calendar setDate={setDate} />
        <PersonOption />
        <Price price={data} />
      </ReservationWrapper>
    </ReservationOption>
  );
};

const ReservationOption = styled.div`
  position: sticky;
  top: 150px;
  margin-top: 30px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;
`;

const ReservationWrapper = styled.div`
  margin: 20px;
`;

const ReservationOptionInfo = styled.div`
  ${flex('space-between', 'center')};
  padding: 10px 0px 30px 0px;
`;

const PriceInfo = styled.div`
  ${font(25, 500)};
  color: ${colors.BLACK};

  span {
    ${font(22, 500)};
  }
`;

const Review = styled.div`
  ${font(20, 500, 20)};
  color: ${colors.BLACK};
`;

const ReviewIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export default Reservation;
