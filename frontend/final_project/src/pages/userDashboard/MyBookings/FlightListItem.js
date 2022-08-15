import {
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import CircleIcon from "@mui/icons-material/Circle";
import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

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
