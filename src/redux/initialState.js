// Geting drinks from local store
const drinksFromLocalStorage = localStorage.getItem("drinks")
  ? JSON.parse(localStorage.getItem("drinks"))
  : [];

// Initial state
const initialState = {
  drinksStore: { drinks: drinksFromLocalStorage },
};

export default initialState;
