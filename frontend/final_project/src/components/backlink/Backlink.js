import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useNavigate } from "react-router-dom";

const Backlink = (props) => {
    const navigate = useNavigate();
    return (
        <div align="center">
            <IconButton
                sx={{ fontSize: "medium", fontFamily: "DM sans" }}
                onClick={() => {
                    navigate(-1, { state: { data: props.data } });
                }}
            >
                <ArrowBackIosIcon sx={{ fontSize: "small" }} />
                {props.text}
            </IconButton>
        </div>
    );
};

export default Backlink;
