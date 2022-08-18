import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { border, boxSizing } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Grid, Icon, TextField } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const TravlerInfo = () => {
  const navigate = useNavigate();
  const travelerInfo = useSelector((state) => {
    return state.searchReducer3.traveler;
  });

  const TravelInfoIndex = (props) => {
    const { menu, content, width } = props;
    return (
      <TextField
        id="standard-read-only-input"
        sx={{
          width: "29%",
          m: "2%",
          boxSizing: "border-box",
          cursor: "default",
        }}
        label={menu}
        defaultValue={content}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
    );
  };

  const handleMain = () => {
    navigate("/");
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 800,
          // height: 500,
          boxSizing: "border-box",
          borderRadius: "15px",
          boxShadow: 3,
          p: "3% 0%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            m: "2% 0 5% 0",
            pb: "4%",
            alignItems: "center",
            justifyContent: "center",
            left: "38%",
            borderBottom: 1,
            borderColor: "#ccc",
            boxSizing: "border-box",
          }}
        >
          <AirplaneTicketIcon sx={{ fontSize: 40 }} />
          <Typography
            sx={{ fontSize: "30px", fontWeight: 700 }}
            fontStyle={"initial"}
          >
            예약자 정보
          </Typography>
        </Box>

        <Box
          sx={{
            height: 260,
            p: "0% 3%",
            // borderRight: 1,
            // boxShadow: 3,
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <TravelInfoIndex menu="id" content="id" />
            {/* content에  {travelerInfo.id} 이런식으로 넣으면 됩니다.*/}
            <TravelInfoIndex menu="dateOfBirth" content="2020-08-08" />
            {/*  {travelerInfo.dateOfBirth} */}
            <TravelInfoIndex menu="firstName" content="존" />
            {/* {travelerInfo.name.firstName} */}
            <TravelInfoIndex menu="lastName" content="도우" />
            {/* {travelerInfo.name.lastName} */}
            <TravelInfoIndex menu="phonesNumber" content="010-1234-1234" />
            {/* {travelerInfo.contact.phones[0].phonesNumber} */}
            <TravelInfoIndex menu="documentType" content="도큐먼트타입" />
            {/* {travelerInfo.documents[0].documentType} */}
            <TravelInfoIndex menu="expiryDate" content="2020-08-18" />
            {/* {travelerInfo.documents[0].expiryDate} */}
            <TravelInfoIndex menu="nationality" content="한국" />
            {/* {travelerInfo.documents[0].nationality} */}
          </Box>
        </Box>

        {/* <Box sx={{ display: "flex" }}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={3} />
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontWeight: "600",
                  fontStyle: "initial",
                }}
              >
                id
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{ border: 1, borderRadius: 2, justifycontent: "center" }}
            >
              <Typography sx={{ fontSize: "13pt" }}>사람이름</Typography>
            </Grid>
          </Grid>
        </Box> */}
        {/* <Typography variant="h6" component="div" fontStyle={"initial"}>
          <br />
          id : {travelerInfo.id}
          id : 사람이름
        </Typography> */}

        {/* <Typography variant="h6" component="div" fontStyle={"initial"}>
          dateOfBirth : {travelerInfo.dateOfBirth}
          dateOfBirth : 2020-08-17
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          firstName : {travelerInfo.name.firstName}
          firstName : 존
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          lastName : {travelerInfo.name.lastName}
          lastName : 도우
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          phonesNumber : {travelerInfo.contact.phones[0].phonesNumber}
          phonesNumber : 010-1234-1234
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          documentType : {travelerInfo.documents[0].documentType}
          documentType : 도큐먼트타입?
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          expiryDate : {travelerInfo.documents[0].expiryDate}
          expiryDate : 2022-08-16
        </Typography>
        <Typography variant="h6" component="div" fontStyle={"initial"}>
          nationality : {travelerInfo.documents[0].nationality}
          nationality : 국적
        </Typography> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleMain}>
          확인
        </Button>
      </Box>
    </div>
  );
};

export default TravlerInfo;
