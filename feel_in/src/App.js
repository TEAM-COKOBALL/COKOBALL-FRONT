import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import MainPage from './pages/MainPage';
import OnBoardingPage from './pages/OnBoardingPage';
import MainPage from './pages/MainPage';
import WriteDiary from './pages/WriteDiary';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<OnBoardingPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="/writediary" element={<WriteDiary />} />
            <Route path="/main/book" element={<BookDetailPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
