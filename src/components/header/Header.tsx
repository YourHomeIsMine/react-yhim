import styled from 'styled-components';
import { flex, colors } from '../../styles';
import UserInfo from './UserInfo';
import Logo from './Logo';
import CenterMenu from './CenterMenu';

const Header = () => {
  return (
    <Container>
      <Logo />
      <CenterMenu />
      <UserInfo />
    </Container>
  );
};

const Container = styled.header`
  ${flex('space-between', 'center')};
  position: fixed;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
`;

export default Header;
