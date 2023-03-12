import styled from 'styled-components';
import { colors, flex, font } from 'styles';

interface HostDetailProps {
  detailList: HostDetailType;
}

const HostDetailInfo = ({ detailList }: HostDetailProps) => {
  const { host_image, host, host_created } = detailList;

  return (
    <HostContainer>
      <HostInfo>
        <HostImage alt="host_image" src={host_image} />
        <HostDetail>
          <HostName>호스트 : {host}</HostName>
          <HostSignUpDate>
            회원 가입일 : {host_created.split('-')[0]}년{' '}
            {host_created.split('-')[1]}월
          </HostSignUpDate>
        </HostDetail>
      </HostInfo>
      <HostEtcInfo>
        <ReviewCount>
          <ReviewCountIcon
            alt="star"
            src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png"
          />
          <span>후기 11개</span>
        </ReviewCount>
        <Certificated>
          <ReviewCountIcon
            alt="shield"
            src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png"
          />
          <span>후기 11개</span>
        </Certificated>
      </HostEtcInfo>
      <SuperHost></SuperHost>
    </HostContainer>
  );
};

const HostContainer = styled.div``;

const HostInfo = styled.div`
  ${flex('', 'center')};
  margin-top: 20px;
`;

const HostImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const HostDetail = styled.div``;

const HostName = styled.div`
  ${font(22, 500, 22)};
  margin-bottom: 5px;
  color: ${colors.BLACK};
`;

const HostSignUpDate = styled.div`
  ${font(17, 500, 22)};
  color: ${colors.GRAY};
`;

const HostEtcInfo = styled.div``;

const SuperHost = styled.div``;

const ReviewCount = styled.div`
  ${flex('', 'center')};
  margin-top: 10px;
`;

const Certificated = styled.div``;

const ReviewCountIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export default HostDetailInfo;
