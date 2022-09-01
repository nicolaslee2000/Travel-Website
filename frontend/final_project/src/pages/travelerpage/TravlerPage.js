import React from "react";
import Grid from "@mui/material/Grid";

import Header from "../../components/othercomponent/Header";
import GoResultItem from "../../components/travlerpagecomponent/GoResultItem";
import BackResultItem from "./../../components/travlerpagecomponent/BackResultItem";
import TravlerHeader from "./../../components/travlerpagecomponent/TravlerHeader";
import GoResultItem02 from "./../../components/travlerpagecomponent/GoResultItem02";
import BackResultItem02 from "../../components/travlerpagecomponent/BackResultItem02";
import { useSelector } from "react-redux";
import ConfirmButton from "../../components/travlerpagecomponent/ConfirmButton";
import { Button, Container, Typography } from "@mui/material";
import TravelerInfo from "../userDashboard/TravelerInfo/TravelerInfo";
import { Link } from "react-router-dom";

const TravlerPage = () => {
    const searchReduxData = useSelector((state) => {
        return state.searchReducer3;
    });
    const goBackBool =
        searchReduxData.flightPrice.flightOffers[0].itineraries.length;

    const [selectedTravelers, setSelectedTravelers] = React.useState();
    return (
        <div>
            <TravlerHeader />

            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "70vh" }}
                sx={{ mt: 10 }}
            >
                {" "}
                <Grid item xs={3}>
                    <GoResultItem02 />
                </Grid>
                <Grid item xs={3}>
                    {goBackBool === 1 ? <div></div> : <BackResultItem02 />}
                </Grid>
                <Grid item xs={3}>
                    {/* <ConfirmButton /> */}
                    <TravelerInfo
                        isBooking={true}
                        setSelectedTravelers={setSelectedTravelers}
                    />
                </Grid>
                <Container
                    sx={{
                        justifyContent: "center",
                        mt: 10,
                        display: "flex",
                    }}
                >
                    <Button
                        variant="contained"
                        component={Link}
                        to="/confirm/flight"
                        state={{
                            travelers: selectedTravelers,
                        }}
                    >
                        <Typography fontSize={25} fontWeight={"border"}>
                            항공예약
                        </Typography>
                    </Button>
                </Container>
            </Grid>
        </div>
    );
};

export default TravlerPage;
