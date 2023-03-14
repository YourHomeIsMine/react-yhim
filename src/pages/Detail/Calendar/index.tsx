import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import './calendar.css';
import { subDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import { colors, flex, font } from 'styles';

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <CalendarContainer>
      <DateContainer>
        <DateTitle>체크인</DateTitle>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          startDate={startDate}
          minDate={new Date()}
          locale={ko}
          showPopperArrow={false}
          dateFormat="yyyy.MM.dd (eee)"
          dateFormatCalendar={'yyyy년 MM월'}
        />
      </DateContainer>
      <DateContainer>
        <DateTitle>체크아웃</DateTitle>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          startDate={subDays(new Date(), -1)}
          minDate={startDate}
          locale={ko}
          showPopperArrow={false}
          dateFormat="yyyy.MM.dd (eee)"
          dateFormatCalendar={'yyyy년 MM월'}
        />
      </DateContainer>
    </CalendarContainer>
  );
};
const CalendarContainer = styled.div`
  ${flex('', '')};
  width: 100%;
`;

const DateContainer = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  :first-child {
    border-top-right-radius: 0px;
    border-right: 0px;
  }
  :last-child {
    border-top-left-radius: 0px;
  }
`;

const DateTitle = styled.div`
  ${font(13, 500)};
  padding: 10px 0px;
`;

export default Calendar;
