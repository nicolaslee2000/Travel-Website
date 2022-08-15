import {
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";

const FlightListItem = ({ flight }) => {
    return (
        <>
            <ListItem
                disablePadding
                component={Link}
                to="flight"
                state={{ flight: flight }}
                sx={{ textDecoration: "none", color: "black", fontSize: "50" }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <CircleIcon fontSize="20" />
                    </ListItemIcon>
                    <ListItemText primary={flight.origin} />
                    <ListItemIcon>
                        <ArrowForwardIos />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
};

export default FlightListItem;
