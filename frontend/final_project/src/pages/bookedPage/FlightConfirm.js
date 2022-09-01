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
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../ApiConnect/constants";
import FlightCancelDialog from "../userDashboard/MyBookings/FlightDetails/FlightCancelDialog";
import FlightTravelerTable from "../userDashboard/MyBookings/FlightDetails/FlightTravelerTable";

const Traveler = ({ flight, travelers }) => {
    const [openDialog, setOpenDialog] = React.useState(false);
    const flightOrder = {
        airlineCode:
            flight.flightOffers[0].itineraries[0].segments[0].carrierCode +
            flight.flightOffers[0].itineraries[0].segments[0].aircraft.code,
        departCityName: "",
        departCityIata:
            flight.flightOffers[0].itineraries[0].segments[0].departure
                .iataCode,
        departTime:
            flight.flightOffers[0].itineraries[0].segments[0].departure.at.slice(
                11,
                16
            ),
        departDate:
            flight.flightOffers[0].itineraries[0].segments[0].departure.at.slice(
                0,
                10
            ),
        arrivalCityName: "",
        arrivalCityIata:
            flight.flightOffers[0].itineraries[0].segments[0].arrival.iataCode,
        arrivalTime:
            flight.flightOffers[0].itineraries[0].segments[0].arrival.at.slice(
                11,
                16
            ),
        arrivalDate:
            flight.flightOffers[0].itineraries[0].segments[0].arrival.at.slice(
                0,
                10
            ),

        checkedBaggage:
            flight.flightOffers[0].pricingOptions.includedCheckedBagsOnly,
        travelClass: flight.flightOffers[0].travelerPricings[0].fareOption,
        terminal:
            flight.flightOffers[0].itineraries[0].segments[0].departure
                .terminal,
        price:
            flight.flightOffers[0].price.total +
            flight.flightOffers[0].price.currency,
    };

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
        getUserId();
    }, []);
    const navigate = useNavigate();
    const createOrder = async (order) => {
        await axios
            .post(BASE_URL + `/order/create`, {
                ...order,
                userId: userId,
            })
            .then((response) => navigate("/"))
            .catch((error) => console.log(error));
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
            .then((res) => {
                setDepartName(res.data);
                flightOrder.departCityName = departName;
            });
        await axios
            .get(BASE_URL + "/traveler/airportName", {
                params: { iata: flightOrder.arrivalCityIata },
            })
            .then((res) => {
                setArrivalName(res.data);
                flightOrder.arrivalCityName = arrivalName;
            });
    };
    return (
        <>
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

            <Typography variant="h4" sx={{ mt: 4 }}>
                Passenger information:
            </Typography>
            <FlightTravelerTable travelers={travelers} />
            <Typography variant="h4" sx={{ mt: 4 }}>
                {"Total Price: " + flightOrder.price}
            </Typography>
            <Box textAlign="center" sx={{ mt: 5, mb: 5 }}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => createOrder(flightOrder)}
                >
                    Confirm flight
                </Button>
            </Box>
        </>
    );
};

export default Traveler;
