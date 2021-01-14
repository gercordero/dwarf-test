// Geting drinks from local store
const drinksFromLocalStorage = localStorage.getItem("drinks")
  ? JSON.parse(localStorage.getItem("drinks"))
  : [];

// Initial state
const initialState = {
  drinksStore: drinksFromLocalStorage,
};

export default initialState;
