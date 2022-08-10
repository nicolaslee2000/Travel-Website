import './App.css';
import Mainpage from './pages/mainpage/Mainpage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/registerpage/RegisterPage';
import RegisteredPage from './pages/registeredpage/RegisteredPage';
import LoginPage from './pages/loginpage/LoginPage';
import Layout from './components/othercomponent/Layout';
import SearchResultPage from './pages/searchresultpage/SearchResultPage';
import TravlerPage from './pages/travelerpage/TravlerPage';
import FinalConfirmPage from './pages/finalconfirmpage/FinalConfirmPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='registed' element={<RegisteredPage />} />
            <Route
              path='login'
              // authenticated={authenticated}
              element={<LoginPage />}
            />
            <Route path='/searchResult' element={<SearchResultPage />} />
            <Route path='/travler' element={<TravlerPage />} />
            <Route path='/finalConfirm' element={<FinalConfirmPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
