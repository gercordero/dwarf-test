import { combineReducers } from "redux";
// Import all reducers
import { dishGetReducer, dishesGetTopReducer } from "./dish-reducers";

const reducers = combineReducers({
  dishGet: dishGetReducer,
  dishesGetTop: dishesGetTopReducer,
});

export default reducers;
