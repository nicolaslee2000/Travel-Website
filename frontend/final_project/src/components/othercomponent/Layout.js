import { experimentalStyled } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { TopbarHeight } from "../../global/assets/global/Theme-variable";
import { Box, Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import BackgroundImage from "../../global/assets/images/backgrounds/BackgroundImage.jpg";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: "1 auto 1",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    overflow: "hidden",

    backgroundColor: theme.palette.background.default,
    paddingBottom: 50,
    [theme.breakpoints.up("lg")]: {
        paddingTop: "TopbarHeight",
    },
    [theme.breakpoints.down("lg")]: {
        paddingTop: "64px",
    },
}));

const Layout = ({ isLogin }) => {
    return (
        <MainWrapper>
            <Container>
                <Header
                    isLogin={isLogin}
                    sx={{
                        position: "fixed",
                        // zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                />
            </Container>
            <PageWrapper>
                <Box
                    sx={{
                        minHeight: "calc(100vh - 170px)",
                        width: "100%",
                        // bgcolor: "red",
                    }}
                >
                    <Outlet />
                </Box>
            </PageWrapper>
            <Footer />
        </MainWrapper>
    );
};

export default Layout;
