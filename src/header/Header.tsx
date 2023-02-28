import styled from 'styled-components';
import { flex } from '../styles';
import UserInfo from './UserInfo';
import Logo from './Logo';
import CenterMenu from './CenterMenu';
import { font } from '../styles/font';
import Colors from '../styles/colors';

const Header = () => {
  return (
    <FlexBox>
      <Logo />
      <CenterMenu />
      <UserInfo />
    </FlexBox>
  );
};

const FlexBox = styled.div`
  ${flex('space-between', 'center')};
  width: 100%;
  height: 9vh;
`;

export default Header;
