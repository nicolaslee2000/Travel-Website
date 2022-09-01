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
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../ApiConnect/constants";

const MyAccountPage = () => {
    const [user, setUser] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(["this_is_login"]);
    let navigate = useNavigate();
    const getUser = async (data, setState) => {
        await axios
            .post(BASE_URL + `/user/current`, {
                email: cookies.this_is_login,
            })
            .then((response) => response.data)
            .then((json) => {
                setUser(json);
            })
            .catch((error) => console.log(error));
    };

    React.useEffect(() => {
        getUser();
    }, []);

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
                        <GeneralInfo user={user} />
                    </Box>
                </CardContent>
            </Card>
            <Box textAlign="center" sx={{ mt: 5, mb: 5 }}>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                        removeCookie("this_is_login");
                        navigate("/");
                    }}
                >
                    Log out
                </Button>
            </Box>
        </Box>
    );
};

export default MyAccountPage;
