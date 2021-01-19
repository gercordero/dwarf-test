import { ORDER_RESET } from "../../constants/order-constants";

const resetOrderAction = () => (dispatch) => {
  // Remove order from local storage
  localStorage.removeItem("order");

  // Reset order state from redux
  dispatch({ type: ORDER_RESET });
};

export default resetOrderAction;
