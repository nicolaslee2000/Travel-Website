import {
    Box,
    Card,
    CardContent,
    Container,
    FormControlLabel,
    Grow,
    Switch,
    Typography,
} from "@mui/material";
import React from "react";
import FlightRecommendationCard from "./FlightRecommendationCard";

const FlightRecommendation = ({ dashboardTrans }) => {
    return (
        <Container sx={{ mt: 7, mb: 20 }}>
            <Typography variant="h1" sx={{ mt: 8 }} align="center">
                Most popular flights from Korea
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grow in={dashboardTrans}>
                    <Box>
                        <FlightRecommendationCard />
                    </Box>
                </Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={dashboardTrans}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(dashboardTrans ? { timeout: 1000 } : {})}
                >
                    <Box>
                        <FlightRecommendationCard />
                    </Box>
                </Grow>
                <Grow
                    in={dashboardTrans}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(dashboardTrans ? { timeout: 2000 } : {})}
                >
                    <Box>
                        <FlightRecommendationCard />
                    </Box>
                </Grow>
            </Box>
        </Container>
    );
};

export default FlightRecommendation;
