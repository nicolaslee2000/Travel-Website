import { List } from "@mui/material";
import React from "react";
import PersonalDetailsListItem from "./PersonalDetailsListItem";
const DocumentDetailsList = (props) => {
    return (
        <List>
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Document type"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Document number"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Issuer"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Date of issue"}
                secondary={props.trav.name}
            />
            <PersonalDetailsListItem
                trav={props.trav}
                primary={"Expiry date"}
                secondary={props.trav.name}
            />
        </List>
    );
};

export default DocumentDetailsList;
