// Constants
import { ORDERS_STORE_ADD } from "../../constants/order-constants";
// Nano id
import { nanoid } from "nanoid";

const addDrinksToStoreAction = (paramOrder, paramDish, paramDrinks) => (
  dispatch,
  getState
) => {
  // Get actual orders array stored in redux state
  const {
    ordersStore: { orders },
  } = getState();

  // We create a new object with everything inside paramOrder, paramDish and paramDrinks,
  // so we are sure that we are not mutating any object from outside this function.
  const newOrder = {
    id: nanoid(),
    ...paramOrder,
    dish: paramDish,
    drinks: paramDrinks,
  };

  // Look for the matching order in orders array
  const existOrder = orders.find((order) => order.email === paramOrder.email);

  let updatedOrders = [];

  if (existOrder) {
    // We map through the orders and replace the existing one
    updatedOrders = orders.map((order) =>
      order.id === existOrder.id ? newOrder : order
    );
  } else {
    // We put orders and the new order together
    updatedOrders = [...orders, newOrder];
  }

  // Add updated orders to current redux state
  dispatch({ type: ORDERS_STORE_ADD, payload: updatedOrders });

  // Save updated orders in local storage
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};

export default addDrinksToStoreAction;
