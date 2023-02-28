import styled from 'styled-components';
import Colors from '../styles/colors';
import { flex } from '../styles';
import { font } from '../styles/font';
const worldImg = require('../images/world.png');
const hamburgerImg = require('../images/hamburger.png');
const userImg = require('../images/user.png');

const UserInfo = () => {
  return (
    <BtnBlock>
      <InfoTitle>당신의 공간을 네집내집하세요</InfoTitle>
      <Icon></Icon>
      <LoginBtn>
        <Hamburger></Hamburger>
        <UserIcon></UserIcon>
      </LoginBtn>
    </BtnBlock>
  );
};

const BtnBlock = styled.div`
  ${flex('space-between', 'center')};
`;

const InfoTitle = styled.div`
  font-family: 'Noto Sans KR';
  ${font(16, 500)};
  color: ${Colors.BLACK};
`;

const Icon = styled.img.attrs({
  src: `${worldImg}`,
})`
  width: 20px;
  margin-left: 20px;
`;

const LoginBtn = styled.div`
  ${flex('', 'center')};
  height: 40px;
  border: 1px solid #717171;
  border-radius: 20px;
  margin-left: 20px;
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
