import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./reduxes/store";
import Spinner from "./global/Spinner/Spinner";
import { ThemeProvider } from "@mui/material";
import { baseTheme } from "./global/assets/global/Theme-variable";

const { store, persistor } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <ThemeProvider theme={baseTheme}>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
