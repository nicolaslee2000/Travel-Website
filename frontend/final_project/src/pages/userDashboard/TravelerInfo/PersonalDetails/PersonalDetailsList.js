import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import PersonalDetailsListItem from "./PersonalDetailsListItem";

const PersonalDetailsList = (props) => {
    return (
        <List>
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Title"}
                secondary={props.trav.title}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"First name(s)"}
                secondary={props.trav.firstName}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Last name"}
                secondary={props.trav.lastName}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Gender"}
                secondary={props.trav.gender}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Nationality"}
                secondary={props.trav.nationality}
            />
            {/* TODO */}
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Date of birth"}
                secondary={props.trav.dateOfBirth}
            />
        </List>
    );
};

export default PersonalDetailsList;
