import { legacy_createStore as createStore, combineReducers } from 'redux';
import  {TYPE_REDUCER}  from './reducers/typeReducer';

const rootReducer = combineReducers({
    TYPEReducer: TYPE_REDUCER,
  });
  

export default Store = createStore(rootReducer); 
