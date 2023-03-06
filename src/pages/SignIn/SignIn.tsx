import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import React, { useState } from 'react';
import TextInput from '../SignUp/TextInput';
import { emailRegex, passwordRegex } from 'utils/regex';
import { useNavigate } from 'react-router-dom';
import KakakoLogin from './KakakoLogin';
import { setAccessToken } from 'utils/jwt';

const SignIn = () => {
  const [signInData, setSignInData] = useState<SignInInfoType>({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const isValid = () => {
    if (
      emailRegex.test(signInData.email) &&
      passwordRegex.test(signInData.password) &&
      signInData.password.length >= 8
    ) {
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigate();

  const signin = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_ADDRESS}/users/signin`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: signInData.email,
          password: signInData.password,
        }),
      },
    );

    const { message, access_token } = await res.json();

    if (message === 'INVALID_USER')
      return alert('이메일 또는 비밀번호가 잘못 입력되었습니다.');
    if (message === 'KEY_ERROR')
      return alert('이메일 또는 비밀번호를 모두 입력해주세요.');
    if (message === 'SUCCESS' && !access_token) {
      alert('일시적인 token 오류입니다. 관리자에게 문의하세요');
      return navigate('/');
    }
    if (message === 'SUCCESS' && access_token) {
      alert('로그인에 성공했습니다. YHIM에 오신걸 환영합니다.');
      setAccessToken(access_token);
      navigate('/');
    }
  };

  return (
    <Container>
      <Header>회원가입 및 소셜로그인</Header>
      <Title>YHIM에 오신 것을 환영합니다.</Title>
      <TextList>
        <TextInput
          label="이메일"
          type="text"
          placeholder="예) YourHomeIsMine@yhim.com"
          className="email"
          name="email"
          onChange={handleChange}
        />
        <TextInput
          label="비밀번호"
          type="password"
          placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
          className="password"
          name="password"
          onChange={handleChange}
        />
      </TextList>
      <hr />
      <SignUpBtn
        type="button"
        className={isValid() ? 'loginButtonOn' : 'loginButton'}
        disabled={!isValid()}
        onClick={signin}
      >
        로그인
      </SignUpBtn>
      <KakakoLogin />
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
  padding: 20px 300px 20px 20px;
  margin-top: 10px;
  ${font(20, 500)};
`;

const TextList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  width: 100%;
  padding: 10px 0px 10px;
  margin-left: 20px;
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
