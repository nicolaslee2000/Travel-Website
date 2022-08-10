// import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import configReducer from './modules/searchConfigReducer';
import searchReducer from './modules/searchInfoReducer';
import searchReducer2 from './modules/searchInfoReducer2';
import searchReducer3 from './modules/searchInfoReducer3';

// 새로고침해도 상태가 날라가지 않도록 persistReducer를 설정해줘야함
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['searchReducer'],
// };

const rootReducer = combineReducers({
  searchReducer,
  searchReducer2,
  searchReducer3,
  configReducer,
});

export default rootReducer;

// const persistReducer = {}

// export const store = createStore(rootReducer, composeWithDevTools());
