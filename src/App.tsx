import styled from 'styled-components';
import { flex } from './styles';
import './styles/globals.css';

function App() {
  return <Container>App</Container>;
}

export default App;

const Container = styled.div`
  ${flex('center', 'center', 'column')}
  width: 100vw;
  height: 100vh;
`;
