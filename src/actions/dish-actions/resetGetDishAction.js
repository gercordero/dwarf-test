import { DISH_GET_RESET } from "../../constants/dish-constants";

const resetGetDishAction = () => (dispatch) => {
  // Remove dish from local storage
  localStorage.removeItem("dish");

  // Reset dish state from redux
  dispatch({ type: DISH_GET_RESET });
};

export default resetGetDishAction;
