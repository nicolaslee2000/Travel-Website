import { ArrowForwardIos } from "@mui/icons-material";
import {
    Checkbox,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { Link } from "react-router-dom";

const TravelerListItem = ({ trav, isBooking }) => {
    return (
        <>
            <ListItem
                disablePadding
                component={Link}
                to="/dashboard/travelerInfo/traveler"
                state={{ data: trav }}
                sx={{ textDecoration: "none", color: "black", fontSize: "50" }}
            >
                {/* <Checkbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(e.target.checked);
                    }}
                /> */}
                <ListItemButton>
                    <ListItemIcon>
                        {isBooking ? null : <CircleIcon fontSize="20" />}
                    </ListItemIcon>
                    <ListItemText
                        primary={trav.firstName + " " + trav.lastName}
                    />
                    <ListItemIcon>
                        <ArrowForwardIos />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
};

export default TravelerListItem;
