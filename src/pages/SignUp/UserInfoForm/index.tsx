import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import { colors, font } from 'styles';
import { emailRegex, passwordRegex } from 'utils/regex';

// HJ: 컴포넌트의 타입, 인터페이스 이름 : 컴포넌트명+Props 추천
interface UserInfoFormProps {
  // HJ: data로 해도 되는데 signupInfo로 구체적으로 써주는 게 다른 사람도 알기 쉬을 듯
  // HJ: Singup.tsx 말고 type/---d.ts 로 파일 하나 만들어서 여기에 타입 선언해서 쓰는게 좋을 듯 (확장자 차이 : d.ts => 전역에서 사용 가능 / .ts import 해서 사용)
  signUpInfo: SignUpInfoType;
  // HJ: 이벤트 핸들러는 앞에 on 붙이기 (코드 색깔이 아예 달라지고, eslint에서 props를 abc순으로 나열할 경우 on- 이 붙은 것들은 제일 뒤로 빠지게 돼요)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInfoForm = ({ signUpInfo, onChange }: UserInfoFormProps) => {
  const { email, password, passwordCheck, name, birthDate } = signUpInfo;

  return (
    <>
      <TextInput
        label="이메일"
        type="text"
        placeholder="예) YourHomeIsMine@yhim.com"
        className="email"
        name="email"
        onChange={onChange}
      >
        <Button
          className={emailRegex.test(email) ? 'buttonOn' : 'button'}
          disabled
        >
          O
        </Button>
      </TextInput>
      <TextInput
        label="비밀번호"
        type="password"
        placeholder="영문 대소문자, 숫자, 특수문자를 포함하여 8자리 이상"
        className="password"
        name="password"
        onChange={onChange}
      />
      <TextInput
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        className="passwordCheck"
        name="passwordCheck"
        onChange={onChange}
      >
        <Button
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
        </Button>
      </TextInput>
      <TextInput
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요"
        className="name"
        name="name"
        onChange={onChange}
      />
      <BirthContainer>
        <BirthLabel>생년월일</BirthLabel>
        <BirthForm
          type="text"
          placeholder="예) 1993-11-02"
          name="birthDate"
          value={birthDate}
          onChange={onChange}
        />
      </BirthContainer>
    </>
  );
};

const Button = styled.button`
  width: 60%;
  margin: 0px 10px 0px 20px;
  padding: 15px 15px;
  border-radius: 10px;
  cursor: default;

  &.buttonOn {
    background-color: ${colors.PINK};
    color: ${colors.MEDIUMGRAY};
  }

  &.button {
    background-color: ${colors.LIGHTGRAY};
  }
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
`;

export default UserInfoForm;
