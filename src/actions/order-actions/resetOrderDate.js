import { ORDER_DATE_RESET } from "../../constants/order-constants";

const resetOrderDate = () => (dispatch) => {
  // Reset order date
  dispatch({ type: ORDER_DATE_RESET });

  // Set order date as null in local storage
  localStorage.setItem("orderDate", JSON.stringify(null));
};

export default resetOrderDate;
