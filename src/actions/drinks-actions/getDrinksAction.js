// Axios
import axios from "axios";
// Constants
import {
  DRINKS_GET_REQUEST,
  DRINKS_GET_SUCCESS,
  DRINKS_GET_FAIL,
} from "../../constants/drinks-constants";

const getDrinksAction = () => async (dispatch) => {
  try {
    // Dispatch get request
    dispatch({ type: DRINKS_GET_REQUEST });

    // Fetch data
    const { data } = await axios.get("https://api.punkapi.com/v2/beers");

    // Dispatch data if success
    dispatch({ type: DRINKS_GET_SUCCESS, payload: data });
  } catch (error) {
    // Dispatch error if something while fetching fails
    dispatch({
      type: DRINKS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getDrinksAction;
