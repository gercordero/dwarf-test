import {
  ORDER_DATE_RESET,
  ORDER_DATE_SET,
} from "../../constants/order-constants";

const orderDateReducer = (state = { date: null }, action) => {
  switch (action.type) {
    case ORDER_DATE_SET:
      return { date: action.payload };

    case ORDER_DATE_RESET:
      return { date: null };

    default:
      return state;
  }
};

export default orderDateReducer;
