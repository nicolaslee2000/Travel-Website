//1. 액션
const SE_INIT = 'SE_INIT';
//2. 액션 함수
export const seInit = (response) => {
  return { type: SE_INIT, response };
  //[{type:response.type, subtype:'', name:'', iataCode:''}]
};

//3. 초기값

const seInitValue = [{ type: '', subtype: '', name: '', iataCode: '' }];

//4. 리듀스 함수
export default function searchReducer2(state = seInitValue, action) {
  console.log('redux함수 action값은', action);
  switch (action.type) {
    case SE_INIT:
      return action.response;
    //return [...state, ...action.resopne] // 이렇게 할필요가 없음

    default:
      return state;
  }
}
