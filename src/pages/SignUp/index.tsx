import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from 'Config';
import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import TextFormContainer from './Textform/TextFormContainer';

export type SignUpFormProps = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
};

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  });

  const navigate = useNavigate();

  const submitSignUpForm = () => {
    fetch(API.signup, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: signUpInfo.email,
        password: signUpInfo.password,
        nickname: signUpInfo.name,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'User Created!') {
          navigate('/main');
        } else if (result.message === 'Invalid Email!') {
          alert('이메일 조건에 밎지 않습니다!');
        } else if (result.message === 'Invalid Password!') {
          alert('비밀번호 조건에 맞지 않습니다!');
        } else if (result.message === 'Email Already Exists!') {
          alert('중복된 이메일입니다!');
        } else if (result.message === 'KEY_ERROR') {
          alert('정보를 모두 입력해주세요!');
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  return (
    <Container>
      <Header>회원가입 및 소셜로그인</Header>
      <Title>YHIM에 오신 것을 환영합니다.</Title>
      <Fildset>
        <SignUpForm>
          <TextFormContainer data={signUpInfo} change={handleChange} />
          <hr />
        </SignUpForm>
      </Fildset>
    </Container>
  );
};

const Container = styled.main`
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 20px;
`;

const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  ${font(15, 600)};
  text-align: center;
`;

const Title = styled.div`
  padding: 20px;
  margin-top: 10px;
  ${font(20, 500)};
`;

const Fildset = styled.fieldset``;

const SignUpForm = styled.form``;

export default SignUp;
