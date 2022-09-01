import React, { useState } from "react";
import "./travlerHeader.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "./ConfirmDialog";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import {
    orderInit,
    travelerInit,
} from "../../reduxes/modules/searchInfoReducer3";
import { useNavigate } from "react-router-dom";

const TravlerHeader = () => {
    const flightRedux = useSelector((state) => {
        return state.searchReducer3;
    });
    const flightConfirm = flightRedux.flightPrice;

    const firstInfo = useSelector((state) => {
        return state.searchReducer;
    });
    const theme = createTheme({
        typography: {
            myStyle: {
                color: "white",
                // variant: 'h1',
                fontSize: 22,
            },
        },
    });
    ///////////////////////////////////////////////////////////////////////
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontWeight: "bold",
                    border: "2px solid black",
                    justifyContent: "center",
                    // backgroundColor: 'aquamarine',
                    backgroundColor: "#0a4b78",
                    height: "200px",
                }}
            >
                <ThemeProvider theme={theme}>
                    <Typography variant="myStyle" fontSize={40}>
                        {firstInfo.destination}
                    </Typography>

                    <Box sx={{ display: "flex", marginTop: 3 }}>
                        <Typography variant="myStyle">
                            성인 {firstInfo.adults}명
                        </Typography>
                        {firstInfo.children === 0 ? (
                            <Typography></Typography>
                        ) : (
                            <Typography variant="myStyle">
                                &nbsp;● 어린이 {firstInfo.children}명{" "}
                            </Typography>
                        )}
                        {firstInfo.returnDate === null ? (
                            <Typography variant="myStyle">
                                &nbsp;● 편도 ●&nbsp;
                            </Typography>
                        ) : (
                            <Typography variant="myStyle">
                                &nbsp;● 왕복 ●&nbsp;
                            </Typography>
                        )}

                        <Typography variant="myStyle">
                            {" "}
                            {firstInfo.travelClass}석
                        </Typography>
                    </Box>
                    <Typography variant="myStyle" fontSize={25}>
                        가격 : {flightConfirm.flightOffers[0].price.total}$
                    </Typography>
                </ThemeProvider>
            </Box>
        </div>
    );
};

export default TravlerHeader;
