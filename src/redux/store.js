import { legacy_createStore as createStore, combineReducers } from 'redux';
import  {AUTH_REDUCER, TYPE_REDUCER}  from './reducers/typeReducer';

const rootReducer = combineReducers({
    typeReducer: TYPE_REDUCER,
    authReducer: AUTH_REDUCER,
  });
  

export default Store = createStore(rootReducer); 
