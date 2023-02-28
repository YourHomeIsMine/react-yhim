import Header from 'components/header/Header';
import styled from 'styled-components';
import { flex } from 'styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
      {/*<Footer />*/}
    </Container>
  );
};

const Container = styled.div`
  ${flex('', '', 'column')}
`;

export default Layout;
