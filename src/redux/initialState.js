// Geting drinks from local store
const drinksFromLocalStorage = localStorage.getItem("drinks")
  ? JSON.parse(localStorage.getItem("drinks"))
  : [];

// Geting order date from local store
const orderDateFromLocalStorage = localStorage.getItem("orderDate")
  ? JSON.parse(localStorage.getItem("orderDate"))
  : null;

// Initial state
const initialState = {
  drinksStore: { drinks: drinksFromLocalStorage },
  orderDate: { date: orderDateFromLocalStorage },
};

export default initialState;
