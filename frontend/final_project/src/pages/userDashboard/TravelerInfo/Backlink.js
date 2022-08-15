import { IconButton } from "@material-ui/core";
import { ArrowBackIos } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Backlink = (props) => {
    return (
        <div align="center">
            <IconButton
                sx={{ fontSize: "medium", fontFamily: "DM sans" }}
                component={Link}
                to={props.link}
                state={{ trav: props.trav }}
            >
                <ArrowBackIos sx={{ fontSize: "small" }} />
                {props.text}
            </IconButton>
        </div>
    );
};

export default Backlink;
