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

const Container = styled.div`
  ${flex('space-between', 'center')};
  width: 100%;
  height: 9vh;
  border-bottom: 1px solid ${colors.MEDIUMGRAY};
  position: fixed;
`;

export default Header;
