import styled from 'styled-components';
const logo = require('../images/logo.png');

const Logo = () => {
  return <LogoImg />;
};

const LogoImg = styled.img`
  width: 15%;
  margin-left: 10px;
`;

LogoImg.defaultProps = {
  src: logo,
};

export default Logo;
