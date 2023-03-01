import styled from 'styled-components';
import { colors, flex } from 'styles';

const UserSign = () => {
  return (
    <>
      <UserBox>
        <SignInUpBox>
          <SignUp>로그인</SignUp>
          <SignIn>회원가입</SignIn>
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
  position: absolute;
  top: 70px;
  right: 10px;
  width: 260px;
  height: 300px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
`;

const SignInUpBox = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`;

const SignUp = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  padding-left: 10px;
  text-align: left;
  font-weight: 700;

  :hover {
    background-color: ${colors.MEDIUMGRAY};
  }
`;

const SignIn = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  padding-left: 10px;
  text-align: left;

  :hover {
    background-color: ${colors.MEDIUMGRAY};
  }
`;

const OtherInfo = styled.div`
  ${flex('flex-start', 'center', 'column')};
  width: 100%;
  border-top: 1px solid ${colors.GRAY};
  text-align: left;
`;

const Information = styled.div`
  ${flex('flex-start', 'center', 'row')};
  width: 100%;
  height: 50px;
  padding-left: 10px;
  text-align: left;

  :hover {
    background-color: ${colors.MEDIUMGRAY};
  }
`;

export default UserSign;
