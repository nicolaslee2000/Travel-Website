import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './searchResultHeader.css';
import { useSelector } from 'react-redux';

const Searchresultheader = () => {
  //const info = props.info;
  // const { inputSearch } = useSelector((state) => {
  //   return state.searchReducer;
  // });
  const inputSearch = useSelector((state) => {
    return state.searchReducer;
  });

  const searData3 = useSelector((state) => {
    return state.searchReducer3;
  });

  return (
    <>
      <div className='headerContainer'>
        <div className='point'>
          <div className='startPoint'>
            <div>출발지</div>
            {/* <div>{info.start}</div> */}
            <div>{inputSearch.start.country}</div>
          </div>
          <div className='endPoint'>
            <div>도착지</div>
            {/* <div>{info.end}</div> */}
            <div>{inputSearch.end.country}</div>
          </div>
        </div>

        <div className='timePoint'>
          <div className='startPoint'>
            <div>출발날짜</div>
            <div>{inputSearch.departureDate}</div>
            {/* <div>20xx/xx/xx</div> */}
            {/* <div>{searData3.flightOfferSearch[0].lastTicketingDate}</div> */}
          </div>
          <div className='endPoint'>
            <div>도착날짜</div>
            <div>{inputSearch.returnDate}</div>
            {/* <div>20xx/xx/xx</div> */}
          </div>
        </div>

        {/* <div className='arrowTime'>
          <TrendingFlatIcon sx={{ fontSize: 220 }} />
          <div className='leadTime'>
            <div>소요시간</div>
            <div>00:00</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Searchresultheader;
