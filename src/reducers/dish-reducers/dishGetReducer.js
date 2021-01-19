import {
  DISH_GET_REQUEST,
  DISH_GET_SUCCESS,
  DISH_GET_FAIL,
  DISH_GET_RESET,
} from "../../constants/dish-constants";

const dishGetReducer = (state = { status: "LOADING" }, action) => {
  switch (action.type) {
    case DISH_GET_REQUEST:
      return { status: "LOADING" };

    case DISH_GET_SUCCESS:
      return { status: "SUCCESS", dish: action.payload };

    case DISH_GET_FAIL:
      return { status: "ERROR", error: action.payload };

    case DISH_GET_RESET:
      return { status: "LOADING" };

    default:
      return state;
  }
};

export default dishGetReducer;
