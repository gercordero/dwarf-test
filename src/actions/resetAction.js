// Redux actions
import { resetGetDishAction } from "./dish-actions";
import { resetDrinksStoreAction } from "./drinks-actions";
import { resetOrderAction } from "./order-actions";

const resetOrder = () => (dispatch) => {
  // Reset dish
  dispatch(resetGetDishAction());
  // Reset drinks
  dispatch(resetDrinksStoreAction());
  // Reset order
  dispatch(resetOrderAction());
};

export default resetOrder;
