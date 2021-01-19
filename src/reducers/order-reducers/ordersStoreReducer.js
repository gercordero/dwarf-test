import { ORDERS_STORE_ADD } from "../../constants/order-constants";

const ordersStoreReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDERS_STORE_ADD:
      return { orders: action.payload };

    default:
      return state;
  }
};

export default ordersStoreReducer;
