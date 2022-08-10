import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SearchResultConfig from "../../components/searchresultcomponent/SearchResultConfig";
import SearchResultHeader from "../../components/searchresultcomponent/SearchResultHeader";
import SearchResultItem from "../../components/searchresultcomponent/SearchResultItem";
import Header from "../../components/othercomponent/Header";
import "./searchResultPage.css";
import Layout from "./../../components/othercomponent/Layout";
import { useSelector } from "react-redux";

const SearchResultPage = () => {
  // const location = useLocation();
  // const [info, setInfo] = useState(location.state.info);
  // const dataExample = [info, info, info, info, info, info];
  const searchReduxData = useSelector((state) => {
    return state.searchReducer3;
  });
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="smallMargin">
          <SearchResultHeader />
          {/* <SearchResultHeader info={info} /> */}
        </div>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            {/* <div>한번확인해보자</div> */}
            <div></div>
          </Grid>
          <Grid item xs={2}>
            <SearchResultConfig />
          </Grid>
          <Grid item xs={2}>
            {/* <div>한번확인해보자</div> */}
            <div></div>
          </Grid>
          <Grid item xs={7}>
            {searchReduxData.flightOfferSearch.map(
              (flightOfferSearchData, idx) => {
                return (
                  <div key={idx}>
                    <SearchResultItem
                      flightOfferSearchData={flightOfferSearchData}
                    />
                    <br />
                  </div>
                );
              }
            )}

            {/* 
              {list.map((result) =>{
                return(
                  <SearchResultBox info={result} />
                )
              })}
            */}

            {/* {dataExample.map((data, idx) => {
                  return (
                    <>
                      <SearchResultItem info={data} key={idx} />
                      <br />
                    </>
                  );
                })} */}

            {/* {dataExample.map((data, idx) => {
              return (
                <div key={idx}>
                  <SearchResultItem info={data} />
                  <br />
                </div>
              );
            })} */}

            {/* <SearchResultItem info={info} />
          <SearchResultItem info={info} />
          <SearchResultItem info={info} />
          <SearchResultItem info={info} /> */}
          </Grid>
        </Grid>

        {/* <SearchResultBox info={info} /> */}
      </div>
    </>
  );
  // return (
  //   <>
  //     <Layout
  //       children={
  //         <div className='bodyContainer'>
  //           <div className='smallMargin'>
  //             <SearchResultHeader info={info} />
  //           </div>
  //           <Grid container spacing={3}>
  //             <Grid item xs={1}>
  //               {/* <div>한번확인해보자</div> */}
  //               <div></div>
  //             </Grid>
  //             <Grid item xs={2}>
  //               <SearchResultConfig />
  //             </Grid>
  //             <Grid item xs={2}>
  //               {/* <div>한번확인해보자</div> */}
  //               <div></div>
  //             </Grid>
  //             <Grid item xs={7}>
  //               {/*
  //             {list.map((result) =>{
  //               return(
  //                 <SearchResultBox info={result} />
  //               )
  //             })}
  //           */}

  //               {/* {dataExample.map((data, idx) => {
  //                 return (
  //                   <>
  //                     <SearchResultItem info={data} key={idx} />
  //                     <br />
  //                   </>
  //                 );
  //               })} */}

  //               {dataExample.map((data, idx) => {
  //                 return (
  //                   <div key={idx}>
  //                     <SearchResultItem info={data} />
  //                     <br />
  //                   </div>
  //                 );
  //               })}

  //               {/* <SearchResultItem info={info} />
  //         <SearchResultItem info={info} />
  //         <SearchResultItem info={info} />
  //         <SearchResultItem info={info} /> */}
  //             </Grid>
  //           </Grid>

  //           {/* <SearchResultBox info={info} /> */}
  //         </div>
  //       }
  //     />
  //   </>
  // );
};

export default SearchResultPage;
