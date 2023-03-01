import Header from 'components/header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import { flex } from 'styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  ${flex('', '', 'column')}
  width: 100vw;
  height: 100vh;
`;

export default Layout;
