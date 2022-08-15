import React from "react";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material";
import GeneralInfo from "./GeneralInfo";

const MyAccountPage = () => {
    return (
        <Box sx={{ width: 800 }}>
            <Container>
                <Typography align="center" variant="h1">
                    Account
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 10 }}>
                <CardContent>
                    <Typography variant="h3">General info</Typography>
                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    >
                        <GeneralInfo />
                    </Box>
                </CardContent>
            </Card>
            <Box textAlign="center" sx={{ mt: 5, mb: 5 }}>
                <Button
                    color="secondary"
                    variant="contained"
                    // onClick={() => setOpenDialog(true)}
                >
                    Log out
                </Button>
            </Box>
        </Box>
    );
};

export default MyAccountPage;
