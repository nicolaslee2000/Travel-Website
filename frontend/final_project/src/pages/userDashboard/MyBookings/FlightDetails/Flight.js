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
} from "@material-ui/core";
import { FlightTakeoff } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import Backlink from "../../TravelerInfo/Backlink";
import FlightCancelDialog from "./FlightCancelDialog";
import FlightTravelerTable from "./FlightTravelerTable";

const Traveler = () => {
    const [travelers, setTravelers] = React.useState([
        { id: 1, name: "nick" },
        { id: 2, name: "jack" },
    ]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const { state } = useLocation();
    const flight = state.flight;

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
                    title={"Incheon International Airport (ICN)"}
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
                </CardContent>
                <Divider>
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
                </CardContent>
            </Card>
            <Typography variant="h4" sx={{ mt: 4 }}>
                Passenger information:
            </Typography>
            <FlightTravelerTable travelers={travelers} />

            <Box textAlign="center" sx={{ mt: 5 }}>
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

export default Traveler;
