import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerpage/RegisterPage";
import RegisteredPage from "./pages/registeredpage/RegisteredPage";
import MainPage from "./pages/mainpage/Mainpage";
import SearchResultPage from "./pages/searchresultpage/SearchResultPage";
import TravlerPage from "./pages/travelerpage/TravlerPage";
import LoginPage from "./pages/loginpage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/searchResult" element={<SearchResultPage />} />
          <Route path="/travler" element={<TravlerPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="registed" element={<RegisteredPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
