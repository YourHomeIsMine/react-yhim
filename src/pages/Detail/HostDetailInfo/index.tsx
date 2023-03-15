import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface HostDetailProps {
  detailList: HostDetailType;
}

const HostDetailInfo = ({ detailList }: HostDetailProps) => {
  const { host_image, host, host_created } = detailList;

  return (
    <HostContainer>
      <HostInfoList>
        <HostInfo>
          <HostImage alt="host_image" src={host_image} />
          <div>
            <HostName>호스트 : {host}님</HostName>
            <HostSignUpDate>
              회원 가입일 : {host_created.split('-')[0]}년{' '}
              {host_created.split('-')[1]}월
            </HostSignUpDate>
          </div>
        </HostInfo>
        <HostEtcInfo>
          <EtcInfoList>
            <HostInfoIcon
              alt="star"
              src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png"
            />
            <div>후기 11개</div>
          </EtcInfoList>
          <EtcInfoList>
            <HostInfoIcon
              alt="shield"
              src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png"
            />
            <div>본인 인증 완료</div>
          </EtcInfoList>
          <EtcInfoList>
            <HostInfoIcon
              alt="host"
              src="https://cdn-icons-png.flaticon.com/512/4757/4757254.png"
            />
            <div>일반호스트</div>
          </EtcInfoList>
        </HostEtcInfo>
        <ExchangeList>
          <ExchangeContent>
            <Title>숙박 중 게스트와의 교류</Title>
            <div>
              게스트가 숙박하는 동안 오전 8시부터 오후 8시까지 호스트에게 연락할
              수 있습니다. 게스트의 즉각적인 요구에 부응할 수 있는 직원도 현장에
              있습니다. 하지만 현재 전염병이 확산되고 있는 상황을 고려할 때,
              게스트와 자주 교류하는 것을 권장합니다.
            </div>
          </ExchangeContent>
          <ExchangeContent>
            <Title>{host}님은 일반호스트입니다.</Title>
            <div>
              일반호스트는 풍부한 경험과 높은 평점을 위해 노력하며 게스트가
              숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </div>
          </ExchangeContent>
        </ExchangeList>
      </HostInfoList>
      <HostContactList>
        <ContactTime>
          <div>응답률: 96%</div>
          <div>응답 시간: 몇 시간 이내</div>
        </ContactTime>
        <HostContact>호스트에게 연락하기</HostContact>
        <ContactWarning>
          <WarningImg
            alt="warning"
            src="https://cdn-icons-png.flaticon.com/512/4884/4884863.png"
          ></WarningImg>
          <div>
            안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
            대화를 나누지 마세요.
          </div>
        </ContactWarning>
      </HostContactList>
    </HostContainer>
  );
};

const HostContainer = styled.div`
  ${flex('', '')};
  margin: 30px 0px;
`;

const HostInfoList = styled.div`
  width: 50%;
`;

const HostInfo = styled.div`
  ${flex('', 'center')};
  margin: 20px 0px;
`;

const HostImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const HostName = styled.div`
  ${font(22, 500, 22)};
  margin-bottom: 5px;
  color: ${colors.BLACK};
`;

const HostSignUpDate = styled.div`
  ${font(17, 500, 22)};
  color: ${colors.GRAY};
`;

const HostEtcInfo = styled.div`
  ${flex('', 'center')}
`;

const EtcInfoList = styled.div`
  ${flex('', 'center')};
  margin: 10px 20px 10px 0px;
`;

const HostInfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ExchangeList = styled.div`
  margin: 10px 0px;
`;

const Title = styled.div`
  ${font(18, 500, 22)};
  margin-bottom: 10px;
  color: ${colors.BLACK};
`;

const ExchangeContent = styled.div`
  margin: 20px 0px;
  width: 75%;
  color: ${colors.GRAY};
`;

const HostContactList = styled.div`
  ${flex('center', '', 'column')};
`;

const ContactTime = styled.div`
  ${font(18, 500, 30)};
  color: ${colors.GRAY};
`;

const HostContact = styled.div`
  text-align: center;
  width: 50%;
  margin: 20px 0px;
  padding: 20px 0px;
  border: 1px solid ${colors.BLACK};
  border-radius: 10px;
  color: ${colors.BLACK};
  ${font(18, 400)}

  :hover {
    background-color: ${colors.LIGHTGRAY};
  }
`;

const ContactWarning = styled.div`
  ${flex('center', '')};
  width: 70%;
  ${font(15, 500, 18)};
  color: ${colors.GRAY};
`;

const WarningImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export default HostDetailInfo;
