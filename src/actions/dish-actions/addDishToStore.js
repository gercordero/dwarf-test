import { DISH_STORE_ADD } from "../../constants/dish-constants";

const addDishToStore = (paramDish) => (dispatch, getState) => {
  // Add new dish to redux state
  dispatch({ type: DISH_STORE_ADD, payload: paramDish });

  // Get actual dish object stored in redux state
  const {
    dishStore: { dish },
  } = getState();

  // Save updated dish in local storage
  localStorage.setItem("dish", JSON.stringify(dish));
};

export default addDishToStore;
