import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import SearchResultConfig from '../../components/searchresultcomponent/SearchResultConfig';
import SearchResultHeader from '../../components/searchresultcomponent/SearchResultHeader';
import SearchResultItem from '../../components/searchresultcomponent/SearchResultItem';
import Header from '../../components/othercomponent/Header';
import './searchResultPage.css';
import Layout from './../../components/othercomponent/Layout';
import { useSelector } from 'react-redux';
import SearchResultItem02 from './../../components/searchresultcomponent/SearchResultItem02';
import SearchResultItem02Back from '../../components/searchresultcomponent/SearchResultItem02Back';

const SearchResultPage = () => {
  // const location = useLocation();
  // const [info, setInfo] = useState(location.state.info);
  // const dataExample = [info, info, info, info, info, info];
  const [number, setNumber] = useState(0);
  const searchReduxData = useSelector((state) => {
    return state.searchReducer3;
  });
  // const configReduxData = useSelector((state) => {
  //   return state.configReducer;
  // });
  // console.log('configReduxData: ', configReduxData);
  // useEffect(() => {
  //   console.log('configReduxData: ', configReduxData);
  // }, [configReduxData]);
  const handleNumber = (e) => {
    setNumber(e);
  };
  const dateTrans = (str) => {
    let dateVal = new Date(str);
    return dateVal.getTime();
  };
  console.log('페이지 컴포넌트', number);
  const sortArr = searchReduxData.flightOfferSearch;

  return (
    <>
      <Header />
      <div className='bodyContainer'>
        <div className='smallMargin'>
          <SearchResultHeader />
          {/* <SearchResultHeader info={info} /> */}
        </div>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            {/* <div>한번확인해보자</div> */}
            <div></div>
          </Grid>
          <Grid item xs={2}>
            <SearchResultConfig resultPageNumUpdate={handleNumber} />
          </Grid>
          <Grid item xs={2}>
            {/* <div>한번확인해보자</div> */}
            <div></div>
          </Grid>
          <Grid item xs={7}>
            {/* <SearchResultItem02
              flightOfferSearchData={searchReduxData.flightOfferSearch[0]}
            /> */}

            {/* 원래거임 */}
            {/* {
              // 1이면 편도
              // 1이 아니면 왕복
              searchReduxData.flightOfferSearch[0].itineraries.length === 1
                ? searchReduxData.flightOfferSearch.map(
                    //편도인 경우
                    (flightOfferSearchData, idx) => {
                      return (
                        <div key={idx}>
                          <SearchResultItem02
                            flightOfferSearchData={flightOfferSearchData}
                          />
                          <br />
                        </div>
                      );
                    }
                  )
                : searchReduxData.flightOfferSearch.map(
                    // 왕복인 경우
                    (flightOfferSearchData, idx) => {
                      return (
                        <div key={idx}>
                          <SearchResultItem02Back
                            flightOfferSearchData={flightOfferSearchData}
                          />
                          <br />
                        </div>
                      );
                    }
                  )
            } */}

            {
              {
                0: (
                  <div>
                    0번입니다
                    {
                      // 1이면 편도
                      // 1이 아니면 왕복
                      searchReduxData.flightOfferSearch[0].itineraries
                        .length === 1
                        ? searchReduxData.flightOfferSearch.map(
                            //편도인 경우
                            (flightOfferSearchData, idx) => {
                              return (
                                <div key={idx}>
                                  <SearchResultItem02
                                    flightOfferSearchData={
                                      flightOfferSearchData
                                    }
                                  />
                                  <br />
                                </div>
                              );
                            }
                          )
                        : searchReduxData.flightOfferSearch.map(
                            // 왕복인 경우
                            (flightOfferSearchData, idx) => {
                              return (
                                <div key={idx}>
                                  <SearchResultItem02Back
                                    flightOfferSearchData={
                                      flightOfferSearchData
                                    }
                                  />
                                  <br />
                                </div>
                              );
                            }
                          )
                    }
                  </div>
                ),
                1: (
                  <div>
                    1번인 경우 입니다
                    {
                      // 1이면 편도
                      // 1이 아니면 왕복
                      searchReduxData.flightOfferSearch[0].itineraries
                        .length === 1
                        ? sortArr
                            .sort(function (a, b) {
                              return a.price.total - b.price.total;
                            })
                            .map(
                              //편도인 경우
                              (flightOfferSearchData, idx) => {
                                return (
                                  <div key={idx}>
                                    <SearchResultItem02
                                      flightOfferSearchData={
                                        flightOfferSearchData
                                      }
                                    />
                                    <br />
                                  </div>
                                );
                              }
                            )
                        : sortArr
                            .sort(function (a, b) {
                              return a.price.total - b.price.total;
                            })
                            .map(
                              // 왕복인 경우
                              (flightOfferSearchData, idx) => {
                                return (
                                  <div key={idx}>
                                    <SearchResultItem02Back
                                      flightOfferSearchData={
                                        flightOfferSearchData
                                      }
                                    />
                                    <br />
                                  </div>
                                );
                              }
                            )
                    }
                  </div>
                ),
                2: (
                  <div>
                    2번인 경우 입니다
                    {
                      // 1이면 편도
                      // 1이 아니면 왕복
                      searchReduxData.flightOfferSearch[0].itineraries
                        .length === 1
                        ? sortArr
                            .sort(function (a, b) {
                              return (
                                dateTrans(
                                  a.itineraries[0].segments[0].departure.at
                                ) /
                                  60000 -
                                dateTrans(
                                  b.itineraries[0].segments[0].departure.at
                                ) /
                                  60000
                                // a.itineraries[0].segments[0].departure.at.getTime() /
                                //   60000 -
                                // b.itineraries[0].segments[0].departure.at.getTime() /
                                //   60000
                              );
                            })
                            .map(
                              //편도인 경우
                              (flightOfferSearchData, idx) => {
                                return (
                                  <div key={idx}>
                                    <SearchResultItem02
                                      flightOfferSearchData={
                                        flightOfferSearchData
                                      }
                                    />
                                    <br />
                                  </div>
                                );
                              }
                            )
                        : sortArr
                            .sort(function (a, b) {
                              return (
                                dateTrans(
                                  a.itineraries[0].segments[0].departure.at
                                ) /
                                  60000 -
                                dateTrans(
                                  b.itineraries[0].segments[0].departure.at
                                ) /
                                  60000
                              );
                            })
                            .map(
                              // 왕복인 경우
                              (flightOfferSearchData, idx) => {
                                return (
                                  <div key={idx}>
                                    <SearchResultItem02Back
                                      flightOfferSearchData={
                                        flightOfferSearchData
                                      }
                                    />
                                    <br />
                                  </div>
                                );
                              }
                            )
                    }
                  </div>
                ),
                3: (
                  <div>
                    3번인 경우 입니다
                    {sortArr[0].itineraries.length === 1
                      ? sortArr //편도
                          .sort(function (a, b) {
                            return (
                              a.itineraries[0].segments.length -
                              b.itineraries[0].segments.length
                            );
                          })
                          .map((fData, idx) => {
                            return (
                              <div key={idx}>
                                <SearchResultItem02
                                  flightOfferSearchData={fData}
                                />
                                <br />
                              </div>
                            );
                          })
                      : sortArr //왕복
                          .sort(function (a, b) {
                            return (
                              a.itineraries[0].segments.length +
                              a.itineraries[1].segments.length -
                              (b.itineraries[0].segments.length +
                                b.itineraries[1].segments.length)
                              // a.itineraries[0].segments.length +
                              // a.itineraries[1].segments.length -
                              // (b.itineraries[0].segments.length +
                              //   b.itineraries[1].segments.length)
                            );
                          })
                          .map((fData, idx) => {
                            return (
                              <div key={idx}>
                                <SearchResultItem02Back
                                  flightOfferSearchData={fData}
                                />
                                <br />
                              </div>
                            );
                          })}
                  </div>
                ),
              }[number]
            }

            {/* {searchReduxData.flightOfferSearch.map(
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
            )} */}

            {/* {searchReduxData.flightOfferSearch.map(
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
            )} */}
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
