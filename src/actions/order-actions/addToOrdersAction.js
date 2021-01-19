// Constants
import { ORDERS_STORE_ADD } from "../../constants/order-constants";
// Nano id
import { nanoid } from "nanoid";

const addDrinksToStoreAction = (paramOrder) => (dispatch, getState) => {
  // Get actual orders array stored in redux state
  const {
    ordersStore: { orders },
  } = getState();

  let updatedOrders = [];
  if (paramOrder.id) {
    const existOrder = orders.find((order) => order.id === paramOrder.id);
    updatedOrders = orders.map((order) =>
      order.id === existOrder.id ? existOrder : order
    );
  } else {
    // We create a new object with everything inside paramOrder
    // so we are sure that we are not mutating an object from outside this function.
    const newOrder = { ...paramOrder, id: nanoid() };
    updatedOrders = [...orders, newOrder];
  }

  // Add updated orders to current redux state
  dispatch({ type: ORDERS_STORE_ADD, payload: updatedOrders });

  // Save updated orders in local storage
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};

export default addDrinksToStoreAction;
