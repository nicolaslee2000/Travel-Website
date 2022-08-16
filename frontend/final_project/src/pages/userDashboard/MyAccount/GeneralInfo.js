import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
    return (
        <List>
            <ListItem>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography variant="caption" sx={{ color: "grey" }}>
                            Name
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body1" sx={{ color: "black" }}>
                            Some name
                        </Typography>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography variant="caption" sx={{ color: "grey" }}>
                            Email
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body1" sx={{ color: "black" }}>
                            some email
                        </Typography>
                    }
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography variant="caption" sx={{ color: "grey" }}>
                            Registered date
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body1" sx={{ color: "black" }}>
                            2022-00-22
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    );
};

export default GeneralInfo;
