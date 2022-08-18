import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { border } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Grid, Icon } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const TravlerInfo = () => {
  const navigate = useNavigate();
  const travelerInfo = useSelector((state) => {
    return state.searchReducer3.traveler;
  });

  const TravelInfoIndex = (props) => {
    const { menu } = props;
    return (
      <Typography
        sx={{
          fontSize: "14pt",
          fontWeight: "600",
          fontStyle: "initial",
        }}
      >
        {menu}
      </Typography>
    );
  };
  const TravelInfoContent = (props) => {
    const { content } = props;
    return (
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            boxShadow: 1,
            width: "100%",
            height: "28px",
            fontSize: "12pt",
            fontWeight: "500",
            fontStyle: "initial",
          }}
        >
          {content}
        </Typography>
      </Box>
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
          width: 400,
          // boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 2,
            alignItems: "center",
            justifyContent: "center",
            left: "38%",
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
        <Grid
          container
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center", alignItems: "center", mt: 2 }}
        >
          <Grid item xs={4.5} sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                height: 300,
                borderRight: 1,
                // boxShadow: 3,
                // borderRadius: "15px",
              }}
            >
              <Box sx={{ justifyContent: "center", textAlign: "center" }}>
                <TravelInfoIndex menu="id" />
                <TravelInfoIndex menu="dateOfBirth" />
                <TravelInfoIndex menu="firstName" />
                <TravelInfoIndex menu="lastName" />
                <TravelInfoIndex menu="phonesNumber" />
                <TravelInfoIndex menu="documentType" />
                <TravelInfoIndex menu="expiryDate" />
                <TravelInfoIndex menu="nationality" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={7.5}>
            <Box
              sx={{
                height: 300,
                // boxShadow: 3,
                // borderRadius: "15px",
              }}
            >
              <TravelInfoContent content={"내용1"}></TravelInfoContent>
              <TravelInfoContent content={"내용2"}></TravelInfoContent>
              <TravelInfoContent content={"내용3"}></TravelInfoContent>
              <TravelInfoContent content={"내용4"}></TravelInfoContent>
              <TravelInfoContent content={"내용5"}></TravelInfoContent>
              <TravelInfoContent content={"내용6"}></TravelInfoContent>
              <TravelInfoContent content={"내용7"}></TravelInfoContent>
              <TravelInfoContent content={"내용8"}></TravelInfoContent>
            </Box>
          </Grid>
        </Grid>
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
          marginTop: "10px",
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
