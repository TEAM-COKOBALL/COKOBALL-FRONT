import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import OnBoardingPage from './pages/OnBoardingPage';
import MainPage from './pages/MainPage';
import WriteDiary from './pages/WriteDiary';
import Join from './pages/Join';
import Login from './pages/Login';
import WhoAmI from './pages/WhoAmI';
import styled from 'styled-components';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<OnBoardingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/write" element={<WriteDiary />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/whoami" element={<WhoAmI />} />
            <Route path="/main/book" element={<BookDetailPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
