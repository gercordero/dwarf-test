import { ORDER_DATE_SET } from "../../constants/order-constants";

const setOrderDate = (date) => (dispatch) => {
  // Set order date
  dispatch({ type: ORDER_DATE_SET, payload: date });

  // Save order date in local storage
  localStorage.setItem("orderDate", JSON.stringify(date));
};

export default setOrderDate;
