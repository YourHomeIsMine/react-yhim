import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
