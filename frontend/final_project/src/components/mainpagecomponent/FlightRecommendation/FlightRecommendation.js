import {
    Box,
    Card,
    CardContent,
    Container,
    FormControlLabel,
    Grow,
    Switch,
    Typography,
} from "@mui/material";
import React from "react";
import FlightRecommendationCard from "./FlightRecommendationCard";
import newyork from "../../../global/assets/images/temp/newyork.jpg";
import bali from "../../../global/assets/images/temp/bali.jpeg";
import vienna from "../../../global/assets/images/temp/vienna.jpg";
import axios from "axios";
import moment from "moment";

const FlightRecommendation = ({ dashboardTrans }) => {
    const [nyPrice, setNyPrice] = React.useState();
    const [bPrice, setBPrice] = React.useState();
    const [vPrice, setVPrice] = React.useState();
    const getPrice = async (destination, setState) => {
        await axios
            .get(`http://localhost:8090/flight/flights`, {
                params: {
                    origin: "ICN",
                    destination: destination,
                    departDate: moment().add(7, "days").format("YYYY-MM-DD"),
                    adults: 1,
                    max: 1,
                    currency: "KRW",
                },
            })
            .then((response) => response.data)
            .then((json) => {
                setState(
                    json[0].price.total.slice(0, -2) + json[0].price.currency
                );
            })
            .catch((error) => console.log(error));
    };
    React.useEffect(() => {
        getPrice("JFK", setNyPrice);
        getPrice("DPS", setBPrice);
        getPrice("VIE", setVPrice);
    }, []);

    return (
        <Container sx={{ mt: 7, mb: 20 }}>
            <Typography variant="h1" sx={{ mt: 8 }} align="center">
                Most popular flights from Korea
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grow in={dashboardTrans}>
                    <Box>
                        <FlightRecommendationCard
                            image={newyork}
                            name="New York"
                            price={nyPrice}
                            destination="JFK"
                        />
                    </Box>
                </Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={dashboardTrans}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(dashboardTrans ? { timeout: 1000 } : {})}
                >
                    <Box>
                        <FlightRecommendationCard
                            image={bali}
                            name="Bali"
                            price={bPrice}
                            destination="DPS"
                        />
                    </Box>
                </Grow>
                <Grow
                    in={dashboardTrans}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(dashboardTrans ? { timeout: 2000 } : {})}
                >
                    <Box>
                        <FlightRecommendationCard
                            image={vienna}
                            name="Vienna"
                            price={vPrice}
                            destination="VIE"
                        />
                    </Box>
                </Grow>
            </Box>
        </Container>
    );
};

export default FlightRecommendation;
