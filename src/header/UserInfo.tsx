import styled from 'styled-components';
import Colors from '../styles/colors';
import { flex } from '../styles';
import { font } from '../styles/font';
import { useState } from 'react';
import UserSign from './UserSign';
const worldImg = require('../images/world.png');
const hamburgerImg = require('../images/hamburger.png');
const userImg = require('../images/user.png');

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BtnBlock>
      <InfoTitle>당신의 공간을 네집내집하세요</InfoTitle>
      <Icon></Icon>
      <LoginBtn onClick={openModalHandler}>
        <Hamburger></Hamburger>
        <UserIcon></UserIcon>
        {isOpen ? <UserSign /> : null}
      </LoginBtn>
    </BtnBlock>
  );
};

const BtnBlock = styled.div`
  ${flex('space-between', 'center')};
  margin-right: 15px;
`;

const InfoTitle = styled.div`
  font-family: 'Noto Sans KR';
  ${font(16, 500)};
  color: ${Colors.BLACK};

  &:hover {
    opacity: 1;
    cursor: pointer;
    background: yellow;
  }
`;

const Icon = styled.img.attrs({
  src: `${worldImg}`,
})`
  width: 20px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled.div`
  ${flex('', 'center')};
  height: 40px;
  border: 1px solid ${Colors.MEDIUMGRAY};
  border-radius: 20px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
    transition-duration: 0.2s;
  }
`;

const Hamburger = styled.img.attrs({
  src: `${hamburgerImg}`,
})`
  width: 15px;
  margin-left: 15px;
`;

const UserIcon = styled.img.attrs({
  src: `${userImg}`,
})`
  width: 30px;
  margin: 0px 10px 0px 15px;
`;

export default UserInfo;
