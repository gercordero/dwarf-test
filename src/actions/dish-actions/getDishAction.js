// Axios
import axios from "axios";
// Constants
import {
  DISH_GET_REQUEST,
  DISH_GET_SUCCESS,
  DISH_GET_FAIL,
} from "../../constants/dish-constants";

const getDishAction = () => async (dispatch) => {
  try {
    // Dispatch get request
    dispatch({ type: DISH_GET_REQUEST });

    // Fetch data
    const {
      data: { meals },
    } = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");

    // Dispatch data if success
    dispatch({ type: DISH_GET_SUCCESS, payload: meals[0] });

    // Save fetched dish to local storage
    localStorage.setItem("dish", JSON.stringify(meals[0]));
  } catch (error) {
    // Dispatch error if something while fetching fails
    dispatch({
      type: DISH_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getDishAction;
