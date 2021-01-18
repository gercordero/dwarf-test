import { ORDER_RESET } from "../../constants/order-constants";

const resetOrder = () => (dispatch, getState) => {
  // Reset order date
  dispatch({ type: ORDER_RESET });

  const { order } = getState();

  // Save updated order in local storage
  localStorage.setItem("order", JSON.stringify(order));
};

export default resetOrder;
