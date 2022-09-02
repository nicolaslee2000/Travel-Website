import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../global/Spinner/Spinner';
import { CookiesProvider } from 'react-cookie';
import SocialLogin from '../pages/registerpage/SocialLogin';
import OAuth2RedirectHandler from '../pages/registerpage/OAuth2RedirectHandler';

//lazy importing page components
const MainPage = lazy(() => import('../pages/mainpage/MainPage'));
const RegisterPage = lazy(() => import('../pages/registerpage/RegisterPage'));
const RegisteredPage = lazy(() =>
  import('../pages/registeredpage/RegisteredPage')
);
const LoginPage = lazy(() => import('../pages/loginpage/LoginPage'));
const SearchResultPage = lazy(() =>
  import('../pages/searchresultpage/SearchResultPage')
);
const TravlerPage = lazy(() => import('../pages/travelerpage/TravlerPage'));
const FinalConfirmPage = lazy(() =>
  import('../pages/finalconfirmpage/FinalConfirmPage')
);
const Emailconfirmed = lazy(() =>
  import('../pages/registeredpage/Emailconfirmed')
);

//UserDashboard
const UserDashboard = lazy(() =>
  import('../pages/userDashboard/UserDashboard')
);
const TravelerInfo = lazy(() =>
  import('../pages/userDashboard/TravelerInfo/TravelerInfo')
);
const Traveler = lazy(() =>
  import('../pages/userDashboard/TravelerInfo/PersonalDetails/Traveler')
);
const TravelerAdd = lazy(() =>
  import('../pages/userDashboard/TravelerInfo/TravelerEdit/TravelerAdd')
);
const TravelerEdit = lazy(() =>
  import('../pages/userDashboard/TravelerInfo/TravelerEdit/TravelerEdit')
);
const MyBookingsPage = lazy(() =>
  import('../pages/userDashboard/MyBookings/MyBookingsPage')
);
const Flight = lazy(() =>
  import('../pages/userDashboard/MyBookings/FlightDetails/Flight')
);
const MyAccountPage = lazy(() =>
  import('../pages/userDashboard/MyAccount/MyAccountPage')
);
const BookedPage = lazy(() => import('../pages/bookedPage/BookedPage'));
const Layout = lazy(() => import('../components/othercomponent/Layout'));
const ErrorPage = lazy(() => import('../pages/errorpage/ErrorPage'));
const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <React.StrictMode>
      {/* 모든 컴포넌트에서 쿠키를 사용할 수 있도록 설정 */}
      <CookiesProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path='/'
                element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}
              >
                <Route index element={<MainPage />} exact />
                <Route path='confirm/flight' element={<BookedPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route
                  path='register/emailconfirmed'
                  element={<Emailconfirmed />}
                />
                <Route
                  path='/oauth2/redirect'
                  element={<OAuth2RedirectHandler />}
                />
                <Route path='registed' element={<RegisteredPage />} />
                <Route
                  path='login'
                  element={<LoginPage setIsLogin={setIsLogin} />}
                />
                <Route path='/searchResult' element={<SearchResultPage />} />
                <Route path='/travler' element={<TravlerPage />} />
                <Route path='/finalConfirm' element={<FinalConfirmPage />} />

                <Route path='dashboard' element={<UserDashboard />}>
                  <Route path='travelerInfo'>
                    <Route index element={<TravelerInfo />} />
                    <Route path='traveler' element={<Traveler />} />
                    <Route path='travelerAdd' element={<TravelerAdd />} />
                    <Route path='traveler/edit' element={<TravelerEdit />} />
                  </Route>
                  <Route path='mybookings'>
                    <Route index element={<MyBookingsPage />} />
                    <Route path='flight' element={<Flight />} />
                  </Route>

                  <Route path='account'>
                    <Route index element={<MyAccountPage />} />
                  </Route>
                </Route>

                {/* error page */}
                <Route
                  path='*'
                  element={<ErrorPage text={'Page not found!'} />}
                />
                <Route
                  path='register/expired'
                  element={<ErrorPage text={'인증 만료된 이메일 입니다. '} />}
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  );
};

export default Router;
