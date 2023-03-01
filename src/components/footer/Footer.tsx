import WrapperLayout from 'components/layout/WrapperLayout';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import { FOOTER_LINK_LIST, FOOTER_LOCALE_LIST } from './constant';

const Footer = () => {
  return (
    <Container>
      <WrapperLayout>
        <TopBox>
          <div>
            <Text>© 2023 YHIM, Inc.</Text>
            {FOOTER_LINK_LIST.map((menu, i) => (
              <Link key={`footer-link-${i}`}>{menu.name}</Link>
            ))}
          </div>
          <div>
            {FOOTER_LOCALE_LIST.map((menu, i) => (
              <Text key={`footer-locale-${i}`}>{menu.name}</Text>
            ))}
          </div>
        </TopBox>
        <BottomBox>
          웹사이트 제공자: YourHomeIsMine Ireland UC, private unlimited company,
          8 Hanover Auay Dublin 2, C00 DP23 Ireland | 이사: David Tanon, Peter
          Kane Amy Figma | VAT 번호: I132456L | 사업자 등록 번호: IEL 12345 |
          연락처: terms@yhim.com, 웹사이트, 080-222-1111 | 호스팅 서비스
          제공업체: 아마존 웹서비스 | 네집내집(YHIM)은 통신판매 중개자로
          네집내집 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의
          당사자가 아닙니다. 네집내집(YHIM) 플랫폼을 통하여 예약된 숙소, 체험,
          호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게
          있습니다.
        </BottomBox>
      </WrapperLayout>
    </Container>
  );
};

const Container = styled.footer`
  ${flex('', '', 'column')};
  position: fixed;
  bottom: 0;
  padding: 20px 0;
  border-top: 1px solid ${colors.MEDIUMGRAY};
  z-index: 100;
`;

const TopBox = styled.div`
  ${flex('space-between', '')};
  margin-bottom: 10px;
  color: ${colors.GRAY};
  row-gap: 100px;

  span:last-child {
    margin-right: 0;
  }

  a:last-child {
    margin-right: 0;
  }
`;

const BottomBox = styled.div`
  ${font(8, 500, 10)}
  color: #ced4da;
`;

const Text = styled.span`
  margin-right: 10px;
  ${font(15, 500)};
`;

const Link = styled.a`
  margin-right: 10px;
  ${font(15, 500)};
`;

export default Footer;
