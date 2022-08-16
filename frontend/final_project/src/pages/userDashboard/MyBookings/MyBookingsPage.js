import React from "react";

import { Card, CardContent, Box, Typography, Container } from "@mui/material";
import FlightList from "./FlightList";

const MyBookingsPage = () => {
    return (
        <Box sx={{ width: 800 }}>
            <Container>
                <Typography align="center" variant="h1">
                    My Bookings
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 10 }}>
                <CardContent>
                    <Typography variant="h3">Flights</Typography>
                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    >
                        <FlightList />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MyBookingsPage;
