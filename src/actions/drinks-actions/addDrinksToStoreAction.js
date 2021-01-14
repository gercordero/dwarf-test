import { DRINKS_STORE_ADD } from "../../constants/drinks-constants";

const addDrinksToStoreAction = (newDrink) => (dispatch, getState) => {
  // Get actual drinks array stored in redux state
  const {
    drinksStore: { drinks },
  } = getState();

  // We add a key "count" to the drink so we know how many we have
  newDrink.count = 1;

  // We destructure id to use it as a comparator
  const { id } = newDrink;

  // We need to know if the drink clicked is already on the drinks array
  const existDrink = drinks.find((drink) => drink.id === id);

  // Create a new array to use it in the if statement
  let updatedDrinks = [];
  // If drink exist we increment the key "count" + 1
  if (existDrink) {
    updatedDrinks = drinks.map((drink) => {
      if (drink.id === existDrink.id) {
        drink.count = drink.count + 1;
        return drink;
      } else {
        return drink;
      }
    });
    // Else we add the clicked drink to our array
  } else {
    updatedDrinks = [...drinks, newDrink];
  }

  // Add to store updated drinks array
  dispatch({ type: DRINKS_STORE_ADD, payload: updatedDrinks });

  // Save drinks data to local storage
  localStorage.setItem("drinks", JSON.stringify(updatedDrinks));
};

export default addDrinksToStoreAction;
