// 1. action 설정
const SEARCH_INIT = 'SEARCH_INIT';

// 2. action 함수 설정
export const searchInit = (inputSearch) => ({
  type: SEARCH_INIT,
  inputSearch: inputSearch,
});
// export const searchInit = (inputSearch) => ({
//   type: SEARCH_INIT,
//   inputSearch: {
//     start: inputSearch.start,
//     end: inputSearch.end,
//   },
// });

// export const searchInit = (inputSearch) => ({
//     type: SEARCH_INIT,
//     start : inputSearch.start,
//     end : inputSearch.end
//   });

//   const initState = {
//     start : '',
//     end : ''
//   };

// 3. 초기값 설정 // 일단 start, end 만
const initState = {
  inputSearch: {
    start: { country: '', airport: '', code: '' },
    end: { country: '', airport: '', code: '' },
    departureDate: '',
    returnDate: '',
    adults: 0,
  },
};

// 4. reducer 설정
export default function searchReducer(state = initState, action) {
  // console.log('여기 리듀스 함수1 잘 들어옴');
  switch (action.type) {
    case SEARCH_INIT:
      console.log('리듀스1의 액션값', action.inputSearch);
      // console.log('여기 리듀스 함수2 잘 들어옴');
      //   console.log(...action.inputSearch);
      //   console.log(...state.inputSearch);
      // 얘를 바꾼거임 처음에
      //return { ...state.inputSearch, ...action.inputSearch };
      // 그 다음에 이거
      //   return action.inputSearch;
      // 이게 최종 변경안
      // return {
      //   ...state, // 기존 state 다 뿌려놓고.
      //   inputSearch: action.inputSearch, // 얘는 바뀌는 데이터니까 키 : 밸류 로 최신화.
      // };
      // 이게 초기값이랑 완전 같은 형태임
      // Object 스프레드 (...) 이거 공부
      return {
        ...state,
        ...action.inputSearch, // 얘는 바뀌는 데이터니까 키 : 밸류 로 최신화.
      };

    default:
      //   return { ...state };
      return state;
  }
}
