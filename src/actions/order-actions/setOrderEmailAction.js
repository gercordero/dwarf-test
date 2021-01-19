import { ORDER_EMAIL_SET } from "../../constants/order-constants";

const setOrderEmailAction = (email) => (dispatch, getState) => {
  // Set order email
  dispatch({ type: ORDER_EMAIL_SET, payload: email });

  // Get updated order from redux state
  const { order } = getState();

  // Save updated order in local storage
  localStorage.setItem("order", JSON.stringify(order));
};

export default setOrderEmailAction;
