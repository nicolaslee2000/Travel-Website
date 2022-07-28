import './App.css';
import Mainpage from './page/mainpage/Mainpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './page/registerpage/RegisterPage';
import RegisteredPage from './page/registeredpage/RegisteredPage';
import LoginPage from './page/loginpage/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='registed' element={<RegisteredPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
