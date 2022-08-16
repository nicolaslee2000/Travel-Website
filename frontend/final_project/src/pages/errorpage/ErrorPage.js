import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: 500, height: 500 }}>
            <Container>
                <Typography variant="h1" color="error">
                    {props.text}
                </Typography>
                <Button
                    sx={{ mt: 10 }}
                    onClick={() => navigate("/", { replace: true })}
                    variant="contained"
                >
                    Return to home page
                </Button>
            </Container>
        </Box>
    );
};

export default ErrorPage;
