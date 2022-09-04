import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";





const GeneralInfo = (user) => {

    
    user.name = localStorage.getItem('name');
    user.email = localStorage.getItem('email');
    user.profileImg = localStorage.getItem('profileImg');
    user.createDate = localStorage.getItem('createDate');
    return (
        user && (
            <List>
                <ListItem>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography
                                variant="caption"
                                sx={{ color: "grey" }}
                            >
                                Name
                            </Typography>
                        }
                        secondary={
                            <Typography variant="body1" sx={{ color: "black" }}>
                                {user.name}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography
                                variant="caption"
                                sx={{ color: "grey" }}
                            >
                                Email
                            </Typography>
                        }
                        secondary={
                            <Typography variant="body1" sx={{ color: "black" }}>
                                {user.email}
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography
                                variant="caption"
                                sx={{ color: "grey" }}
                            >
                                Registered date
                            </Typography>
                        }
                        secondary={
                            <Typography variant="body1" sx={{ color: "black" }}>
                                {user.createDate}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        )
    );
};

export default GeneralInfo;
