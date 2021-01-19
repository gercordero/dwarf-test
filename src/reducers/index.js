import { combineReducers } from "redux";
// Import all reducers
import {
  dishGetReducer,
  dishesGetTopReducer,
  dishStoreReducer,
} from "./dish-reducers";
import { drinksGetReducer, drinksStoreReducer } from "./drinks-reducers";
import { orderReducer } from "./order-reducers";

const reducers = combineReducers({
  dishGet: dishGetReducer,
  dishStore: dishStoreReducer,
  dishesGetTop: dishesGetTopReducer,
  drinksGet: drinksGetReducer,
  drinksStore: drinksStoreReducer,
  order: orderReducer,
});

export default reducers;
