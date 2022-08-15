import React from "react";

import { Card, CardContent, Box, Typography, Container } from "@mui/material";

import TravelerList from "./TravelerList";

const TravelerInfo = () => {
    return (
        <Box sx={{ width: 800 }}>
            <Container>
                <Typography align="center" variant="h1">
                    Traveler Information
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 10 }}>
                <CardContent>
                    <Typography variant="h3">Travelers</Typography>
                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    >
                        <TravelerList />
                        {/* <ExTable /> */}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TravelerInfo;
