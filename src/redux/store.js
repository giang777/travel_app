import { createStore } from 'redux'
import dimensionsReducer from './reducers/dimensionsReducer';
export const Store = createStore(dimensionsReducer);

