import { DRINKS_STORE_ADD } from "../../constants/drinks-constants";

const addDrinksToStoreAction = (drinks) => (dispatch, getState) => {
  // Get actual drinks stored in redux state
  const {
    drinksStore: { drinks },
  } = getState();

  // We destructure id to use it as a comparator
  const { id } = drinks;

  // We map througth drinks to check if we already have the drinks stored
  // in our redux state
  const updatedDrinks = drinks.map((drink) => {
    if (drink.id === id) {
      drink.count = drink.count + 1;
      return drink;
    } else {
      return drink;
    }
  });

  // Add to store updated drinks array
  dispatch({ type: DRINKS_STORE_ADD, payload: updatedDrinks });

  // Save drinks data to local storage
  localStorage.setItem("drinks", JSON.stringify(updatedDrinks));
};

export default addDrinksToStoreAction;
