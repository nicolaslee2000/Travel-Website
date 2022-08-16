import { List } from "@mui/material";
import React from "react";

import FlightListItem from "./FlightListItem";
const FlightList = () => {
    const [flights, setFlights] = React.useState([
        {
            id: 1,
            origin: "ICN",
        },
        {
            id: 2,
            origin: "NYC",
        },
    ]);

    return (
        <List>
            {flights.map((flight, index) => {
                return <FlightListItem key={flight.id} flight={flight} />;
            })}
        </List>
    );
};

export default FlightList;
