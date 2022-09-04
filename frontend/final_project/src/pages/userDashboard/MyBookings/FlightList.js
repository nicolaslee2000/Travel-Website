import { List } from "@mui/material";
import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../apiEndPoints/ApiEndPoints";
import { BASE_URL } from "../../../apiEndPoints/constants";

import FlightListItem from "./FlightListItem";
const FlightList = () => {
    const [flights, setFlights] = React.useState([]);

    const [user, setUser] = React.useState();
    let navigate = useNavigate();

    React.useEffect(() => {
        getFlights();
    }, [user, setUser]);

    const getFlights = async (params) => {
        await axios
            .get(BASE_URL + `/order/`, { params: { id: localStorage.getItem('UUID')} })
            .then((response) => setFlights(response.data));
    };

    return (
        <List>
            {flights.map((flight, index) => {
                return <FlightListItem key={index} flight={flight} />;
            })}
        </List>
    );
};

export default FlightList;
