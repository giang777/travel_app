import { legacy_createStore as createStore, combineReducers } from 'redux';
import  { TYPE_REDUCER}  from './reducers/typeReducer';
import TOKEN_REDUCER from './reducers/tokenReducer'

const rootReducer = combineReducers({
    typeReducer: TYPE_REDUCER,
    tokenReducer: TOKEN_REDUCER,
  });
  

export default Store = createStore(rootReducer); 
