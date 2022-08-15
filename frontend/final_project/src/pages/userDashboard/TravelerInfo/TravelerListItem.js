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

const TravelerListItem = ({ trav }) => {
    return (
        <>
            <ListItem
                disablePadding
                component={Link}
                to="traveler"
                state={{ trav: trav }}
                sx={{ textDecoration: "none", color: "black", fontSize: "50" }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <CircleIcon fontSize="20" />
                    </ListItemIcon>
                    <ListItemText primary={trav.name} />
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
