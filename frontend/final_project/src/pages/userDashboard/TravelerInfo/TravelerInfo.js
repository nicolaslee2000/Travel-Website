import React from "react";

import {
    Card,
    CardContent,
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material";

import TravelerList from "./TravelerList";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TravelerInfo = ({ isBooking, setSelectedTravelers }) => {
    const [userId, setUserId] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(["this_is_login"]);
    const [travelers, setTravelers] = React.useState([]);
    const getUserId = async (data, setState) => {
        console.log(cookies.this_is_login);
        await axios
            .post(`http://localhost:8090/user/getId`, {
                email: cookies.this_is_login,
            })
            .then((response) => response.data)
            .then((id) => {
                setUserId(id);
            })
            .catch((error) => console.log(error));
    };
    const getTravelers = async (data, setState) => {
        if (userId === undefined) {
            return;
        }
        await axios
            .get(`http://localhost:8090/traveler/travelers`, {
                params: { id: userId },
            })
            .then((response) => response.data)
            .then((travelers) => {
                setTravelers((data) => travelers);
                if (setSelectedTravelers) {
                    setSelectedTravelers((data) => travelers);
                }
            });
    };

    React.useEffect(() => {
        getUserId();
    }, []);
    React.useEffect(() => {
        getTravelers();
    }, [userId]);

    return (
        <Box sx={{ width: 800 }}>
            {!isBooking && (
                <Container>
                    <Typography align="center" variant="h1">
                        Traveler Information
                    </Typography>
                </Container>
            )}
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
                        <TravelerList
                            userId={userId}
                            travelers={travelers}
                            isBooking={isBooking}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TravelerInfo;
