// Axios
import axios from "axios";
// Constants
import {
  DISHES_TOP_GET_REQUEST,
  DISHES_TOP_GET_SUCCESS,
  DISHES_TOP_GET_FAIL,
} from "../../constants/dish-constants";

const getTopDishesAction = () => async (dispatch) => {
  try {
    // Dispatch get request
    dispatch({ type: DISHES_TOP_GET_REQUEST });

    // Fetch data
    const { data } = await axios.get("topDishes.json");

    // Dispatch data if success
    dispatch({ type: DISHES_TOP_GET_SUCCESS, payload: data });
  } catch (error) {
    // Dispatch error if something while fetching fails
    dispatch({
      type: DISHES_TOP_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getTopDishesAction;
