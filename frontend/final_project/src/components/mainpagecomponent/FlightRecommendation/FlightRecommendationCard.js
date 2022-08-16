import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import newyork from "../../../global/assets/images/temp/newyork.jpg";
import React from "react";
import { Flight } from "@mui/icons-material";

const FlightRecommendationCard = () => {
    return (
        <Card
            variant="outlined"
            sx={{ mt: 8, borderRadius: 2, mb: 8, width: 280 }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="img"
                    height="170"
                    image={newyork}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        New York
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Flight />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="THU, Oct 3"
                                secondary="BKK - NYC"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Flight />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="THU, Oct 3"
                                secondary="NYC - BKK"
                            />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}>
                    <Button size="small">{"From 29999usd  >>"}</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default FlightRecommendationCard;
