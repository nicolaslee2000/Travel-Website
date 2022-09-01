import {
    Box,
    Card,
    CardContent,
    Container,
    MenuItem,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Backlink from "../../../../components/backlink/Backlink";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../../../../ApiConnect/constants";

const TravelerAdd = () => {
    const DATEFORMAT = "YYYY-MM-DD";
    const [countries, setCountries] = React.useState([]);
    const [userId, setUserId] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(["this_is_login"]);

    const getUserId = async (data, setState) => {
        await axios
            .post(BASE_URL + `/user/getId`, {
                email: cookies.this_is_login,
            })
            .then((response) => response.data)
            .then((id) => {
                setUserId(id);
            })
            .catch((error) => console.log(error));
    };
    React.useEffect(() => {
        (async () => {
            await axios
                .get(BASE_URL + "/traveler/countries")
                .then((response) => {
                    return response.data.map((e) => e.countryName);
                })
                .then((data) => {
                    setCountries((e) => data);
                });
        })();
    }, []);
    React.useEffect(() => {
        getUserId();
    }, []);

    const navigate = useNavigate();
    const { state } = useLocation();
    const trav = state.data;
    const updateTraveler = async (traveler) => {
        await axios
            .post(BASE_URL + `/traveler/update`, {
                ...traveler,
                userId: userId,
            })
            .then((response) => navigate("/dashboard/travelerInfo"))
            .catch((error) => console.log(error));
    };

    const [travelerData, setTravelerData] = React.useState({
        title: trav.title,
        firstName: trav.firstName,
        lastName: trav.lastName,
        gender: trav.gender,
        nationality: trav.nationality,
        dateOfBirth: trav.dateOfBirth,
        documentType: trav.documentType,
        number: trav.number,
        issuanceCountry: trav.issuanceCountry,
        dateOfIssue: trav.dateOfIssue,
        expiryDate: trav.expiryDate,
        id: trav.id,
    });

    const handleChange = (e) => {
        setTravelerData({
            ...travelerData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box sx={{ width: 600 }}>
            <Backlink
                text={trav.firstName}
                link="/dashboard/travelerInfo/traveler"
                data={trav}
            />

            <Container>
                <Typography align="center" variant="h1">
                    {"Add traveler"}
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 10 }}>
                <CardContent>
                    <form action="/dashboard/travelerInfo" method="post">
                        <TextField
                            id="title"
                            name="title"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={travelerData.title}
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="fname"
                            name="firstName"
                            label="First name(s)"
                            variant="outlined"
                            fullWidth
                            value={travelerData.firstName}
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            id="lname"
                            name="lastName"
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            helperText="exactly as on travel document"
                            value={travelerData.lastName}
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            id="gender"
                            name="gender"
                            variant="outlined"
                            select
                            label="Gender"
                            value={travelerData.gender}
                            onChange={(e) => handleChange(e)}
                            sx={{
                                mb: 2,
                            }}
                        >
                            <MenuItem value={"ratherNotSay"}>
                                Rather not say
                            </MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                        </TextField>
                        {countries && (
                            <TextField
                                fullWidth
                                name="nationality"
                                id="nationality"
                                variant="outlined"
                                select
                                label="Nationality"
                                value={travelerData.nationality}
                                onChange={(e) => handleChange(e)}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Date of birth"
                                value={travelerData.dateOfBirth}
                                onChange={(newDate) => {
                                    setTravelerData({
                                        ...travelerData,
                                        dateOfBirth: newDate.format(DATEFORMAT),
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="dob"
                                        fullWidth
                                        id="dob"
                                        sx={{
                                            mb: 2,
                                        }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <Typography variant="h3" sx={{ mb: 4 }}>
                            {"Document"}
                        </Typography>
                        <TextField
                            id="documentType"
                            name="documentType"
                            label="Document type"
                            variant="outlined"
                            fullWidth
                            value={travelerData.documentType}
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            id="documentNumber"
                            name="number"
                            label="Document number"
                            variant="outlined"
                            fullWidth
                            value={travelerData.number}
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                            required
                        />

                        {countries && (
                            <TextField
                                fullWidth
                                id="issuanceCountry"
                                name="issuanceCountry"
                                variant="outlined"
                                select
                                label="Issuer"
                                value={travelerData.issuanceCountry}
                                onChange={(e) => handleChange(e)}
                                sx={{
                                    mb: 2,
                                }}
                                required
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Date of issue"
                                value={travelerData.dateOfIssue}
                                onChange={(newDate) => {
                                    setTravelerData({
                                        ...travelerData,
                                        dateOfIssue: newDate.format(DATEFORMAT),
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        id="doi"
                                        name="doi"
                                        sx={{
                                            mb: 2,
                                        }}
                                        required
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Expiry date"
                                value={travelerData.expiryDate}
                                onChange={(newDate) => {
                                    setTravelerData({
                                        ...travelerData,
                                        expiryDate: newDate.format(DATEFORMAT),
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        id="doe"
                                        name="doe"
                                        sx={{
                                            mb: 2,
                                        }}
                                        required
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        <Button
                            variant="contained"
                            sx={{ mt: 5 }}
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                updateTraveler(travelerData);
                            }}
                        >
                            Save traveler
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TravelerAdd;
