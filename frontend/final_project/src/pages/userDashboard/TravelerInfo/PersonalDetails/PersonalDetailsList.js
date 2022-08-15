import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import PersonalDetailsListItem from "./PersonalDetailsListItem";

const PersonalDetailsList = (props) => {
    return (
        <List>
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Title"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"First name(s)"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Last name"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Gender"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Nationality"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Date of birth"}
                secondary={props.trav.name}
            />
        </List>
    );
};

export default PersonalDetailsList;
