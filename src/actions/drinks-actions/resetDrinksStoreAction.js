import { DRINKS_STORE_RESET } from "../../constants/drinks-constants";

const resetDrinksStoreAction = () => (dispatch) => {
  // Remove drinks from local storage
  localStorage.removeItem("drinks");

  // Reset drinks store state from redux
  dispatch({ type: DRINKS_STORE_RESET });
};

export default resetDrinksStoreAction;
