//1. 액션
//기본적으로 엑시오스로 받은 값을 다음 페이지나 alert, 팝업창등에 넘겨줌
const OFFERSEARCH_INIT = 'OFFERSEARCH_INIT'; // 제일 처음 페이지에서 엑시오스로 항공 정보 받는거
const CONFIRM_INIT = 'CONFIRM_INIT'; // 2번째페이지에서 alert나 3번째 페이지로 넘어갈때 엑시오스로 받는거
const TRAVELER_INIT = 'TRAVELER_INIT'; // 3번쨰에서 axios로 받는값
const ORDER_INIT = 'ORDER_INIT'; // 4번째 페이지에서 엑시오스로 받는값
const ALL_INIT = 'ALL_INIT'; // 메인페이지 왔을때 모두 초기화
const LOADING_INIT = 'LOADING_INIT';

//2. 액션 함수
export const offerInit = (flightOfferSearch) => {
  return {
    type: OFFERSEARCH_INIT,
    flightOfferSearch: flightOfferSearch,
  };
};

export const confirmInit = (flightPrice) => {
  return {
    type: CONFIRM_INIT,
    flightPrice: flightPrice,
  };
};

export const travelerInit = (traveler) => {
  return {
    type: TRAVELER_INIT,
    traveler: traveler,
  };
};

export const orderInit = (order) => {
  return {
    type: ORDER_INIT,
    order: order,
  };
};

export const loadingInit = (loading) => {
  return {
    type: LOADING_INIT,
    loading: loading,
  };
};

export const allInit = () => {
  return {
    type: ALL_INIT,
    flightOfferSearch: [],
    flightPrice: {},
    traveler: {},
    order: {},
  };
};

//3. 초기값
const octoInit = {
  flightOfferSearch: [],
  flightPrice: {},
  traveler: {},
  order: {},
  loading: false,
};

//4. 리듀서 함수
export default function searchReducer3(state = octoInit, action) {
  switch (action.type) {
    case OFFERSEARCH_INIT:
      return {
        ...state,
        flightOfferSearch: action.flightOfferSearch,
      };

    case CONFIRM_INIT:
      return {
        ...state,
        flightPrice: action.flightPrice,
      };
    case TRAVELER_INIT:
      return {
        ...state,
        traveler: action.traveler,
      };
    case ORDER_INIT:
      return {
        ...state,
        order: action.order,
      };
    case ALL_INIT:
      return {
        flightOfferSearch: action.flightOfferSearch,
        flightPrice: action.flightPrice,
        traveler: action.traveler,
        order: action.order,
      };
    case LOADING_INIT:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
