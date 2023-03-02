import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TermForm from './TermForm/TermForm';
import TextFormContainer from './Textform/TextFormContainer';
import { colors, flex, font } from 'styles';

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
  const [birth, setBirth] = useState('');

  const birthRef = useRef<HTMLInputElement>(null);

  const handleBirth = (e: any) => {
    if (birthRef.current != null) {
      const value = birthRef.current.value.replace(/\D+/g, '');
      const numberLength = 8;

      let result;
      result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 4:
            result += '-';
            break;
          case 6:
            result += '-';
            break;

          default:
            break;
        }
        result += value[i];
      }

      birthRef.current.value = result;

      setBirth(e.target.value);
    }
  };

  const navigate = useNavigate();

  const signup = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_ADDRESS}/users/signup`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: signUpInfo.email,
          password: signUpInfo.password,
          nickname: signUpInfo.name,
          birthdate: birth,
        }),
      },
    );

    const { message } = await res.json();

    if (message === 'User Created!') {
      alert('회원가입을 축하드립니다.');
      navigate('/');
    } else if (message === 'Invalid Email!') {
      alert('이메일 조건에 밎지 않습니다!');
    } else if (message === 'Invalid Password!') {
      alert('비밀번호 조건에 맞지 않습니다!');
    } else if (message === 'Email Already Exists!') {
      alert('중복된 이메일입니다!');
    } else if (message === 'KEY_ERROR') {
      alert('정보를 모두 입력해주세요!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  return (
    <Container>
      <Header>회원가입 및 소셜로그인</Header>
      <Title>YHIM에 오신 것을 환영합니다.</Title>
      <fieldset>
        <form>
          <TextFormContainer data={signUpInfo} change={handleChange} />
          <BirthContainer>
            <BirthLabel>생년월일</BirthLabel>
            <BirthForm
              type="text"
              placeholder="예) 1993-11-02"
              value={birth}
              name="birth"
              ref={birthRef}
              onChange={handleBirth}
            />
          </BirthContainer>
          <hr />
        </form>
        <TermForm />
      </fieldset>
      <SignUpBtn onClick={signup}>회원가입</SignUpBtn>
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

const BirthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
  padding: 10px 0px 10px;
  margin-left: 20px;
`;

const BirthLabel = styled.label`
  padding: 10px;
  ${font(15, 400)};
`;

const BirthForm = styled.input`
  padding: 15px 25px 15px 10px;
  margin-left: 10px;
  border: 1px solid ${colors.MEDIUMGRAY};
  border-radius: 10px;

  ::placeholder {
    color: ${colors.GRAY};
  }

  :focus {
    outline-color: ${colors.PINK};
  }
`;

export default SignUp;
