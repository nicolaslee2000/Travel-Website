import { FlightLand, FlightTakeoff } from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../../../ApiConnect/constants";
import Backlink from "../../../../components/backlink/Backlink";
import FlightCancelDialog from "./FlightCancelDialog";
import FlightTravelerTable from "./FlightTravelerTable";

const Flight = () => {
    const { state } = useLocation();
    const flight = state.data;
    const [openDialog, setOpenDialog] = React.useState(false);
    const flightOrder = {
        airlineCode: flight.airlineCode,
        departCityName: "",
        departCityIata: flight.departCityIata,
        departTime: flight.departTime,
        departDate: flight.departDate,
        arrivalCityName: "",
        arrivalCityIata: flight.arrivalCityIata,
        arrivalTime: flight.arrivalTime,
        arrivalDate: flight.arrivalDate,

        checkedBaggage: flight.checkedBaggage,
        travelClass: flight.travelClass,
        terminal: flight.terminal,
        price: flight.price,
    };
    const [departName, setDepartName] = React.useState();
    const [arrivalName, setArrivalName] = React.useState();
    React.useEffect(() => {
        getAirportName();
    }, []);
    const getAirportName = async (data) => {
        await axios
            .get(BASE_URL + "/traveler/airportName", {
                params: { iata: flightOrder.departCityIata },
            })
            .then((res) => setDepartName(res.data));
        await axios
            .get(BASE_URL + "/traveler/airportName", {
                params: { iata: flightOrder.arrivalCityIata },
            })
            .then((res) => setArrivalName(res.data));
    };
    return (
        <Box sx={{ width: 800 }}>
            <Backlink text="my bookings" link="/dashboards/mybookings" />
            <Container>
                <Typography align="center" variant="h1">
                    Flight details
                </Typography>
                <Typography align="right" sx={{ mt: 5 }} variant="subtitle1">
                    Booked date: {"2022-10-22"}
                </Typography>
                <Typography align="right" variant="subtitle1">
                    Booking confirmation id: {"KDJSFH399"}
                </Typography>
            </Container>
            <Card variant="outlined" sx={{ mt: 8, borderRadius: 2 }}>
                <CardHeader
                    avatar={<FlightTakeoff />}
                    title={`${departName} (${flightOrder.departCityIata})`}
                    titleTypographyProps={{ variant: "h4" }}
                />
                <Divider />
                <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    overflow: "hidden",
                                }}
                            >
                                <Typography
                                    sx={{ textDecoration: "underline", mb: 2 }}
                                >
                                    {flightOrder.airlineCode}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">
                                            Depart
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {flightOrder.departTime}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {departName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="caption">
                                            {flightOrder.departDate}
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 3 }} item xs={8}>
                                        <Typography variant="caption">
                                            Arrive
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ mt: 3 }} xs={4}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {flightOrder.arrivalTime}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {arrivalName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="caption">
                                            {flightOrder.arrivalDate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {"Checked baggage:" +
                                                flightOrder.checkedBaggage}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {"Class:" + flightOrder.travelClass}
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {"Terminal:" + flightOrder.terminal}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <Divider>
                    <Chip
                        label="layover in frankfurt for 2h 30m"
                        component={Typography}
                        fontWeight="500"
                    />
                </Divider>
                <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    overflow: "hidden",
                                }}
                            >
                                <Typography
                                    sx={{ textDecoration: "underline", mb: 2 }}
                                >
                                    {"CN342"}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">
                                            Depart
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            16:30
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            Incheon airport
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="caption">
                                            9th June 2022
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ mt: 3 }} item xs={8}>
                                        <Typography variant="caption">
                                            Arrive
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ mt: 3 }} xs={4}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            16:30
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            Incheon airport
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="caption">
                                            9th June 2022
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <List>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Checked baggage:
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Class:
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Terminal:
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                            </CardContent>*/}
                <Divider />
                <CardContent>
                    <Box sx={{ display: "flex", mt: 1, mb: -2 }}>
                        <FlightLand sx={{ mr: 2.5, alignSelf: "center" }} />
                        <Typography variant="h4">{`${arrivalName} (${flightOrder.arrivalCityIata})`}</Typography>
                    </Box>
                </CardContent>
            </Card>
            {/* <Typography variant="h4" sx={{ mt: 4 }}>
                Passenger information:
            </Typography>
            <FlightTravelerTable travelers={travelers} /> */}

            <Box textAlign="center" sx={{ mt: 5, mb: 5 }}>
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => setOpenDialog(true)}
                >
                    Cancel flight
                </Button>
            </Box>
            <FlightCancelDialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
        </Box>
    );
};

export default Flight;
