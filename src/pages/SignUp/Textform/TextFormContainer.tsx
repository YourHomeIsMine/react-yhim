import TextForm from './TextForm';
import React, { useState } from 'react';
import { SignUpFormProps } from '../index';

type signUpInfo = {
  data: SignUpFormProps;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextFormContainer = ({ data, change }: signUpInfo) => {
  const { email, password, passwordCheck, name } = data;
  console.log(change);
  const emailRegex =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  return (
    <>
      <TextForm
        label="이메일"
        type="text"
        placeholder="예) YourHomeIsMine@yhim.com"
        className="email"
        name="email"
        onChange={change}
      >
        <button
          className={emailRegex.test(email) ? 'buttonOn' : 'button'}
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
        onChange={change}
      />
      <TextForm
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        className="passwordCheck"
        name="passwordCheck"
        onChange={change}
      >
        <button
          className={
            password === passwordCheck &&
            password.length >= 8 &&
            passwordRegex.test(password)
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
        onChange={change}
      />
    </>
  );
};

export default TextFormContainer;
