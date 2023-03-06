import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import Layout from 'components/layout/Layout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
