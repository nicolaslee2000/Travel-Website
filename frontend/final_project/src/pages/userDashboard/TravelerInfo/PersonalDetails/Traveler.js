import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Backlink from "../../../../components/backlink/Backlink";
import DocumentDetailsList from "./DocumentDetailsList";
import PersonalDetailsList from "./PersonalDetailsList";

const Traveler = () => {
    const { state } = useLocation();
    const trav = state.data;
    const navigate = useNavigate();

    const deleteTraveler = async (id) => {
        await axios
            .get("http://localhost:8090/traveler/delete", {
                params: { id: id },
            })
            .then((res) => navigate("/dashboard/travelerInfo"));
    };
    return (
        <Box sx={{ width: 600 }}>
            <Backlink text="travel info" link="/dashboard/travelerInfo" />
            <Container>
                <Typography align="center" variant="h1">
                    {trav.firstName + " " + trav.lastName}
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
                            to="/dashboard/travelerInfo/traveler/edit"
                            state={{ data: trav }}
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
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => deleteTraveler(trav.id)}
                >
                    Delete traveler
                </Button>
            </Box>
        </Box>
    );
};

export default Traveler;
