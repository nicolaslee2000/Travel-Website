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
import { ACCESS_TOKEN, BASE_URL } from "../../../../apiEndPoints/constants";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser, jwtRequest } from "../../../../apiEndPoints/ApiEndPoints";
const TravelerAdd = () => {
    const DATEFORMAT = "YYYY-MM-DD";

    const [countries, setCountries] = React.useState([]);

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

    const navigate = useNavigate();
    const { state } = useLocation();

    /**
    * select user is need ACCESS_TOKEN
     */
    function addTraveler(traveler) {

        getCurrentUser().then((response) => {
            traveler.userId = response.id
        });
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }

        return jwtRequest({
            url: BASE_URL + "/traveler/create",
            method: 'POST',
            body: JSON.stringify(traveler)
        });
    }

    const [travelerData, setTravelerData] = React.useState({
        title: "",
        firstName: "",
        lastName: "",
        gender: "",
        nationality: "",
        dateOfBirth: null,
        documentType: "",
        number: "",
        issuanceCountry: "",
        dateOfIssue: null,
        expiryDate: null,
        userId: null
    });

    const handleChange = (e) => {
        setTravelerData({
            ...travelerData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box sx={{ width: 600 }}>
            <Backlink text={"traveler info"} link="/dashboard/travelerInfo" />
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
                            onChange={(e) => handleChange(e)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="fname"
                            name="firstName"
                            label="First name(s)"
                            variant="outlined"
                            fullWidth
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
                                addTraveler(travelerData);
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
