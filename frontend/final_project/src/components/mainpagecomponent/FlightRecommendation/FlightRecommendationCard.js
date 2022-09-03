import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import newyork from "../../../global/assets/images/temp/newyork.jpg";
import React, { useState } from "react";
import { Flight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { offerInit } from "../../../reduxes/modules/searchInfoReducer3";
import { useNavigate } from "react-router-dom";
import { searchInit } from "../../../reduxes/modules/searchInfoReducer";
import { BASE_URL } from "../../../apiEndPoints/constants";

const FlightRecommendationCard = (props) => {
    const [pageLoaded, setPageLoaded] = useState(false);
    const [flightInfo, setFlightInfo] = useState({
        origin: "ICN",
        destination: props.destination,
        departDate: moment().add(7, "days").format("YYYY-MM-DD"),
        adults: 1,
        currency: "KRW",
        max: 10,
    });

    const dispatch = useDispatch();

    const searchData = async (sendData) => {
        await axios
            .get(BASE_URL + "/flight/flights", {
                params: {
                    origin: sendData.origin,
                    destination: sendData.destination,
                    departDate: sendData.departDate,
                    adults: sendData.adults,
                    currency: "KRW",
                    max: 10,
                },
            })
            .then((response) => {
                dispatch(offerInit(response.data));
                setPageLoaded(true);
            })
            .catch((err) => console.log(err));
    };

    const navigate = useNavigate();

    const handleToResult = () => {
        dispatch(searchInit(flightInfo));
        searchData(flightInfo);
        navigate("/searchResult", { state: { pageLoaded: pageLoaded } });
    };
    return (
        <Card
            variant="outlined"
            sx={{ mt: 8, borderRadius: 2, mb: 8, width: 280 }}
        >
            <CardActionArea onClick={handleToResult}>
                <CardContent sx={{ justifyContent: "center" }}>
                    <Typography gutterBottom variant="h3" component="div">
                        {props.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt="img"
                    height="200"
                    image={props.image}
                    sx={{ mb: 4 }}
                />
            </CardActionArea>
            <CardActions
                sx={{ justifyContent: "right" }}
                onClick={handleToResult}
            >
                {props.price ? (
                    <Button size="small">{`From ${props.price} >>`}</Button>
                ) : (
                    <CircularProgress />
                )}
            </CardActions>
        </Card>
    );
};

export default FlightRecommendationCard;
