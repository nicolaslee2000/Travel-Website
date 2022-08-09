import './App.css';
import Mainpage from './page/mainpage/Mainpage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './page/registerpage/RegisterPage';
import RegisteredPage from './page/registeredpage/RegisteredPage';
import LoginPage from './page/loginpage/LoginPage';
import Layout from './components/othercomponent/Layout';

function App() {
  return (
    <>
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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
