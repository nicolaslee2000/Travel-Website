import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Backlink from "../Backlink";
import DocumentDetailsList from "./DocumentDetailsList";
import PersonalDetailsList from "./PersonalDetailsList";

const Traveler = () => {
    const { state } = useLocation();
    const trav = state.trav;
    return (
        <Box sx={{ width: 600 }}>
            <Backlink text="travel info" link="/dashboards/travelerInfo" />
            <Container>
                <Typography align="center" variant="h1">
                    {trav.name}
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 10 }}>
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h3">Personal details</Typography>
                        <Link
                            to="edit"
                            state={{ trav: trav }}
                            style={{ textDecoration: "none" }}
                        >
                            <Button color="primary">edit</Button>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    >
                        <PersonalDetailsList trav={trav} />
                    </Box>
                    <Typography variant="h3">Travel Document</Typography>
                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    >
                        <DocumentDetailsList trav={trav} />
                    </Box>
                </CardContent>
            </Card>
            <Box textAlign="center">
                <Button color="error" variant="contained">
                    Delete traveler
                </Button>
            </Box>
        </Box>
    );
};

export default Traveler;
