import { ORDER_DATE_SET } from "../../constants/order-constants";

const setOrderDateAction = (date) => (dispatch, getState) => {
  // Set order date
  dispatch({ type: ORDER_DATE_SET, payload: date });

  // Get updated order from redux state
  const { order } = getState();

  // Save updated order in local storage
  localStorage.setItem("order", JSON.stringify(order));
};

export default setOrderDateAction;
