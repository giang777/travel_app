import { legacy_createStore as createStore, combineReducers } from 'redux';
import  {AUTH_REDUCER, TYPE_REDUCER, REGISTER_REDUCER}  from './reducers/typeReducer';
import TOKEN_REDUCER from './reducers/tokenReducer'

const rootReducer = combineReducers({
    typeReducer: TYPE_REDUCER,
    authReducer: AUTH_REDUCER,
    registerReducer: REGISTER_REDUCER,
    tokenReducer: TOKEN_REDUCER,
  });
  

export default Store = createStore(rootReducer); 
