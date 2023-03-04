import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import { useLocation, useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakakoLogin = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    window.alert('YHIM에 오신걸 환영합니다.');
    navigate('/');
  };

  const handleLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender, birthday',
      success: function (authObj: any) {
        window.Kakao.API.request({
          url: '/v2/user/me',
        });
        fetch(`${process.env.REACT_APP_API_ADDRESS}/users/login/kakao`, {
          method: 'GET',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => goToMain());
      },
    });
  };

  return (
    <SocialLoginList>
      <BorderList>
        <BorderLeft></BorderLeft>
        <BorderText>또는</BorderText>
        <BorderRight></BorderRight>
      </BorderList>
      <KakaoButton onClick={handleLogin}>
        <KakaoLogo alt="kakaoLogo" src="../images/kakao.svg"></KakaoLogo>
        <span>카카오 로그인 </span>
      </KakaoButton>
    </SocialLoginList>
  );
};

const SocialLoginList = styled.div`
  ${flex('', 'center', 'column')};
  width: 100%;
`;

const BorderList = styled.div`
  ${flex('center', 'center')};
  width: 100%;
  margin-bottom: 20px;
`;

const BorderLeft = styled.div`
  width: 45%;
  border: 1px solid ${colors.MEDIUMGRAY};
`;

const BorderRight = styled.div`
  width: 45%;
  border: 1px solid ${colors.MEDIUMGRAY};
`;

const BorderText = styled.div`
  width: 10%;
  text-align: center;
  ${font(15, 400)};
  color: ${colors.GRAY};
`;

const KakaoButton = styled.a`
  ${flex('center', 'center')}
  width: 60%;
  margin: 0px 10px 20px 20px;
  padding: 12px 15px;
  border-radius: 10px;
  background-color: #fee500;
  color: ${colors.BLACK};
  ${font(18, 400)}
`;

const KakaoLogo = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export default KakakoLogin;
