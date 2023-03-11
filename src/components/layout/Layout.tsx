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
      <WrapperLayout>
        <Outlet />
      </WrapperLayout>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  ${flex('', 'center', 'column')};
  height: 100vh;
`;

export default Layout;
