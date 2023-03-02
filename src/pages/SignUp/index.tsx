import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from 'Config';
import styled from 'styled-components';
import TextForm from './TextForm';
import { colors } from '../../styles';

export type SignUpFormProps = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
};

const SignUp = () => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

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
          navigate('/signup-success');
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

  return (
    <Container>
      <Header>회원가입 및 소셜로그인</Header>
      <Fildset>
        <SignUpForm>
          <TextForm
            label="이메일"
            type="text"
            placeholder="예) YourHomeIsMine@yhim.com"
            className="email"
            name="email"
            onChange={handleChange}
          >
            <button
              className={
                emailRegex.test(signUpInfo.email) ? 'buttonOn' : 'button'
              }
              disabled
            >
              O
            </button>
          </TextForm>
          <TextForm
            label="비밀번호"
            type="password"
            placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
            className="password"
            name="password"
            onChange={handleChange}
          />
          <TextForm
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            className="passwordCheck"
            name="passwordCheck"
            onChange={handleChange}
          >
            <button
              className={
                signUpInfo.password === signUpInfo.passwordCheck &&
                signUpInfo.password.length >= 8 &&
                passwordRegex.test(signUpInfo.password)
                  ? 'buttonOn'
                  : 'button'
              }
              disabled
            >
              O
            </button>
          </TextForm>
          <TextForm
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            className="name"
            name="name"
            onChange={handleChange}
          />
          <hr />
        </SignUpForm>
      </Fildset>
    </Container>

    // <main className="signup">
    //   <fieldset>
    //     <form className="signUpForm">
    //       <div className="termBox">
    //         <span>이용약관 동의</span>
    //         <div className="termCheckBox">
    //           <ul>
    //             <li className="list">
    //               <label className="conditionTrue">
    //                 <span>
    //                   <input type="checkbox"></input>
    //                   <span>모두 동의합니다.</span>
    //                 </span>
    //               </label>
    //             </li>
    //             <li className="list">
    //               <label className="conditionTrue">
    //                 <span>
    //                   <input type="checkbox"></input>
    //                   <span>이용약관 동의</span>
    //                   <b>(필수)</b>
    //                 </span>
    //               </label>
    //             </li>
    //             <li className="list">
    //               <label className="conditionTrue">
    //                 <span>
    //                   <input type="checkbox"></input>
    //                   <span>개인정보 수집, 이용동의</span>
    //                   <b>(필수)</b>
    //                 </span>
    //               </label>
    //             </li>
    //             <li className="list">
    //               <label className="conditionTrue">
    //                 <span>
    //                   <input type="checkbox"></input>
    //                   <span>이벤트, 혜택정보 수신 동의</span>
    //                   <b>(선택)</b>
    //                 </span>
    //               </label>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="document">
    //         <a href="/" type="button">
    //           이용약관 보기
    //         </a>
    //         <span> · </span>
    //         <a href="/" type="button">
    //           개인정보 처리방침 보기
    //         </a>
    //       </div>
    //       <div className="signUpBtn">
    //         <button type="button" onClick={submitSignUpForm}>
    //           회원가입
    //         </button>
    //       </div>
    //     </form>
    //   </fieldset>
    // </main>
  );
};

const Container = styled.main`
  background-color: red;
  width: 100%;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

const Header = styled.header`
  background-color: yellow;
`;

const Fildset = styled.fieldset`
  background-color: green;
`;

const SignUpForm = styled.form`
  background-color: rebeccapurple;
`;

export default SignUp;
