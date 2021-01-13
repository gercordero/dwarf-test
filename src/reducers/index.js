import { combineReducers } from "redux";
// Import all reducers
import { dishGetReducer } from "./dish-reducers";

const reducers = combineReducers({
  dishGet: dishGetReducer,
});

export default reducers;
