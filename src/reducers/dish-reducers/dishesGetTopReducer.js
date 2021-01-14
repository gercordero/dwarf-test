// Constants
import {
  DISHES_TOP_GET_REQUEST,
  DISHES_TOP_GET_SUCCESS,
  DISHES_TOP_GET_FAIL,
} from "../../constants/dish-constants";

const dishesGetTopReducer = (state = { status: "LOADING" }, action) => {
  switch (action.type) {
    case DISHES_TOP_GET_REQUEST:
      return { status: "LOADING" };

    case DISHES_TOP_GET_SUCCESS:
      return { status: "SUCCESS", dish: action.payload };

    case DISHES_TOP_GET_FAIL:
      return { status: "ERROR", error: action.payload };

    default:
      return state;
  }
};

export default dishesGetTopReducer;
