import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg alt="logo" src="../images/logo.png" />
    </Link>
  );
};

const LogoImg = styled.img`
  width: 100px;
`;

export default Logo;
