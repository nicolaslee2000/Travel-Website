import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import FlightConfirm from "./FlightConfirm";
import { useDispatch, useSelector } from "react-redux";

const BookedPage = () => {
    const { state } = useLocation();
    const travelers = state.travelers;
    const flightRedux = useSelector((state) => {
        return state.searchReducer3;
    });

    return (
        <Container sx={{ mt: 10 }}>
            <Box sx={{ width: 800 }}>
                <Typography align="center" variant="h1">
                    Confirm Flight
                </Typography>
                <FlightConfirm
                    travelers={travelers}
                    flight={flightRedux.flightPrice}
                />
            </Box>
        </Container>
    );
};

export default BookedPage;
