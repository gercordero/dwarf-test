import {
  DRINKS_STORE_ADD,
  DRINKS_STORE_REMOVE,
} from "../../constants/drinks-constants";

const drinksStoreReducer = (state = { drinks: [] }, action) => {
  switch (action.type) {
    case DRINKS_STORE_ADD:
      return { drinks: action.payload };

    case DRINKS_STORE_REMOVE:
      return { drinks: action.payload };

    default:
      return state;
  }
};

export default drinksStoreReducer;
