import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import FlightRecommendationCard from "./FlightRecommendationCard";

const FlightRecommendation = () => {
    return (
        <Container sx={{ mt: 7, mb: 20 }}>
            <Typography variant="h1" sx={{ mt: 8 }} align="center">
                Most popular flights from Korea
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <FlightRecommendationCard />
                <FlightRecommendationCard />
                <FlightRecommendationCard />
            </Box>
        </Container>
    );
};

export default FlightRecommendation;
