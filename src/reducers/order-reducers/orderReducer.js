import {
  ORDER_ADD,
  ORDER_DATE_SET,
  ORDER_EMAIL_SET,
  ORDER_PEOPLE_AMOUNT_SET,
  ORDER_RESET,
} from "../../constants/order-constants";

const orderReducer = (
  state = { date: null, email: "", peopleAmount: 1 },
  action
) => {
  switch (action.type) {
    case ORDER_ADD:
      return { ...action.payload };

    case ORDER_DATE_SET:
      return { ...state, date: action.payload };

    case ORDER_EMAIL_SET:
      return { ...state, email: action.payload };

    case ORDER_PEOPLE_AMOUNT_SET:
      return { ...state, peopleAmount: action.payload };

    case ORDER_RESET:
      return { date: null, email: "", peopleAmount: 1 };

    default:
      return state;
  }
};

export default orderReducer;
