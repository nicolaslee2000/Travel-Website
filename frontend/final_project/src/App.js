import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage/MainPage';
import SearchResultPage from './pages/searchresultpage/SearchResultPage';
import TravlerPage from './pages/travelerpage/TravlerPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/searchResult' element={<SearchResultPage />} />
          <Route path='/travler' element={<TravlerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
