import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Header from "../../components/othercomponent/Header";
import GoResultItem02 from "./../../components/travlerpagecomponent/GoResultItem02";
import BackResultItem02 from "../../components/travlerpagecomponent/BackResultItem02";
import TravlerInfo from "../../components/finalconfirmcomponent/TravlerInfo";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const FinalConfirmPage = () => {
  const searchReduxData = useSelector((state) => {
    return state.searchReducer3;
  });
  const goBackBool =
    searchReduxData.flightPrice.flightOffers[0].itineraries.length;
  return (
    <>
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
        <Typography sx={{ fontSize: 40, fontWeight: 700, color: "white" }}>
          예약자 정보 확인
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
      >
        {" "}
        <Grid item xs={3}>
          {/* <GoResultItem /> */}
          <GoResultItem02 />
        </Grid>
        <Grid item xs={3}>
          {/* <BackResultItem /> */}
          {goBackBool === 1 ? <div></div> : <BackResultItem02 />}
          {/* <BackResultItem02 /> */}
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={3}>
          {/* 여기에 travler에서 적은 회원정보 띄우기 */}
          <TravlerInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default FinalConfirmPage;
