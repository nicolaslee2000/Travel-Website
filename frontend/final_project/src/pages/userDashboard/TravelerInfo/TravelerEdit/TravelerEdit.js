import {
    Box,
    Card,
    CardContent,
    Container,
    MenuItem,
    TextField,
    Typography,
    Button,
} from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import Backlink from "../Backlink";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';


const TravelerEdit = () => {

    const DATEFORMAT = "YYYY-MM-DD"

    const { state } = useLocation();
    const trav = state.trav;
    const [gender, setGender] = React.useState("");
    const [nationality, setNationality] = React.useState("");
    const [issuer, setIssuer] = React.useState("");
    //date of birth, date of issue, date of expiry
    const [dob, setDob] = React.useState(null);
    const [doi, setDoi] = React.useState(null);
    const [doe, setDoe] = React.useState(null);


    let countries = ['korea', 'us', 'austrailia', 'egypt'];

    return (
        <Box sx={{ width: 600 }}>
            <Backlink
                text={trav.name}
                link="/dashboards/travelerInfo/traveler"
                trav={trav}
            />
            <Container>
                <Typography align="center" variant="h1">
                    {"Edit details"}
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
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="fname"
                            name="fname"
                            label="First name(s)"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            id="lname"
                            name="lname"
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            helperText="exactly as on travel document"
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
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            sx={{
                                mb: 2,
                            }}
                        >
                            <MenuItem value={"ratherNotSay"}>
                                Rather not say
                            </MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"male"}>Male</MenuItem>
                        </TextField>
                        <TextField
                            fullWidth
                            name="nationality"
                            id="nationality"
                            variant="outlined"
                            select
                            label="Nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            sx={{
                                mb: 2,
                            }}
                        >
                            {countries.map((country) => (
                                <MenuItem
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </MenuItem>
                            ))}
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterMoment} >
                        <DatePicker
                            label="Date of birth"
                            value={dob}
                            onChange={(newDate) => {
                            setDob(newDate ? newDate.format(DATEFORMAT):null);
                            }}
                            renderInput={(params) => <TextField {...params} name="dob" fullWidth id="dob" sx={{
                                mb: 2,
                            }}/>}
                        />
                        </LocalizationProvider>
                <Typography  variant="h3" sx={{mb:4}}>
                    {"Document"}
                </Typography>
                <TextField
                            id="documentType"
                            name="documentType"
                            label="Document type"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            id="documentNumber"
                            name="documentNumber"
                            label="Document number"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            required
                        />
                        

                        <TextField
                            fullWidth
                            id="issuer"
                            name="issuer"
                            variant="outlined"
                            select
                            label="Issuer"
                            value={issuer}
                            onChange={(e) => setIssuer(e.target.value)}
                            sx={{
                                mb: 2,
                            }}
                            required
                        >
                            {countries.map((country) => (
                                <MenuItem
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </MenuItem>
                            ))}
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterMoment} >
                        <DatePicker
                            label="Date of issue"
                            value={doi}
                            onChange={(newDate) => {
                            setDoi(newDate ? newDate.format(DATEFORMAT):null);
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth id="doi" name="doi" sx={{
                                mb: 2,
                            }}
                            
                            required/>}
                        />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterMoment} >
                        <DatePicker
                            label="Expiry date"
                            value={doe}
                            onChange={(newDate) => {
                            setDoe(newDate ? newDate.format(DATEFORMAT):null);
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth id="doe" name="doe" sx={{
                                mb: 2,
                            }}
                            required
                            />}
                        />
                        </LocalizationProvider> 


                        <Button
                            variant="contained"
                            sx={{mt:5}}
                            type="submit"
                        >
                            Save traveler
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TravelerEdit;
