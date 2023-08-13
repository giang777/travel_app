import { legacy_createStore as createStore, combineReducers } from "redux";
import { TYPE_REDUCER, REGISTER } from "./reducers/typeReducer";
import TOKEN_REDUCER from "./reducers/tokenReducer";
import { ADD_HOTEL } from "./reducers/addHotelReducer";

const rootReducer = combineReducers({
  typeReducer: TYPE_REDUCER,
  tokenReducer: TOKEN_REDUCER,
  register: REGISTER,

  addHotel: ADD_HOTEL,
});
const Store = createStore(rootReducer);

export default Store;
