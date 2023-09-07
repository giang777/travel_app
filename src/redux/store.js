import { legacy_createStore as createStore, combineReducers } from "redux";
import { TYPE_REDUCER, REGISTER } from "./reducers/typeReducer";
import { TOKEN_REDUCER } from "./reducers/tokenReducer";
import { ADD_HOTEL } from "./reducers/addHotelReducer";
import { ADD_TYPE_OF_ROOM } from "./reducers/addTypeOfRoomReducer";
import { REMEMBER_ACCOUNT } from "./reducers/rememberAccount";
import { SAVE_ACCOUNT } from "./reducers/accountReducer";

const rootReducer = combineReducers({
  typeReducer: TYPE_REDUCER,
  tokenReducer: TOKEN_REDUCER,
  register: REGISTER,
  addTypeOfRoom: ADD_TYPE_OF_ROOM,
  addHotel: ADD_HOTEL,
  rememberAccount: REMEMBER_ACCOUNT,
  saveAccount: SAVE_ACCOUNT,
});
const Store = createStore(rootReducer);

export default Store;
