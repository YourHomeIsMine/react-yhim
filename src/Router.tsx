import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import SignUp from 'pages/SignUp';
import Layout from 'components/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
