import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const PersonalDetailsListItem = (props) => {
    return (
        <ListItem
        // disablePadding
        // sx={{ textDecoration: "none", color: "black", fontSize: "50" }}
        >
            <ListItemText
                disableTypography
                primary={
                    <Typography variant="caption" sx={{ color: "grey" }}>
                        {props.primary}
                    </Typography>
                }
                secondary={
                    <Typography variant="body1" sx={{ color: "black" }}>
                        {props.secondary}
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default PersonalDetailsListItem;
