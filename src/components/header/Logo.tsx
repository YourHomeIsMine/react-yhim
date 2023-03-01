import styled from 'styled-components';

const Logo = () => {
  return <LogoImg alt="logo" src="../images/logo.png" />;
};

const LogoImg = styled.img`
  width: 150px;
  margin-left: 10px;
`;

export default Logo;
