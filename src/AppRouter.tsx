import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
