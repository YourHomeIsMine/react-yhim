import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import SignUp from 'pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
