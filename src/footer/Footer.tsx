import styled from 'styled-components';
import { colors, flex } from '../styles';
import { font } from '../styles/font';
import Colors from '../styles/colors';

const Footer = () => {
  return (
    <FlexBox>
      <TopBox>
        <LeftBox>
          <CorpInfo>© 2023 YHIM, Inc.</CorpInfo>
          <CorpInfo>개인정보 처리방침</CorpInfo>
          <CorpInfo>이용약관</CorpInfo>
          <CorpInfo>사이트맵</CorpInfo>
          <CorpInfo>환불 정책</CorpInfo>
          <CorpInfo>회사 세부정보</CorpInfo>
        </LeftBox>
        <RightBox>
          <CorpInfo>한국어 (KR)</CorpInfo>
          <CorpInfo>₩ KRW</CorpInfo>
          <CorpInfo>지원 및 참고 자료</CorpInfo>
        </RightBox>
      </TopBox>
      <BottomBox>
        웹사이트 제공자: YourHomeIsMine Ireland UC, private unlimited company, 8
        Hanover Auay Dublin 2, C00 DP23 Ireland | 이사: David Tanon, Peter Kane
        Amy Figma | VAT 번호: I132456L | 사업자 등록 번호: IEL 12345 | 연락처:
        terms@yhim.com, 웹사이트, 080-222-1111 | 호스팅 서비스 제공업체: 아마존
        웹서비스 | 네집내집(YHIM)은 통신판매 중개자로 네집내집 플랫폼을 통하여
        게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
        네집내집(YHIM) 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한
        의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
      </BottomBox>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  ${flex('', 'center', 'column')};
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid ${Colors.MEDIUMGRAY};
`;

const TopBox = styled.div`
  ${flex('space-between', 'center')};
  width: 95%;
  height: 40%;
  margin-top: 10px;
  color: ${colors.GRAY};
`;

const BottomBox = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  ${font(8, 500, 10)}
  width: 95%;
  height: 60%;
  ${flex('flex-start', 'center', 'row')};
  color: #ced4da;
`;

const LeftBox = styled.div`
  ${flex('flex-start', 'center', 'row')};
`;

const RightBox = styled.div`
  ${flex('flex-end', 'center', 'row')};
`;

const CorpInfo = styled.span`
  margin: 0px 5px 0px 5px;
  font-family: 'Noto Sans KR', sans-serif;
  ${font(15, 500)};
  cursor: pointer;
`;

export default Footer;
