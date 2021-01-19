import { combineReducers } from "redux";
// Import all reducers
import { dishGetReducer, dishesGetTopReducer } from "./dish-reducers";
import { drinksGetReducer, drinksStoreReducer } from "./drinks-reducers";
import { orderReducer } from "./order-reducers";

const reducers = combineReducers({
  dishGet: dishGetReducer,
  dishesGetTop: dishesGetTopReducer,
  drinksGet: drinksGetReducer,
  drinksStore: drinksStoreReducer,
  order: orderReducer,
});

export default reducers;
