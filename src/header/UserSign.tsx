import styled from 'styled-components';
import { colors, flex } from '../styles';
import Colors from '../styles/colors';

const UserSign = () => {
  return (
    <>
      <UserBox>
        <SignInUpBox>
          <SignIn>회원가입</SignIn>
          <SignUp>로그인</SignUp>
        </SignInUpBox>
        <OtherInfo>
          <Information>당신의 공간을 네집내집하세요</Information>
          <Information>체험 호스팅하기</Information>
          <Information>도움말</Information>
        </OtherInfo>
      </UserBox>
    </>
  );
};

const UserBox = styled.div`
  width: 260px;
  height: 300px;
  position: absolute;
  top: 70px;
  right: 10px;
  border-radius: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid ${Colors.MEDIUMGRAY};
  background-color: ${colors.WHITE};
`;

const SignInUpBox = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`;

const SignIn = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  text-align: left;
  padding-left: 10px;
  font-weight: 700;

  :hover {
    background-color: ${Colors.MEDIUMGRAY};
  }
`;

const SignUp = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  text-align: left;
  padding-left: 10px;

  :hover {
    background-color: ${Colors.MEDIUMGRAY};
  }
`;

const OtherInfo = styled.div`
  ${flex('flex-start', 'center', 'column')};
  width: 100%;
  text-align: left;
  border-top: 1px solid ${Colors.GRAY};
`;

const Information = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  text-align: left;
  padding-left: 10px;

  :hover {
    background-color: ${Colors.MEDIUMGRAY};
  }
`;

export default UserSign;
