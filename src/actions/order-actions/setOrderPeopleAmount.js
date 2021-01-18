import { ORDER_PEOPLE_AMOUNT_SET } from "../../constants/order-constants";

const setOrderPeopleAmount = (amount) => (dispatch, getState) => {
  // Set order people amount
  dispatch({ type: ORDER_PEOPLE_AMOUNT_SET, payload: amount });

  // Get updated order from redux state
  const { order } = getState();

  // Save updated order in local storage
  localStorage.setItem("order", JSON.stringify(order));
};

export default setOrderPeopleAmount;
