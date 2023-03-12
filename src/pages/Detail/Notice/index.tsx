import styled from 'styled-components';
import NoticeContent from './NoticeContent';
import { font } from 'styles';

interface NoticeProps {
  noticeList: NoticeType[];
}

const Notice = (data: NoticeProps) => {
  const { noticeList } = data;

  return (
    <NoticeContainer>
      <NoticeTitle>알아두어야 할 사항</NoticeTitle>
      {noticeList.map((data, i) => (
        <NoticeContent key={`amenity-${i}}`} data={data} />
      ))}
    </NoticeContainer>
  );
};

const NoticeContainer = styled.div``;

const NoticeTitle = styled.div`
  ${font(20, 500, 22)};
  margin-bottom: 20px;
`;

export default Notice;
