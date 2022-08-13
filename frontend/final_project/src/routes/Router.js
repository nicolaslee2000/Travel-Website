import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Spinner from "../global/Spinner/Spinner";

//lazy importing page components
const MainPage = lazy(() => import("../pages/mainpage/MainPage"));
const RegisterPage = lazy(() => import("../pages/registerpage/RegisterPage"));
const RegisteredPage = lazy(() =>
    import("../pages/registeredpage/RegisteredPage")
);
const LoginPage = lazy(() => import("../pages/loginpage/LoginPage"));
const SearchResultPage = lazy(() =>
    import("../pages/searchresultpage/SearchResultPage")
);
const TravlerPage = lazy(() => import("../pages/travelerpage/TravlerPage"));
const FinalConfirmPage = lazy(() =>
    import("../pages/finalconfirmpage/FinalConfirmPage")
);
const Layout = lazy(() => import("../components/othercomponent/Layout"));
const ErrorPage = lazy(() => import("../pages/errorpage/ErrorPage"));
const Router = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <Layout isLogin={isLogin}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="registed" element={<RegisteredPage />} />
                        <Route
                            path="login"
                            element={<LoginPage setIsLogin={setIsLogin} />}
                        />
                        <Route
                            path="/searchResult"
                            element={<SearchResultPage />}
                        />
                        <Route path="/travler" element={<TravlerPage />} />
                        <Route
                            path="/finalConfirm"
                            element={<FinalConfirmPage />}
                        />
                        <Route element={<ErrorPage />} />
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
