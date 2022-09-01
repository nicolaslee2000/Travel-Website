import { List } from "@mui/material";
import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../ApiConnect/constants";

import FlightListItem from "./FlightListItem";
const FlightList = () => {
    const [flights, setFlights] = React.useState([]);

    const [user, setUser] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(["this_is_login"]);
    let navigate = useNavigate();
    const getUser = async (data, setState) => {
        await axios
            .post(BASE_URL + `/user/current`, {
                email: cookies.this_is_login,
            })
            .then((response) => response.data)
            .then((json) => {
                setUser(json);
            })
            .catch((error) => console.log(error));
    };

    React.useEffect(() => {
        getUser();
    }, []);

    React.useEffect(() => {
        getFlights();
    }, [user, setUser]);

    const getFlights = async (params) => {
        await axios
            .get(BASE_URL + `/order/`, { params: { id: user.id } })
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
