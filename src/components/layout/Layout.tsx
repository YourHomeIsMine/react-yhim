import Header from 'components/header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { flex } from 'styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  width: 100vw;
  height: 100vh;
`;

export default Layout;
