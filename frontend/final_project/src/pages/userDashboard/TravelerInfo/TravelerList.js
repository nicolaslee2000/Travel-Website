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

const TravelerList = () => {
    const [travelers, setTravelers] = React.useState([
        {
            id: 1,
            name: "nick",
        },
        {
            id: 2,
            name: "jack",
        },
    ]);
    //fetch
    //can use transition later

    return (
        <List>
            {travelers.map((trav, index) => {
                return <TravelerListItem key={trav.id} trav={trav} />;
            })}
            <ListItem
                disablePadding
                component={Link}
                to={"travelerAdd"}
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
