import {
  DISH_STORE_ADD,
  DISH_STORE_RESET,
} from "../../constants/dish-constants";

const dishStoreReducer = (state = { dish: {} }, action) => {
  switch (action.type) {
    case DISH_STORE_ADD:
      return { dish: action.payload };

    case DISH_STORE_RESET:
      return { dish: {} };

    default:
      return state;
  }
};

export default dishStoreReducer;
