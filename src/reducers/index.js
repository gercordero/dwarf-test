import { combineReducers } from "redux";
// Import all reducers
import { dishGetReducer, dishesGetTopReducer } from "./dish-reducers";
import { drinksGetReducer } from "./drinks-reducers";

const reducers = combineReducers({
  dishGet: dishGetReducer,
  dishesGetTop: dishesGetTopReducer,
  drinksGet: drinksGetReducer,
});

export default reducers;
