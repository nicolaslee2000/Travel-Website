import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const FlightRecommendationCard = () => {
    return (
        <Card variant="outlined" sx={{ mt: 8, borderRadius: 2, mb: 8 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="../../../global/assets/images/temp/newyork.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ align: "right" }}>
                        From 29999usd
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default FlightRecommendationCard;
