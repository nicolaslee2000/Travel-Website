//1.액션
const NUM_INIT = 'NUM_INIT';

//2.액션함수
export const numInit = (num) => {
  return { type: NUM_INIT, num };
};

//3.초기값
const initNumValue = 0;

//4.리듀서함수
export default function configReducer(state = initNumValue, action) {
  switch (action.type) {
    case NUM_INIT:
      return action.num;
    default:
      return state;
  }
}
