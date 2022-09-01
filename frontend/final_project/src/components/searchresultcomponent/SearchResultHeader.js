import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./searchResultHeader.css";
import { useSelector } from "react-redux";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

// const myStyle = makeStyles({
//   root: {
//     color: 'white',
//   },
// });

// const MyTypography = withStyles({
//   root: {
//     color: 'white',
//   },
// })(Typography);

const Searchresultheader = () => {
  //const info = props.info;
  // const { inputSearch } = useSelector((state) => {
  //   return state.searchReducer;
  // });

  const theme = createTheme({
    typography: {
      myStyle: {
        color: "white",
        // variant: 'h1',
        fontSize: 20,
      },
    },
  });

  const inputSearch = useSelector((state) => {
    return state.searchReducer;
  });

  const searData3 = useSelector((state) => {
    return state.searchReducer3;
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          fontWeight: 700,
          // border: "2px solid black",
          // backgroundColor: 'aquamarine',
          backgroundColor: "#0a4b78",
          position: "relative",
          height: "80px",
          p: "1% 0 0 0",
        }}
      >
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              position: "absolute",
              left: "50px",
              marginRight: "200px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="myStyle"
                /*style={{ color: 'white' }}*/
                fontFamily={""}
              >
                출발지
              </Typography>
              {/* <Typography variant='h1'>{inputSearch.start.country}</Typography> */}
              <Typography variant="myStyle">{inputSearch.origin}</Typography>
            </Box>

            <Box
              sx={{
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="myStyle">ㅡ</Typography>
            </Box>

            <Box
              sx={{
                marginRight: "35px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="myStyle">도착지</Typography>
              {/* <Typography variant='h1'>{inputSearch.end.country}</Typography> */}
              <Typography variant="myStyle">
                {inputSearch.destination}
              </Typography>
            </Box>

            <Box
              sx={{
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid
                container
                direction="row"
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  성인&nbsp;&nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {inputSearch.adults}명
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  소아&nbsp;&nbsp;
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {inputSearch.children}명
                </Typography>
              </Grid>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl: "20px",
              }}
            >
              <Typography variant="myStyle">좌석</Typography>
              {/* <Typography variant='h1'>{inputSearch.end.country}</Typography> */}
              <Typography variant="myStyle">
                {inputSearch.travelClass}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: "50px",
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginRight: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="myStyle">출발날짜</Typography>
              {/* <Typography variant='h1'>{inputSearch.departDate}</Typography> */}
              <Typography variant="myStyle">
                {inputSearch.departDate}
              </Typography>
            </Box>

            {inputSearch.returnDate !== null ? (
              <>
                <Box
                  sx={{
                    marginRight: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="myStyle">ㅡ</Typography>
                </Box>

                <Box
                  sx={{
                    // marginRight: '50px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="myStyle">도착날짜</Typography>
                  <Typography variant="myStyle">
                    {inputSearch.returnDate}
                  </Typography>
                </Box>
              </>
            ) : (
              <></>
            )}
          </Box>
        </ThemeProvider>
      </Box>

      {/* <div className='headerContainer'>
        <div className='point'>
          <div className='startPoint'>
            <div>출발지</div>
            <div>{info.start}</div>
            <div>{inputSearch.start.country}</div>
          </div>
          <div className='endPoint'>
            <div>도착지</div>
            <div>{info.end}</div>
            <div>{inputSearch.end.country}</div>
          </div>
        </div>

        <div className='timePoint'>
          <div className='startPoint'>
            <div>출발날짜</div>
            <div>{inputSearch.departDate}</div>
            <div>{inputSearch.departureDate}</div>

            <div>20xx/xx/xx</div>
            <div>{searData3.flightOfferSearch[0].lastTicketingDate}</div>
          </div>
          <div className='endPoint'>
            <div>도착날짜</div>
            <div>{inputSearch.returnDate}</div>
            <div>20xx/xx/xx</div>
          </div>
        </div>

         <div className='arrowTime'>
          <TrendingFlatIcon sx={{ fontSize: 220 }} />
          <div className='leadTime'>
            <div>소요시간</div>
            <div>00:00</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Searchresultheader;
