// Redux state
import { DISH_GET_SUCCESS } from "../../constants/dish-constants";
import { DRINKS_STORE_ADD } from "../../constants/drinks-constants";
import { ORDER_ADD } from "../../constants/order-constants";
// Redux actions
import { resetAction } from "../";

const findOrderAction = (email) => (dispatch, getState) => {
  // Get actual orders array stored in redux state
  const {
    ordersStore: { orders },
  } = getState();

  // Look for the matching order email in orders array
  const matchingOrder = orders.find((order) => order.email === email);

  if (matchingOrder) {
    const { dish, drinks, date, email, peopleAmount } = matchingOrder;
    const newOrder = { date, email, peopleAmount };

    // Reset redux state so is clean for replacing everything with found order.
    dispatch(resetAction());

    // Update dish
    localStorage.setItem("dish", JSON.stringify(dish));
    dispatch({ type: DISH_GET_SUCCESS, payload: dish });

    // Update drinks
    localStorage.setItem("drinks", JSON.stringify(drinks));
    dispatch({ type: DRINKS_STORE_ADD, payload: drinks });

    // Update order
    localStorage.setItem("order", JSON.stringify(newOrder));
    dispatch({ type: ORDER_ADD, payload: newOrder });
  } else {
    window.alert("No order found.");
  }
};

export default findOrderAction;
