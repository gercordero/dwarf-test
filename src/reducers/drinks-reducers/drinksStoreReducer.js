import {
  DRINKS_STORE_ADD,
  DRINKS_STORE_REMOVE,
  DRINKS_STORE_RESET,
} from "../../constants/drinks-constants";

const drinksStoreReducer = (state = { drinks: [] }, action) => {
  switch (action.type) {
    case DRINKS_STORE_ADD:
      return { drinks: action.payload };

    case DRINKS_STORE_REMOVE:
      return { drinks: action.payload };

    case DRINKS_STORE_RESET:
      return { drinks: [] };

    default:
      return state;
  }
};

export default drinksStoreReducer;
