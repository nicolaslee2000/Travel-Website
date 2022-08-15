import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const UserDashboard = () => {
    return (
        <Box sx={{ display: "flex", flex: "1 auto" }}>
            <Sidebar />

            <Container>
                <Outlet />
            </Container>
        </Box>
    );
};

export default UserDashboard;
