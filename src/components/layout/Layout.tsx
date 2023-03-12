import Header from 'components/header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { flex } from 'styles';
import { Outlet } from 'react-router-dom';
import WrapperLayout from './WrapperLayout';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Body>
        <WrapperLayout>
          <Outlet />
        </WrapperLayout>
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  ${flex('', 'center', 'column')};
  height: 100vh;
`;

const Body = styled.div`
  padding: 120px 0px;
`;

export default Layout;
