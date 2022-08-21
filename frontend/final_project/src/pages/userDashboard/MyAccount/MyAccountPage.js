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

const MyAccountPage = () => {
    const [user, setUser] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(["this_is_login"]);
    const getUser = async (data, setState) => {
        await fetch(`http://localhost:8090/getUser`, {
            method: "post",
            body: JSON.stringify({ email: cookies.this_is_login }),
        }).then((response) => {
            console.log(cookies);
            console.log(response);
        });
    };

    React.useEffect(() => {
        getUser();
    });

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
