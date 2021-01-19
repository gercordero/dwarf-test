import { DRINKS_STORE_ADD } from "../../constants/drinks-constants";

const addDrinksToStoreAction = (paramDrink) => (dispatch, getState) => {
  // Get actual drinks array stored in redux state
  const {
    drinksStore: { drinks },
  } = getState();

  // We create a new object with all the params so we are sure that we are not mutating an outside object.
  const newDrink = { ...paramDrink, count: 1 };

  // We need to know if the drink clicked is already on the drinks array
  const existDrink = drinks.find((drink) => drink.id === paramDrink.id);

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

  // Add updated drinks array to store
  dispatch({ type: DRINKS_STORE_ADD, payload: updatedDrinks });

  // Save drinks data in local storage
  localStorage.setItem("drinks", JSON.stringify(updatedDrinks));
};

export default addDrinksToStoreAction;
