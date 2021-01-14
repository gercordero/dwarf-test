import {
  DRINKS_GET_REQUEST,
  DRINKS_GET_SUCCESS,
  DRINKS_GET_FAIL,
} from "../../constants/drinks-constants";

const drinksGetReducer = (state = { status: "LOADING" }, action) => {
  switch (action.type) {
    case DRINKS_GET_REQUEST:
      return { status: "LOADING" };

    case DRINKS_GET_SUCCESS:
      return { status: "SUCCESS", drinks: action.payload };

    case DRINKS_GET_FAIL:
      return { status: "ERROR", error: action.payload };

    default:
      return state;
  }
};

export default drinksGetReducer;
