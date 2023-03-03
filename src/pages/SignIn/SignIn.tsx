import styled from 'styled-components';
import { colors, flex, font } from '../../styles';

const SignIn = () => {
  return (
    <Container>
      <Header>회원가입 및 소셜로그인</Header>
      <Title>YHIM에 오신 것을 환영합니다.</Title>

      <SignUpBtn>로그인</SignUpBtn>
    </Container>
  );
};

const Container = styled.main`
  ${flex('', 'center', 'column')}
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(15, 600)};
  text-align: center;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  ${font(20, 500)};
`;

const SignUpBtn = styled.button`
  width: 60%;
  margin: 0px 10px 20px 20px;
  padding: 20px 15px;
  border-radius: 10px;
  background-color: ${colors.PINK};
  color: ${colors.WHITE};
  ${font(18, 400)}
`;
export default SignIn;
