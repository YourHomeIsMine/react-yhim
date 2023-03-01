import styled from 'styled-components';

function WrapperLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default WrapperLayout;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;
