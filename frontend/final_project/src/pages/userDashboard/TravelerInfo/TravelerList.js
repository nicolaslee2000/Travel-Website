import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import TravelerListItem from "./TravelerListItem";
import { Link } from "react-router-dom";
import { AddCircleOutline, ArrowForwardIos } from "@mui/icons-material";

const TravelerList = ({ userId, travelers, isBooking }) => {
    return (
        <List>
            {travelers.map((trav, index) => {
                return (
                    <TravelerListItem
                        key={index}
                        trav={trav}
                        isBooking={isBooking}
                    />
                );
            })}
            <ListItem
                disablePadding
                component={Link}
                to={"/dashboard/travelerInfo/travelerAdd"}
                state={{ userId: userId }}
                sx={{ textDecoration: "none", color: "black", fontSize: "50" }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AddCircleOutline />
                    </ListItemIcon>
                    <ListItemText primary={"Add a traveler"} />
                    <ListItemIcon>
                        <ArrowForwardIos />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default TravelerList;
